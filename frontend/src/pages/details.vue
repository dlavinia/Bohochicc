<template>
    <div>dei deuusnskd
        <div>{{title}}</div>
        <div v-repeat="post in posts">{{title}}</div>
    </div>
</template>
<script>
import Post from '@/services/posts'

export default {
    name: 'DetailsPost',
    data() {
        return {
            posts: '',
            title: '',
        }
    },
    created() {
        this.title = this.$route.params.title
        this.getPostDetails()
    },

    methods: {
        getPostDetails() {
            
            Post.getPosts(this.title).then((res) => {
                this.posts = res.data
                console.log(this.posts)
            });
           
        },
    },
   

}
</script>