<template>
    <header>
        <nav>
            <img src="https://dlart-images.s3.amazonaws.com/1.png" alt="Logo Dlart" >
           <ul>
            <li> <a href="#">home</a> </li>
            <li> <a href="#">galeria</a> </li>
            <li> <a href="#">sobre</a> </li>
           </ul>
        </nav>
        #F1D2BB #DA7A2D
    </header>
</template>
<script>
    import '@/styles/global.css'

    export default{
        name: 'HeaderNav'
    }
</script>
<style scoped>
    header {
        background-color: var(--color-nav);
        width: 20%;
        margin-right: 1rem;
        height: 100vh;
        box-shadow: 1px 2px 3px #aaa;
    }
    nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-family: 'Josefin Sans', sans-serif;
        text-transform: uppercase;
    }
    ul{
        list-style: none;
    }

    ul li{
        margin: 2rem;
    }
    nav img{
        width: 150px;
        height: 150px;
        margin: 5rem 0;
    }
</style>