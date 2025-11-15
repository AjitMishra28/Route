"use client";

import { Settings, Atom, Code2, LayoutGrid, Users, Upload } from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: Settings,
      title: "Automated Routing Engine",
      text: "Creates clash-free routes for ducts, pipes, and trays in minutes.",
    },
    {
      icon: Atom,
      title: "Seamless BIM & CAD Integration",
      text: "Revit, AutoCAD, IFC/DXF Import & Export.",
    },
    {
      icon: Code2,
      title: "Code Compliance",
      text: "Ensures every route meets engineering standards.",
    },
    {
      icon: LayoutGrid,
      title: "Clash-Free Coordination",
      text: "Prevent conflicts before they happen.",
    },
    {
      icon: Users,
      title: "Cloud Collaboration",
      text: "Work together in real time without silos.",
    },
    {
      icon: Upload,
      title: "One-Click Deliverables",
      text: "Export files instantly for downstream use.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Section Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          How It Works
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          RouteSpec automates MEP system routing for ducts, pipes, and cable trays —
          saving hours of manual coordination while maintaining code compliance.
        </p>
      </header>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {features.map(({ icon: Icon, title, text }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-4 rounded-full mb-5">
              <Icon className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
