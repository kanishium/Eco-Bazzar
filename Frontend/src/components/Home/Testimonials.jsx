import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import tote from "../../assets/Testimonials/Organic Cotton Tote.webp"
import crossbody from "../../assets/Testimonials/Eco Travel Crossbody.webp"
import desk from "../../assets/Testimonials/Bamboo Desk Organizer.webp"
import bottle from "../../assets/Testimonials/Reusable Steel Bottle.webp"
const testimonials = [
    {
        id: 1,
        review:
            "This organic cotton tote looks premium and feels great. I get compliments every time.",
        customerName: "Emma Rachel",
        location: "Paris, France",
        productName: "Organic Cotton Tote",
        price: "₹900.00",
        oldPrice: "₹1290.00",
        productImage: tote,
        variant: "light",
    },
    {
        id: 2,
        review:
            "I travel often, and this eco crossbody bag is essential. It holds everything I need.",
        customerName: "Anna Karlina",
        location: "Amsterdam, Netherlands",
        productName: "Eco Travel Crossbody",
        price: "₹790.00",
        oldPrice: "₹990.00",
        productImage: crossbody,
        variant: "green",
    },
    {
        id: 3,
        review:
            "The bamboo organizer is simple, beautiful, and sturdy. It made my desk feel cleaner instantly.",
        customerName: "Mira Kapoor",
        location: "Delhi, India",
        productName: "Bamboo Desk Organizer",
        price: "₹650.00",
        oldPrice: "₹850.00",
        productImage: desk,
        variant: "light",
    },
    {
        id: 4,
        review:
            "The reusable bottle is now part of my everyday routine. Clean design and excellent quality.",
        customerName: "Sofia Lane",
        location: "London, UK",
        productName: "Reusable Steel Bottle",
        price: "₹590.00",
        oldPrice: "₹790.00",
        productImage: bottle,
        variant: "green",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const cardsPerView = 2;
    const maxIndex = testimonials.length - cardsPerView;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const progressWidth = `${((activeIndex + cardsPerView) / testimonials.length) * 100}%`;

    return (
        <>
            <section className="overflow-hidden bg-[#f4eee9] px-5 py-8 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-[1120px]">
                    <div className="mb-12 text-center">
                        <div className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                            <span className="h-px w-12 bg-emerald-700/50" />
                            Testimonials
                            <span className="h-px w-12 bg-emerald-700/50" />
                        </div>

                        <h2 className="font-serif text-[34px] leading-none text-stone-950 sm:text-[42px]">
                            Our Customer Reviews
                        </h2>
                    </div>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${activeIndex * 50}%)`,
                            }}
                        >
                            {testimonials.map((item) => {
                                const isGreen = item.variant === "green";

                                return (
                                    <div
                                        key={item.id}
                                        className="w-full shrink-0 px-2 md:w-1/2"
                                    >
                                        <div
                                            className={`relative grid min-h-[230px] overflow-hidden rounded-xl p-8 shadow-sm sm:grid-cols-[1.1fr_0.9fr] ${isGreen
                                                ? "bg-[#718878] text-white"
                                                : "bg-white text-stone-950"
                                                }`}
                                        >
                                            {isGreen && (
                                                <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#fbfaf6] opacity-95" />
                                            )}

                                            <div className="relative z-10 flex flex-col justify-center">
                                                <Quote
                                                    size={42}
                                                    className={`mb-4 ${isGreen ? "text-white/90" : "text-stone-400"
                                                        }`}
                                                    fill="currentColor"
                                                />

                                                <p className="max-w-[280px] font-serif text-xl leading-snug sm:text-2xl">
                                                    {item.review}
                                                </p>

                                                <div className="mt-7">
                                                    <h3 className="font-serif text-lg leading-none">
                                                        {item.customerName}
                                                    </h3>
                                                    <p
                                                        className={`mt-1 text-xs ${isGreen ? "text-white/75" : "text-stone-500"
                                                            }`}
                                                    >
                                                        {item.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="relative z-10 mt-8 flex flex-col justify-end sm:mt-0">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={item.productImage}
                                                        alt={item.productName}
                                                        className="h-32 w-full bg-red-400 object-contain sm:h-40"
                                                    />
                                                </div>

                                                <div className="mt-5">
                                                    <h4 className="font-serif text-base leading-tight">
                                                        {item.productName}
                                                    </h4>

                                                    <div className="mt-2 flex items-center gap-2 text-sm">
                                                        <span>{item.price}</span>
                                                        <span
                                                            className={`line-through ${isGreen ? "text-white/55" : "text-stone-400"
                                                                }`}
                                                        >
                                                            {item.oldPrice}
                                                        </span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={nextSlide}
                                                    className={`absolute bottom-0 right-0 text-2xl transition ${isGreen
                                                        ? "text-white/80 hover:text-white"
                                                        : "text-stone-500 hover:text-emerald-700"
                                                        }`}
                                                >
                                                    →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div className="relative h-px flex-1 bg-stone-300">
                            <div
                                className="absolute left-0 top-0 h-px bg-stone-800 transition-all duration-500"
                                style={{ width: progressWidth }}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevSlide}
                                className="grid h-10 w-10 place-items-center rounded-md border border-stone-300 bg-white/40 text-stone-400 transition hover:border-stone-700 hover:text-stone-900"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="grid h-10 w-10 place-items-center rounded-md border border-stone-700 bg-white text-stone-800 transition hover:bg-stone-900 hover:text-white"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            <div className="w-full h-8 bg-[#f5f0ea] flex items-center justify-center overflow-hidden">
                <svg className="w-full h-6" viewBox="0 0 1200 24" preserveAspectRatio="none">
                    <path
                        d="M0,12 L15,0 L30,12 L45,0 L60,12 L75,0 L90,12 L105,0 L120,12 L135,0 L150,12 L165,0 L180,12 L195,0 L210,12 L225,0 L240,12 L255,0 L270,12 L285,0 L300,12 L315,0 L330,12 L345,0 L360,12 L375,0 L390,12 L405,0 L420,12 L435,0 L450,12 L465,0 L480,12 L495,0 L510,12 L525,0 L540,12 L555,0 L570,12 L585,0 L600,12 L615,0 L630,12 L645,0 L660,12 L675,0 L690,12 L705,0 L720,12 L735,0 L750,12 L765,0 L780,12 L795,0 L810,12 L825,0 L840,12 L855,0 L870,12 L885,0 L900,12 L915,0 L930,12 L945,0 L960,12 L975,0 L990,12 L1005,0 L1020,12 L1035,0 L1050,12 L1065,0 L1080,12 L1095,0 L1110,12 L1125,0 L1140,12 L1155,0 L1170,12 L1185,0 L1200,12"
                        fill="none"
                        stroke="#6b9e8a"
                        strokeWidth="2"
                        opacity="0.5"
                    />
                    <path
                        d="M0,20 L15,8 L30,20 L45,8 L60,20 L75,8 L90,20 L105,8 L120,20 L135,8 L150,20 L165,8 L180,20 L195,8 L210,20 L225,8 L240,20 L255,8 L270,20 L285,8 L300,20 L315,8 L330,20 L345,8 L360,20 L375,8 L390,20 L405,8 L420,20 L435,8 L450,20 L465,8 L480,20 L495,8 L510,20 L525,8 L540,20 L555,8 L570,20 L585,8 L600,20 L615,8 L630,20 L645,8 L660,20 L675,8 L690,20 L705,8 L720,20 L735,8 L750,20 L765,8 L780,20 L795,8 L810,20 L825,8 L840,20 L855,8 L870,20 L885,8 L900,20 L915,8 L930,20 L945,8 L960,20 L975,8 L990,20 L1005,8 L1020,20 L1035,8 L1050,20 L1065,8 L1080,20 L1095,8 L1110,20 L1125,8 L1140,20 L1155,8 L1170,20 L1185,8 L1200,20"
                        fill="none"
                        stroke="#6b9e8a"
                        strokeWidth="2"
                        opacity="0.3"
                    />
                </svg>
            </div>
        </>
    );
}