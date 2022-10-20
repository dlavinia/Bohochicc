
import { api } from "@/services/api"

export default {
    getPosts:() => {
        return api.get('post')
    },

    save:(post) => {
        return api.post('post', post)
    },
    uploadMain:(mainimg) => {
        return api.post('upload/main_img', mainimg)
    },

}