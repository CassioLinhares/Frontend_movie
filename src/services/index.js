import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-movie-zags.onrender.com"
});