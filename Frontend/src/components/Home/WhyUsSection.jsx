import { Leaf, Recycle, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bagImg from "../../assets/Bag.png";
const whyUsData = {
    eyebrow: "Why Choose Ecoport",
    title: "Why Should You Buy Eco-Friendly Products From Us?",
    description:
        "Not all everyday products are created equal. At Ecoport, we bring together thoughtful design, planet-conscious materials, and reliable quality so every purchase supports a cleaner, more mindful way of living.",
    buttonText: "Browse All Products",
    image: bagImg,
};

const whyUsFeatures = [
    {
        id: 1,
        icon: Leaf,
        title: "Made With Natural Materials",
        description:
            "Our products are selected from safer, lower-impact materials like bamboo, cotton, cork, glass, and recycled fibers.",
    },
    {
        id: 2,
        icon: Recycle,
        title: "Designed For Reuse",
        description:
            "From bags to kitchen essentials, we focus on reusable swaps that help reduce single-use plastic in daily life.",
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: "Quality You Can Trust",
        description:
            "Every item is chosen for durability, practical use, and responsible making, so it lasts beyond just one season.",
    },
];

export default function WhyUsSection() {
    const navigate = useNavigate();

    return (
        <>
            <section className="overflow-hidden bg-[#FBF7F3] px-5 py-10 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-[1120px] items-center lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                        <div className="mb-3 flex items-center  gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                            <span className="h-px w-12 bg-emerald-700/50" />
                            <span>{whyUsData.eyebrow}</span>
                            <span className="h-px w-12 bg-emerald-700/50" />
                        </div>

                        <h2 className="max-w-xl font-serif text-[34px] leading-[1.08] text-stone-950 sm:text-[42px]">
                            {whyUsData.title}
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
                            {whyUsData.description}
                        </p>

                        <div className="my-4 h-px max-w-xl bg-stone-200" />

                        <div className="space-y-7">
                            {whyUsFeatures.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div key={feature.id} className="flex gap-5">
                                        <div className="grid h-12 w-12 shrink-0 place-items-center text-emerald-700">
                                            <Icon size={38} strokeWidth={1.4} />
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-xl leading-tight text-stone-950">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-2 max-w-md text-sm leading-6 text-stone-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => navigate("/Product")}
                            className="mt-9 rounded-md border border-stone-700 bg-white px-7 py-3 text-[11px] font-bold uppercase tracking-wide text-stone-800 shadow-sm transition hover:bg-stone-900 hover:text-white"
                        >
                            {whyUsData.buttonText}
                        </button>
                    </div>

                    <div className="relative min-h-[430px] overflow-hidden  bg-[#fbfaf6] lg:min-h-[560px]">
                        <img
                            src={whyUsData.image}
                            alt="Eco-friendly product"
                            className="
      absolute
      right-8
      top-1/2
      w-[85%]
      -translate-y-1/2
      object-contain
      lg:right-1
      lg:w-[105%]
    "
                        />
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