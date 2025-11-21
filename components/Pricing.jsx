"use client";

import { useState } from "react";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "annually"

  const plans = [
    {
      key: "starter",
      name: "Starter",
      description: "For Small Firms & Pilots",
      monthlyPrice: 249,
      annuallyPrice: 249 * 12 * 0.9,
      features: [
        "5 Projects / month",
        "Basic routing + clearance",
        "Email / Slack support",
      ],
    },
    {
      key: "professional",
      name: "Professional",
      description: "Most Popular Choice",
      monthlyPrice: 499,
      annuallyPrice: 499 * 12 * 0.9,
      features: [
        "25 Projects / month",
        "API + custom rule sets",
        "Priority compute",
      ],
    },
    {
      key: "enterprise",
      name: "Enterprise",
      description: "For enterprise grade automation",
      monthlyPrice: 1499,
      annuallyPrice: 1499 * 12 * 0.9,
      features: [
        "Unlimited routing",
        "Full compliance engine",
        "Dedicated plugins + SLA",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 px-6 bg-white gap-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif font-bold text-[48px] mb-4">
          Pricing Plans
        </h2>
        <p className="font-serif text-[32px] font-normal">
          Choose the perfect plan for your project or team.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex w-[226px] h-[40px] bg-gray-300 rounded-full overflow-hidden my-8 cursor-pointer">
        <div
          onClick={() => setBillingCycle("monthly")}
          className={`w-1/2 flex justify-center items-center transition-all duration-300 rounded-l-full font-serif text-sm font-normal ${
            billingCycle === "monthly"
              ? "bg-black text-white"
              : "bg-transparent text-black opacity-70"
          }`}
        >
          Monthly
        </div>
        <div
          onClick={() => setBillingCycle("annually")}
          className={`w-1/2 flex justify-center items-center transition-all duration-300 rounded-r-full font-serif text-sm font-normal ${
            billingCycle === "annually"
              ? "bg-black text-white"
              : "bg-transparent text-black opacity-70"
          }`}
        >
          Annually
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`rounded-xl p-8 text-center border transition duration-300 ${
              plan.key === "professional"
                ? "bg-purple-900 text-white border-transparent shadow-xl scale-[1.03]"
                : "bg-purple-100 text-black border-gray-300 shadow-md"
            }`}
          >
            <h3 className="text-3xl font-bold mb-2 font-serif">{plan.name}</h3>
            {plan.key === "professional" && (
              <div className="text-sm tracking-wide uppercase mb-4 opacity-80">
                Most Popular Choice
              </div>
            )}
            <p className="mb-4 opacity-90 text-md">{plan.description}</p>

            {/* Price */}
            <div className="text-4xl font-bold mb-1">
              ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annuallyPrice}
            </div>
            <div className="text-sm mb-6 opacity-80">
              /{billingCycle === "monthly" ? "month" : "year"}
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-2 text-left text-sm opacity-90">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`px-6 py-3 w-full font-serif font-bold text-sm rounded-full transition ${
                plan.key === "professional"
                  ? "bg-white text-purple-900 hover:bg-gray-100"
                  : "bg-purple-900 text-white hover:bg-purple-800"
              }`}
            >
              Start Project
            </button>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <section className="bg-white py-24 text-center px-6 w-full">
        <h2 className="font-serif font-bold text-[48px] mb-4 mx-auto">
          Testimonials
        </h2>
        <p className="font-serif text-[28px] font-normal opacity-90 mb-14">
          Trusted by professionals and teams <br /> worldwide.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {[
            {
              name: "Sanjay M.",
              role: "BIM Lead Engineer",
              text: "RouteSpec completely changed how our team works. We save at least 40 hours on every project.",
            },
            {
              name: "Rachel T.",
              role: "Project Manager",
              text: "Our contractors love it — fewer clashes, fewer delays, and smoother execution.",
            },
            {
              name: "Michael D.",
              role: "MEP Consultant",
              text: "RouteSpec helped streamline coordination across all departments.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-md max-w-sm mx-auto"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                👤
              </div>
              <h3 className="font-semibold text-gray-800">
                {t.name},{" "}
                <span className="text-gray-600 font-normal">{t.role}</span>
              </h3>
              <p className="italic text-gray-700 my-4">{t.text}</p>
              <div className="flex justify-center gap-1 text-yellow-400 text-xl">
                {Array(5)
                  .fill("★")
                  .map((s, idx) => (
                    <span key={idx}>{s}</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
