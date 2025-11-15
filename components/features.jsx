"use client";

import { Clock, TrendingUp, Users, Scale, CheckCircle2, Layers } from "lucide-react";
import PricingPlans from "./Pricing";

export default function Features() {
  const features = [
    {
      icon: <Clock size={32} className="text-[#BA72C4]" />,
      title: "Saves Time",
      text: "Reduce routing time by up to 70%.",
    },
    {
      icon: <TrendingUp size={32} className="text-[#BA72C4]" />,
      title: "Increased Accuracy",
      text: "Rule-based automation ensures zero guesswork and compliance with codes.",
    },
    {
      icon: <CheckCircle2 size={32} className="text-[#BA72C4]" />,
      title: "Reduced Costs",
      text: "Avoid expensive rework and site conflicts with clash-free design.",
    },
    {
      icon: <Users size={32} className="text-[#BA72C4]" />,
      title: "Enhanced Collaboration",
      text: "Work together efficiently with integrated, clash-free design tools.",
    },
    {
      icon: <Scale size={32} className="text-[#BA72C4]" />,
      title: "Scale Easily",
      text: "From residential projects to mega commercial complexes.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-80 px-9 bg-white gap-15">
      {/* Heading */}
      <h2 className="text-4xl font-garamond font-semibold text-[#000000] text-center mb-9 gap-6">
        Why <span className="italic text-[#661C71]">RouteSpec?</span>
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-16">
        Creates clash-free, code-compliant layouts in minutes for engineers, designers, and contractors.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <div className="bg-[#F3E5F5] rounded-full p-3 mb-4">{f.icon}</div>
            <h3 className="text-xl font-garamond font-semibold text-[#000000] mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm">{f.text}</p>
          </div>
        ))}
      </div  >
       <section className="w-full flex flex-col items-center py-80 px-9 bg-white gap-20">
      <h2 className="text-4xl font-bold mb-4">
        Who <span className="text-purple-700">Benefits</span> from RouteSpec?
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Empowers contractors, design teams, and organizations to streamline workflows
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "MEP Engineers",
            text: "Automate routing and focus on design decisions.",
          },
          {
            title: "Architects",
            text: "Ensure seamless integration with building designs.",
          },
          {
            title: "Contractors",
            text: "Get clear, buildable routing drawings.",
          },
          {
            title: "Project Managers",
            text: "Deliver faster, clash-free results to stakeholders.",
          },
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
        className="mt-12 bg-gradient-to-r from-[#661C71] to-[#BA72C4] text-white px-8 py-3 
        rounded-full shadow-md hover:shadow-lg hover:from-[#7E29A8] hover:to-[#C67CD3] 
        transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
  Explore Use Cases
</button>

<PricingPlans/>

<main className="w-full flex flex-col items-center py-24 px-6 bg-white gap-20">
  {/* Header */}
  <div className="text-center mb-16 max-w-2xl">
    <h2 className="text-4xl font-bold mb-4">
      Frequently Asked <span className="text-purple-700">Questions</span>
    </h2>
    <p className="text-gray-600 text-lg">
      Got questions? We’ve got answers.
    </p>
  </div>

  {/* FAQ Section */}
  <div className="w-full max-w-4xl space-y-9 gap-10">
    {[
      {
        q: "What does RouteSpec do?",
        a: "RouteSpec automates MEP system routing for ducts, pipes, and cable trays.",
      },
      {
        q: "What file formats does RouteSpec support?",
        a: "RouteSpec supports IFC, DXF, DWG, and integrates with Revit and AutoCAD.",
      },
      {
        q: "Can I set my own design rules?",
        a: "Yes. You can define clearances, slopes, and layout preferences.",
      },
      {
        q: "Does RouteSpec work with existing BIM projects?",
        a: "Absolutely. Upload your existing IFC/DXF files or use the Revit plugin.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. All projects are secured with encryption and user-level access controls.",
      },
      {
        q: "Can teams collaborate on RouteSpec?",
        a: "Yes. Multi-user collaboration, version control, and project sharing are built in.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-2xl p-6 shadow-sm 
                   hover:shadow-md hover:bg-gray-50 transition-all duration-200 ease-in-out"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-gray-900">{item.q}</h3>
          <span className="text-#000000-600 font-bold text-xl">▼</span>
        </div>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.a}</p>
      </div>
    ))}
  </div>

  {/* Footer */}
  <div className="mt-16 text-center">
    <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
    <button
      className="bg-gradient-to-r from-[#661C71] to-[#BA72C4] text-white px-8 py-3 
      rounded-full shadow-md hover:shadow-lg hover:from-[#7E29A8] hover:to-[#C67CD3] 
      transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      Contact Support
    </button>
  </div>
</main>

    </section>
     <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#f4f0fa] to-white text-gray-900">
  {/* Hero Section */}
  <section className="flex flex-col items-center text-center py-24 px-6">
    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
      Stop wasting time <br /> on manual routing.
    </h1>
    <p className="text-gray-600 max-w-xl mb-8">
      Join thousands to accelerate your MEP routing workflow with <span className="font-medium">RouteSpec</span>
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
  {/* Start Free Trial Button */}
  <button
    className="bg-[#661C71] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#4e1457] transition-all duration-300 shadow-md"
  >
    Start Free Trial
  </button>

  {/* Book A Demo Button */}
  <button
    className="border-2 border-[#661C71] text-[#661C71] px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#f3e5f8] transition-all duration-300 shadow-sm"
  >
    Book A Demo
  </button>
</div>


    <div className="flex items-center gap-8 text-sm text-gray-500">
      <div>💬 24/7 Support</div>
      <div>⚙️ 99.9% Uptime</div>
    </div>
  </section>

  {/* Image Section */}
  <section className="w-[2440px] min-h-[1152px] flex flex-col md:flex-row justify-center items-center gap-10 px-9 border-t border-gray-300 bg-gradient-to-b from-[rgba(75,41,122,0.11)] to-[rgba(110,58,174,0.11)]">

    <img
      src="/img4.png"
      alt="Technical drawing"
    className="w-[813px] h-[753px] rounded-[19px] border-2 border-purple-700 object-cover shadow-md"
    />
    <img
      src="/img5.jpg"
      alt="MEP schematic"
      className="w-[713px] h-[653px] rounded-[19px] border-2 border-purple-700 object-cover shadow-md"
    />
  </section>
</main>
 

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">RouteSpec</h2>
          <p className="max-w-sm">
            Automate MEP routing with precision and reliability. RouteSpec simplifies design workflows through smart,
            data-first automation™.
          </p>
          <p className="text-xs text-gray-400 mt-4">© 2025 RouteSpec. All rights reserved.</p>
        </div>

        <div className="flex gap-16">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Product</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-purple-700">Features</a></li>
              <li><a href="#" className="hover:text-purple-700">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-purple-700">About</a></li>
              <li><a href="#" className="hover:text-purple-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-purple-700">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-black pt-4 text-center text-xs text-gray-500">
  <p>2025 RunSpec. All rights reserved.</p>
</div>

      </footer>
      </section>
    
    
  );
}
