import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../main/bll/reducer";
import { MainPage } from "./MainPage";

export const MainPageContainer = () => {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const isAddGames = useSelector(state => state.games.isAddGames);

    useEffect( () => {
        if(games.length) {
            dispatch(fetchGames());
        }
        // eslint-disable-next-line
    }, []);

    const getMoreGames = useCallback(() => {
        if (isAddGames) {
            dispatch(fetchGames());
        }
        // eslint-disable-next-line
    }, [isAddGames]);

    return <MainPage
        games={games}
        isAddGames={isAddGames}
        getMoreGames={getMoreGames}
    />;
};