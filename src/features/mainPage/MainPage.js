import React from "react";
import { Game } from "../../main/ui/common/game/Game";
import { GetMoreGamesHook } from "../../main/ui/common/hooks/GetMoreGamesHook";
import { PlatformFiltering } from "../../main/ui/common/platformFiltering/PlatformFiltering";
import { SearchLine } from "../../main/ui/common/searchLine/SearchLine";
import { SortingPanel } from "../../main/ui/common/sortingPanel/SortingPanel";
import classes from "./MainPage.module.scss";

export const MainPage = React.memo(({games, isAddGames, getMoreGames, 
    isPlatformsVisible, platformsVisibleHandler, lineValue, 
    setLineValue, setParentPlatformChecked, searchGamesHandler, 
    parentPlatforms, chooseCheckedParentPlatformsHandler, isSortingVisible,
    sortingVisibleHandler, sortGames}) => {
    
    const {ref} = GetMoreGamesHook({isAddGames, getMoreGames})

    return <div className={classes.block}>
        <div className={classes.blockWithHeadingAndSorting}>
            <h1 className={classes.heading}>Game display</h1>
            <div className={classes.funcHeader}>
                {!isPlatformsVisible 
                    ? <button onClick={platformsVisibleHandler} className={classes.Button}>Choose platforms</button>
                    : <PlatformFiltering 
                        platformsVisibleHandler={platformsVisibleHandler}
                        setParentPlatformChecked={setParentPlatformChecked}
                        chooseCheckedParentPlatformsHandler={chooseCheckedParentPlatformsHandler}
                        parentPlatforms={parentPlatforms}
                    />
                }
                <SearchLine 
                    lineValue={lineValue} 
                    setLineValue={setLineValue} 
                />
                <button 
                    onClick={searchGamesHandler}
                    className={classes.Button}
                >
                    Search
                </button>
                {!isSortingVisible
                    ? <button 
                        onClick={sortingVisibleHandler}
                        className={classes.Button}
                    >
                        Sorting
                    </button>
                    : <SortingPanel
                        sortingVisibleHandler={sortingVisibleHandler}
                        sortGames={sortGames}
                    />
                }
            </div>
        </div>
        
        <div className={classes.gameBlock}>
            {
                games.map(g => <Game
                    key={g.id}
                    background={g.background_image}
                    rating={g.metacritic}
                    name={g.name}
                    released={g.released}
                    slug={g.slug}
                />)
            }
            {isAddGames && <div ref={ref} style={{padding: "5px"}}/>}
        </div>
    </div>
})
