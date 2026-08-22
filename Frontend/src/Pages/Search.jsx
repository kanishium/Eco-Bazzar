import React from "react";
import SideNavbar from "../components/SideNavbar";
import SearchBar from "../components/SearchBar";
import SecondCard from "../components/SecondCard";
import six from "../assets/6.jpeg";
import five from "../assets/5.jpeg";
import four from "../assets/4.jpeg";

function Search() {
  return (
    <div className="overflow-x-hidden bg-gray-100 " >
      <SideNavbar></SideNavbar>
      <button className="w-full ml-20">
        <img
          className="w-8 h-8"
          src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
          alt=""
        />
      </button>
      <SearchBar></SearchBar>
      <div className="w-full pl-20 mt-10 ">
        <div className="pl-14 font-semibold text-2xl ">Suggestions</div>
        <div className="flex gap-20 justify-stretch pl-10 pr-10 pt-7  ">
          <button className=" border-black border bg-white w-1/12 h-9 rounded-full ">
            BEDSHEETS
          </button>
          <button className=" border-black border  bg-white w-2/12 h-9 rounded-full ">
            ORGANIC T-SHIRT
          </button>
          <button className=" border-black border bg-white w-2/12 h-9 rounded-full ">
            WESTERN & ETHNIC
          </button>
          <button className=" border-black border bg-white w-1/12 h-9 rounded-full ">
            CUSHONS
          </button>
          <button className="border-black border bg-white w-1/12  h-9 rounded-full">
            TOTE BAG
          </button>
          <button className=" border-black border bg-white w-1/12 h-9 rounded-full ">
            PLANTERS
          </button>
        </div>
        <div className="flex gap-20 justify-center pl-10 pr-10 pt-5  ">
          <button className=" border-black border bg-white w-2/12 h-9 rounded-full ">
            HERBAL STORE
          </button>
          <button className=" border-black border  bg-white w-1/12 h-9 rounded-full ">
            BEAUTY
          </button>
          <button className=" border-black border bg-white w-1/12 h-9 rounded-full ">
            KIDS & BABY
          </button>
          <button className=" border-black border bg-white w-1/12 h-9 rounded-full ">
            FURNITURE
          </button>
        </div>
        <div className="pl-14 font-semibold text-xl mt-28 ">TOP SEARCHES</div>
        <div className="flex w-full">
          <SecondCard
            image={six}
            detail={"Men's & Women's sustainable Shirts"}
          ></SecondCard>
          <SecondCard
            image={five}
            detail={"Women's sustainable essential T-Shirts"}
          ></SecondCard>
          <SecondCard
            image={four}
            detail={"Men's sustainable essential sweatshirt"}
          ></SecondCard>
        </div>

      </div>
    </div>
  );
}

export default Search;
