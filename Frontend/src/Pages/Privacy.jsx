import React from "react";
import SideNavbar from "../components/SideNavbar";

function Privacy() {
  const sections = [
    {
      id: "responsible",
      title: "Who is responsible for processing your personal data?",
    },
    {
      id: "data-process",
      title:
        "What personal data do we process? For what purpose? On what legal basis? For how long?",
    },
    { id: "cookies", title: "About Cookies" },
    { id: "profiling", title: "Do we profile your personal data?" },
    {
      id: "rights",
      title: "What are your rights and how can you exercise them?",
    },
    {
      id: "security",
      title:
        "What security measures have we put in place to protect your personal data?",
    },
    { id: "access", title: "Who else may have access to your personal data?" },
  ];

  return (
    <div>
      <SideNavbar></SideNavbar>
      <div className="flex gap-6 pt-7">
        <button className="w-1/12 ml-20 ">
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
            alt=""
          />
        </button>
        <div className="w-1/12 text-sm border-2 bg-black text-white   border-black rounded-full p-1 h-8 flex justify-center items-center">
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
      <div className="flex pl-28   flex-col lg:flex-row p-6 gap-6 bg-gray-50">
        {/* Table of Contents */}
        <div className="lg:w-1/4 bg-white p-6 rounded shadow-md">
          <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-blue-600">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/4 bg-white p-6 rounded shadow-md">
          <h1 className="font-bold text-2xl mb-6">Privacy Policy</h1>
          <p className="mb-6">
            EcoBazaar attaches great importance to the protection of your
            privacy. Our Privacy Policy describes how and why we process your
            personal data and provides you with information about your rights.
            It is drafted in accordance with the requirements of the C.
          </p>
          <p className="mb-6">
            The Policy applies only to personal data collected via our website
            www.EcoBazaar.com and in our stores. Please note that some sections,
            at the end, are applicable to residents of named territories,
            outside the European Union, with local Privacy regulations requiring
            specificities in addition to the requirements of the ABCD.
          </p>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-6">
              <h2 className="font-bold text-lg mb-4">{section.title}</h2>
              <p className="text-gray-700">
                {section.id === "responsible" && (
                  <>
                    The data controller is EcoBazaar, a SAS with a share capital
                    of xx,xxx,xx euros, having its registered office at 44,
                    75008 Delhi - India and registered in the Delhi Trade and
                    Companies Register under the number xxxx xxx xx.
                    <br />
                    Email address: privacy@EcoBazaar.com
                    <br />
                    Telephone number: +91 xx3233xxxx
                    <br />
                    EcoBazaar ensures that its processing of personal data is
                    lawful, justified by a valid legal basis, and that the data
                    is kept for a reasonable period of time necessary for the
                    operations for which it was collected, in compliance with
                    the legislation in force and taking into account the
                    limitation periods.
                  </>
                )}
                {section.id !== "responsible" &&
                  `Content for "${section.title}" goes here. Customize as needed.`}
              </p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Privacy;
