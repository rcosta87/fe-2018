<template>
   <formulario-wrap section_title="Indenficicadores">
      <div class="form-wrap">
         <div class="space"></div>
         <form class="row" id="indenficadores">
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
                  name="designacao" size="25">
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="data">Data</label>
               <input type="date"
                  id="data"
                  name="data">
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="emissor">Emissor</label>
               <input type="text"
                  id="emissor"
                  name="emissor" size="25">
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
  methods: {}
};
</script>


