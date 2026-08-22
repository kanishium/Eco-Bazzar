import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Appends Unsplash image optimization parameters to the URL.
 * This transforms a raw Unsplash URL (which serves the full 4000x6000px original)
 * into an optimized version (~50-80KB instead of 3-5MB).
 */
function getOptimizedImageUrl(url, width = 600) {
  if (!url) return "";
  // Only optimize Unsplash URLs
  if (url.includes("images.unsplash.com")) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}w=${width}&q=75&auto=format&fit=crop`;
  }
  return url;
}

// Tiny blurred thumbnail for placeholder (20px wide = ~200 bytes)
function getPlaceholderUrl(url) {
  if (!url) return "";
  if (url.includes("images.unsplash.com")) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}w=20&q=10&auto=format&fit=crop`;
  }
  return url;
}

function ProductCard({ _id, image, title, category, price, offer, ratings }) {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  const gotoshoppage = () => {
    navigate(`/Shoppage/${_id}`);
  };

  // Lazy load: only start loading the image when the card scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters viewport
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preload the optimized image and trigger the blur-up transition
  useEffect(() => {
    if (!isInView || !image) return;
    const img = new Image();
    img.src = getOptimizedImageUrl(image);
    img.onload = () => setIsLoaded(true);
  }, [isInView, image]);

  // Render star icons based on ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const optimizedUrl = getOptimizedImageUrl(image);
  const placeholderUrl = getPlaceholderUrl(image);

  return (
    <div ref={cardRef} className="h-[80vh] w-1/3 p-4 relative">
      <div className="h-full shadow-xl shadow-gray-500 overflow-hidden group relative">
      <button onClick={gotoshoppage} className="h-full w-full text-left">
        {/* Offer badge */}
        {offer && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {offer}
          </div>
        )}
        <div
          className="h-5/6 bg-cover bg-no-repeat bg-bottom transition-all duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${isLoaded ? optimizedUrl : placeholderUrl})`,
            filter: isLoaded ? "none" : "blur(10px)",
            transform: isLoaded ? "scale(1)" : "scale(1.05)",
          }}
        ></div>
        <div className="flex justify-center text-sm text-gray-500">{category || "Organic"}</div>
        <div className="flex justify-center">{title}</div>
        <div className="flex justify-center items-center gap-2">
          <span className="text-lg font-bold">₹ {price}</span>
          {ratings > 0 && (
            <span className="flex text-sm">{renderStars(ratings)}</span>
          )}
        </div>
      </button>
      </div>
    </div>
  );
}

export default ProductCard;

