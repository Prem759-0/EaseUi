import json

with open('scratch/exact_components3.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for c in data:
    if c['name'] == 'CardSpacing':
        c['codes']['react'] = c['codes']['react'].replace('variant="outline"', 'variant="outline"\n        type="single"')

with open('scratch/exact_components3.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)
