with open('scratch/generate_final.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Add ShadcnButton import
text = text.replace('import { Button } from "@/components/ui/button";',
'''import { Button } from "@/components/ui/button";
import { ShadcnButton } from "@/components/ui/shadcn-button";''')

# Add replacement logic for Shadcn cards
replacement_code = '''
        # Replace Button with ShadcnButton for Shadcn components
        if name in ['CardDemo', 'CardSmall', 'CardSpacing', 'CardEdgeToEdge', 'CardImage']:
            react_code = re.sub(r'<Button(\\s|>)', r'<ShadcnButton\\1', react_code)
            react_code = re.sub(r'</Button>', r'</ShadcnButton>', react_code)
'''

text = text.replace('        card_demos_code.append(react_code)', replacement_code + '\n        card_demos_code.append(react_code)')

with open('scratch/generate_final.py', 'w', encoding='utf-8') as f:
    f.write(text)
