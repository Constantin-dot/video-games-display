import { gameAPI } from "../dal/api"

const initialState = {
    games: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
         
        default: 
            return state
    }
}

export const actions = {}

export const fetchGames = (page, page_size) => {
    return async () => {
        let res = await gameAPI.getGames(page, page_size)
        console.log(res);
    }
}