import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img17 from "../../assets/category/reusable-bags.webp";
import img19 from "../../assets/category/bamboo-essentials.webp";
import img20 from "../../assets/category/natural-skincare.webp";
import img21 from "../../assets/category/zero-waste-kitchen.webp";

const categories = [
    {
        title: "Reusable Bags",
        subtitle: "Totes, shoppers, and daily carry",
        image: img17,
    },
    {
        title: "Bamboo Essentials",
        subtitle: "Brushes, organizers, and home goods",
        image: img19,
    },
    {
        title: "Natural Skincare",
        subtitle: "Clean care with low-waste packaging",
        image: img20,
    },
    {
        title: "Zero-Waste Kitchen",
        subtitle: "Storage, wraps, bottles, and utensils",
        image: img21,
    },
];

export default function CategorySection() {
    const navigate = useNavigate();

    return (
        <>
            <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <div className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                            <span className="h-px w-12 bg-emerald-700/50" />
                            Featured Categories
                            <span className="h-px w-12 bg-emerald-700/50" />
                        </div>

                        <h2 className="font-serif text-3xl text-stone-950 sm:text-4xl">
                            Shop Eco-Friendly Essentials
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category) => (
                            <div
                                key={category.title}
                                onClick={() => navigate("/Product")}
                                className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-stone-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-4"
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                    <p className="mb-1 text-sm text-white/80">
                                        {category.subtitle}
                                    </p>

                                    <div className="flex items-end justify-between gap-4">
                                        <h3 className="font-serif text-2xl leading-tight">
                                            {category.title}
                                        </h3>

                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/45 bg-white/10 transition group-hover:bg-white group-hover:text-emerald-800">
                                            <ArrowRight size={17} aria-hidden="true" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
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