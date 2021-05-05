import React from "react";
import { useEffect, useState } from "react";
import classes from "./Slider.module.scss";

export const Slider = React.memo(({checkedGameScreenshots}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect( () => {
        // debugger
        setInterval( () => {
            setActiveIndex((current) => 
                current === checkedGameScreenshots.length - 1 ? 0 : current + 1
            );
        }, 5000);
        return () => clearInterval();
    }, [checkedGameScreenshots]);

    return <div>
        <img 
            src={checkedGameScreenshots[activeIndex].image} 
            alt={'some screenshot'} 
            className={classes.image} 
        />
    </div>;
});