import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, searchGames, actions, fetchOrderedGames} from "../../main/bll/reducer";
import { MainPage } from "./MainPage";

export const MainPageContainer = () => {

    const dispatch = useDispatch();
    const {games, isAddGames, parentPlatforms, checkedParentPlatforms} = useSelector(state => state.games);

    const [isPlatformsVisible, setIsPlatformsVisible] = useState(false);
    const [lineValue, setLineValue] = useState("");
    const [isSortingVisible, setIsSortingVisible] = useState(false);
    

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

    const setParentPlatformChecked = (id, value) => {
        dispatch(actions.setParentPlatformChecked(id, value));
    };

    const chooseCheckedParentPlatformsHandler = () => {
        dispatch(actions.chooseCheckedParentPlatforms(parentPlatforms, checkedParentPlatforms));
    };

    const searchGamesHandler = () => {
        dispatch(searchGames(lineValue));
    };

    const sortingVisibleHandler = () => {
        setIsSortingVisible(!isSortingVisible);
    };

    const sortGames = (ordering) => {
        fetchOrderedGames(ordering);
    };

    return <MainPage
        games={games}
        isAddGames={isAddGames}
        getMoreGames={getMoreGames}
        isPlatformsVisible={isPlatformsVisible}
        platformsVisibleHandler={platformsVisibleHandler}
        lineValue={lineValue}
        setLineValue={setLineValue}
        parentPlatforms={parentPlatforms}
        setParentPlatformChecked={setParentPlatformChecked}
        chooseCheckedParentPlatformsHandler={chooseCheckedParentPlatformsHandler}
        searchGamesHandler={searchGamesHandler}
        isSortingVisible={isSortingVisible}
        sortingVisibleHandler={sortingVisibleHandler}
        sortGames={sortGames}
    />;
};