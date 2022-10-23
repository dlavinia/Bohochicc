
import { api } from "@/services/api"

export default {
    getPosts:() => {
        return api.get('gallery.json')
    },
}