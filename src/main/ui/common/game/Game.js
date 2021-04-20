import { NavLink } from "react-router-dom"
import classes from "./Game.module.scss"

export const Game = () => {
    return <div className={classes.block}>
        <img 
            src={"https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"}
            alt={'background image'}
            className={classes.back}
        />
        <div className={classes.description}>
            <div className={classes.platformsAndRating}>
                <div>platform labels</div>
                <div className={classes.rating}>97</div>
            </div>
            <div className={classes.heading4}>
                Grand
            </div>
            <div className={classes.added}>
                &#43;
                14,225
            </div>
        </div>
        {/* <NavLink to={'/game'} className={classes.link}>OPEN</NavLink> */}
    </div>
}