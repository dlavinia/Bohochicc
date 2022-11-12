<template>
    <div>{{ post.title }}</div>
</template>
<script>

import api from '@/services/api'

export default {
    name: 'DetailsPost',
    data() {
        return {
            post: '',
            title: '',
        }
    },
    created() {
        this.title = this.$route.params.title
    },
    methods: {
        getPostDetails() {
            api.get(`gallery.json?title=${this.title}`).then((response) => {
                console.log(response);
            });
        },
    },

}
</script>