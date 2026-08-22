import React from "react";
import { useNavigate } from "react-router-dom";

function FirstCard({ heading, content, bt, abt }) {
  const navigate = useNavigate();
  const navi = () => {
    if (abt == "community") {
      navigate("/community");
    }
    if (abt == "privacy") {
      navigate("/privacy");
    }
    if (abt == "contact") {
      navigate("/contact");
    }
  };

  return (
    <div className="bg-white flex justify-center items-center  mt-20  rounded-2xl shadow-lg shadow-gray-400">
      <div>
        <div className="flex justify-center text-2xl text-green-950">
          {heading}
        </div>
        <div className="flex justify-center text-lg text-gray-500 pl-14 pr-14 mt-6">
          {content}
        </div>
        <div className="flex justify-center">
          <button
            onClick={navi}
            className="flex justify-center  bg-green-950 text-white w-3/6 h-8 items-center rounded-2xl mt-6"
          >
            {bt}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
