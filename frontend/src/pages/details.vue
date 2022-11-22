<template>
    <section class="details">
        <section>
            <img :src="img" :alt="img">
        </section>
        
        <section  class="infos" >
            <h1>{{title}}</h1>
            <p> {{descricao}}</p>
            <router-link to="/gallery"> &lt;&lt; voltar para galeria</router-link>
        </section>   
    </section>
</template>
<script>

import Post from '@/services/posts'
export default {
    name: 'DetailsPost',

    data() {
        return {
            title:'',
            img: '',
            descricao:'',
        }

    },
    mounted() {
        Post.getPosts().then(res => {
            res.data.forEach((post) =>{
                if(post.slug == this.$route.params.slug){
                    this.title = post.titulo
                    this.img = post.link
                    this.descricao = post.descricao
                }})
        })
    }
}
</script>
<style scoped>
    .details{
        display: flex;
        justify-content: center;
        
    }
    .details .infos{
        width: 30%;
        padding: 2rem;
    }
    .details .infos h1{
        font-size: 2.6rem;
        margin-bottom: 20px;
        color: #da7a2d;
    }
    .details .infos p{
        font-size: 20px;
        text-align: justify;
        margin-bottom: 20px;
    }
    .details img{
        width: 100%;
        padding: 2rem;
    }

    @media only screen and (max-width: 600px) {
        .details{
            flex-direction: column;
        }
        .details .infos{
        width: 100%;
        padding: 1rem 2rem;
        margin-bottom: 100px;
    }
    }
</style>