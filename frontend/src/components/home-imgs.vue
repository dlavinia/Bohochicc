<template>
    <section class="images">
        <img class="bottom" src="@/assets/imgs-home/1.png" alt="">
        <img src="@/assets/imgs-home/2.png" alt="">
        <img class="bottom" src="@/assets/imgs-home/3.png" alt="">
        <img src="@/assets/imgs-home/4.png" alt="">
        <img class="bottom" src="@/assets/imgs-home/5.png" alt="">
        <img src="@/assets/imgs-home/6.png" alt="">
        <img class="bottom" src="@/assets/imgs-home/7.png" alt="">
        <img src="@/assets/imgs-home/8.png" alt="">
        <img class="bottom" src="@/assets/imgs-home/9.png" alt="">
        <img src="@/assets/imgs-home/10.png" alt="">
    </section>
</template>
<script>
    export default{
        name: "HomeImgs"
    }
</script>
<style scoped>
.images{
    position: relative;
    bottom: 0;
    display: flex;
    overflow-x: scroll;
    height: auto;
}
.images img{
    width: 450px;
    margin: 5px;
}
.images img:nth-child(2n+1) {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>