import React, { useState } from "react";

import SideNavbar from "../components/SideNavbar";
function Payment() {
  const [donation, setDonation] = useState("");

  const handleDonationChange = (e) => {
    setDonation(e.target.value);
  };
  return (
    <div className="overflow-x-hidden">
      <SideNavbar></SideNavbar>
      <div className="w-screen h-7   items-center pl-10 flex justify-center bg-cyan-900 text-gray-200 ">
        Free shipping for all recycled fashion orders from Friday 21st March to
        midnight Sunday 25th March!
      </div>
      <div className="flex flex-col lg:flex-row p-6 gap-6  bg-gray-50 pl-28">
        {/* Left Section */}
        <div className="w-1/2 bg-white p-6 rounded shadow-md ">
          {/* Contact */}
          <h2 className="font-bold text-lg mb-4">Contact</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter">Email me with news and offers</label>
            </div>
          </div>

          {/* Delivery */}
          <h2 className="font-bold text-lg mb-4">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Country/Region"
              className="col-span-2 p-3 border rounded"
            />
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Address"
              className="col-span-2 p-3 border rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="State"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Pin Code"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="col-span-2 p-3 border rounded"
            />
            <div className="flex items-center mt-2 col-span-2">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo">
                Save this information for next time
              </label>
            </div>
          </div>

          {/* Payment */}
          <h2 className="font-bold text-lg mb-4">Payment</h2>
          <p className="mb-4 text-sm">
            All transactions are secure and encrypted
          </p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              "Paytm",
              "Google Pay",
              "BHIM",
              "Mobikwik",
              "JioMoney",
              "PhonePe",
              "Airtel Money",
            ].map((method) => (
              <div
                key={method}
                className="flex items-center justify-center border p-3 rounded"
              >
                <img
                  src={`/icons/${method.toLowerCase()}.png`}
                  alt={method}
                  className="h-6"
                />
              </div>
            ))}
          </div>

          {/* Add Trees */}
          <h2 className="font-bold text-lg mb-4">Add Trees</h2>
          <p className="mb-2">
            Contribute to our #MissionMillion tree planting drive
          </p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {["10%", "20%", "30%", "None"].map((option) => (
              <button
                key={option}
                className={`p-2 border rounded ${
                  donation === option ? "bg-green-100 border-green-500" : ""
                }`}
                onClick={() => setDonation(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <input
              type="number"
              placeholder="Custom Amount"
              className="flex-1 p-3 border rounded"
              onChange={handleDonationChange}
            />
            <button className="bg-gray-200 p-3 rounded">Add Trees</button>
          </div>

          {/* Pay Now */}
          <button className="w-full mt-6 bg-cyan-900 text-white p-4 rounded">
            PAY NOW
          </button>
        </div>

        {/* Right Section */}
        <div className=" p-6 rounded shadow-md  w-1/2 bg-slate-300">
          <h2 className="font-bold text-lg mb-4">
            Men's Organic Staple Cotton Solid Printed T-Shirt
          </h2>
          <input
            type="text"
            placeholder="Discount Code or Gift Code"
            className="w-full p-3 border rounded mb-4 border-gray-500"
          />
          <button className="bg-cyan-900 text-white p-3 rounded w-full mb-6">
            Buy
          </button>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹819.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹819.00</span>
            </div>
            <div className="border mt-10 bg-black border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
