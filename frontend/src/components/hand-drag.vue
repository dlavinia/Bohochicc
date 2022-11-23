<template>
    <section class="hand">
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vmzgsolp.json"  background="transparent"  speed="0.5"  style="width: 100px; height: 100px;"  loop  autoplay></lottie-player>
    </section>
</template>

<script>

export default {
       name: "DragHand"

   }
</script>

<style>
.hand{
    position: absolute;
    right: 45px;
    bottom: 2rem;
}
</style>