import re

with open('src/pages/components/ButtonPage.tsx', 'r', encoding='utf-8') as f:
    btn = f.read()
with open('src/pages/components/CardPage.tsx', 'r', encoding='utf-8') as f:
    crd = f.read()

def extract_text_classes(html):
    tags = re.findall(r'<(h[1-6]|p)[^>]*className="([^"]+)"[^>]*>', html)
    return tags

print('Button text classes:')
for t in extract_text_classes(btn):
    print(t)

print('\nCard text classes:')
for t in extract_text_classes(crd):
    print(t)
