import re
import json
import os

with open('scratch/clean_prompt.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# We need to split the text based on the delimiters: . html . | . react . | . vue .
# We will use regex to find all delimiters and their positions.
pattern = re.compile(r'\s*\.\s*(html|react|vue)\s*\.\s*')

matches = list(pattern.finditer(text))
components = []
current_comp = None

last_end = 0

for i, match in enumerate(matches):
    lang = match.group(1)
    
    # Text between last delimiter and this delimiter
    chunk = text[last_end:match.start()].strip()
    
    # If chunk has a short string at the end preceded by space/newline, it might be the name of the NEXT component.
    # But wait, a component might not have all three.
    # Actually, the name of the next component is usually right before its FIRST delimiter.
    # If the current chunk is long (e.g. previous code), the name of the NEXT component will be the last line(s) of this chunk.
    
    lines = chunk.split('\n')
    
    if current_comp is None:
        # First component
        name = chunk.strip()
        current_comp = {'name': name, 'codes': {}}
    else:
        # Check if this delimiter belongs to the current component (e.g. . html . -> . react .)
        # Usually, if it's the same component, the text between the previous code end and this delimiter is empty or just whitespace.
        # However, some text might just be 'react' if the previous was 'html', but we already capture the delimiter.
        # Wait, the chunk is the PREVIOUS language's code, PLUS the name of the NEXT component at the end.
        
        # Let's see if there's a clear boundary. The code usually ends with </div>, </template>, or }
        
        # Heuristic: find the last occurrence of common code-ending characters.
        code_end_idx = max(
            chunk.rfind('</div>'),
            chunk.rfind('</template>'),
            chunk.rfind('}'),
            chunk.rfind('>'), # fallback for html
            chunk.rfind(';'), # fallback for react
            chunk.rfind('</style>'),
            chunk.rfind('</section>')
        )
        
        if code_end_idx != -1:
            # We found where the code likely ends.
            code_part = chunk[:code_end_idx+1].strip() # Actually, need to account for lengths.
            # wait, rfind returns the start of the substring.
            if chunk.rfind('</template>') == code_end_idx:
                code_end_idx += len('</template>')
            elif chunk.rfind('</div>') == code_end_idx:
                code_end_idx += len('</div>')
            elif chunk.rfind('</style>') == code_end_idx:
                code_end_idx += len('</style>')
            elif chunk.rfind('</section>') == code_end_idx:
                code_end_idx += len('</section>')
            else:
                code_end_idx += 1
                
            code_part = chunk[:code_end_idx].strip()
            rest = chunk[code_end_idx:].strip()
            
            # Save the code part to the current component
            current_comp['codes'][last_lang] = code_part
            
            if rest:
                # This rest is the name of the NEXT component
                components.append(current_comp)
                current_comp = {'name': rest, 'codes': {}}
            
            # What if rest is empty? Then it belongs to the same component!
            
        else:
            # Couldn't find a clean break. Assume it all belongs to the previous code if it's long, but that's unlikely.
            current_comp['codes'][last_lang] = chunk
            
    last_lang = lang
    last_end = match.end()
    
# Process the very last chunk
chunk = text[last_end:].strip()
if current_comp:
    current_comp['codes'][last_lang] = chunk
    components.append(current_comp)

# Some components like 'glowing border on hover card' don't use the delimiter format, they just start with const App = () => {.
# Let's fix up the components list and clean the names.

for c in components:
    print(f"Component: {c['name']}")
    for l, code in c['codes'].items():
        print(f"  {l}: {len(code)} chars")

with open('scratch/parsed_components.json', 'w') as f:
    json.dump(components, f, indent=2)

