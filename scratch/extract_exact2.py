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
        continue
    
    end_idx = len(text)
    if i + 1 < len(components):
        next_comp = components[i+1]
        next_idx = text.find(next_comp, start_idx + len(comp))
        if next_idx != -1:
            end_idx = next_idx
            
    chunk = text[start_idx + len(comp):end_idx].strip()
    
    parts = {}
    
    # Optional leading dot, mandatory trailing dot: \.?\s*(html|react|vue)\s*\.
    pattern = re.compile(r'\s*\.?\s*(html|react|vue)\s*\.\s*')
    matches = list(pattern.finditer(chunk))
    
    if not matches:
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
            
    results.append({
        'name': comp,
        'codes': parts
    })

with open('scratch/exact_components2.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("Parsed", len(results), "components.")
for r in results:
    print(r['name'])
    for l, code in r['codes'].items():
        print(f"  {l}: {len(code)}")
