import React from "react";
import { Game } from "../../main/ui/common/game/Game";
import { MoreGAmes } from "../../main/ui/common/moreGames/MoreGames";
import classes from "./MainPage.module.scss";

export const MainPage = React.memo(({games, isAddGames, getMoreGames}) => {

    return <div className={classes.block}>
        <h1 className={classes.heading}>Game display</h1>
        <div className={classes.gameBlock}>
            {
                games.map(g => <Game
                    key={g.id}
                    background={g.background_image}
                    rating={g.metacritic}
                    name={g.name}
                    added={g.added}
                />)
            }
            <MoreGAmes isAddGames={isAddGames} getMoreGames={getMoreGames} />
        </div>
    </div>
})
