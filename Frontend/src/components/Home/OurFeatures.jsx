import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";

/**
 * Appends Unsplash image optimization parameters.
 * Transforms a raw Unsplash URL (full 4000x6000px original ~3-5MB)
 * into an optimized version (~40-80KB).
 */
function getOptimizedImageUrl(url, width = 400) {
    if (!url) return "";
    if (url.includes("images.unsplash.com")) {
        const separator = url.includes("?") ? "&" : "?";
        return `${url}${separator}w=${width}&q=75&auto=format&fit=crop`;
    }
    return url;
}

function getPlaceholderUrl(url) {
    if (!url) return "";
    if (url.includes("images.unsplash.com")) {
        const separator = url.includes("?") ? "&" : "?";
        return `${url}${separator}w=20&q=10&auto=format&fit=crop`;
    }
    return url;
}

export default function OurFeatures() {
    const navigate = useNavigate();
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductId, setSelectedProductId] = useState(null);

    // Fetch products from the backend DB
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/products");
                const data = await response.json();
                // Take up to 8 products for the featured section
                const products = data.slice(0, 8);
                setFeaturedProducts(products);
                // Auto-select the first product if available
                if (products.length > 0) {
                    setSelectedProductId(products[0]._id);
                }
            } catch (error) {
                console.log("Error fetching featured products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Helper to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating || 0);
        const hasHalf = (rating || 0) - fullStars >= 0.5;
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                );
            } else if (i === fullStars && hasHalf) {
                stars.push(
                    <Star key={i} size={13} className="fill-amber-400/50 text-amber-400" />
                );
            } else {
                stars.push(
                    <Star key={i} size={13} className="text-stone-300" />
                );
            }
        }
        return stars;
    };

    // Determine badge text & color from offer/category
    const getBadge = (product) => {
        if (product.offer && product.offer.trim() !== "") {
            return { text: product.offer, color: "bg-emerald-700" };
        }
        return null;
    };

    return (
        <>
            <section className="bg-[#f4eee9] px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-[1120px]">
                    <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="mb-3 flex items-center  gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                                <span className="h-px w-12 bg-emerald-700/50" />
                                Our Featured
                                <span className="h-px w-12 bg-emerald-700/50" />
                            </div>

                            <h2 className="font-serif text-3xl  sm:text-4xl">
                                Most Loved Eco Products
                            </h2>
                        </div>

                        <button
                            onClick={() => navigate("/Product")}
                            className="w-fit rounded-md border border-stone-700 bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-wide text-stone-800 transition hover:bg-stone-900 hover:text-white"
                        >
                            Shop Bestsellers
                        </button>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-700"></div>
                        </div>
                    ) : featuredProducts.length === 0 ? (
                        <div className="flex justify-center items-center py-20 text-stone-500 text-lg">
                            No featured products found.
                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {featuredProducts.map((product) => {
                                const isSelected = selectedProductId === product._id;
                                const badge = getBadge(product);

                                return (
                                    <div
                                        key={product._id}
                                        onClick={() => setSelectedProductId(product._id)}
                                        className={`group relative cursor-pointer overflow-hidden rounded-xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${isSelected ? "ring-1 ring-emerald-600" : ""
                                            }`}
                                    >
                                        {/* Offer / Badge */}
                                        {badge && (
                                            <span
                                                className={`absolute left-0 top-4 z-10 px-3 py-1 text-[11px] font-bold uppercase text-white ${badge.color}`}
                                            >
                                                {badge.text}
                                            </span>
                                        )}

                                        {/* Action Buttons (on select) */}
                                        {isSelected && (
                                            <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); navigate("/login"); }}
                                                    title="Add to Wishlist"
                                                    className="grid h-8 w-8 place-items-center rounded-md border border-stone-200 bg-white text-stone-600 shadow-sm hover:text-emerald-700"
                                                >
                                                    <Heart size={16} />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); navigate(`/Shoppage/${product._id}`); }}
                                                    title="Quick View"
                                                    className="grid h-8 w-8 place-items-center rounded-md border border-stone-200 bg-white text-stone-600 shadow-sm hover:text-emerald-700"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); navigate(`/Shoppage/${product._id}`); }}
                                                    title="Add to Cart"
                                                    className="grid h-8 w-8 place-items-center rounded-md border border-stone-200 bg-white text-stone-600 shadow-sm hover:text-emerald-700"
                                                >
                                                    <ShoppingCart size={16} />
                                                </button>
                                            </div>
                                        )}

                                        {/* Product Image from DB — optimized */}
                                        <div
                                            onClick={(e) => { e.stopPropagation(); navigate(`/Shoppage/${product._id}`); }}
                                            className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-stone-50"
                                        >
                                            <img
                                                src={getOptimizedImageUrl(product.image)}
                                                alt={product.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                                                style={{ contentVisibility: "auto" }}
                                            />
                                        </div>

                                        {/* Add to Cart (on select) */}
                                        {isSelected && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); navigate(`/Shoppage/${product._id}`); }}
                                                className="mb-4 mt-2 w-full rounded-md bg-emerald-700 py-3 text-xs font-bold uppercase text-white transition hover:bg-emerald-800"
                                            >
                                                Add To Cart
                                            </button>
                                        )}

                                        {/* Product Info */}
                                        <div className="pt-2">
                                            {/* Category */}
                                            {product.category && (
                                                <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-600">
                                                    {product.category}
                                                </span>
                                            )}

                                            {/* Title */}
                                            <h3 className="font-serif text-lg leading-snug text-stone-900 mt-1">
                                                {product.title}
                                            </h3>

                                            <div className="mt-2 flex items-center justify-between gap-3">
                                                {/* Price */}
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-stone-950">
                                                        ₹{product.price?.toFixed(2)}
                                                    </span>
                                                </div>

                                                {/* Ratings as Stars */}
                                                <div className="flex items-center gap-0.5">
                                                    {renderStars(product.ratings)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
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