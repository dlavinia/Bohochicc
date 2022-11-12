<template>
    <div class="page">
        <HeaderNav></HeaderNav>
        <router-view></router-view>
        <FooterApp></FooterApp>
       
    </div>
</template>
<script>
import './styles/global.css'
import HeaderNav from './components/header-nav'
import FooterApp from './components/footer'

export default {
    name: "App",
    components: {
        HeaderNav,
        FooterApp
    }
}
</script>

<style>
   @import "./styles/global.css";

</style>
