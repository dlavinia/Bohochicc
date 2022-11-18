<template>
    <HeaderNav></HeaderNav>
    <div class="page">
        <router-view></router-view>
    </div>
    <FooterApp></FooterApp>
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
