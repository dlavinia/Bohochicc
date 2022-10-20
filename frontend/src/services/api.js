import axios from "axios";
 
    export const api = axios.create({
        baseURL: "https://dlart-api.herokuapp.com/"
    })
