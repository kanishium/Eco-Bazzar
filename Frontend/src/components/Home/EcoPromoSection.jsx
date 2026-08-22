import { useNavigate } from "react-router-dom";
import seven from "../../assets/7.jpeg";
import eight from "../../assets/8.jpeg";
import fourteen from "../../assets/14.jpeg";

const promoSections = [
    {
        id: 1,
        title: "Sustainable Home",
        subtitle: "Eco essentials for a calmer, cleaner everyday space.",
        buttonText: "Shop Home",
        image: eight,
        className: "lg:col-span-1",
    },
    {
        id: 2,
        title: "Natural Self Care",
        subtitle: "Clean, conscious products made with gentle ingredients.",
        buttonText: "Shop Care",
        image: seven,
        className: "lg:col-span-1",
    },
    {
        id: 3,
        title: "Zero-Waste Living",
        subtitle: "Reusable bags, bottles, storage, and planet-friendly daily swaps.",
        buttonText: "Explore Collection",
        image: fourteen,
        className: "lg:col-span-2",
    },
];

export default function EcoPromoSection() {
    const navigate = useNavigate();
    return (
        <>
            <section className="bg-[#f4eee9] px-5 py-16 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-[1120px]">
                    <div className="mb-10 flex flex-col gap-3">
                        <div className="mb-3 flex items-center  gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                            <span className="h-px w-12 bg-emerald-700/50" />
                            Curated for you
                            <span className="h-px w-12 bg-emerald-700/50" />
                        </div>

                        <h2 className="font-serif text-[34px] leading-none text-stone-950 sm:text-[38px]">
                            Shop Conscious Collections
                        </h2>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        {promoSections.map((section) => (
                            <div
                                key={section.id}
                                className={`group relative min-h-[360px] overflow-hidden rounded-[12px] bg-stone-200 shadow-sm ${section.className}`}
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="h-full min-h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/25 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                    <p className="mb-2 max-w-md text-sm leading-6 text-white/80">
                                        {section.subtitle}
                                    </p>

                                    <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        {section.title}
                                    </h3>

                                    <button
                                        onClick={() => navigate("/Product")}
                                        className="mt-6 rounded-full bg-white px-7 py-3 text-[11px] font-bold uppercase tracking-wide text-stone-900 shadow-sm transition hover:bg-emerald-700 hover:text-white"
                                    >
                                        {section.buttonText}
                                    </button>
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