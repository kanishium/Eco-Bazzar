import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Plus, Minus } from "lucide-react";
import SideNavbar from "../components/SideNavbar";
import { useNavigate } from "react-router-dom";


const faqs = [
  {
    question: "What makes EcoBazaar different from other eco stores?",
    answer:
      "EcoBazaar focuses on thoughtfully selected products made from reusable, natural, recycled, or low-impact materials so you can shop with more confidence.",
  },
  {
    question: "Are your products really eco-friendly?",
    answer:
      "Yes. We prioritize products with sustainable materials, reusable designs, minimal plastic, and practical long-term use.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Most orders are delivered within 4 to 7 business days, depending on your location and product availability.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes. You can request a return or exchange within the eligible return window if the product is unused and in original condition.",
  },
];

function Contact() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  const gotoProduct = () => {
    navigate("/Product");
  };

  const gotohome = () => {
    navigate("/");
  };
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F0EA]">
      <SideNavbar />
      <div className="bg-[#F5F0EA] px-5 pt-14 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">


          <h1 className="font-bodoni text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-5xl">
            Get in <span className="text-[#1A7252]">Touch</span> with EcoBazaar
          </h1>

          <p className="mx-auto mt-2 max-w-[580px] font-poppins text-sm leading-7 text-stone-500 sm:text-base">
            Have questions about your order, eco-friendly materials, returns, or our
            products? Our team is ready to help you make better choices for everyday
            sustainable living.
          </p>
        </div>
      </div>
      <section className="bg-[#F5F0EA] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[18px] bg-[#18382D] p-6 shadow-[0_24px_80px_rgba(24,56,45,0.18)] sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-[#F5F0EA]">
              <h2 className="font-bodoni text-3xl font-semibold leading-tight sm:text-4xl">
                Have questions or need assistance?
              </h2>

              <p className="mt-5 max-w-xl font-poppins text-sm leading-7 text-[#D6E2D8]">
                We are here to help. Whether you have questions about your order,
                eco-friendly materials, returns, or product care, our team is ready
                to assist you.
              </p>

              <div className="mt-16 divide-y divide-white/12">
                <div className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                  <div className="flex items-center gap-3 font-poppins text-sm font-semibold">
                    <Mail size={17} className="text-[#BFD7C6]" />
                    Message Us
                  </div>
                  <p className="font-poppins text-sm text-[#D6E2D8] sm:text-right">
                    support@ecobazaar.com
                  </p>
                </div>

                <div className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                  <div className="flex items-center gap-3 font-poppins text-sm font-semibold">
                    <Phone size={17} className="text-[#BFD7C6]" />
                    Call Us
                  </div>
                  <p className="font-poppins text-sm text-[#D6E2D8] sm:text-right">
                    +91 98765 43210
                  </p>
                </div>

                <div className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                  <div className="flex items-center gap-3 font-poppins text-sm font-semibold">
                    <MapPin size={17} className="text-[#BFD7C6]" />
                    Location
                  </div>
                  <p className="font-poppins text-sm leading-6 text-[#D6E2D8] sm:text-right">
                    EcoBazaar Studio, Green Market Road, New Delhi, India
                  </p>
                </div>

                <div className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                  <p className="font-poppins text-sm font-semibold">
                    Business Hours
                  </p>
                  <p className="font-poppins text-sm leading-6 text-[#D6E2D8] sm:text-right">
                    Monday - Friday, 9:00 AM - 6:00 PM
                    <br />
                    Saturday, 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                  <p className="font-poppins text-sm font-semibold">
                    Social Media
                  </p>

                  <div className="flex gap-3 sm:justify-end">
                    {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="grid h-8 w-8 place-items-center rounded-full bg-[#F5F0EA] text-[#18382D] transition hover:bg-[#BFD7C6]"
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-[#F7FBE7] p-6 shadow-[10px_10px_0_rgba(0,0,0,0.18)] sm:p-8"
            >
              <div>
                <label className="mb-2 block font-poppins text-xs font-semibold text-[#18382D]">
                  Full Name <span className="font-normal text-[#6F7D6F]">(Required)</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  required
                  className="h-11 w-full border border-[#DDE8C8] bg-transparent px-4 font-poppins text-sm outline-none transition placeholder:text-[#9AA791] focus:border-[#1A7252]"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-poppins text-xs font-semibold text-[#18382D]">
                  Email Address <span className="font-normal text-[#6F7D6F]">(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail"
                  required
                  className="h-11 w-full border border-[#DDE8C8] bg-transparent px-4 font-poppins text-sm outline-none transition placeholder:text-[#9AA791] focus:border-[#1A7252]"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-poppins text-xs font-semibold text-[#18382D]">
                  Phone Number <span className="font-normal text-[#6F7D6F]">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  className="h-11 w-full border border-[#DDE8C8] bg-transparent px-4 font-poppins text-sm outline-none transition placeholder:text-[#9AA791] focus:border-[#1A7252]"
                />
              </div>

              <div className="mt-5">
                <p className="mb-3 font-poppins text-xs font-semibold text-[#18382D]">
                  Subject
                </p>

                <div className="flex flex-wrap gap-4 font-poppins text-xs text-[#526052]">
                  {["Order Support", "Product Question", "Return", "Other"].map(
                    (subject) => (
                      <label key={subject} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          className="accent-[#1A7252]"
                        />
                        {subject}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-poppins text-xs font-semibold text-[#18382D]">
                  Message <span className="font-normal text-[#6F7D6F]">(Tell us how we can help)</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full resize-none border border-[#DDE8C8] bg-transparent px-4 py-3 font-poppins text-sm outline-none transition placeholder:text-[#9AA791] focus:border-[#1A7252]"
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#18382D] font-poppins text-xs font-bold text-white transition hover:bg-[#1A7252]"
              >
                Submit
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-[#fbfaf6] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-12 text-center">

            <h2 className="font-poppins text-3xl font-bold leading-tight text-stone-950 sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-t border-stone-200 last:border-b md:[&:nth-last-child(-n+2)]:border-b"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-poppins text-sm font-bold leading-6 text-[#6FA83A] sm:text-base">
                      {faq.question}
                    </span>

                    <span className="grid h-7 w-7 shrink-0 place-items-center text-[#6FA83A]">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="pb-7 pr-10 font-poppins text-sm leading-7 text-stone-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;