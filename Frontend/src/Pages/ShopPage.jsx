import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import Ecobazar from "../components/Ecobazar";

// ── Unsplash image optimization helpers ──
function getOptimizedImageUrl(url, width = 800) {
  if (!url) return "";
  if (url.includes("images.unsplash.com")) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}w=${width}&q=80&auto=format&fit=crop`;
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

// ── Hardcoded descriptions based on category (will be replaced by DB field later) ──
const categoryDescriptions = {
  Fitness:
    "Crafted with sustainable, natural materials, this product is designed for eco-conscious fitness enthusiasts. Made with organic and biodegradable components, it offers premium quality while minimizing environmental impact. Perfect for yoga, workouts, and everyday fitness routines.",
  Clothing:
    "Made from 100% GOTS-certified organic cotton, this piece combines comfort with sustainability. Designed with a relaxed fit and timeless style, it's perfect for everyday wear. Not tested on animals and made with zero-waste manufacturing practices.",
  Fashion:
    "An eco-friendly fashion essential crafted from sustainably sourced materials. This piece blends modern style with environmental responsibility, featuring organic fabrics and ethical manufacturing processes throughout.",
  Accessories:
    "Designed with sustainability at its core, this accessory is made from recycled and organic materials. It combines functionality with eco-conscious design, making it the perfect addition to your sustainable lifestyle.",
  Home:
    "Transform your living space with this sustainably crafted home product. Made from natural, renewable materials with minimal environmental footprint, it brings both beauty and eco-consciousness to your home.",
  default:
    "This EcoBazaar product is crafted with sustainability in mind. Made from eco-friendly materials and manufactured through ethical processes, it delivers premium quality while caring for our planet. Every purchase supports a greener future.",
};

// ── Hardcoded customer reviews ──
const customerReviews = [
  {
    name: "Priya S.",
    date: "2 weeks ago",
    rating: 5,
    text: "Absolutely love this product! The quality is outstanding and I feel great knowing it's sustainably made. The packaging was eco-friendly too. Will definitely buy from EcoBazaar again!",
  },
  {
    name: "Rahul M.",
    date: "1 month ago",
    rating: 4,
    text: "Great product at a fair price. The material feels premium and durable. Shipping was fast and the customer service was very responsive when I had questions.",
  },
  {
    name: "Ananya K.",
    date: "1 month ago",
    rating: 5,
    text: "I've been trying to switch to sustainable products and EcoBazaar makes it so easy. This product exceeded my expectations in terms of quality and comfort. Highly recommended!",
  },
  {
    name: "Vikram T.",
    date: "2 months ago",
    rating: 4,
    text: "Good quality and I appreciate the transparency about materials and sourcing. The product looks exactly as shown in the pictures. Very satisfied with my purchase.",
  },
  {
    name: "Sneha R.",
    date: "3 months ago",
    rating: 5,
    text: "This is my third purchase from EcoBazaar and they never disappoint. The attention to sustainability without compromising on quality is remarkable. Keep up the great work!",
  },
];

// ── Star rendering helper ──
function renderStars(rating, size = "text-lg") {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <span key={i} className={`${size} text-yellow-500`}>
          ★
        </span>
      );
    } else if (i === fullStars + 1 && hasHalf) {
      stars.push(
        <span key={i} className={`${size} text-yellow-400`}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={`${size} text-gray-300`}>
          ★
        </span>
      );
    }
  }
  return stars;
}

// ── Rating breakdown based on product rating ──
function getRatingBreakdown(rating) {
  const base = rating || 4.0;
  return [
    { stars: 5, count: Math.round(base * 300), width: `${Math.min(base * 18, 90)}%` },
    { stars: 4, count: Math.round(base * 110), width: `${Math.min(base * 13, 70)}%` },
    { stars: 3, count: Math.round((5 - base) * 60), width: `${Math.min((5 - base) * 20, 35)}%` },
    { stars: 2, count: Math.round((5 - base) * 20), width: `${Math.min((5 - base) * 10, 15)}%` },
    { stars: 1, count: Math.round((5 - base) * 30), width: `${Math.min((5 - base) * 12, 18)}%` },
  ];
}

// ── Optimized Image component with blur-up loading ──
function OptimizedImage({ src, width = 800, className = "", alt = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = getOptimizedImageUrl(src, width);
    img.onload = () => setIsLoaded(true);
  }, [src, width]);

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat transition-all duration-500 ${className}`}
      style={{
        backgroundImage: `url(${isLoaded ? getOptimizedImageUrl(src, width) : getPlaceholderUrl(src)})`,
        filter: isLoaded ? "none" : "blur(10px)",
      }}
      role="img"
      aria-label={alt}
    />
  );
}

// ══════════════════════════════════════════════════
// ██  MAIN COMPONENT
// ══════════════════════════════════════════════════
function ShopPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  // Categories that have size options
  const sizedCategories = ["Clothing", "Fashion"];
  const sizes = ["XS", "S", "M", "L", "XL", "1X", "2X", "3X"];

  // ── Fetch product by ID ──
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const goToHome = () => navigate("/");
  const goToProducts = () => navigate("/Product");
  const goToPurchase = () => navigate("/payment");

  // ── Loading state ──
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <SideNavbar />
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-900"></div>
          <p className="text-gray-500">Loading product...</p>
        </div>
      </div>
    );
  }

  // ── Error state ──
  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <SideNavbar />
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-500 text-lg">
            {error || "Product not found"}
          </p>
          <button
            onClick={goToProducts}
            className="px-6 py-2 bg-cyan-900 text-white rounded-full hover:bg-cyan-800 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const description =
    categoryDescriptions[product.category] || categoryDescriptions.default;
  const ratingBreakdown = getRatingBreakdown(product.ratings);
  const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);
  const discountedPrice = product.offer
    ? Math.round(product.price * (1 - parseInt(product.offer) / 100))
    : null;

  return (
    <div className="overflow-x-hidden bg-gray-100 min-h-screen">
      <SideNavbar />

      {/* ── Top Banner ── */}
      <div className="w-full h-7 items-center pl-10 flex justify-center bg-cyan-900 text-gray-200 text-xs sm:text-sm">
        Free shipping for all recycled fashion orders from Friday 21st March to
        midnight Sunday 25th March!
      </div>

      {/* ── Breadcrumb ── */}
      <div className="flex pl-20 md:pl-36 text-sm md:text-lg mt-4 items-center">
        <button onClick={goToHome}>
          <img
            className="w-6 h-6 md:w-8 md:h-8 mr-2"
            src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
            alt="Home"
          />
        </button>
        <button onClick={goToHome} className="text-gray-600 hover:underline">
          Home
        </button>
        <span className="mx-1 text-gray-400">/</span>
        <button
          onClick={goToProducts}
          className="text-gray-600 hover:underline"
        >
          Shop
        </button>
        <span className="mx-1 text-gray-400">/</span>
        <span className="font-semibold text-gray-800 truncate max-w-[200px] md:max-w-none">
          {product.title}
        </span>
      </div>

      {/* ══════════════════════════════════════════
          ██  PRODUCT HERO SECTION
          ══════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10 px-6 md:px-16 lg:pl-28 lg:pr-10 mt-8 md:mt-16">
        {/* ── Product Image ── */}
        <div className="w-full lg:w-1/2 aspect-square lg:h-[75vh]">
          <OptimizedImage
            src={product.image}
            width={900}
            className="w-full h-full rounded-lg"
            alt={product.title}
          />
        </div>

        {/* ── Product Details ── */}
        <div className="w-full lg:w-1/2 flex flex-col py-2">
          <div className="font-bold text-sm text-cyan-800 tracking-wide">
            EcoBazaar Exclusive
          </div>
          <h1 className="text-2xl md:text-4xl text-gray-700 mt-3 leading-tight">
            {product.title}
          </h1>

          {/* Category badge */}
          <div className="mt-3">
            <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex">{renderStars(product.ratings)}</div>
            <span className="text-gray-500 text-sm">
              ({product.ratings}) · {totalReviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-bold text-gray-900">
              ₹{discountedPrice || product.price}
            </span>
            {discountedPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  ₹{product.price}
                </span>
                <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                  {product.offer}% OFF
                </span>
              </>
            )}
          </div>

          {product.quantity <= 10 && product.quantity > 0 && (
            <div className="mt-2 text-sm text-orange-600 font-medium">
              Only {product.quantity} left in stock!
            </div>
          )}

          <div className="border-t border-gray-200 mt-5 pt-4">
            {/* Size — only for Clothing & Fashion categories */}
            {sizedCategories.includes(product.category) && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Size</span>
                  <button className="text-cyan-700 underline text-xs">
                    Fit Chart
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm border rounded transition-all ${selectedSize === size
                        ? "bg-cyan-900 text-white border-cyan-900"
                        : "bg-white text-gray-700 border-gray-300 hover:border-cyan-400"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Quantity */}
            <div className="mt-5 text-sm text-gray-600">Quantity</div>
            <div className="border border-gray-300 rounded flex w-28 justify-between items-center mt-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-100 transition text-lg"
              >
                −
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-100 transition text-lg"
              >
                +
              </button>
            </div>

            {/* Buy Button */}
            <button
              onClick={goToPurchase}
              className="w-full md:w-3/5 bg-cyan-900 text-gray-200 flex justify-center items-center mt-6 h-12 rounded hover:bg-cyan-800 transition-colors font-medium tracking-wide"
            >
              Buy Now — ₹{(discountedPrice || product.price) * quantity}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ██  DESCRIPTION SECTION
          ══════════════════════════════════════════ */}
      <div className="px-6 md:px-16 lg:pl-28 lg:pr-16 mt-16">
        <h2 className="text-xl font-semibold text-gray-800">Description</h2>
        <div className="border-t border-gray-300 mt-3 pt-5">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl">
            {description}
          </p>
          <ul className="ml-5 mt-6 space-y-2 text-gray-600" style={{ listStyleType: "disc" }}>
            <li>Materials: 100% sustainably sourced, eco-friendly components.</li>
            <li>Designed with circularity in mind — send back for recycling.</li>
            <li>Not tested on animals and free from animal-derived products.</li>
            <li>Made with minimal waste using ethical manufacturing processes.</li>
            <li>Carbon-neutral shipping on every order.</li>
          </ul>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ██  RATINGS & REVIEWS SECTION
          ══════════════════════════════════════════ */}
      <div className="px-6 md:px-16 lg:pl-28 lg:pr-16 mt-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Ratings & Reviews
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Rating Summary ── */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800">
                {product.ratings}
              </div>
              <div className="flex justify-center mt-2">
                {renderStars(product.ratings, "text-xl")}
              </div>
              <div className="text-gray-500 text-sm mt-2">
                {totalReviews.toLocaleString()} Verified Buyers
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-6">
                    {item.stars}★
                  </span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-600 rounded-full transition-all duration-500"
                      style={{ width: item.width }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            {/* What Customers Said */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 mb-3">
                WHAT CUSTOMERS SAID
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Fit", desc: "Just Right (85%)", w: "85%" },
                  { label: "Quality", desc: "Excellent (90%)", w: "90%" },
                  { label: "Value", desc: "Great (82%)", w: "82%" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{item.label}</span>
                      <span>{item.desc}</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-cyan-600 rounded-full"
                        style={{ width: item.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Customer Reviews ── */}
          <div className="w-full lg:w-2/3 space-y-4">
            {customerReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 text-sm">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-400">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating, "text-sm")}
                  </div>
                </div>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default ShopPage;
