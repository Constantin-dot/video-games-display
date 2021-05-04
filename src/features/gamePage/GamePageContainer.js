import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { getGameDetails } from "../../main/bll/reducer";
import { GamePage } from "./GamePage"

export const GamePageContainer = () => {
    debugger
    const dispatch = useDispatch();
    const {slug} = useParams();

    const checkedGame = useSelector(state => state.games.checkedGame);

    useEffect( () => {
        dispatch(getGameDetails(slug));
    }, [slug, dispatch])

    if (!checkedGame) {
        return <div>Game loading...</div>
    }

    return <div>
        <GamePage checkedGame={checkedGame} />
    </div>
};