files = ['src/pages/components/InputPage.tsx', 'src/pages/components/ModalPage.tsx', 'src/pages/components/NavbarPage.tsx']

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix imports
    if 'import { useEffect } from "react";' in content:
        content = content.replace('import { useEffect } from "react";', 'import { useEffect, useState } from "react";')
    elif 'import { useEffect, useState }' not in content and 'import { useState, useEffect }' not in content:
        content = content.replace('import { useEffect }', 'import { useEffect, useState }')

    if 'import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";' not in content:
        if 'import { Search } from "lucide-react";' in content:
            content = content.replace('import { Search } from "lucide-react";', 'import { Search, Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";')
        elif 'import { useNavigate' in content:
            content = content.replace('import { useNavigate', 'import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";\nimport { useNavigate')
        else:
            content = 'import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";\n' + content

    # Fix page_info artifacts
    if 'InputPage' in file_path:
        content = content.replace('{page_info["prev"]}', 'tooltip')
        content = content.replace('{page_info["next"]}', 'modal')
        content = content.replace('{page_info["cmd"]}', 'input')
    elif 'ModalPage' in file_path:
        content = content.replace('{page_info["prev"]}', 'input')
        content = content.replace('{page_info["next"]}', 'navbar')
        content = content.replace('{page_info["cmd"]}', 'modal')
    elif 'NavbarPage' in file_path:
        content = content.replace('{page_info["prev"]}', 'modal')
        content = content.replace('{page_info["next"]}', 'installation')
        content = content.replace('{page_info["cmd"]}', 'navbar')

    # Fix isOpen missing in ModalPage usage code
    if 'ModalPage' in file_path:
        content = content.replace('<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}><p>Hello</p></Modal>', '<Modal isOpen={false} onClose={() => {}}><p>Hello</p></Modal>')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
