import re

def main():
    with open('C:/Users/Admin/.gemini/antigravity-ide/brain/430c1d22-3ab2-48f2-a11a-222abfa8cb67/scratch/user_prompt.txt', 'r', encoding='utf-8') as f:
        prompt_txt = f.read()

    parts = prompt_txt.split("vue . <template>")
    mapping = {
        "Real Estate Prperty listing cards": "RealEstatePrpertyListingCardsTabs",
        "real estate property listing grid": "RealEstatePropertyListingGridTabs",
        "product card": "ProductCardTabs",
        "user profile card full": "UserProfileCardFullTabs",
        "experience card": "ExperienceCardTabs",
        "simple card": "SimpleCardTabs",
        "receipt card": "ReceiptCardTabs",
        "user profile card rounded": "UserProfileCardRoundedTabs",
        "blog card components": "BlogCardComponentsTabs",
        "flip hover card": "FlipHoverCardTabs",
        "notify card with glass effect": "NotifyCardWithGlassEffectTabs",
        "music card": "MusicCardTabs",
        "simple card with buttom": "SimpleCardWithButtomTabs",
        "payment card": "PaymentCardTabs"
    }

    with open('src/components/NewCardCodes.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    for i in range(1, len(parts)):
        prev_part = parts[i-1]
        vue_code_part = parts[i]
        
        end_idx = vue_code_part.find("</template>")
        if end_idx != -1:
            vue_code = "<template>\n" + vue_code_part[:end_idx].strip() + "\n</template>"
        else:
            continue
            
        snippet = prev_part[-30000:].lower()
        
        best_key = None
        best_idx = -1
        for key in mapping:
            idx = snippet.rfind(key.lower())
            if idx > best_idx:
                best_idx = idx
                best_key = key
                
        if best_key:
            tab_name = mapping[best_key]
            
            vue_code_escaped = vue_code.replace("`", "\\`").replace("$", "\\$")
            
            # Find the export const tab_name = [
            start_str = f"export const {tab_name} = ["
            start_idx = ts_content.find(start_str)
            if start_idx != -1:
                # find the first ]; after start_idx
                end_idx = ts_content.find("];", start_idx)
                if end_idx != -1:
                    array_content = ts_content[start_idx:end_idx]
                    if "language: 'vue'" not in array_content:
                        new_array_content = array_content + f",\n  {{ name: 'Vue', language: 'vue', code: `{vue_code_escaped}` }}\n"
                        ts_content = ts_content[:start_idx] + new_array_content + ts_content[end_idx:]
                        print(f"-> Added Vue for {tab_name}")
                    else:
                        print(f"-> Already has vue for {tab_name}")
            else:
                print(f"-> Could not find start str for {tab_name}")

    with open('src/components/NewCardCodes.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)

if __name__ == '__main__':
    main()
