import { gameAPI } from "../dal/api";

const initialState = {
    games: [],
    lastPage: 0,
    isAddGames: true,
    parentPlatforms: [
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
    ],
    checkedParentPlatforms: ""
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
        case 'GAMES/SET_GAMES_AFTER_SEARCHING_AND_SORTING':
            return {
                ...state,
                games: [...action.payload.games],
                lastPage: action.payload.page,
                isAddGames: action.payload.isAddGames
            };
        case 'GAMES/SET_PARENT_PLATFORM_CHECKED':
            return {
                ...state, 
                parentPlatforms: state.parentPlatforms.map(pp => {
                    if(pp["id"] === action.payload.id) {
                        return {...pp, isChecked: action.payload.value}
                    }
                    return pp
                })
            }
        case 'GAMES/CHOOSE_CHECKED_PARENT_PLATFORMS':
            let parentPlatforms = action.payload.parentPlatforms
            let checkedParentPlatforms = action.payload.checkedParentPlatforms
            for (let i = 0; i < parentPlatforms.length; i++) {
                if (parentPlatforms[i].isChecked === true) {
                    if(!checkedParentPlatforms.length) {
                        checkedParentPlatforms += parentPlatforms[i].id
                    } else {
                        checkedParentPlatforms += "," + parentPlatforms[i].id
                    }
                }
            };
            return {
                ...state,
                checkedParentPlatforms: checkedParentPlatforms
            }
        default: 
            return state
    };
};

export const actions = {
    setGames: (games, page, isAddGames) => ({type: 'GAMES/SET_GAMES', payload: {
        games, page, isAddGames
    }}),
    setGamesAfterSearchingAndSorting: (games, page, isAddGames) => ({type: 'GAMES/SET_GAMES_AFTER_SEARCHING_AND_SORTING', payload: {
        games, page, isAddGames
    }}),
    setParentPlatformChecked: (id, value) => ({type: 'GAMES/SET_PARENT_PLATFORM_CHECKED', payload: {
        id, value
    }}),
    chooseCheckedParentPlatforms: (parentPlatforms, checkedParentPlatforms) => ({type: 'GAMES/CHOOSE_CHECKED_PARENT_PLATFORMS', payload: {
        parentPlatforms, checkedParentPlatforms
    }})
};

export const fetchGames = () => {
    return async (dispatch, getState) => {
        let lastPage = getState().games.lastPage;
        let res = await gameAPI.getGames(lastPage + 1, 15);
        dispatch(actions.setGames(res.data.results, lastPage + 1, !!res.data.next));
    };
};

export const searchGames = (search) => {
    return async (dispatch, getState) => {
        let parent_platforms = getState().games.checkedParentPlatforms;
        let res = await gameAPI.searchGames(1, 15, search, parent_platforms);
        dispatch(actions.setGamesAfterSearchingAndSorting(res.data.results, 0, !!res.data.next));
    };
};

export const fetchOrderedGames = (ordering) => {
    return async (dispatch) => {
        let res = await gameAPI.getGames(1, 100, ordering);
        dispatch(actions.setGamesAfterSearchingAndSorting(res.data.results, 1, !!res.data.next));
    };
};
