"use client";

import { Clock, TrendingUp, Users, Scale, CheckCircle2 } from "lucide-react";
import PricingPlans from "./Pricing";

/* ----------------------------------------------------
   Reusable Box Component (Diamond Layout)
---------------------------------------------------- */
function renderBox(feature) {
  return (
    <div
      className="
        flex flex-col items-center text-center 
        bg-white rounded-3xl shadow-lg 
        p-10 w-[320px] h-[220px]
        border border-gray-200
        hover:shadow-xl hover:-translate-y-2 hover:border-[#661C71]
        transition-all duration-300 ease-out
      "
    >
      <div
        className="
          bg-gradient-to-br from-[#F6E9FA] to-[#E8D1F0]
          rounded-full p-4 mb-5 
          flex items-center justify-center
          shadow-md
        "
      >
        {feature.icon}
      </div>

      <h3 className="text-2xl font-garamond font-semibold text-black mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.text}
      </p>
    </div>
  );
}

/* ----------------------------------------------------
   MAIN PAGE SECTION — OPTION A
---------------------------------------------------- */
export default function FeaturesPage() {
  const features = [
    {
      icon: <Clock size={34} className="text-[#661C71]" />,
      title: "Saves Time",
      text: "Reduce routing time by up to 70%.",
    },
    {
      icon: <TrendingUp size={34} className="text-[#661C71]" />,
      title: "Increased Accuracy",
      text: "Rule-based automation ensures zero guesswork.",
    },
    {
      icon: <CheckCircle2 size={34} className="text-[#661C71]" />,
      title: "Reduced Costs",
      text: "Avoid expensive rework with clash-free design.",
    },
    {
      icon: <Users size={34} className="text-[#661C71]" />,
      title: "Enhanced Collaboration",
      text: "Teams work together efficiently in realtime.",
    },
    {
      icon: <Scale size={34} className="text-[#661C71]" />,
      title: "Scale Easily",
      text: "From small buildings to mega-complexes.",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full">

      {/* ⭐ Section 1 — Diamond Feature Layout */}
      <section className="w-full flex flex-col items-center py-28 px-6 bg-white">

        <h2
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "48px",
            lineHeight: "100%",
            textAlign: "center",
            width: "571px",
            margin: "0 auto",
          }}
        >
          <span style={{ fontWeight: 700 }}>Why </span>
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>RouteSpec?</span>
        </h2>

        {/* DIAMOND LAYOUT */}
        <div className="grid grid-cols-3 grid-rows-3 gap-14 place-items-center mt-10">

          {/* Top Row */}
          <div className="row-start-1 col-start-1">
            {renderBox(features[0])}
          </div>

          <div className="row-start-1 col-start-3">
            {renderBox(features[1])}
          </div>

          {/* Center Box */}
          <div className="row-start-2 col-start-2">
            {renderBox(features[2])}
          </div>

          {/* Bottom Row */}
          <div className="row-start-3 col-start-1">
            {renderBox(features[3])}
          </div>

          <div className="row-start-3 col-start-3">
            {renderBox(features[4])}
          </div>

        </div>
      </section>
          <br/>
          <br/>
      {/* ⭐ Section 2 — Who Benefits */}
      <section className="w-full flex flex-col items-center py-32 px-9 bg-white gap-20">
        <h2
  style={{
    fontFamily: "Garamond, serif",
    fontWeight: 700,
    fontStyle: "italic",
    fontSize: "48px",
    lineHeight: "100%",
    textAlign: "center",
  }}
>
  Who Benefits from RouteSpec?
</h2>


        <p
  style={{
    fontFamily: "Garamond, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "32px",
    lineHeight: "100%",     // as requested
    letterSpacing: "0px",
    textAlign: "center",
    width: "561px",         // exact width from your spec
    height: "72px",         // exact height
    margin: "0 auto",
    opacity: 1,
  }}
>
  Empowers contractors, design teams, and organizations to streamline workflows
</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { title: "MEP Engineers", text: "Automate routing and focus on design decisions." },
            { title: "Architects", text: "Ensure seamless integration with building designs." },
            { title: "Contractors", text: "Get clear, buildable routing drawings." },
            { title: "Project Managers", text: "Deliver faster, clash-free results to stakeholders." },
          ].map((item) => (
            <div key={item.title} className="p-4">
              <div className="bg-purple-100 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 text-2xl">★</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
           <button
  style={{
    width: "160px",
    height: "40px",
    background: "#661C71",
    borderRadius: "35px",
    padding: "8px 16px",
    gap: "8px",
    opacity: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  className="transition-all hover:opacity-80"
>
  <span
    style={{
      fontFamily: "Garamond, serif",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0px",
      color: "#FFFFFF",
    }}
  >
    Explore Use Cases
  </span>
</button>

      </section>

      <br/>
      {/* ⭐ Section 3 — Pricing */}
      <PricingPlans />

      {/* ⭐ Section 4 — FAQ */}
      <section className="w-full flex flex-col items-center py-24 px-6 bg-white gap-20">

        <div className="text-center mb-16 max-w-2xl">
<h2
  style={{
    width: "572px",
    height: "109px",
    fontFamily: "Garamond, serif",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "48px",
    lineHeight: "100%",
    letterSpacing: "0px",
    textAlign: "center",
    opacity: 1,
    margin: "80px auto",
  }}
>
  Frequently Asked <br />
  <span style={{ color: "#661C71" }}>Questions</span>
</h2>

 <p
  style={{
    width: "572px",
    height: "36px",
    fontFamily: "Garamond, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "32px",
    lineHeight: "100%",
    letterSpacing: "0px",
    textAlign: "center",
    opacity: 1,
    margin: "0 auto",
    background: "linear-gradient(0deg, #000000, #000000), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Got questions? We’ve got answers.
</p>
  {/* FAQ LIST */}
 <div className="w-full flex flex-col items-center">

  {/* FAQ CONTAINER WITH PERFECT GAP */}
  <div className="w-full max-w-4xl space-y-20">
    {[
      { q: "What does RouteSpec do?", a: "RouteSpec automates routing for ducts, pipes, and trays." },
      { q: "What file formats does RouteSpec support?", a: "IFC, DXF, DWG, and full Revit integration." },
      { q: "Can I set my own design rules?", a: "Yes — clearance, slopes, layout preferences." },
      { q: "Does RouteSpec work with BIM projects?", a: "Yes — upload IFC/DXF or use Revit plugin." },
      { q: "Is my data safe?", a: "Yes — all projects are encrypted and access-controlled." },
      { q: "Can teams collaborate?", a: "Absolutely — versioning, sharing, multi-user editing." },
    ].map((item, index) => (
      <div
        key={index}
        className="
          border border-gray-200
          rounded-2xl 
          px-12 py-10
          bg-white
          shadow-sm 
          hover:shadow-lg 
          hover:bg-gray-50 
          transition-all 
          duration-300
        "
        style={{
          width: "934px",
          margin: "0 auto",
        }}
      >

        {/* QUESTION SECTION */}
        <div className="flex items-center justify-between mb-5">
          <h3
            style={{
              fontFamily: "Garamond, serif",
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "110%",
              letterSpacing: "0px",
              opacity: 1,
            }}
          >
            <br/>
            {item.q}
          </h3>

          <span
            style={{
              fontFamily: "Garamond, serif",
              fontWeight: 700,
              fontSize: "26px",
              opacity: 0.8,
            }}
          >
            ▼
          </span>
        </div>

        {/* ANSWER */}
        <p
          style={{
            fontFamily: "Garamond, serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "140%",
            letterSpacing: "0px",
            opacity: 0.9,
            marginTop: "6px",
              textAlign: "left"
          }}
        >
          {item.a}
        </p>

      </div>
    ))}
  </div>
</div>
  <br/>
  <br/>
  {/* CONTACT */}
  <div className="mt-16 text-center">
    <p
      style={{
        fontFamily: "Garamond, serif",
        fontSize: "18px",
        opacity: 0.8,
      }}
      className="mb-4"
    >
      Still have questions?
    </p>

    <button
      className="
        bg-gradient-to-r 
        from-[#661C71] to-[#BA72C4] 
        text-white 
        px-8 py-3 
        rounded-full 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        hover:-translate-y-1
      "
      style={{ fontFamily: "Garamond, serif", fontWeight: 700 }}
    >
      Contact Support
    </button>
  </div>
</div>
{/* Hero Section */}
<section className="flex flex-col items-center text-center py-32 px-6 bg-white">

  {/* Heading */}
  <h1
    className="font-semibold mb-4"
    style={{
      fontFamily: "Garamond, serif",
      fontSize: "48px",
      lineHeight: "110%",
    }}
  >
    Stop wasting time <br /> on manual routing.
  </h1>

  {/* Subtext */}
  <p
    className="text-gray-600 max-w-xl mb-10"
    style={{
      fontFamily: "Garamond, serif",
      fontSize: "22px",
      lineHeight: "130%",
    }}
  >
    Join thousands to accelerate your MEP routing workflow with{" "}
    <span className="font-semibold text-black">RouteSpec</span>
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-5 mb-8">
    <button
      className="bg-[#661C71] text-white px-8 py-3 rounded-full 
                 font-semibold text-lg shadow-md hover:bg-[#54125d] 
                 transition-all duration-300"
    >
      Start Free Trial
    </button>

    <button
      className="border-2 border-[#661C71] text-[#661C71] 
                 px-8 py-3 rounded-full font-semibold text-lg 
                 hover:bg-[#f7e8f9] transition-all duration-300"
    >
      Book A Demo
    </button>
  </div>

  {/* Badges */}
  <div className="flex items-center gap-10 text-gray-500 text-sm"
       style={{ fontFamily: "Garamond, serif" }}
  >
    <div className="flex items-center gap-2">💬 24/7 Support</div>
    <div className="flex items-center gap-2">⚙️ 99.9% Uptime</div>
  </div>
</section>


{/* Image Section */}
<section className="
  w-full
  min-h-[700px]
  flex flex-col md:flex-row
  justify-center items-center
  gap-12 px-8 py-20
  border-t border-gray-300
  bg-gradient-to-b from-[#EDE2F7] to-[#F7F1FB]
">

  <img
    src="/img4.png"
    alt="Technical drawing"
    className="
      w-full md:w-[600px]
      h-[450px]
      rounded-2xl
      border-2 border-purple-700
      object-cover shadow-lg
    "
  />

  <img
    src="/img5.jpg"
    alt="MEP schematic"
    className="
      w-full md:w-[500px]
      h-[400px]
      rounded-2xl
      border-2 border-purple-700
      object-cover shadow-lg
    "
  />

</section>

<br/>
      </section>

      {/* ⭐ Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center justify-center text-center border-t border-gray-200 py-12 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">

    {/* LEFT SECTION */}
    <div className="max-w-sm">
      <h2
  style={{
    width: "219px",
    height: "74px",
    fontFamily: "Garamond, serif",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "48px",
    lineHeight: "100%",
    letterSpacing: "0px",
    textAlign: "center",
    opacity: 1,
    margin: "0 auto", // centers it
  }}
>
  RouteSpec
</h2>

<p
  style={{
    width: "333px",
    height: "54px",
    fontFamily: "Garamond, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "100%",     // exact spec
    letterSpacing: "0px",
    color: "#4B4B4B",
    textAlign: "center",
    opacity: 1,
    margin: "0 auto",
    whiteSpace: "pre-line", // keeps line breaks
  }}
>
  Automate MEP routing with precision and reliability.{"\n"}
  RouteSpec simplifies design workflows{"\n"}
  through smart, clash-free automation.
</p>
    </div>

    {/* LINKS SECTION */}
    <div className="flex gap-20">
      {/* Product */}
      <div>
        <h3
          className="mb-2"
          style={{
            fontFamily: "Garamond, serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#2E2E2E",
            width:"200px",
            height: "30"
          }}
        >
          Product
        </h3>

        <ul className="space-y-1">
          <li><a className="hover:text-[#661C71]" href="#">Features</a></li>
          <li><a className="hover:text-[#661C71]" href="#">Pricing</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3
          className="mb-2"
          style={{
            fontFamily: "Garamond, serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#2E2E2E",
          }}
        >
          Company
        </h3>

        <ul className="space-y-1">
          <li><a className="hover:text-[#661C71]" href="#">About</a></li>
          <li><a className="hover:text-[#661C71]" href="#">Contact</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3
          className="mb-2"
          style={{
            fontFamily: "Garamond, serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#2E2E2E",
          }}
        >
          Support
        </h3>

        <ul className="space-y-1">
          <li><a className="hover:text-[#661C71]" href="#">Help Center</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* FOOTER BOTTOM LINE */}
  
</footer>
<div
  style={{
    width: "1120px",
    height: "35px",
    margin: "0 auto",
    marginTop: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  }}
>
  {/* Text */}
  <p
    style={{
      fontFamily: "Garamond, serif",
      fontWeight: 400,
      fontSize: "14px",
      color: "#7A7A7A",
    }}
  >
    2025 RouteSpec. All rights reserved.
  </p>

  {/* Small shining line */}
  <div
    style={{
      width: "60px",
      height: "2px",
      background:
        "linear-gradient(90deg, transparent, #661C71, transparent)",
    }}
  ></div>
</div>

    </main>
  );
}
