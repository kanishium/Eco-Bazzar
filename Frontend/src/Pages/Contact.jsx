import React from "react";
import SideNavbar from "../components/SideNavbar";
import { useState } from "react";
import { ArrowLeft, Mail, Phone, Send, ShieldCheck } from "lucide-react";




function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(formData);
  };
  return (
    <div className="min-h-screen overflow-x-hidden pb-20 bg-[#F5F0EA]">
      <SideNavbar />

      <main className="px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-10 flex flex-col gap-5">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="grid h-11 w-11 place-items-center rounded-full border border-stone-300 bg-white text-stone-800 shadow-sm transition hover:border-[#1A7252] hover:text-[#1A7252]"
            >
              <ArrowLeft size={19} />
            </button>
          </div>

          <div className="grid overflow-hidden rounded-[18px] bg-[#fbfaf6] shadow-[0_20px_70px_rgba(39,32,24,0.08)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative bg-[#1A7252] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-white/10" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-tr-full bg-white/10" />

              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-white/80">
                  <span>Contact EcoBazaar</span>
                  <span className="h-px w-14 bg-white/60" />
                </div>

                <h1 className="font-bodoni text-4xl leading-tight sm:text-5xl">
                  We Are Here To Help
                </h1>

                <p className="mt-5 max-w-sm font-poppins text-sm leading-7 text-white/75">
                  Have a question about an order, product, return, or sustainable
                  material? Send us a message and our team will get back to you.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-poppins text-xs uppercase tracking-wide text-white/60">
                        Email Support
                      </p>
                      <p className="mt-1 font-poppins text-sm">
                        support@ecobazaar.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-poppins text-xs uppercase tracking-wide text-white/60">
                        Customer Care
                      </p>
                      <p className="mt-1 font-poppins text-sm">
                        Mon - Sat, 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="font-poppins text-xs uppercase tracking-wide text-white/60">
                        Privacy First
                      </p>
                      <p className="mt-1 font-poppins text-sm">
                        Your details are only used to answer your request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h2 className="font-bodoni text-3xl leading-tight text-stone-900 sm:text-4xl">
                  Contact Us
                </h2>
                <p className="mt-3 max-w-xl font-poppins text-sm leading-6 text-stone-500">
                  Fill out the form below and we will help you with your query as
                  soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                  >
                    Title *
                  </label>
                  <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-white px-4 font-poppins text-sm text-stone-800 outline-none transition focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                  >
                    <option value="">Select Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-white px-4 font-poppins text-sm text-stone-800 outline-none transition focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-white px-4 font-poppins text-sm text-stone-800 outline-none transition focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-white px-4 font-poppins text-sm text-stone-800 outline-none transition focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-white px-4 font-poppins text-sm text-stone-800 outline-none transition focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                  >
                    Topic *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-white px-4 font-poppins text-sm text-stone-800 outline-none transition focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Returns">Returns</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  maxLength="1000"
                  required
                  placeholder="Type your message here..."
                  className="w-full resize-none rounded-md border border-stone-200 bg-white px-4 py-3 font-poppins text-sm leading-6 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#1A7252] focus:ring-2 focus:ring-[#1A7252]/15"
                />
                <div className="mt-2 flex justify-between gap-4 font-poppins text-xs text-stone-400">
                  <span>1000 characters max</span>
                  <span>{formData.message?.length || 0}/1000</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl font-poppins text-xs leading-6 text-stone-500">
                  <strong className="text-stone-700">* Mandatory information.</strong>{" "}
                  EcoBazaar processes this data only to respond to your request.
                  Read our{" "}
                  <a href="#" className="font-semibold text-[#1A7252] underline">
                    Privacy Policy
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#1A7252] px-8 py-4 font-poppins text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-stone-900"
                >
                  Send
                  <Send size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
