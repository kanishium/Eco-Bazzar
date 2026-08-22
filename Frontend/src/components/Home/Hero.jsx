import React from 'react'
import { useNavigate } from 'react-router-dom'
import first from '../../assets/1.png'
const Hero = () => {
    const navigate = useNavigate();

    const goTologin = () => {
        navigate("/Product");
    };
    return (
        <>
            <div className="w-full flex flex-col justify-between bg-[#F5F0EA] pr-10  md:flex-row min-h-[80vh]">
                {/* Left - Text Content */}
                <div className="w-full md:w-3/5 flex flex-col justify-center px-10 md:px-20 py-16 bg-[#f5f0ea]">
                    <h1 className="font-bodoni text-4xl md:text-6xl text-gray-800 leading-tight">
                        Find Your Perfect Style
                    </h1>

                    <h2 className="font-bodoni text-4xl md:text-5xl text-[#1A7252] font-bold mt-2 leading-tight">
                        Sustainable Fashion
                    </h2>
                    <p className="text-gray-500 text-sm mt-6 max-w-md leading-relaxed font-poppins">
                        Beautifully designed, planet-friendly fashion made from eco
                        materials, combining style and sustainability for fashion with
                        purpose, ensuring you look great while helping the environment.
                    </p>
                    <div className="flex items-center gap-6 mt-6">
                        <button
                            onClick={goTologin}
                            className="border-2 border-gray-800 text-gray-800 px-8 py-3 text-xs font-semibold tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300 font-poppins"
                        >
                            SHOP NOW
                        </button>
                        <button
                            onClick={() => navigate("/Product")}
                            className="text-gray-800 text-xs font-semibold tracking-wider underline underline-offset-4 hover:text-[#1A7252] transition-colors font-poppins flex items-center gap-2"
                        >
                            EXPLORE MORE <span className="text-lg">→</span>
                        </button>
                    </div>
                    <div className="mt-6 grid max-w-lg grid-cols-3 gap-5 border-t border-[#d7ccc1] pt-7">
                        <div>
                            <p className="font-bodoni text-3xl text-[#1A7252]">100%</p>
                            <p className="mt-1 font-poppins text-xs text-gray-500">
                                Natural Picks
                            </p>
                        </div>

                        <div>
                            <p className="font-bodoni text-3xl text-[#1A7252]">50+</p>
                            <p className="mt-1 font-poppins text-xs text-gray-500">
                                Eco Products
                            </p>
                        </div>

                        <div>
                            <p className="font-bodoni text-3xl text-[#1A7252]">0</p>
                            <p className="mt-1 font-poppins text-xs text-gray-500">
                                Plastic Focus
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right - Hero Image */}
                <div
                    className="w-full bg-[#F5F0EA]  md:w-1/3 min-h-[50vh] md:min-h-0 bg-cover bg-right  bg-no-repeat"
                    style={{ backgroundImage: `url(${first})` }}
                ></div>
            </div>

            {/* Decorative Chevron Divider */}
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
    )
}

export default Hero