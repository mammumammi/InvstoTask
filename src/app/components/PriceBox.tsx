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
        <div className="pt-10 w-full pb-3 md:pb-5">
            

            <input type="range"
            min={0}
            max={100}
            value={value}
            onChange={ onChange}
            className=" w-full bg-emptySliderBg appearance-none rounded-[10px] h-[10px]
            [&::-webkit-slider-runnable-track]:rounded-[10px] cursor-grabbing
            "
            style={{
                background: `linear-gradient(to right, var(--color-sliderBg) ${displayValue}%, var(--color-emptySliderBg) ${displayValue}%)`
            }}
            />

        </div>
    )
}

const PriceBox = () => { 

    const [width,setWidth] = useState(0);

    useEffect(()=>{
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize',handleResize);

        return ()=> {
            window.removeEventListener('resize',handleResize);
        }
    },[]);

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
        <div className="m-auto md:mt-[30px]  text-center bg-componentBg w-[90vw] md:w-[600px] h-auto pb-10 md:pb-0 md:h-auto rounded-[10px]  p-[15px] md:p-[40px] space-y-2 md:space-y-[20px] flex items-center flex-col mt-5 ">
        
        <div className="flex flex-row justify-between items-center md:w-full ">
        <p className="text-gray-400 text-[15px]">100K PAGEVIEWS</p>
        {width > 768 &&  (isYearly ? <span className="text-[30px] ">${(value * 12 * 0.75).toFixed(2)}<span className="text-[20px] text-gray-400 ml-2"> /year</span> </span> : <span className="text-[30px] ">${value.toFixed(2)} <span className="text-[20px] text-gray-400 ml-2">/month</span></span>)}
        </div>
        

        <Slider value={displayValue} onChange={handleSliderChange} displayValue={displayValue} />

        { width< 768 && ( isYearly ? <span className="text-[30px] ">${(value * 12 * 0.75).toFixed(2)}<span className="text-[20px] text-gray-400 ml-2"> /year</span> </span> : <span className="text-[30px] ">${value.toFixed(2)} <span className="text-[20px] text-gray-400 ml-2">/month</span></span>)}

        <div className="flex items-center justify-center gap-0 w-full ml-4 md:ml-16 mt-5">
        <Toggle 
        checked={isYearly}
        offLabel="Monthly Billing" onLabel="Yearly Billing"
        onChange={ ()=> setIsYearly(!isYearly)}
        />

        
            <span className='text-[10px] bg-orange-100 text-orange-400 rounded-full px-2 py-1 ml-1 md:ml-2 text-center'>{width > 768 ? "25% discount" : "-25%"}</span>
        
        </div>

        <hr className="mt-5 w-[90vw] md:w-[600px] text-emptySliderBg" />
        <div className="flex flex-col md:flex-row w-full md:justify-between space-y-7 items-center h-full">
        <div className="flex flex-col items-center justify-center space-y-2 w-full">
            <div className="flex flex-row md:w-full text-gray-400 space-x-4"><img src="/icon-check.svg" alt="checklist1" className="object-contain w-[12px]" /><p>Unlimited Websites</p></div>
            <div className="flex flex-row md:w-full  text-gray-400 space-x-4"><img src="/icon-check.svg" alt="checklist1" className="object-contain w-[12px]" /><p>100% data Ownership</p></div>
            <div className="flex flex-row md:w-full text-gray-400 space-x-4"><img src="/icon-check.svg" alt="checklist1" className="object-contain w-[12px]" /><p>Email reports</p></div>
        </div>
        
        <div className="flex w-full md:w-auto items-center justify-center md:h-full">

        
        <button className="text-[15px] text-buttonText bg-headTextBlue p-3 px-[60px] rounded-full   md:w-[250px] md:-mt-[30px] cursor-pointer ">Start my trial</button>
        </div>
        </div>
        </div>
    )
}

export default PriceBox;