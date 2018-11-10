<template>
   <formulario-wrap>
      <div class="form-wrap">
        <nav-inneredit></nav-inneredit>
        <h1 class="title-content">Identificadores</h1>
         <div class="space"></div>

         <form class="row" id="indenficadores">

           <div id="identificador-clone" class="id-row row">
            <div class="col-xs-12 col-md-6">
               <label for="identificador">Tipo do identificador</label>
               <select
                  id="indentificador"
                  name="identificador">
                  <option selected value="01">Número do prontuário</option>
                  <option value="02">Radiologia</option>
                  <option value="21">Patologia</option>
                  <option value="23">Farmácia</option>
               </select>
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="area-geografica">Área geográfica</label>
               <select
                  id="area-geografica"
                  name="area-geografica">
                  <option selected value="1">Local</option>
                  <option value="2">Área/região/distrito</option>
                  <option value="3">Estado/província/território</option>
               </select>
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="designacao">Designação</label>
               <input type="text"
                  id="designacao"
                  name="designacao" size="25" value="024.252.365-280">
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="data">Data</label>
               <input type="date"
                  id="data"
                  name="data" value="2018-02-01">
              </div>
              <div class="col-xs-12 col-md-6">
                <label for="emissor">Emissor</label>
                <input type="text"
                    id="emissor"
                    name="emissor" size="25" value="SPTC-GO">
              </div>
            </div>
            <div id="id-div"></div>

            <div class="col-xs-12 botao" @click.stop.prevent ="addInput">
                <button class="addMore">Acionar indentificador</button>
            </div>

            <div class="form-group  row">
               <div class="col-xs-12">
                  <label for="certidao">Tipo de Certidão</label>
                  <select
                     id="certidao"
                     name="certidao">
                     <option>Nascimento</option>
                     <option>Casamento</option>
                     <option>Divórcio</option>
                  </select>
               </div>
               <div class="col-xs-12">
                  <label for="cartorio">Nome do Cartório</label>
                  <input type="text"
                     id="cartorio"
                     name="cartorio" size="25">
               </div>
               <div class="col-xs-12 col-md-4">
                  <label for="livro">Livro</label>
                  <input type="number" class="input" name="livro">
               </div>
               <div class="col-xs-12 col-md-4">
                  <label for="folha">Folha</label>
                  <input type="number" class="input" name="folha">
               </div>
               <div class="col-xs-12 col-md-4">
                  <label for="termo">Termo</label>
                  <input type="number" class="input" name="termo">
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <h2><strong>Carteira de Trabalho</strong></h2>
                  <p>&nbsp;</p>
               </div>
               <div class="col-xs-12 col-md-6">
                  <label for="serie">Série</label>
                  <input type="number" name="serie">
               </div>
               <div class="col-xs-12 col-md-6">
                  <label for="estado">Estado</label>
                  <select
                     id="estado"
                     name="estado">
                     <option v-for="item in estados" v-bind:value="item.sigla" v-bind:key="item.sliga">{{item.nome}}</option>
                  </select>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <h2><strong>Título de Eleitor</strong></h2>
                  <p>&nbsp;</p>
               </div>
               <div class="col-xs-12 col-md-6">
                  <label for="zona">Zona</label>
                  <input type="number" name="zona">
               </div>
               <div class="col-xs-12 col-md-6">
                  <label for="sessao">Sessão</label>
                  <input type="number" name="sessao">
               </div>
            </div>
            <div class="space"></div>
         </form>
      </div>
      <send-btn></send-btn>
   </formulario-wrap>
</template>

<script>
import estados from "@/assets/combo_dinamico.json";
export default {
  name: "sidebar",
  data() {
    return {
      estados
    };
  },
  methods: {
    addInput: function() {
      var id = document.getElementById("identificador-clone");
      var idFrame = document.getElementById("id-div");
      var clone = id.cloneNode(true);
      idFrame.appendChild(clone);
    }
  }
};
</script>
<style lang="scss">
#indentificadores {
  position: relative;
}

.id-row {
  padding: 20px;
  margin-bottom: 0;
  border-radius: 5px;
  width: 100%;
}

.botao {
  margin: 0 0 30px 1.3125rem;
  width: 100%;
  text-align: left;

  button {
    background-color: #ffc107;
    cursor: pointer;
    border-radius: 5px;
    padding: 15px 30px;
    color: white;
    box-shadow: none;
    border: none;
    position: relative;
    &:before {
      content: "\f067";
      font-family: "Font Awesome 5 Free";
      font-style: normal;
      font-weight: 900;
      color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      padding-right: 15px;
    }
  }
}

#id-div {
  width: 100%;
}
</style>



