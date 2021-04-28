import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, searchGames, actions} from "../../main/bll/reducer";
import { MainPage } from "./MainPage";

export const MainPageContainer = () => {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const isAddGames = useSelector(state => state.games.isAddGames);
    const platformParants = useSelector(state => state.games.platformParants)

    const [isPlatformsVisible, setIsPlatformsVisible] = useState(false);
    const [lineValue, setLineValue] = useState("");
    

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

    const platformsVisibleHandler = useCallback(() => {
        setIsPlatformsVisible(!isPlatformsVisible);
    }, [isPlatformsVisible]);

    const setPlatformParantChecked = (id, value) => {
        dispatch(actions.setPlatformParantChecked(id, value))
    }

    const searchGamesHandler = (lineValue, platformParants) => {
        dispatch(searchGames(lineValue, platformParants));
    };

    return <MainPage
        games={games}
        isAddGames={isAddGames}
        getMoreGames={getMoreGames}
        isPlatformsVisible={isPlatformsVisible}
        platformsVisibleHandler={platformsVisibleHandler}
        lineValue={lineValue}
        setLineValue={setLineValue}
        platformParants={platformParants}
        setPlatformParantChecked={setPlatformParantChecked}
        searchGamesHandler={searchGamesHandler}
    />;
};