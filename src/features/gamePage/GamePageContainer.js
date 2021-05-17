import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { actions, getGameDetails, getGameScreenshots } from "../../main/bll/reducer";
import { GamePage } from "./GamePage"

export const GamePageContainer = () => {
    const dispatch = useDispatch();
    const {slug} = useParams();

    const checkedGame = useSelector(state => state.games.checkedGame);
    const checkedGameScreenshots = useSelector(state => state.games.checkedGameScreenshots);

    useEffect( () => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            dispatch(actions.clearGameScreenshots());
            dispatch(getGameScreenshots(slug));
            dispatch(getGameDetails(slug));
        }

        return () => cleanupFunction = true;
        
        // eslint-disable-next-line
    }, [slug])

    if (!checkedGame || !checkedGameScreenshots.length) {
        return <div>Game loading...</div>
    }

    return <div>
        <GamePage 
            checkedGame={checkedGame}
            checkedGameScreenshots={checkedGameScreenshots} 
        />
    </div>
};