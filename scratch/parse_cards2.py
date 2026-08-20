import re
import json
import os

with open('scratch/clean_prompt.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = re.compile(r'\s*\.\s*(html|react|vue)\s*\.\s*')
matches = list(pattern.finditer(text))

components = []
current_comp = None
last_end = 0

for i, match in enumerate(matches):
    lang = match.group(1)
    chunk = text[last_end:match.start()].strip()
    
    if current_comp is None:
        name = chunk.strip()
        current_comp = {'name': name, 'codes': {}}
    else:
        code_end_idx = max(
            chunk.rfind('</div>'),
            chunk.rfind('</template>'),
            chunk.rfind('}'),
            chunk.rfind('</style>'),
            chunk.rfind('</section>')
        )
        
        if code_end_idx != -1:
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
            
            current_comp['codes'][last_lang] = code_part
            
            if rest:
                components.append(current_comp)
                current_comp = {'name': rest, 'codes': {}}
        else:
            current_comp['codes'][last_lang] = chunk
            
    last_lang = lang
    last_end = match.end()
    
chunk = text[last_end:].strip()
if current_comp:
    current_comp['codes'][last_lang] = chunk
    components.append(current_comp)

with open('scratch/parsed_components.json', 'w', encoding='utf-8') as f:
    json.dump(components, f, indent=2)

print("Parsed", len(components), "components.")
