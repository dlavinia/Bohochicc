import axios from "axios";
 
    export const api = axios.create({
        baseURL: "https://raw.githubusercontent.com/dlavinia/Bohochicc/master/dados"
    })

