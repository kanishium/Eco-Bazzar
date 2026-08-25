import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Gift,
  Leaf,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

const paymentMethods = [
  "Paytm",
  "Google Pay",
  "BHIM",
  "Mobikwik",
  "JioMoney",
  "PhonePe",
];

const treeOptions = [
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
  { label: "30%", value: 30 },
  { label: "None", value: 0 },
];

function Payment() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("Google Pay");
  const [treeDonation, setTreeDonation] = useState(0);
  const [customDonation, setCustomDonation] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState("");

  const subtotal = 819;
  const shipping = 0;

  const donationAmount = useMemo(() => {
    if (customDonation) return Number(customDonation) || 0;
    return Math.round((subtotal * treeDonation) / 100);
  }, [customDonation, treeDonation]);

  const total = Math.max(subtotal + shipping + donationAmount - discount, 0);

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (code === "ECO10") {
      setDiscount(82);
      setDiscountMessage("ECO10 applied successfully.");
      return;
    }

    if (code === "GREEN50") {
      setDiscount(50);
      setDiscountMessage("GREEN50 applied successfully.");
      return;
    }

    setDiscount(0);
    setDiscountMessage("Invalid code. Try ECO10 or GREEN50.");
  };

  const handlePayNow = (event) => {
    event.preventDefault();
    alert("Payment submitted successfully!");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F0EA]">
      <SideNavbar />

      <div className="bg-[#18382D] px-5 py-2 text-center font-poppins text-xs font-semibold tracking-wide text-[#F5F0EA] sm:text-sm">
        Free shipping on all eco-friendly orders this week.
      </div>

      <main className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1120px]">
          <button
            type="button"
            onClick={() => navigate("/Product")}
            className="mb-6 inline-flex items-center gap-2 font-poppins text-xs font-bold uppercase tracking-wide text-[#18382D] transition hover:text-[#1A7252]"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </button>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-[#1A7252]">
                <span>Secure Checkout</span>
                <span className="h-px w-14 bg-[#1A7252]" />
              </div>

              <h1 className="font-bodoni text-4xl leading-none text-[#18382D] sm:text-5xl">
                Payment Details
              </h1>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EDF4EF] px-4 py-2 font-poppins text-xs font-semibold text-[#1A7252]">
              <Lock size={14} />
              Encrypted Payment
            </div>
          </div>

          <form
            onSubmit={handlePayNow}
            className="grid gap-6 lg:grid-cols-[1fr_360px]"
          >
            <div className="space-y-6">
              <section className="rounded-[16px] border border-[#DED6CC] bg-[#FBFAF6] p-5 sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#EDF4EF] text-[#1A7252]">
                    <Mail size={18} />
                  </div>
                  <h2 className="font-bodoni text-2xl text-[#18382D]">
                    Contact
                  </h2>
                </div>

                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-12 w-full rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none transition placeholder:text-stone-400 focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                />

                <label className="mt-4 flex items-center gap-3 font-poppins text-sm text-stone-600">
                  <input type="checkbox" className="accent-[#1A7252]" />
                  Email me with news and eco offers
                </label>
              </section>

              <section className="rounded-[16px] border border-[#DED6CC] bg-[#FBFAF6] p-5 sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#EDF4EF] text-[#1A7252]">
                    <MapPin size={18} />
                  </div>
                  <h2 className="font-bodoni text-2xl text-[#18382D]">
                    Delivery
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Country / Region"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252] sm:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252] sm:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <input
                    type="text"
                    placeholder="Pin code"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="h-12 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                </div>

                <label className="mt-4 flex items-center gap-3 font-poppins text-sm text-stone-600">
                  <input type="checkbox" className="accent-[#1A7252]" />
                  Save this information for next time
                </label>
              </section>

              <section className="rounded-[16px] border border-[#DED6CC] bg-[#FBFAF6] p-5 sm:p-7">
                <div className="mb-2 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#EDF4EF] text-[#1A7252]">
                    <CreditCard size={18} />
                  </div>
                  <h2 className="font-bodoni text-2xl text-[#18382D]">
                    Payment
                  </h2>
                </div>

                <p className="mb-5 font-poppins text-sm text-stone-500">
                  All transactions are secure and encrypted.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {paymentMethods.map((method) => {
                    const isSelected = paymentMethod === method;

                    return (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`h-12 rounded-md border font-poppins text-xs font-bold transition ${isSelected
                            ? "border-[#1A7252] bg-[#EDF4EF] text-[#1A7252]"
                            : "border-[#DED6CC] bg-white text-stone-600 hover:border-[#1A7252]"
                          }`}
                      >
                        {method}
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[16px] border border-[#DED6CC] bg-[#FBFAF6] p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#EDF4EF] text-[#1A7252]">
                    <Leaf size={18} />
                  </div>
                  <div>
                    <h2 className="font-bodoni text-2xl text-[#18382D]">
                      Add Trees
                    </h2>
                    <p className="font-poppins text-sm text-stone-500">
                      Support our tree planting drive with this order.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {treeOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => {
                        setTreeDonation(option.value);
                        setCustomDonation("");
                      }}
                      className={`h-10 rounded-full border font-poppins text-xs font-bold transition ${treeDonation === option.value && !customDonation
                          ? "border-[#1A7252] bg-[#1A7252] text-white"
                          : "border-[#DED6CC] bg-white text-stone-600 hover:border-[#1A7252]"
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <input
                    type="number"
                    min="0"
                    value={customDonation}
                    onChange={(event) => setCustomDonation(event.target.value)}
                    placeholder="Custom amount"
                    className="h-12 flex-1 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-[#18382D] px-5 font-poppins text-xs font-bold uppercase text-white transition hover:bg-[#1A7252]"
                  >
                    Add
                  </button>
                </div>
              </section>
            </div>

            <aside className="h-fit rounded-[16px] border border-[#DED6CC] bg-[#FBFAF6] p-5 shadow-[0_18px_50px_rgba(39,32,24,0.08)] lg:sticky lg:top-8">
              <h2 className="font-bodoni text-2xl text-[#18382D]">
                Order Summary
              </h2>

              <div className="mt-5 flex gap-4 rounded-md bg-[#EDF4EF] p-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-white">
                  <img
                    src="/images/cart/product-1.png"
                    alt="Organic cotton product"
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-poppins text-sm font-bold text-[#1F2933]">
                    Men&apos;s Organic Staple Cotton T-Shirt
                  </h3>
                  <p className="mt-1 font-poppins text-xs text-stone-500">
                    Eco material, regular fit
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#18382D]">
                  Discount Code
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(event) => setDiscountCode(event.target.value)}
                    placeholder="ECO10"
                    className="h-11 flex-1 rounded-md border border-[#DED6CC] bg-white px-4 font-poppins text-sm outline-none focus:border-[#1A7252]"
                  />
                  <button
                    type="button"
                    onClick={applyDiscount}
                    className="rounded-md bg-[#18382D] px-4 font-poppins text-[11px] font-bold uppercase text-white hover:bg-[#1A7252]"
                  >
                    Apply
                  </button>
                </div>

                {discountMessage && (
                  <p className="mt-2 font-poppins text-xs text-stone-500">
                    {discountMessage}
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-3 border-t border-[#DED6CC] pt-5 font-poppins text-sm">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-stone-500">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>

                <div className="flex justify-between text-stone-500">
                  <span>Tree Donation</span>
                  <span>₹{donationAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-stone-500">
                  <span>Discount</span>
                  <span>- ₹{discount.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 flex justify-between border-t border-[#DED6CC] pt-5 font-poppins text-lg font-bold text-[#18382D]">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <div className="mt-5 rounded-md bg-[#F5F0EA] p-3">
                <div className="flex gap-2">
                  <ShieldCheck size={17} className="mt-0.5 text-[#1A7252]" />
                  <p className="font-poppins text-xs leading-5 text-stone-500">
                    Your payment is protected and your order supports mindful,
                    lower-waste shopping.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1A7252] font-poppins text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#18382D]"
              >
                <Truck size={15} />
                Pay Now
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 font-poppins text-xs text-stone-400">
                <Gift size={14} />
                Try coupon ECO10 or GREEN50
              </div>
            </aside>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Payment;