import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../main/bll/reducer";
import { Game } from "../../main/ui/common/game/Game";
import classes from "./MainPage.module.scss";

export const MainPage = React.memo(() => {
    const dispatch = useDispatch();
    
    const [fetching, setFetching] = useState(true);

    const {games} = useSelector(state => state.games);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        };
    };

    useEffect( () => {
        debugger
        dispatch(fetchGames());
        setFetching(false);
        // eslint-disable-next-line
    }, [fetching]);

    useEffect( () => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
        // eslint-disable-next-line
    }, []);

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
        </div>
    </div>
})
