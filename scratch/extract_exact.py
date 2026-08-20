import json
import re

with open('scratch/clean_prompt.txt', 'r', encoding='utf-8') as f:
    text = f.read()

components = [
    "Real Estate Prperty listing cards",
    "glowing  border on hover card",
    "real estate property listing grid",
    "product card",
    "user profile card full",
    "experience card",
    "simple card",
    "on hover tilt effect card",
    "receipt card",
    "user profile card rounded",
    "gradient border hover card",
    "blog card components",
    "blog card with hover effect",
    "flip hover card",
    "notify card with glass effect",
    "music card",
    "simple card with buttom",
    "payment card",
    "product cards with discount"
]

results = []
for i, comp in enumerate(components):
    start_idx = text.find(comp)
    if start_idx == -1:
        print(f"Warning: {comp} not found")
        continue
    
    end_idx = len(text)
    if i + 1 < len(components):
        next_comp = components[i+1]
        next_idx = text.find(next_comp, start_idx + len(comp))
        if next_idx != -1:
            end_idx = next_idx
            
    chunk = text[start_idx + len(comp):end_idx].strip()
    
    # Now parse chunk into html, react, vue
    # It might have . html ., . react ., . vue .
    # Or it might just start with const App =
    
    parts = {}
    
    # regex to find . html . or . react . or . vue .
    pattern = re.compile(r'\s*\.\s*(html|react|vue)\s*\.?\s*')
    matches = list(pattern.finditer(chunk))
    
    if not matches:
        # no delimiters, assume it's just react
        parts['react'] = chunk
    else:
        last_end = 0
        last_lang = None
        for m in matches:
            lang = m.group(1)
            if last_lang:
                parts[last_lang] = chunk[last_end:m.start()].strip()
            last_lang = lang
            last_end = m.end()
        if last_lang:
            parts[last_lang] = chunk[last_end:].strip()
            
    # Remove leading dots or const App = () => { from react code if needed
    if 'react' in parts:
        react_code = parts['react']
        # some react blocks start with . export default or similar because of bad regex.
        # we will clean this up later.
        
    results.append({
        'name': comp,
        'codes': parts
    })

with open('scratch/exact_components.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("Parsed", len(results), "components.")
for r in results:
    print(r['name'])
    for l, code in r['codes'].items():
        print(f"  {l}: {len(code)}")
