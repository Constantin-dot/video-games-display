import classes from "./GamePage.module.scss";
import { Link } from "react-router-dom";
import { Slider } from "../../main/ui/common/slider/Slider";

export const GamePage = ({checkedGame, checkedGameScreenshots}) => {
    
    return <div className={classes.block}>
        <div className={classes.header}>
            <h1>{checkedGame.name}</h1>
            <Link to="/" className={classes.link} >
                &larr; Back to catalog
            </Link>
        </div>
        <Slider checkedGameScreenshots={checkedGameScreenshots} />
        <h2>About:</h2>
        <p className={classes.description}>{checkedGame.description_raw}</p>
        <a href={checkedGame.website} className={classes.link} style={{marginBottom: "10px"}}>Go to website</a>
    </div>;
};