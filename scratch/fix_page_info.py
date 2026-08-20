files = ['src/pages/components/InputPage.tsx', 'src/pages/components/ModalPage.tsx', 'src/pages/components/NavbarPage.tsx']

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'InputPage' in file_path:
        content = content.replace('page_info["name"]', '"Input"')
    elif 'ModalPage' in file_path:
        content = content.replace('page_info["name"]', '"Modal"')
    elif 'NavbarPage' in file_path:
        content = content.replace('page_info["name"]', '"Navbar"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
