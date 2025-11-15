"use client"
import { motion } from "framer-motion"
import Image from "next/image"
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20 mt-3 items-center justify-center text-center">
  {/* Title */}
  <h2 className="font-garamond font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[118px] text-black">
  Automate MEP Routing with Precision
</h2>

      {/* Subtitle */}
      <p className="text-lg text-gray-300  max-w-xl mt-[90px]">
        <h1 className="font-garamond font-bold text-[48px] leading-[100%] tracking-[0] text-center text-black">
  Automate MEP Routing with Precision
</h1>

       RouteSpec turns complex MEP layouts into optimized routes in minutes — no manual drafting, no rework.
      </p>
      {/* Buttons */}
      <div className="flex gap-4 mt-8">
  {/* Start Free Trial Button */}
  <button
    className="
      text-white 
      px-6 py-3 
      rounded-full 
      text-lg font-semibold 
      hover:opacity-50 
      transition
    "
    style={{ backgroundColor: "#661C71" }}
  >
    Start Free Trial
  </button>

  {/* Book A Demo Button */}
  <button
    className="
      px-6 py-3 
      rounded-full 
      text-lg font-semibold 
      border 
      hover:opacity-90 
      transition
    "
    style={{
      color: "#BA72C4",
      borderColor: "#BA72C4",
    }}
  >
    Book A Demo
  </button>
</div>


      {/* Image Cards */}
      <div className="flex gap-2 mt-80">
        <div className="w-28 h-38 bg-white rounded-3xl p-2 rotate-[-8deg] overflow-hidden">
          <img
            src="/img1.jpg"
            alt="Engineering"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-28 h-38 bg-white rounded-3xl p-0.1 rotate-[8deg] overflow-hidden">
          <img
            src="/img2.jpg"
            alt="CAD"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      
         <div className="flex items-center justify-center text-center min-h-screen">
        <Image
          src="/img3.png"
          alt="Picture"
          width={906}
          height={766}
          radius={12}
          quality={100}
          className="pt-200"
           style={{ marginLeft: "180px", marginRight: "300", objectFit: "contain" }}
          />
      </div>
   </main>
   
  )
}
