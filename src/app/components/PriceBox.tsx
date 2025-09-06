"use client";
import React, { useEffect, useRef, useState } from "react";
import Toggle from "./Toggle";

type SliderProps = {
    value: number,
    displayValue: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = ({value,displayValue, onChange}: SliderProps) => {

    return(
        <div className="py-10 w-full">
            

            <input type="range"
            min={0}
            max={100}
            value={value}
            onChange={ onChange}
            className=" w-full bg-emptySliderBg appearance-none rounded-[10px] h-[10px]
            [&::-webkit-slider-runnable-track]:rounded-[10px]
            "
            style={{
                background: `linear-gradient(to right, var(--color-sliderBg) ${displayValue}%, var(--color-emptySliderBg) ${displayValue}%)`
            }}
            />

        </div>
    )
}

const PriceBox = () => {

    const [width,setWidth] = useState(innerWidth);

    const [value,setValue] = useState<number>(0);

    const [targetValue,setTargetValue] = useState<number>(30);

    const [displayValue,setDisplayValue] = useState<number>(0);
    const hasInteracted = useRef(false);

    const [isYearly,setIsYearly] = useState<boolean>(false);
    
    const handleSliderChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        if (!hasInteracted.current){
            hasInteracted.current = true;
        }
        setValue(Number(e.target.value));
    }

    useEffect(()=> {
        
        if (!hasInteracted.current){
            setDisplayValue(value);
            return;
        }

        const timer = setTimeout(()=> {
            setDisplayValue(value)
        },12);

        return ()=>{
            clearTimeout(timer);
        }
    },[value]);

    useEffect( ()=>{
        const targetValue = 30;
        let animationFrameId: number;

        const animate = () => {

            if (hasInteracted.current){
                cancelAnimationFrame(animationFrameId);
                return;
            }

            setValue(currentValue => {
                const difference = targetValue - currentValue;

                if (Math.abs(difference) < 0.1){
                    cancelAnimationFrame(animationFrameId);
                    return targetValue;
                }
                return currentValue + difference*0.1;
            });
            animationFrameId = requestAnimationFrame(animate);

        }
            animationFrameId = requestAnimationFrame(animate);

            return () => {
                cancelAnimationFrame(animationFrameId);
            }

        
    },[]);

    return(
        <div className="m-auto mt-[30px] text-center bg-componentBg w-[90vw] md:w-[600px] h-[500px] md:h-[375px] rounded-[10px]  p-[20px] md:p-[40px] space-y-[20px] flex items-center flex-col ">
        
        <p>100K PAGEVIEWS</p>

        <Slider value={displayValue} onChange={handleSliderChange} displayValue={displayValue} />

        {isYearly ? `$${(value * 12 * 0.75).toFixed(0)} /year` : `$${value} /month`}

        <div className="flex items-center justify-center gap-0 w-full ml-4 md:ml-16 mt-5">
        <Toggle 
        checked={isYearly}
        offLabel="Monthly Billing" onLabel="Yearly Billing"
        onChange={ ()=> setIsYearly(!isYearly)}
        />

        
            <span className='text-[10px] bg-orange-100 text-orange-400 rounded-full px-2 py-1 ml-1 md:ml-2 text-center'>{width > 768 ? "25% discount" : "-25%"}</span>
        
        </div>
        <div>Features</div>

        <div>Trial Button</div>
        </div>
    )
}

export default PriceBox;