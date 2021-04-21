import { useSelector } from "react-redux"
import { Game } from "../../main/ui/common/game/Game"
import classes from "./MainPage.module.scss"

export const MainPage = () => {
    const {games} = useSelector(state => state.games)

    return <div className={classes.block}>
        <h1 className={classes.heading}>Game display</h1>
        <div className={classes.gameBlock}>
            {
                games.map(g => <Game
                    background={g.background_image}
                    rating={g.metacritic}
                    name={g.name}
                    added={g.added}
                />)
            }
        </div>
    </div>
}
