<template>
    <section class="contact">
          <form>
           
            <div class="field">
                <input name="nome" id="nome" type="text" required>
                <label>Nome</label>
            </div>
            <div class="field">
                <input name="email" id="email" type="text" required>
                <label>E-mail</label>
            </div>
            <div class="field">
                <input name="assunto" id="assunto" type="text" required>
                <label>Assunto</label>
            </div>
            <div class="field">
                <textarea name="mensagem" id="mensagem" cols="30" rows="6" required></textarea>
                <label>Mensagem</label>
            </div>
           
          </form>
          <img src="@/assets/img-contact.svg" alt="" srcset="">
    </section>
</template>
<script>
   export default {
       name: 'ContactPage'
   }
</script>
<style>
    .contact{
        margin: 2rem;
        display: flex;
        justify-content: center;
    }
    form{
        width: 40%;
    }
    .field{
        width: 100%;
        position: relative;
    }
    
    input, textarea{
        width: 100%;
        margin-top: 1.5rem;
        padding: 14px;
        border-radius: 0;
        border: solid 1px #DA7A2D;
        font-size: 22px;
        outline: none;
    }

    label{
        background-color: #fff;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 22px;
        color: #DA7A2D;
        position: absolute;
        pointer-events: none;
        bottom: 14px;
        left: 10px;
        transition: all .5s;
        
    }

    .contact form input:focus-visible ~ label,
    .contact form input:valid ~ label{
        font-size: 18px;
        bottom: 46px;
    }

    textarea ~ label{
        top: 34px;
        height: 20px;
        transition: all .5s;
    }
    .contact form textarea:focus-visible ~ label,
    .contact form textarea:valid ~ label{
        font-size: 18px;
        top: 4px;
    }


</style>