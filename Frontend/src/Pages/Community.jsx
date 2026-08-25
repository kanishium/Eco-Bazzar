import React from "react";
import SideNavbar from "../components/SideNavbar";
import three from "../assets/3.jpeg";
import two from "../assets/2.jpeg";
import twentyseven from "../assets/27.jpeg";
import thirteen from "../assets/13.jpeg";

function Community() {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <SideNavbar></SideNavbar>
      <div className="flex gap-6 pt-7">
        <button className="w-1/12 ml-20 ">
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
            alt=""
          />
        </button>
        <div className="w-1/12 text-sm border-2   border-black rounded-full p-1 h-8 flex justify-center items-center">
          PRIVACY POLICY
        </div>
        <div className="w-72 border-2  border-black rounded-full flex justify-center items-center h-8">
          TERMS AND CONDITIONS OF USE
        </div>
        <div className="w-80 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          TERMS AND CONDITIONS OF SALE
        </div>
        <div className="w-1/12 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          LEGAL NOTICE
        </div>
        <div className="w-1/12 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          RETURN POLICY
        </div>
        <div className="w-1/12 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          ACCESSIBILITY
        </div>
      </div>
      <div
        className="w-screen h-screen mt-3 ml-10 pl-36 pt-36 text-5xl font-poppins"
        style={{ backgroundImage: `url(${three})` }}
      >
        <div>
          Embrace Sustainability, Unity, <br />
          and Resilience
        </div>
      </div>
      <div className="flex  w-screen h-auto pl-20 pr-16 pt-16 pb-20 justify-around bg-neutral-200">
        <div className="w-2/5 text-3xl  font-poppins">
          Define your future: Be a part of visionary, self-sufficient
          communities amidst global challenges
        </div>
        <div className="w-2/5 text-sm font-poppins text-justify flex leading-6 ">
          Amid the dynamic landscape of our changing climate, absolute safety
          cannot be guaranteed. Nevertheless, the nonprofit ClimateSafe Villages
          initiative is equipping individuals and families with significant
          resilience, fostering a sustainable living environment that can be
          scaled up to communities throughout the world. As we navigate the
          trials of the climate change crisis, this initiative is our collective
          pledge towards a cohesive and more sustainable future.{" "}
        </div>
      </div>
      <div className="w-screen flex justify-around border-t-8 border-gray-100 bg-white pl-28 p-20">
        <div
          className="w-1/3 h-[55vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${two})` }}
        ></div>
        <div className="w-1/3">
          <div className="text-3xl font-semibold">
            The Challenges of the Climate Crisis
          </div>
          <div className="mt-6 text-justify">
            The climate change crisis is rapidly escalating, with devastating
            consequences for our planet and its inhabitants. Extreme weather
            events, loss of biodiversity, degrading ocean conditions, and rising
            sea levels are just a few examples of the challenges we face. In
            response to this urgent situation, ClimateSafe Villages seeks to
            build resilient, sustainable communities that can adapt to these
            changing conditions. By adopting innovative models and fostering
            collaboration, we aim to create a more hopeful future in the face of
            unprecedented environmental challenges and mitigate the assault on
            our environment.
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-around border-t-8 border-gray-100 bg-gray-100 pl-28 p-20">
        <div className="w-1/3">
          <div className="text-3xl font-semibold">
            How CSV is promoting <br /> resilience
          </div>
          <div className="mt-6 text-justify">
            By prioritizing self-sufficiency, adopting green technologies, and
            fostering a supportive community culture, we help develop the
            resources and skills necessary to prepare for and adapt to change
            and move ahead in the spirit of progress. <br /> <br />
            Whether or not you've thought about joining a ClimateSafe Villages
            community, we provide valuable open-access information. Learn how to
            prepare, adapt, and build climate resilience for your home,
            business, and community, right where you are.
          </div>
        </div>
        <div
          className="w-1/3 h-[55vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${twentyseven})` }}
        ></div>
      </div>
      <div
        className="w-screen h-[90vh] ml-10 bg-center bg-cover flex justify-center items-center text-3xl font-semibold"
        style={{ backgroundImage: `url(${thirteen})` }}
      >
        Reimagining Climate Resilience
      </div>

    </div>
  );
}

export default Community;
