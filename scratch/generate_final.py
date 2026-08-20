import json
import re

with open('scratch/exact_components3.json', 'r', encoding='utf-8') as f:
    components = json.load(f)

# Helper to convert names
def to_camel(s):
    clean = re.sub(r'[^a-zA-Z0-9 ]', '', s)
    return ''.join(w if w[0].isupper() else w.capitalize() for w in clean.split())

# 1. Generate CardDemos.tsx
card_demo_imports = """// @ts-nocheck
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ShadcnButton } from "@/components/ui/shadcn-button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from "lucide-react";
"""
card_demos_code = [card_demo_imports, '\n']

for comp in components:
    name = comp['name']
    camel_name = to_camel(name)
    react_code = comp['codes'].get('react', '')
    
    if react_code:
        if react_code.startswith('.'):
            react_code = react_code[1:].strip()
        
        # Replace function signature
        react_code = re.sub(r'export\s+default\s+function\s+\w+\s*\(', f'export function {camel_name}(', react_code)
        react_code = re.sub(r'const\s+App\s*=\s*\(\s*\)\s*=>\s*\{', f'export function {camel_name}() {{', react_code)
        react_code = re.sub(r'export\s+default\s+function\s+Example\(\)', f'export function {camel_name}()', react_code)
        react_code = re.sub(r'export\s+function\s+Card\w+\(\)', f'export function {camel_name}()', react_code)
        
        # Strip all import statements from the generated component
        react_code = re.sub(r'^\s*import .*$\n', '', react_code, flags=re.MULTILINE)
        

        # Replace Button with ShadcnButton for Shadcn components
        if name in ['CardDemo', 'CardSmall', 'CardSpacing', 'CardEdgeToEdge', 'CardImage']:
            react_code = re.sub(r'<Button(\s|>)', r'<ShadcnButton\1', react_code)
            react_code = re.sub(r'</Button>', r'</ShadcnButton>', react_code)

        card_demos_code.append(react_code)
        card_demos_code.append('\n\n')

with open('src/components/CardDemos.tsx', 'w', encoding='utf-8') as f:
    f.write(''.join(card_demos_code))

# 2. Generate CustomCardCodes.ts entries
custom_codes = []
for comp in components:
    name = comp['name']
    camel_name = to_camel(name)
    
    tabs = []
    
    react_code = comp['codes'].get('react', '')
    if react_code:
        if react_code.startswith('\n'):
            react_code = react_code[1:].strip()
        react_code = re.sub(r'export\s+default\s+function\s+\w+\s*\(', f'export function {camel_name}(', react_code)
        react_code = re.sub(r'const\s+App\s*=\s*\(\s*\)\s*=>\s*\{', f'export function {camel_name}() {{', react_code)
        react_code = re.sub(r'export\s+function\s+Card\w+\(\)', f'export function {camel_name}()', react_code)
        
        react_code = react_code.replace('`', r'\`').replace('$', r'\$')
        tabs.append(f"""{{ name: 'React', language: 'tsx', code: `{react_code}` }}""")
        
    html_code = comp['codes'].get('html', '')
    if html_code:
        html_code = html_code.replace('`', r'\`').replace('$', r'\$')
        tabs.append(f"""{{ name: 'HTML', language: 'html', code: `{html_code}` }}""")
        
    vue_code = comp['codes'].get('vue', '')
    if vue_code:
        vue_code = vue_code.replace('`', r'\`').replace('$', r'\$')
        tabs.append(f"""{{ name: 'Vue', language: 'vue', code: `{vue_code}` }}""")
        
    tabs_str = ',\n  '.join(tabs)
    custom_codes.append(f"export const {camel_name}Tabs = [\n  {tabs_str}\n];")

with open('src/components/NewCardCodes.ts', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(custom_codes))

# 3. Generate CardPage.tsx additions
demos_jsx = []
for comp in components:
    name = comp['name']
    camel_name = to_camel(name)
    title = name.title()
    
    if comp['codes'].get('react', ''):
        jsx = f'''
        <ComponentDemo
          title="{title}"
          tabs={{{camel_name}Tabs}}
        >
          <CardDemos.{camel_name} />
        </ComponentDemo>'''
        demos_jsx.append(jsx)
        
with open('scratch/demos_jsx.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(demos_jsx))

print("Files generated successfully!")
