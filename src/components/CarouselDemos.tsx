"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation, type Translations } from "@/components/language-selector"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[270px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pt-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="mx-auto max-w-[10rem] sm:max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="m-px">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[10rem] sm:max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const translations: Translations = {
  en: { dir: "ltr", values: {} },
  ar: { dir: "rtl", values: {} },
  he: { dir: "rtl", values: {} },
}

function toArabicNumerals(num: number): string {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumerals[parseInt(digit, 10)])
    .join("")
}

export function CarouselRtl() {
  const { dir, lang: language, setLang } = useTranslation(translations, "ar")
  const formatNumber = (num: number): string => {
    if (language === "ar") {
      return toArabicNumerals(num)
    }
    return num.toString()
  }
  return (
    <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-end w-full mb-4 max-w-xs">
            <select
              value={language}
              onChange={(e) => setLang(e.target.value)}
              className="border p-1 rounded"
            >
              <option value="en">English (LTR)</option>
              <option value="ar">Arabic (RTL)</option>
              <option value="he">Hebrew (RTL)</option>
            </select>
        </div>
        <Carousel
        dir={dir}
        className="w-full max-w-[12rem] sm:max-w-xs"
        opts={{
            direction: dir,
        }}
        >
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                        {formatNumber(index + 1)}
                    </span>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}

export const TeamMemberCarousel = () => {
    const people = [
        { name: "Liam Carter", subtitle: "Digital Marketing", img: 'https://assets.prebuiltui.com/components/hero-section/avatar-female-image1.png' },
        { name: "Karter-Joy", subtitle: "UX Research", img: 'https://assets.prebuiltui.com/components/hero-section/avatar-male-image3.png' },
        { name: "Sofia Martinez", subtitle: "Social Media & Networking", img: 'https://assets.prebuiltui.com/components/hero-section/avatar-male-image4.png' },
        { name: "Emily Grace", subtitle: "Brand Strategy", img: 'https://assets.prebuiltui.com/components/hero-section/avatar-female-image5.png' },
        { name: "Karter-Joy", subtitle: "UX Research", img: 'https://assets.prebuiltui.com/components/hero-section/avatar-male-image3.png' },
    ]

    const [active, setActive] = React.useState(2)
    const [isSmall, setIsSmall] = React.useState(false)

    React.useEffect(() => {
        setIsSmall(window.innerWidth < 600)
        const onResize = () => setIsSmall(window.innerWidth < 600)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const getSideIdx = (direction: number, blockedIdx: number | null) => {
        let index = (active + direction + people.length) % people.length

        while (index === blockedIdx || people[index].img === people[active].img || people[index].img === (blockedIdx !== null ? people[blockedIdx]?.img : '')) {
            index = (index + direction + people.length) % people.length
        }

        return index
    }

    const leftIdx = getSideIdx(-1, null)
    const rightIdx = getSideIdx(1, leftIdx)

    return (
        <section className="bg-white min-h-[400px] flex items-center justify-center px-4 w-full">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-3">
                    {!isSmall && (
                        <div className="flex flex-col items-center">
                            <div className="w-32 md:w-40 rounded-lg overflow-hidden h-40">
                                <img src={people[leftIdx].img} alt="" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-sm text-slate-600 mt-2">{people[leftIdx].name}</p>
                        </div>
                    )}

                    <div className="flex flex-col items-center">
                        <div className="w-48 md:w-60 rounded-xl overflow-hidden h-60">
                            <img src={people[active].img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-base font-medium text-slate-950 mt-3">{people[active].name}</p>
                        <p className="text-sm text-slate-600">{people[active].subtitle}</p>
                    </div>

                    {!isSmall && (
                        <div className="flex flex-col items-center">
                            <div className="w-32 md:w-40 rounded-lg overflow-hidden h-40">
                                <img src={people[rightIdx].img} alt="" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-sm text-slate-600 mt-2">{people[rightIdx].name}</p>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2 mt-4">
                    {people.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)} className={`cursor-pointer transition ${i === active ? 'w-2.5 h-2.5 rounded-full bg-slate-900' : 'w-2 h-2 rounded-full bg-slate-200'}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const AvatarImageCarousel = () => {
    const images = [
        'https://assets.prebuiltui.com/components/hero-section/avatar-female-image1.png',
        'https://assets.prebuiltui.com/components/hero-section/avatar-male-image3.png',
        'https://assets.prebuiltui.com/components/hero-section/avatar-male-image4.png',
        'https://assets.prebuiltui.com/components/hero-section/avatar-female-image5.png',
    ]

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        return window.innerWidth >= 768 ? 3 : window.innerWidth >= 576 ? 2 : 1
    }

    const [current, setCurrent] = React.useState(0)
    const [visibleCount, setVisibleCount] = React.useState(3)

    React.useEffect(() => {
        setVisibleCount(getVisibleCount())
        const onResize = () => setVisibleCount(getVisibleCount())
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const CARD = 176, GAP = 24
    const maxIdx = Math.max(images.length - visibleCount, 0)
    const safeIdx = Math.min(current, maxIdx)

    return (
        <section className="bg-white min-h-[400px] flex items-center justify-center px-4 w-full">
            <div className="flex items-center gap-4 md:gap-14">
                <button onClick={() => setCurrent(c => Math.max(c - 1, 0))} disabled={safeIdx === 0} className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-100 transition shrink-0 disabled:opacity-40 disabled:cursor-not-allowed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <div className="overflow-hidden" style={{ width: `${CARD * visibleCount + GAP * (visibleCount - 1)}px` }}>
                    <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${safeIdx * (CARD + GAP)}px)` }}>
                        {images.map((img, i) => (
                            <div key={i} className="w-44 h-44 rounded-xl overflow-hidden shrink-0">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={() => setCurrent(c => Math.min(c + 1, maxIdx))} disabled={safeIdx >= maxIdx} className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-100 transition shrink-0 disabled:opacity-40 disabled:cursor-not-allowed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
        </section>
    )
}

export const HorizontalImageCarousel = () => {
    const images = [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    ]

    const [current, setCurrent] = React.useState(0)
    const [visibleCount, setVisibleCount] = React.useState(2)

    React.useEffect(() => {
        setVisibleCount(window.innerWidth >= 768 ? 2 : 1)
        const onResize = () => setVisibleCount(window.innerWidth >= 768 ? 2 : 1)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const GAP = 12
    const maxIdx = Math.max(images.length - visibleCount, 0)
    const safeIdx = Math.min(current, maxIdx)

    return (
        <section className="bg-white min-h-[400px] flex items-center justify-center px-4 w-full">
            <div className="flex items-center gap-4 md:gap-13 w-full max-w-4xl">
                <button onClick={() => setCurrent(c => Math.max(c - 1, 0))} disabled={safeIdx === 0} className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-300 transition shrink-0 disabled:opacity-40 disabled:cursor-not-allowed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <div className="overflow-hidden flex-1 min-w-0">
                    <div className="flex gap-3 transition-transform duration-500 ease-in-out h-60" style={{ transform: `translateX(calc(-${safeIdx * 100 / visibleCount}% - ${safeIdx * GAP / visibleCount}px))` }}>
                        {images.map((img, i) => (
                            <div key={i} className="rounded-xl overflow-hidden shrink-0 h-full" style={{ width: `calc(${100 / visibleCount}% - ${GAP * (visibleCount - 1) / visibleCount}px)` }}>
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={() => setCurrent(c => Math.min(c + 1, maxIdx))} disabled={safeIdx >= maxIdx} className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-300 transition shrink-0 disabled:opacity-40 disabled:cursor-not-allowed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
        </section>
    )
}
