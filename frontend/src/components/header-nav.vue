<template>
    <header>
        <nav>
            <img src="https://raw.githubusercontent.com/dlavinia/Bohochicc/73fdf1cfdb77aec3c0d841c16d8549bd74aceac5/images/logos/2.svg" alt="Logo Dlart" >
           <ul>
            <li> <a href="#">home</a> </li>
            <li> <a href="#">galeria</a> </li>
            <li> <a href="#">sobre</a> </li>
           </ul>
        </nav>
        <!---#F1D2BB #DA7A2D-->
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
        width: 100%;
        margin-right: 1rem;
    }
    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: 'Josefin Sans', sans-serif;
        text-transform: uppercase;
        padding: 20px 2rem;
    }
    ul{
        display: flex;
        list-style: none;
    }

    ul li{
        margin: 2rem;
    }
    ul li a{
        font-weight: 600;
        transition: all 0.4s;
    }
    nav img{
        width: 400px;
        margin: 1rem;
    }
</style>