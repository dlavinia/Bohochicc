<template>
    <footer>
       <nav>
            <ul>
                <li> <a href="https://github.com/dlavinia"><img src="@/assets/github.svg" title="GitHub" alt="GitHub"></a></li>
                <li> <a href="https://www.linkedin.com/in/d%C3%A9bora-melo-8b03aa205/"><img src="@/assets/linkedin.svg" title="Linkedin" alt="=LinkedIn"></a></li>
                <li> <a href="emailto:dlavinia2003@gmail.com"><img src="@/assets/gmail.svg" title="Email" alt="Email"></a></li>
            </ul>
       </nav>
    </footer>
  </template>
<script>

    export default {
        name: "FooterApp",
    }
</script>
<style scoped>
footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:1rem;
    width: 100%;
    margin-top: -90px;
    background-color: transparent;
}

ul{
    display: flex;
    justify-content: center;
    list-style: none;
}

 img{
width: 50px;
}

a{
    padding-right: 16px;
}

</style>