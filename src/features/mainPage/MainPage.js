import { useDispatch } from "react-redux"
import { fetchGames } from "../../main/bll/reducer"
import { Game } from "../../main/ui/common/game/Game"
import classes from "./MainPage.module.scss"

export const MainPage = () => {
    const dispatch = useDispatch()

    const getGames = () => {
        dispatch(fetchGames(1, 15))
    } 

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
        </div>
        <button onClick={getGames}>getGames</button>
    </div>
}