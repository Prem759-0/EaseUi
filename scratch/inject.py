import re

with open('scratch/demos_jsx.txt', 'r', encoding='utf-8') as f:
    demos = f.read()

demos = re.sub(r'tabs=\{([A-Za-z0-9_]+Tabs)\}', r'tabs={NewCardCodes.\1}', demos)

with open('src/pages/components/CardPage.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

if 'import * as NewCardCodes' not in page:
    page = page.replace('import { Button } from "@/components";', 
                        'import { Button } from "@/components";\nimport * as CardDemos from "@/components/CardDemos";\nimport * as NewCardCodes from "@/components/NewCardCodes";')

idx = page.find('<div className="flex flex-col gap-12 mt-8">')
if idx != -1:
    insert_idx = idx + len('<div className="flex flex-col gap-12 mt-8">')
    wrapped = ''
    for block in demos.split('<ComponentDemo'):
        if not block.strip(): continue
        title_match = re.search(r'title="([^"]+)"', block)
        title = title_match.group(1) if title_match else 'Component'
        block = block.replace(f'title="{title}"', '')
        # Remove empty lines that might have been left
        block = re.sub(r'\s+>$', '>', block, flags=re.MULTILINE)
        wrapped += f'\n<div className="space-y-4">\n<h3 className="text-2xl font-bold text-black dark:text-white">{title}</h3>\n<ComponentDemo ' + block + '\n</div>\n'
    
    page = page[:insert_idx] + '\n' + wrapped + '\n' + page[insert_idx:]

with open('src/pages/components/CardPage.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
