"use client";
import { useEffect, useRef, useState } from "react";
import PriceBox from "./components/PriceBox"; //Adjust the path as necessary
import Toggle from "./components/Toggle";
import { MorphSVGPlugin } from "gsap/all";
import gsap from "gsap";
import ComponentBackground from "./components/ComponentBackground";

gsap.registerPlugin(MorphSVGPlugin);



export default function Home() {

  const [isDark,setIsDark] = useState<boolean>(false);
  const iconRef = useRef<SVGPathElement | null>(null);

  useEffect( ()=> {
    if (isDark){
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  },[isDark])

  useEffect(() => {
    if (!iconRef.current){
      return;
    }

    gsap.to(iconRef.current,{
      duration:0.6,
      morphSVG: isDark ? "#moon" : "#sun",
      fill: isDark ? "#fd6d6d6" : "#ffc300",
      ease: "power2.inOut",
      overwrite: "auto",
    });
  },[isDark])
  return (
    <main className="h-screen w-screen bg-no-repeat p-[10px] z-0">
       <div className="">
        <ComponentBackground/>
       </div>
        <button onClick={() => setIsDark(!isDark)} className="cursor-pointer fixed w-[50px] h-[50px]  flex items-center justify-center z-10 right-[5%] md:right-[1%] top-[1%]">

        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="object-center"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <path
            ref={iconRef}
            d="M12 4a8 8 0 100 16 8 8 0 000-16z"
            id="sun"
          />
          
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            id="moon"
            style={{ visibility: "hidden" }}
          />
        </svg>
        </button>
      
      <div className="-mt-3 md:mt-6  w-full text-center p-[20px] relative text-[15px]">
        <img src="/pattern-circles.svg" alt="circle patterns" 
        className="absolute top-[90px] md:top-[70px] left-[50%] transform -translate-x-[50%] -translate-y-[50px] z-0 "
        />
        <h1 className="relative text-headTextBlue text-[22px] z-30 md:mt-[40px] mt-[50px] font-extrabold ">Simple, Traffic-based Pricing</h1>
        <p className="p-[10px] text-[15px] text-paraTextBlue font-semibold relative z-30">Sign-up for our 30-day free trial.No Credit Card required</p>
      </div>
      <PriceBox />
    </main>
  );
}
