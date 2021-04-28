import React from "react";
import { Game } from "../../main/ui/common/game/Game";
import { MoreGames } from "../../main/ui/common/moreGames/MoreGames";
import { PlatformFiltering } from "../../main/ui/common/platformFiltering/PlatformFiltering";
import { SearchLine } from "../../main/ui/common/searchLine/SearchLine";
import classes from "./MainPage.module.scss";

export const MainPage = React.memo(({games, isAddGames, getMoreGames, 
    isPlatformsVisible, platformsVisibleHandler, lineValue, 
    setLineValue, setPlatformParantChecked, searchGamesHandler, platformParants}) => {
    
    const {ref} = MoreGames({isAddGames, getMoreGames})

    return <div className={classes.block}>
        <h1 className={classes.heading}>Game display</h1>
        <div className={classes.funcHeader}>
            {!isPlatformsVisible 
                ? <button onClick={platformsVisibleHandler} className={classes.platformsSpan}>Choose platforms</button>
                : <PlatformFiltering 
                    platformsVisibleHandler={platformsVisibleHandler}
                    setPlatformParantChecked={setPlatformParantChecked}
                    platformParants={platformParants}
                />
            }
            <SearchLine 
                lineValue={lineValue} 
                setLineValue={setLineValue} 
            />
            <button 
                onClick={searchGamesHandler}
                className={classes.searchButton}
            >
                Search
            </button>
        </div>
        <div className={classes.gameBlock}>
            {
                games.map(g => <Game
                    key={g.id}
                    background={g.background_image}
                    rating={g.metacritic}
                    name={g.name}
                    released={g.released}
                />)
            }
            {isAddGames && <div ref={ref} style={{padding: "5px"}}/>}
        </div>
    </div>
})
