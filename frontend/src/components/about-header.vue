<template>
     <section class="about-header">
            <div class="img"></div>
            <div class="infos">
                <h1> Débora Melo</h1>
                <h2> 19 anos | Natal, RN</h2>
                <ul> 
                    <li><div class="social-icon"></div></li>
                    <li><div class="social-icon"></div></li>
                    <li><div class="social-icon"></div></li>
                </ul>
            </div>
           
        </section>
</template>
<script>
    export default {
        name: 'AboutHeader'
    }
</script>
<style>

    .about-header{
        display: flex;
        margin: 0 5rem;
        width: 100%;
        align-items: center;

    }
    .about-header .img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: grey;
        box-shadow: 1px 2px 3px #888;
    }
    .about-header .infos {
        margin-left: 3rem;
    }
    .about-header .infos ul{
        display: flex;
        list-style: none;
        margin-top: 1rem;
    }
    .about-header .infos h1{
        font-size: 45px;
    }
    .about-header .infos ul li~li{
        margin-left: 10px;
    }

    .social-icon{
        width: 45px;
        height: 45px;
        background-color: #ccc;
        border-radius: 50%;
        box-shadow: 1px 2px 3px #888;
    }
</style>