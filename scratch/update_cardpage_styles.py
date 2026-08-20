import re

with open('src/pages/components/CardPage.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

# Fix h3 class names
page = page.replace(
    'className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block"',
    'className="text-2xl font-bold text-black dark:text-white"'
)

# Fix h2 Section headers
old_h2 = '<h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-blue inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Usage</h2>'
new_h2_section = '''<div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">More Card Examples</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone card examples with unique layouts and styles.</p>
        </div>'''
page = page.replace(old_h2, new_h2_section)

# Fix the section container class itself to match ButtonPage
page = page.replace(
    '<section className="page-section space-y-6 opacity-0">\n        <div>',
    '<section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">\n        <div>'
)

with open('src/pages/components/CardPage.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
print('Updated text styles in CardPage.tsx')

# Update inject.py to permanently use the new style for future builds
with open('scratch/inject.py', 'r', encoding='utf-8') as f:
    inject_script = f.read()

inject_script = inject_script.replace(
    'className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block"',
    'className="text-2xl font-bold text-black dark:text-white"'
)
with open('scratch/inject.py', 'w', encoding='utf-8') as f:
    f.write(inject_script)

