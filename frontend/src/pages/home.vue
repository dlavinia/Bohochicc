<template>
    <div class="container home">
        <HomeImgs></HomeImgs>
   </div>
   </template>
   
   <script>
   import '@/styles/global.css'
   import HomeImgs from '@/components/home-imgs.vue'
   
   export default {
       name: "HomePage",
       components: {
        HomeImgs,
   }
   }
   </script>
   
   