"use client";

import React from "react";

interface ToggleProps {
    checked: boolean;
    onChange: () => void;
    onLabel?: string;
    offLabel?: string;
    activeColor?: string;
}

const Toggle: React.FC<ToggleProps> =({checked,onChange,onLabel,offLabel,activeColor = "bg-gray-500"}) => {
    return (
        <div className="flex items-center gap-4">
            
        {offLabel &&  (
            <span className={` text-[11px] md:text-[15px] font-semibold text-gray-500
                ${!checked ? "opacity-100" : "opacity-50"}
                `}>{offLabel}</span>
        )} 
        <button onClick={onChange}
        className={` relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${checked ? activeColor : "bg-gray-300"}`}
        >
            <span
            className={`inline-block h-4 w-4 transform rounded-full bg-lightGray transition-transform duration-300 ${checked ?"translate-x-6" : "translate-x-1" }`}
            
            />
        </button>
        {onLabel && (
            <span className={`text-[11px] md:text-[15px]  font-semibold text-gray-500
                ${checked ? "opacity-100" : "opacity-50"}
                `}>{onLabel}</span>
        )}
        </div>
    )
}


export default Toggle;