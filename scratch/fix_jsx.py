files = ['src/pages/components/InputPage.tsx', 'src/pages/components/ModalPage.tsx', 'src/pages/components/NavbarPage.tsx']
components = ['Input', 'Modal', 'Navbar']

for i in range(3):
    with open(files[i], 'r', encoding='utf-8') as f:
        content = f.read()

    # The current broken string is: {{}   {\}}
    broken = "{{}   {\\}}"
    fixed = "{'{'} " + components[i] + " {'}'}"
    content = content.replace("import</span> " + broken + " <span", "import</span> " + fixed + " <span")
    
    with open(files[i], 'w', encoding='utf-8') as f:
        f.write(content)
