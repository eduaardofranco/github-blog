import axios from "axios";

export const userApi = axios.create({
    baseURL: 'api.github.com/users/eduaardofranco'
})