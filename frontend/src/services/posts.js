
import { api } from "@/services/api"

export default {
    getPosts:() => {
        return api.get('gallery.json')
    },
    getById(id){
        return api.get(`gallery.json?titulo?${id}`)
    }
}