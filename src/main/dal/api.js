import axios from "axios"
const instance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "79d35934fcc04ca2ab10df0014b83ba0" 
    }
})

export const gameAPI = {
    getGames(page, page_size, ordering) {
        return instance.get(`games`, {
            params: {
                page,
                page_size,
                ordering
            }
        })
    },
    searchGames(page, page_size, search, parent_platforms) {
        const parentPlatforms = parent_platforms ? {parent_platforms} : {}
        return instance.get(`games`, {
            params: {
                page,
                page_size,
                search,
                ...parentPlatforms
            }
        })
    },
    getGameDetails(slug) {
        return instance.get(`games/${slug}`)
    }
}