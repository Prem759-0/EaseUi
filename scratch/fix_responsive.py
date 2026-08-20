import json

with open('scratch/exact_components3.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for c in data:
    if c['name'].lower() == 'blog card components':
        c['codes']['react'] = """export default function Example() {
    return (
        <div className="w-full flex flex-col items-center">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto text-slate-900 dark:text-slate-100">Latest Blog</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto px-4">
                Stay ahead of the curve with fresh content on code, design, startups, and everything in between.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 px-4 w-full">
                <div className="w-full max-w-sm sm:max-w-72 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl w-full h-auto aspect-[3/2] object-cover" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 dark:text-slate-100 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
                <div className="w-full max-w-sm sm:max-w-72 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl w-full h-auto aspect-[3/2] object-cover" src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 dark:text-slate-100 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
                <div className="w-full max-w-sm sm:max-w-72 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl w-full h-auto aspect-[3/2] object-cover" src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 dark:text-slate-100 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
            </div>
        </div>
    );
}"""
    
    if c['name'].lower() == 'real estate property listing grid':
        c['codes']['react'] = """const App = () => {
    const cards = [
        { id: 1, img: "https://assets.prebuiltui.com/components/card/card-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" },
        { id: 2, img: "https://assets.prebuiltui.com/components/card/card-houseImage2.png", title: "The Amethyst Arbour", location: "Aspen, Colorado", price: "$3.2 M", specs1: "3 Bed", specs2: "2 Bath" },
        { id: 3, img: "https://assets.prebuiltui.com/components/card/card-houseImage2.png", title: "The Amethyst Arbour", location: "Aspen, Colorado", price: "$3.2 M", specs1: "3 Bed", specs2: "2 Bath" },
        { id: 4, img: "https://assets.prebuiltui.com/components/card/card-houseImage1.png", title: "The Ridgewood Apartment", location: "Aspen, Colorado", price: "$2.5 M", specs1: "4 Bed", specs2: "3 Bath" }
    ];

    return (
        <div className="w-full">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>

            <div className="flex flex-col items-center justify-center py-20 px-4 w-full">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-5xl place-items-center">
                    {cards.map((card) => (
                        <div key={card.id} className="flex flex-col sm:flex-row items-center p-3 bg-white dark:bg-zinc-800/50 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors rounded-xl w-full max-w-sm sm:max-w-[440px]">
                            <img src={card.img} alt="House" className="w-full sm:w-[140px] h-[200px] sm:h-[130px] rounded-lg object-cover" />
                            <div className="sm:ml-5 mt-4 sm:mt-0 text-center sm:text-left w-full">
                                <p className="text-lg text-zinc-900 dark:text-zinc-100 font-semibold">{card.title}</p>
                                <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">{card.location}</p>
                                <p className="text-xl text-zinc-900 dark:text-zinc-100 mt-3 font-bold">{card.price}</p>
                                <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-center sm:justify-start gap-2 mt-2">
                                    <span>{card.specs1}</span>
                                    <div className='size-1.5 rounded-full bg-[#777777]'></div>
                                    <span>{card.specs2}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}"""

with open('scratch/exact_components3.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)
