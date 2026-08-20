import re

def update_new_card_codes():
    with open('C:/Users/Admin/.gemini/antigravity-ide/brain/430c1d22-3ab2-48f2-a11a-222abfa8cb67/scratch/user_prompt.txt', 'r', encoding='utf-8') as f:
        prompt_txt = f.read()
    
    with open('src/components/NewCardCodes.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    mapping = {
        r"Real Estate Prperty listing cards.*?vue.*?<template>(.*?)</template>": "RealEstatePrpertyListingCardsTabs",
        r"real estate property listing grid.*?vue.*?<template>(.*?)</template>": "RealEstatePropertyListingGridTabs",
        r"product card.*?vue.*?<template>(.*?)</template>": "ProductCardTabs",
        r"user profile card full.*?vue.*?<template>(.*?)</template>": "UserProfileCardFullTabs",
        r"experience card.*?vue.*?<template>(.*?)</template>": "ExperienceCardTabs",
        r"simple card.*?vue.*?<template>(.*?)</template>": "SimpleCardTabs",
        r"receipt card.*?vue.*?<template>(.*?)</template>": "ReceiptCardTabs",
        r"user profile card rounded.*?vue.*?<template>(.*?)</template>": "UserProfileCardRoundedTabs",
        r"blog card components.*?vue.*?<template>(.*?)</template>": "BlogCardComponentsTabs",
        r"flip hover card.*?vue.*?<template>(.*?)</template>": "FlipHoverCardTabs",
        r"notify card with glass effect.*?vue.*?<template>(.*?)</template>": "NotifyCardWithGlassEffectTabs",
        r"music card.*?vue.*?<template>(.*?)</template>": "MusicCardTabs",
        r"simple card with buttom.*?vue.*?<template>(.*?)</template>": "SimpleCardWithButtomTabs",
        r"payment card.*?vue.*?<template>(.*?)</template>": "PaymentCardTabs"
    }

    for pattern, tab_name in mapping.items():
        match = re.search(pattern, prompt_txt, re.DOTALL | re.IGNORECASE)
        if match:
            vue_code = "<template>\n" + match.group(1).strip() + "\n</template>"
            vue_code_escaped = vue_code.replace("`", "\\`").replace("$", "\\$")
            
            array_pattern = rf"(export const {tab_name}\s*=\s*\[.*?)(];)"
            
            array_match = re.search(array_pattern, ts_content, re.DOTALL)
            if array_match and 'language: \'vue\'' not in array_match.group(1):
                replacement = r"\1, { name: 'Vue', language: 'vue', code: `" + vue_code_escaped + r"` }\n];"
                ts_content = re.sub(array_pattern, replacement, ts_content, flags=re.DOTALL)
                print(f"Added Vue for {tab_name}")
            else:
                print(f"Already has vue for {tab_name} or array not found")
        else:
            print(f"No match in prompt for {tab_name}")

    with open('src/components/NewCardCodes.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
if __name__ == '__main__':
    update_new_card_codes()
