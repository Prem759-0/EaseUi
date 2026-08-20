import json

blog_card_react = """export default function Example() {
    return (
        <div className="w-full flex flex-col items-center">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto text-slate-900 dark:text-slate-100">Latest Blog</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Stay ahead of the curve with fresh content on code, design, startups, and everything in between.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 dark:text-slate-100 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 dark:text-slate-100 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 dark:text-slate-100 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
            </div>
        </div>
    );
}"""

real_estate_react = """const App = () => {
    const cards = [
        { id: 1, img: "https://assets.prebuiltui.com/components/card/card-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" },
        { id: 2, img: "https://assets.prebuiltui.com/components/card/card-houseImage2.png", title: "The Amethyst Arbour", location: "Aspen, Colorado", price: "$3.2 M", specs1: "3 Bed", specs2: "2 Bath" },
        { id: 3, img: "https://assets.prebuiltui.com/components/card/card-houseImage2.png", title: "The Amethyst Arbour", location: "Aspen, Colorado", price: "$3.2 M", specs1: "3 Bed", specs2: "2 Bath" },
        { id: 4, img: "https://assets.prebuiltui.com/components/card/card-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" }
    ];

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>

            <div className="flex flex-col items-center justify-center py-20 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4.5">
                    {cards.map((card) => (
                        <div key={card.id} className="flex items-center p-2 bg-white dark:bg-zinc-800/50 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors rounded-xl w-sm sm:w-[420px]">
                            <img src={card.img} alt="House" className="w-full max-w-[118px] rounded-lg object-cover" />
                            <div className="ml-4">
                                <p className="text-lg text-zinc-900 dark:text-zinc-100">{card.title}</p>
                                <p className="text-base text-zinc-600 dark:text-zinc-400">{card.location}</p>
                                <p className="text-lg text-zinc-900 dark:text-zinc-100 mt-3">{card.price}</p>
                                <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                                    {card.specs1}
                                    <div className='size-1 rounded-full bg-[#777777]'></div>
                                    {card.specs2}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}"""

payment_card = {
    "name": "Payment Card",
    "codes": {
        "html": """<div class="max-w-80 w-full">
    <div class="pt-3 overflow-hidden bg-gray-100 border border-gray-200 rounded-md shadow">
        <h1 class="text-gray-900 text-xl font-semibold pl-6 pb-3">Payment Type</h1>
        
        <div class="text-gray-900 bg-white pb-3 pl-6 pt-6 space-y-1 text-sm">
            <div class="flex items-center gap-2">
                <input class="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="creditCard" name="paymentMethod" checked>
                <label for="creditCard">Credit Cards</label>
            </div>
            <div class="flex items-center gap-2">
                <input class="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="debitCard" name="paymentMethod">
                <label for="debitCard">Debit Cards</label>
            </div>
            <div class="flex items-center gap-2">
                <input class="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="cashOnDelivery" name="paymentMethod">
                <label for="cashOnDelivery">Cash on Delivery</label>
            </div>
            <div class="flex items-center gap-3 pt-5 pb-2">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/amexLogo.svg" alt="amexLogo">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/visaLogoColored.svg" alt="visaLogoColored">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/masterCardLogo.svg" alt="masterCardLogo">
            </div>
        </div>
    </div>
    <button type="button" class="text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all w-full h-10 mt-5 rounded-md">Place an Order</button>
</div>""",
        "react": """export default function Example() {
    return (
        <div className="max-w-80 w-full">
            <div className="pt-3 overflow-hidden bg-gray-100 border border-gray-200 rounded-md shadow">
                <h1 className="text-gray-900 text-xl font-semibold pl-6 pb-3">Payment Type</h1>
                
                <div className="text-gray-900 bg-white pb-3 pl-6 pt-6 space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                        <input className="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="creditCard" name="paymentMethod" defaultChecked />
                        <label htmlFor="creditCard">Credit Cards</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="debitCard" name="paymentMethod" />
                        <label htmlFor="debitCard">Debit Cards</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="cashOnDelivery" name="paymentMethod" />
                        <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                    </div>
                    <div className="flex items-center gap-3 pt-5 pb-2">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/amexLogo.svg" alt="amexLogo" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/visaLogoColored.svg" alt="visaLogoColored" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/masterCardLogo.svg" alt="masterCardLogo" />
                    </div>
                </div>
            </div>
            <button type="button" className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all w-full h-10 mt-5 rounded-md">Place an Order</button>
        </div>
    );
};""",
        "vue": """<template>
    <div class="max-w-80 w-full">
        <div class="pt-3 overflow-hidden bg-gray-100 border border-gray-200 rounded-md shadow">
            <h1 class="text-gray-900 text-xl font-semibold pl-6 pb-3">Payment Type</h1>
            
            <div class="text-gray-900 bg-white pb-3 pl-6 pt-6 space-y-1 text-sm">
                <div class="flex items-center gap-2">
                    <input class="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="creditCard" name="paymentMethod" checked>
                    <label for="creditCard">Credit Cards</label>
                </div>
                <div class="flex items-center gap-2">
                    <input class="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="debitCard" name="paymentMethod">
                    <label for="debitCard">Debit Cards</label>
                </div>
                <div class="flex items-center gap-2">
                    <input class="h-4 w-4 appearance-none rounded-full checked:appearance-auto checked:accent-blue-600 indeterminate:bg-white border border-gray-300" type="radio" id="cashOnDelivery" name="paymentMethod">
                    <label for="cashOnDelivery">Cash on Delivery</label>
                </div>
                <div class="flex items-center gap-3 pt-5 pb-2">
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/amexLogo.svg" alt="amexLogo">
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/visaLogoColored.svg" alt="visaLogoColored">
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/paymentCard/masterCardLogo.svg" alt="masterCardLogo">
                </div>
            </div>
        </div>
        <button type="button" class="text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all w-full h-10 mt-5 rounded-md">Place an Order</button>
    </div>
</template>"""
    }
}

gradient_hover_card = {
    "name": "Gradient Boarder Hover Card",
    "codes": {
        "react": """const App = () => {
  const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative w-80 h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
        >
            {visible && (
                <div className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120,}}
                />
            )}

            <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Profile Avatar" className="w-24 h-24 rounded-full shadow-md my-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Richard Nelson</h2>
                <p className="text-sm text-indigo-500 font-medium mb-4">Software Developer</p>
                <p className="text-sm text-gray-500 mb-4 px-4">
                    Passionate about clean code, scalable systems, and solving real-world problems with elegant software.
                </p>
                <div className="flex space-x-4 mb-4 text-xl text-indigo-600">
                    <a href="#" target="_blank" className='hover:-translate-y-0.5 transition'>
                        <svg className="size-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" target="_blank" className='hover:-translate-y-0.5 transition'>
                        <svg className="size-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                    </a>
                    <a href="#" target="_blank" className='hover:-translate-y-0.5 transition'>
                        <svg className="size-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}"""
    }
}

with open('scratch/exact_components3.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for c in data:
    if c['name'] == 'Blog Card Components':
        c['codes']['react'] = blog_card_react
    if c['name'] == 'real estate property listing grid':
        c['codes']['react'] = real_estate_react

# Check if Payment Card exists
has_payment = False
for c in data:
    if c['name'] == payment_card['name']:
        c['codes'] = payment_card['codes']
        has_payment = True
        break
if not has_payment:
    data.append(payment_card)
    
# Check if Gradient Boarder Hover Card exists
has_gradient = False
for c in data:
    if c['name'] == gradient_hover_card['name']:
        c['codes'] = gradient_hover_card['codes']
        has_gradient = True
        break
if not has_gradient:
    data.append(gradient_hover_card)

with open('scratch/exact_components3.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)

print("Updated exact_components3.json successfully!")
