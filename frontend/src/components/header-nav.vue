<template>
    <header>
        <nav>
            <router-link to="/">
            <img src="https://raw.githubusercontent.com/dlavinia/Bohochicc/73fdf1cfdb77aec3c0d841c16d8549bd74aceac5/images/logos/2.svg"
                alt="Logo Dlart">
            </router-link>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/gallery">Galeria </router-link>
                </li>
                <li>
                    <router-link to="/contact">Contato </router-link>
                </li>
            </ul>
        </nav>

    </header>
</template>
<script>
import '@/styles/global.css'

export default {
    name: 'HeaderNav'
}
</script>
<style scoped>
header {
    background-color: var(--color-nav);
    width: 100%;
    margin-right: 1rem;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    padding: 20px 2rem;
}

ul {
    display: flex;
    list-style: none;
}

ul li {
    margin: 2rem;
}

ul li a {
    font-weight: 600;
    transition: all 0.4s;
}

nav img {
    width: 400px;
    margin: 1rem;
}
@media only screen and (max-width: 600px) {
    nav{
        flex-direction: column;
        padding:0;
    }
}
</style>