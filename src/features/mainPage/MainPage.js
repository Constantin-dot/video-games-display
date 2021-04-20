import { Game } from "../../main/ui/common/game/Game"
import classes from "./MainPage.module.scss"

export const MainPage = () => {
     
    return <div className={classes.block}>
        <h1 className={classes.heading}>Game display</h1>
        <div className={classes.gameBlock}>
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
        </div>
    </div>
}