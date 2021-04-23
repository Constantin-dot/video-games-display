import { gameAPI } from "../dal/api";

const initialState = {
    games: [],
    lastPage: 0,
    isAddGames: true
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GAMES/SET_GAMES':
            return {
                ...state, 
                games: [...state.games, ...action.payload.games],
                lastPage: action.payload.page,
                isAddGames: action.payload.isAddGames
            };
        default: 
            return state
    };
};

export const actions = {
    setGames: (games, page, isAddGames) => ({type: 'GAMES/SET_GAMES', payload: {
        games, page, isAddGames
    }})
};

export const fetchGames = () => {
    return async (dispatch, getState) => {
        let lastPage = getState().games.lastPage;
        let res = await gameAPI.getGames(lastPage + 1, 15);
        dispatch(actions.setGames(res.data.results, lastPage + 1, !!res.data.next));

        const games = getState().games.games
        console.log(games);
    };
};