<template>
    <div class="container"> 
      <AboutHeader></AboutHeader>
      <AboutText></AboutText>
        <router-view></router-view>
    </div>
   
 </template>
 <script>
    import AboutHeader from '@/components/about-header.vue';
   import AboutText from '@/components/about-text.vue';
    export default {
       name: "AboutApp",
       components: {
         AboutHeader,
         AboutText
}
   }
 </script>
 
 <style>
    
 </style>