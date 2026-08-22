import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SideNavbar from "../components/SideNavbar";
import twentytwo from "../assets/22.jpeg";
import twentythree from "../assets/23.jpeg";
import { useNavigate } from "react-router-dom";
import Ecobazar from "../components/Ecobazar";

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const gotohome = () => {
    navigate("/");
  };

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className=" w-screen h-screen overflow-x-hidden bg-gray-100">
      <SideNavbar></SideNavbar>
      <div className="w-screen h-5 items-center pl-10 flex justify-center bg-cyan-900 text-gray-200 ">
        Free shipping for all recycled fashion orders from Friday 21st March to
        midnight Sunday 25th March!
      </div>
      <div className="flex pl-36 text-lg mt-4">
        <button onClick={gotohome} className="">
          <img
            className="w-8 h-8 mr-3 font-bold"
            src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
            alt=""
          />
        </button>
        <button className="text-gray-600">Home </button>
        <div className="flex justify-center items-center mr-1 ml-1"> / </div>
        <button className="font-semibold">Shop</button>
      </div>
      <div className="pl-36 mt-10 flex justify-between pr-20 font-semibold text-sm  ">
        <div className="flex">
          <button className="w-6 h-6 flex justify-center items-center ">
            <img
              src="https://img.icons8.com/?size=100&id=15637&format=png&color=000000"
              alt=""
            />
          </button>
          <div className="ml-2 flex justify-center items-center">
            FILTER AND SORT
          </div>
        </div>
        <div className="flex gap-4">
          <div>FEATURED PRODUCT</div>
          <div>{products.length} PRODUCTS</div>
        </div>
      </div>

      {/* Product Grid - fetched from database */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-900"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="flex justify-center items-center py-20 text-gray-500 text-lg">
          No products found. Add some products to get started!
        </div>
      ) : (
        <div className="flex flex-wrap w-screen h-auto pl-36 pr-10 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              offer={product.offer}
              ratings={product.ratings}
            />
          ))}
        </div>
      )}

      <div
        className="h-[300vh]  bg-cover bg-no-repeat mt-10"
        style={{ backgroundImage: `url(${twentytwo})` }}
      ></div>
      <div className="w-full flex flex-col items-center py-10 px-4 mt-10">
        {/* Heading */}
        <h2 className="text-xl font-bold mb-6">What our customers say</h2>

        {/* Google Rating Section */}
        <div className="w-full max-w-4xl  rounded-lg p-6 flex justify-between items-center bg-gray-200 ">
          <div>
            <div className="flex items-center gap-2 ">
              {/* Google Logo and Rating Text */}

              <div
                style={{ backgroundImage: `url(${twentythree})` }}
                className="w-14 h-14 bg-contain bg-no-repeat bg-center "
              />
              <span className="text-gray-700 font-medium ml-2 ">Rating</span>
            </div>
            <div className="text-center  flex">
              {/* Rating Number and Stars */}
              <p className="text-2xl font-bold">5.0</p>
              <div className="flex items-center text-yellow-500">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index} className="text-lg">
                    {star}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm flex justify-center items-center">
                6 reviews
              </p>
            </div>
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            WRITE A REVIEW
          </button>
        </div>

        {/* Customer Reviews Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Review Card 1 */}
          <div className=" rounded-lg p-4 bg-gray-200">
            <div className="flex items-center text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-lg">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-2">
              I ordered 2 100% cotton hoodies over the weekend and needed them
              before a particular...
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-2 block"
            >
              Read more
            </a>
          </div>

          {/* Review Card 2 */}
          <div className=" rounded-lg p-4 bg-gray-200">
            <div className="flex items-center text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-lg">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-2">
              Excellent product at a refreshingly affordable price. Just
              received a hoodie, a couple...
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-2 block"
            >
              Read more
            </a>
          </div>

          {/* Review Card 3 */}
          <div className=" rounded-lg p-4 bg-gray-200">
            <div className="flex items-center text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-lg">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-2">
              Ordered a custom t-shirt after contacting them over email. Also
              got one of their Show Your...
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-2 block"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

