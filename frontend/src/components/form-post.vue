<template>
    <div class="forms">
        <section class="form-container">
            <h1> Dados do bordado</h1>
            <form>
                <div class="group-form">
                    <input name="titulo" id="titulo" type="text">
                    <label for="titulo"> Título </label>
                </div>
                <div class="group-form">
                    <textarea name="descricao" id="descrição"></textarea>
                    <label for="descricao"> Descrição </label>
                </div>
                <div class="group-form">
                    <input name="tamanho" id="tamanho" type="number">
                    <label for="tamanho">Tamanho </label>
                </div>
                <div class="group-form">
                    <input name="material" id="material" type="text">
                    <label for="material"> Material </label>
                </div>
                <div class="group-form">
                    <input name="data" id="data" type="text">
                    <label for="data">Data</label>
                </div>
                <div class="group-form">
                    <input name="link" id="link" type="text">
                    <label for="link">Link do Instagram</label>
                </div>
            </form>
        </section>

        <section class="form-container">
            <h1>Imagens</h1>
            <form class="upload">
                <div>
                    <input class="form-field" type="file" name="main_img" id="main_img" @change="handleFileUpload( $event )">
                    <button class="bnt-upload" v-on:click="uploadMainImg()"> <img src="@/assets/upload.png" alt="upload" title="Enviar Imagem">
                    </button>
                </div>
                <div>
                    <input class="form-field" type="file" name="img_2" id="img_2">
                    <button class="bnt-upload"> <img src="@/assets/upload.png" alt="upload" title="Enviar Imagem">
                    </button>
                </div>
                <div>
                    <input class="form-field" type="file" name="img_3" id="img_3">
                    <button class="bnt-upload"> <img src="@/assets/upload.png" alt="upload" title="Enviar Imagem">
                    </button>
                </div>

                <button>Enivar</button>
            </form>
        </section>
    </div>
</template>
<script>

export default {
    name: 'FormPost',
}
</script>
<style>
@import "../styles/form.css";
</style>