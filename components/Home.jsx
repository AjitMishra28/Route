"use client"
import { motion } from "framer-motion"
import Image from "next/image"
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20 mt-3 items-center justify-center text-center">
  {/* Title */}
  <h1></h1>


      {/* Subtitle */}
      <p
  className="
    font-garamond 
    font-normal 
    text-[16px] 
    leading-[100%] 
    tracking-[0px] 
    text-center 
    text-gray-300 
    max-w-xl 
    mt-[90px]

  "
>
  <br/>
    <h2
  style={{
    width: "929px",
    height: "54px",
    fontFamily: "Garamond, serif",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "48px",
    lineHeight: "100%",
    letterSpacing: "0px",
    textAlign: "center",
    textAlign:"left",
    //background: "#000000",
    color: "#000000", // visible on black background
    margin: "0 auto",
    padding: "10px 0",
    gap:"20px"
  }}
>
  Automate MEP Routing with Precision
</h2>

<br/>
<br/>
  RouteSpec turns complex MEP layouts into optimized routes in minutes — <br/>
  no manual drafting, no rework.
</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
  {/* Start Free Trial Button */}
  <button
    className="
      text-white 
      px-6 py-3 
      hover:opacity-80
      rounded-[50px]
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
          className="pt-50"
           style={{ marginLeft: "150px", marginRight: "300", objectFit: "contain",marginBottom :"300px" }}
          />
      </div>
   </main>
   
  )
}
