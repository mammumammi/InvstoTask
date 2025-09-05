"use client";
import { useState } from "react";



const PriceBox = () => {

    const [value,setValue] = useState<number>(50);
    const Slider = () => {

        return(
            <div className=" ">
                {/* <div className="bg-slider w-[50px] h-[50px] m-auto  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                rounded-full absolute flex items-center justify-center cursor-pointer cursor">

                <img src="/icon-slider.svg" alt=""
                className=""
                />
                </div> */}

                <input type="range"
                min={0}
                max={100}
                value={value}
                onChange={ (e) => setValue(Number(e.target.value))}
                className=" w-full bg-emptySliderBg appearance-none rounded-[10px] h-[10px]
                [&::-webkit-slider-runnable-track]:rounded-[10px]
                "
                style={{
                    background: `linear-gradient(to right, var(--color-sliderBg) ${value}%, var(--color-emptySliderBg) ${value}%)`
                }}
                />

            </div>
        )
    }

    return(
        <div className="m-auto mt-[30px] text-center bg-componentBg w-[90vw] md:w-[500px] h-[500px] md:h-[375px] rounded-[10px]  p-[20px] md:p-[40px] space-y-[20px]">
        
        <p>100K PAGEVIEWS</p>

        <Slider/>

        <div>Pricing</div>

        <div>Price Toggle</div>

        <div>Features</div>

        <div>Trial Button</div>
        </div>
    )
}

export default PriceBox;