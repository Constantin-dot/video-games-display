import { gameAPI } from "../dal/api";

const initialState = {
    games: [],
    page: 1
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GAMES/SET_GAMES':
            return {...state, games: [...state.games, ...action.games]};
        case 'GAMES/SET_CURRENT_PAGE':
            return {...state, page: state.page + 1};
        default: 
            return state
    };
};

export const actions = {
    setGames: (games) => ({type: 'GAMES/SET_GAMES', games}),
    setCurrentPage: () => ({type: 'GAMES/SET_CURRENT_PAGE'})
};

export const fetchGames = () => {
    return async (dispatch, getState) => {
        let page = getState().games.page
        let res = await gameAPI.getGames(page, 15)
        dispatch(actions.setGames(res.data.results));
        dispatch(actions.setCurrentPage());

        const games = getState().games.games
        console.log(games);
    };
};