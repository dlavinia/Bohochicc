<template>
    <section class="about-text">
           
           <p class="text">
               Como além de uma ótima bordadeira eu também sou uma ótima aluna do Tecnólogo em Análise e Desenvolvimento de Sistemas. Fiz esse <i>site</i> com o objetivo de aprimorar minhas habilidades no desenvolvimento <i>web</i> e aproveitei para trabalhar com documentação e versionamento de código.
            </p>
            <p>  As tecnologias usadas foram:</p>
               <ul>
                <li> <img class="tec" src="" alt="" title=""> </li>
               </ul>
            
            <button class="btn"><a href="#" target="_blank" rel="noopener noreferrer">git hub</a></button>
          
       </section>
</template>
<script>
   export default {
       name: 'AboutText'
   }
</script>
<style scoped> 
    p{
        font-size: 1.2em;
        margin-bottom: 1rem;
    }
    .about-text{
        margin: 0 10rem 0 5rem;
    }
    .about-text ul{
        display: flex;
        list-style: none;
    }

    .about-text ul li ~li {
        margin-left: 30px;
    }
    .tec{
        width: 75px;
        height: 75px;
        background-color: #ccc;
    }
    .btn{
        padding: 8px 24px;
        font-size: 1.2rem;
        text-transform: uppercase;
        border-radius: 0;
        background-color: #000;
       
        border: none;
        box-shadow: 1px 2px 3px #888;
    }
    .btn a{
        color: #fff;
    }
</style>