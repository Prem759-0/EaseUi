import os
import re

files = [
    'src/components/NewCardCodes.ts',
    'src/components/CardDemos.tsx',
    'src/components/CustomCarouselCodes.ts',
    'src/components/CustomTooltipCodes.ts'
]

pattern = r'font-family:\s*[\'\"].*?(Poppins|Geist)[\'\"],\s*sans-serif;'

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove the font-family declaration completely
        content = re.sub(pattern, '', content, flags=re.IGNORECASE)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Cleanup successful")
