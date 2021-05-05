import classes from "./GamePage.module.scss";
import { NavLink } from "react-router-dom";
import { Slider } from "../../main/ui/common/slider/Slider";

export const GamePage = ({checkedGame, checkedGameScreenshots}) => {
    
    return <div className={classes.block}>
        <div className={classes.header}>
            <h1>{checkedGame.name}</h1>
            <NavLink to="/" className={classes.link} >
                &larr; Back to catalog
            </NavLink>
        </div>
        <Slider checkedGameScreenshots={checkedGameScreenshots} />
        <h2>About:</h2>
        <p className={classes.description}>{checkedGame.description_raw}</p>
        <a href={checkedGame.website} className={classes.link}>Go to website</a>
    </div>;
};