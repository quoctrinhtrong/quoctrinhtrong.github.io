import React, { useState } from 'react';
import './BoxColor.scss';


const getRamdomColor = () => {
    const colorList = ["deeppink", "green", "red", "blue", "yellow"];
    const ramdomNumber = Math.trunc(Math.random() * 5);
    return colorList[ramdomNumber];
}

function BoxColor() {
    const [color, setColor] = useState(() => {
        const initialState = localStorage.getItem("box_color") ? localStorage.getItem("box_color"):'deeppink';
        console.log(initialState);
        return initialState;
    });

    const onBoxClick = () => {
        const ramdomColor = getRamdomColor();
        setColor(ramdomColor);
        localStorage.setItem('box_color', ramdomColor);
    }

    return (
        <div 
            className="color-box" 
            style={{ backgroundColor: color }}
            onClick={onBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default BoxColor;