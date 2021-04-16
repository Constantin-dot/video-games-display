import { NavLink } from "react-router-dom"
import classes from "./Game.module.scss"

export const Game = () => {
    return <div className={classes.block}>
        Game
    
        <NavLink to={'/game'} className={classes.link}>OPEN</NavLink>
    </div>
}