<template>
    <div class="page">
        <HeaderNav></HeaderNav>
        <router-view></router-view>
    </div>
</template>

<script>
import './styles/global.css'
import HeaderNav from './components/header-nav'

export default {
    name: "App",
    components: {
        HeaderNav
    }
}
</script>

<style>
   @import "./styles/global.css";

</style>
