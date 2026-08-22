import React, { useState, useEffect, useRef } from "react";

function getOptimizedImageUrl(url, width = 600) {
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

function SecondCard({ image, detail }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !image) return;
    const img = new Image();
    img.src = getOptimizedImageUrl(image);
    img.onload = () => setIsLoaded(true);
  }, [isInView, image]);

  const optimizedUrl = getOptimizedImageUrl(image);
  const placeholderUrl = getPlaceholderUrl(image);

  return (
    <div ref={cardRef} className="h-[80vh] w-1/3    m-10   shadow-xl shadow-gray-500 ">
      <button className="h-full w-full ">
        <div
          className="h-5/6   bg-cover bg-no-repeat bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${isLoaded ? optimizedUrl : placeholderUrl})`,
            filter: isLoaded ? "none" : "blur(10px)",
          }}
        ></div>

        <div className=" flex justify-center">{detail}</div>
      </button>
    </div>
  );
}

export default SecondCard;

