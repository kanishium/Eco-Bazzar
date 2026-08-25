import React from "react";
import { ArrowLeft, Apple, Facebook, Leaf, Mail } from "lucide-react";
import SideNavbar from "../components/SideNavbar";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();

  const gotoProduct = () => {
    navigate("/Product");
  };

  const gotohome = () => {
    navigate("/");
  };

  return (
    <div className=" bg-[#F5F0EA]">
      < SideNavbar />

      <main className="h-full px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex h-auto max-w-[1120px] flex-col">


          <section className="grid flex-1 overflow-hidden rounded-[18px] bg-[#fbfaf6] shadow-[0_20px_70px_rgba(39,32,24,0.08)] lg:grid-cols-[1fr_0.9fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="mb-3 flex items-center  gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                <span className="h-px w-12 bg-emerald-700/50" />
                Welcome back
                <span className="h-px w-12 bg-emerald-700/50" />
              </div>

              <h1 className="font-bodoni text-5xl leading-none text-stone-900">
                Login
              </h1>

              <p className="mt-4 max-w-md font-poppins text-sm leading-6 text-stone-500">
                Sign in with your EcoBazaar email or continue with your preferred
                account to explore sustainable products.
              </p>

              <div className="mt-7">
                <label className="mb-2 block font-poppins text-xs font-semibold uppercase tracking-wide text-stone-600">
                  Email Address
                </label>

                <div className="flex h-12 items-center gap-3 rounded-md border border-stone-200 bg-white px-4 transition focus-within:border-[#1A7252] focus-within:ring-2 focus-within:ring-[#1A7252]/15">
                  <Mail size={18} className="text-stone-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-full w-full bg-transparent font-poppins text-sm text-stone-800 outline-none placeholder:text-stone-400"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={gotoProduct}
                className="mt-5 flex h-12 w-full items-center justify-center rounded-md bg-[#1A7252] font-poppins text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-stone-900"
              >
                Continue
              </button>

              <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-stone-200" />
                <span className="font-poppins text-[11px] uppercase tracking-wide text-stone-400">
                  Or continue with
                </span>
                <span className="h-px flex-1 bg-stone-200" />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-stone-200 bg-white font-poppins text-xs font-semibold text-stone-700 transition hover:border-[#1A7252] hover:text-[#1A7252]">
                  <Facebook size={16} />
                  Facebook
                </button>

                <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-stone-200 bg-white font-poppins text-xs font-semibold text-stone-700 transition hover:border-[#1A7252] hover:text-[#1A7252]">
                  <span className="text-sm font-bold">G</span>
                  Google
                </button>

                <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-stone-200 bg-white font-poppins text-xs font-semibold text-stone-700 transition hover:border-[#1A7252] hover:text-[#1A7252]">
                  <Apple size={16} />
                  Apple
                </button>
              </div>

              <p className="mt-5 font-poppins text-xs leading-5 text-stone-500">
                By continuing, you agree to EcoBazaar’s{" "}
                <a href="#" className="font-semibold text-[#1A7252] underline">
                  Privacy Policy
                </a>{" "}
                and account terms.
              </p>
            </div>

            <div className="relative hidden overflow-hidden bg-[#F8F3EC] lg:block">
              <div className="absolute inset-y-0 right-0 w-[58%] bg-[#21382F]" />

              <div className="absolute right-[-90px] top-[-80px] h-72 w-72 rounded-full bg-[#D8B46A]/25" />
              <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-[#A8C7BD]/45" />

              <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-[#1A7252]/15 bg-white px-5 py-3 text-[#1A7252] shadow-sm">
                <Leaf size={18} />
                <span className="font-poppins text-xs font-semibold uppercase tracking-wide">
                  Conscious Living
                </span>
              </div>

              <div className="absolute right-8 top-24 h-64 w-64 rounded-full bg-[#A8C7BD]" />
              <div className="absolute right-16 top-32 h-48 w-48 rounded-full border border-white/40" />
              <div className="absolute right-24 top-40 h-32 w-32 rounded-full bg-[#F5F0EA]/75" />

              <div className="absolute right-10 top-16 z-10 rounded-[16px] bg-white/90 px-5 py-4 shadow-[0_18px_45px_rgba(18,24,20,0.16)]">
                <p className="font-bodoni text-4xl leading-none text-[#1A7252]">
                  100%
                </p>
                <p className="mt-1 font-poppins text-[11px] uppercase tracking-wide text-stone-500">
                  Mindful Picks
                </p>
              </div>

              <div className="absolute bottom-8 left-8 right-10 z-10 rounded-[20px] bg-white p-7 shadow-[0_22px_70px_rgba(27,31,26,0.16)]">
                <div className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-[#9B6B2F]">
                  <span>Eco Essentials</span>
                  <span className="h-px w-12 bg-[#D8B46A]" />
                </div>

                <h2 className="font-bodoni text-4xl leading-tight text-stone-900">
                  Shop Better.
                  <br />
                  <span className="text-[#1A7252]">Live Greener.</span>
                </h2>

                <p className="mt-3 max-w-sm font-poppins text-sm leading-6 text-stone-600">
                  Discover reusable, natural, and responsibly chosen products
                  for your daily routine.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F5F0EA] px-4 py-3">
                    <p className="font-bodoni text-2xl leading-none text-[#21382F]">
                      50+
                    </p>
                    <p className="mt-1 font-poppins text-[10px] uppercase tracking-wide text-stone-500">
                      Eco Products
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#EDF4EF] px-4 py-3">
                    <p className="font-bodoni text-2xl leading-none text-[#1A7252]">
                      0
                    </p>
                    <p className="mt-1 font-poppins text-[10px] uppercase tracking-wide text-stone-500">
                      Plastic Focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}

export default Login;