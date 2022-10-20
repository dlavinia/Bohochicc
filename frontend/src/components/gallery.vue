<template>

    <div class="card" v-for="post of posts" :key="post.id">

        <img :src="post.url_main_img">
        <h1>{{ post.title}}</h1>
        <p>{{ post.material}}</p>
    </div>
</template>
<script>
import Post from '@/services/posts'
export default {
    name: 'GalleryPosts',

    data() {
        return {
            posts: []
        }

    },
    mounted() {
        Post.getPosts().then(res => {
            this.posts = res.data.content

        })
    }
}
</script>
<style scoped>

.card{
    width: 33%;
    margin: 2rem;

}

img{
    width: 90%;
}
</style>