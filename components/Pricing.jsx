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
    <section className="w-full flex flex-col items-center py-80 px-9 bg-white gap-25">
      {/* Outer wrapper to centre content */}
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-lg text-gray-700 mb-12">
          Choose the perfect plan for your project or team.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center bg-gray-200 rounded-full p-1 mb-12 mx-auto">
          <button
            className={`px-4 py-2 rounded-full transition ${
              billingCycle === "monthly"
                ? "bg-black text-white"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full transition ${
              billingCycle === "annually"
                ? "bg-black text-white"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually
          </button>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-xl p-8 text-center shadow-md transition hover:shadow-lg ${
                plan.key === "professional"
                  ? "bg-[#661C71] text-white"
                  : "bg-gray-50"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              {plan.key === "professional" && (
                <div className="mb-4 text-sm uppercase tracking-wide">
                  Most Popular Choice
                </div>
              )}
              <p className="mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-2">
                ${billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.annuallyPrice.toFixed(0)}
              </div>
              <div className="text-sm mb-6">
                /{billingCycle === "monthly" ? "month" : "year"}
              </div>

              <ul className="mb-6 space-y-2 text-left text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`px-6 py-3 rounded-full font-medium transition ${
                  plan.key === "professional"
                    ? "bg-white text-[#661C71] hover:bg-gray-100"
                    : "bg-[#661C71] text-white hover:bg-[#4a114e]"
                }`}
              >
                Start Project
              </button>
            </div>
          ))}
        </div>
      </div>
       <main className="bg-white py-16 text-center gap-32">
      <h2 className="text-4xl font-bold mb-4 ">Testimonials</h2>
      <p className="text-lg text-gray-600 mb-12">
        Trusted by professionals and teams worldwide.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {/* Testimonial 1 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex-1 max-w-sm mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">👤</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800">
            Sanjay M., <span className="text-gray-600">BIM Lead Engineer</span>
          </h3>
          <p className="text-gray-700 italic my-4">
            “RouteSpec completely changed how our team works. We save at least 40 hours on every project.”
          </p>
          <div className="flex justify-center">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex-1 max-w-sm mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">👤</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800">
            Rachel T., <span className="text-gray-600">Project Manager</span>
          </h3>
          <p className="text-gray-700 italic my-4">
            “Our contractors love it — fewer clashes, fewer delays, and smoother execution.”
          </p>
          <div className="flex justify-center">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex-1 max-w-sm mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">👤</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800">
            Michael D., <span className="text-gray-600">MEP Consultant</span>
          </h3>
          <p className="text-gray-700 italic my-4">
            “RouteSpec completely changed how our team works. We save at least 40 hours on every project.”
          </p>
          <div className="flex justify-center">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
          </div>
        </div>
      </div>
    </main>
    </section>
    
  );
}
