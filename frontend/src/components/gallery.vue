<template>

    <div class="card" v-for="post of posts" :key="post.titulo">

        <img :src="post.link">
        <h1>{{ post.titulo}}</h1>
        <p>{{ post.link}}</p>
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
            this.posts = res.data

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