"use client";

import React from "react";

interface ToggleProps {
    checked: boolean;
    onChange: () => void;
    onLabel?: string;
    offLabel?: string;
    activeColor?: string;
}

const Toggle: React.FC<ToggleProps> =({checked,onChange,onLabel,offLabel,activeColor = "bg-grey-200"}) => {
    return (
        <div>
            Hello
        </div>
    )
}


export default Toggle;