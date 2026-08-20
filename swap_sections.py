import os
import re

card_page_path = r'd:\Downloads\linkden post\task\Easeui-project\src\pages\components\CardPage.tsx'

with open(card_page_path, 'r', encoding='utf-8') as f:
    c = f.read()

start_old = c.find('{/* Examples Section */}')
start_new = c.find('{/* More Custom Examples Section */}')
start_api = c.find('{/* API Reference */}')

if start_old != -1 and start_new != -1 and start_api != -1:
    old_section = c[start_old:start_new]
    new_section = c[start_new:start_api]
    
    new_section = new_section.replace('More Custom Examples Section', 'Examples Section')
    new_section = new_section.replace('More Custom Examples', 'Examples')
    new_section = new_section.replace('Various custom standalone card examples with unique styles.', 'Various standalone card examples.')
    new_section = new_section.replace(' pt-12 border-t-4 border-black dark:border-white', '')
    
    old_section = old_section.replace('Examples Section', 'Base Configurations Section')
    old_section = old_section.replace('Examples', 'Base Configurations')
    old_section = old_section.replace('Various configurations of the Card component.', 'Original base configurations of the Card component.')
    old_section = old_section.replace('className="page-section space-y-12 opacity-0"', 'className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white"')

    new_content = c[:start_old] + new_section + old_section + c[start_api:]
    
    with open(card_page_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SWAPPED SECTIONS')
else:
    print('COULD NOT FIND SECTIONS')
