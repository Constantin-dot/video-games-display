import { gameAPI } from "../dal/api";

const initialState = {
    games: [],
    lastPage: 0,
    isAddGames: true,
    platformParants: [
        {id: "1", name: "PC", isChecked: false},
        {id: "2", name: "Play Station", isChecked: false},
        {id: "3", name: "Xbox", isChecked: false},
        {id: "4", name: "iOS", isChecked: false},
        {id: "5", name: "Apple Macintosh", isChecked: false},
        {id: "6", name: "Linux", isChecked: false},
        {id: "7", name: "Nintendo", isChecked: false},
        {id: "8", name: "Android", isChecked: false},
        {id: "9", name: "Atari", isChecked: false},
        {id: "10", name: "Commodore / Amiga", isChecked: false},
        {id: "11", name: "SEGA", isChecked: false},
        {id: "12", name: "3DO", isChecked: false},
        {id: "13", name: "Neo Geo", isChecked: false},
        {id: "14", name: "Web", isChecked: false}
    ]

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
        case 'GAMES/SET_GAMES_AFTER_SEARCHING':
            return {
                ...state,
                games: [...action.payload.games],
                lastPage: action.payload.page,
                isAddGames: action.payload.isAddGames
            };
        case 'GAMES/SET_PLATFORM_PARANT_CHECKED':
            let platformParant = state.platformParants.find(pp => pp.id === action.payload.id )
            return {
                ...state, 
                platformParants: [...state.platformParants, {...platformParant, isChecked: action.payload.value}]
            }
        default: 
            return state
    };
};

export const actions = {
    setGames: (games, page, isAddGames) => ({type: 'GAMES/SET_GAMES', payload: {
        games, page, isAddGames
    }}),
    setGamesAfterSearching: (games, page, isAddGames) => ({type: 'GAMES/SET_GAMES_AFTER_SEARCHING', payload: {
        games, page, isAddGames
    }}),
    setPlatformParantChecked: (id, value) => ({type: 'GAMES/SET_PLATFORM_PARANT_CHECKED', payload: {
        id, value
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

export const searchGames = (search) => {
    return async (dispatch, getState) => {
        let parent_platforms = getState().games.platformParants;
        let res = await gameAPI.searchGames(1, 15, search, parent_platforms);
        dispatch(actions.setGamesAfterSearching(res.data.results, 0, !!res.data.next));
        
        const games = getState().games.games
        console.log(games);
    }
}
