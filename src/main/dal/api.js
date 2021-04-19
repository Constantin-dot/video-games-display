import axios from "axios"

const API_KEY = process.env.APP_API

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://api.rawg.io/api",
    params: {
        api_key: API_KEY
    }
})

export const gameAPI = {
    getGames(page, page_size) {
        return instance.get(`games`, {
            params: {
                page,
                page_size
            }
        })
    }
}