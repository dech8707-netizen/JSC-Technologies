import React from "react";
import HeaderImage from "../assets/HeaderImage.png.webp"

const Banner = () => {
  return (
    <div className="p-10 flex">
      <div className="w-1/2 h-60 m-10">
        <h1 className="w-full text-black text-7xl font-bold mb-10 ">Welcome to  <br/><span className="text-[#13418B]">JSC</span> Technologies</h1>
        <p className=" text-[#4A4D55] text-2xl leading-relaxed font-semibold">Building Innovative software for Busineses and Students. And help them to increase productivity</p>
        <div className="flex flex-row justify-start gap-15 mt-10">
          <button className="cursor-pointer border border-[#13418B] bg-[#13418B] text-white px-6 py-2 rounded-sm">Get Started</button>
          <button className="cursor-pointer border border-[#4A4D55] bg-white text-[#13418B] px-6 py-2 rounded-sm"> Explore Services</button>
        </div>
        
      </div>
      <div className="w-1/2">
        <img className="w-full h-100" src={HeaderImage} />
      </div>
    </div>
  )
}

export default Banner;