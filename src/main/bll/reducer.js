import { gameAPI } from "../dal/api"

const initialState = {
    games: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GAMES/SET_GAMES':
            return {...state, games: action.games}
        default: 
            return state
    }
}

export const actions = {
    setGames: (games) => ({type: 'GAMES/SET_GAMES', games})
}

export const fetchGames = () => {
    return async (dispatch, getState) => {
        let res = await gameAPI.getGames(1, 15)
        dispatch(actions.setGames(res.data.results))
        const games = getState().games.games
        console.log(games);
    }
}