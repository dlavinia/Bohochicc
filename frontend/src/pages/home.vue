<template>
    <div class="container home">
        <HomeImgs></HomeImgs>
        <DragHand></DragHand>
   </div>
   </template>
   
   <script>
   import '@/styles/global.css'
   import HomeImgs from '@/components/home-imgs.vue'
   import DragHand from '@/components/hand-drag.vue'
   
   export default {
       name: "HomePage",
       components: {
        HomeImgs,
        DragHand
   }
   }
   </script>
   
   