import React, {useState, useEffect, useRef} from 'react';


const getColor = (currentColor) => {
    const colorList = ['red', 'green', 'yellow'];
    let currentIndex = colorList.indexOf(currentColor);
    while (colorList[currentIndex] === currentColor) {
        currentIndex = Math.trunc(Math.random() * 3);
    }
    return colorList[currentIndex];
}

function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')

    useEffect(() => {
        const colorInterval = setInterval(()=> {
            const newColor = getColor(colorRef.current);
            console.log(newColor);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000)
        return () => {
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default useMagicColor;