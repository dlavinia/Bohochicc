<template>
    <section class="cards">
        <div class="card" v-for="post of posts" :key="post.slug">
            <router-link :to="post.slug">
                <figure>

                    <img :src="post.link">

                    <figcaption>
                        <h1>{{ post.titulo }}</h1>
                    </figcaption>
                </figure>
            </router-link>
        </div>
    </section>
 
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
            console.log(res.data)

        })
    }
}
</script>
<style scoped>
.cards {
    background: #da7a2d;
    background: linear-gradient(0deg, rgba(218, 122, 45, 1) 0%, rgba(241, 210, 187, 1) 50%, rgba(255, 255, 255, 1) 100%);
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    height: 2350px;
    padding: 1rem;
}

.cards::before,
.cards::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
}

.card {
    box-sizing: border-box;
    width: 500px;
    margin-bottom: 1rem;
    margin: 1rem;

}

.card:nth-child(3n+1) {
    order: 1;
}

.card:nth-child(3n+2) {
    order: 2;
}

.card:nth-child(3n) {
    order: 3;
}

figure {
    position: relative;
}

figcaption {
    position: absolute;
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    bottom: 0;
    left: 0;
    color: var(--color-text);
    height: 100%;
    width: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(241, 210, 187, .5) 75%);
    transition: all 0.3s;
    opacity: 0;
}

figcaption:hover {
    opacity: 1;
}

img {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .cards::before,
.cards::after {
    display: none;

}
.cards {
    height: auto;
}
.card:last-child{
    margin-bottom: 100px;
}
.card {
    width: 90%;
}
}
</style>