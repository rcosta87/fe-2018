<template>
   <formulario-wrap>
      <div class="form-wrap">
         <nav-inneredit></nav-inneredit>
         <h1 class="title-content">Endereços</h1>
         <div class="space"></div>
         <form class="row" id="enderecos">
            <div class="form-group row" id="enderecos-clone">
               <div class="col-xs-12">
                  <label for="tipo_end">Tipos de Endereços</label>
                  <select name="tipo_end">
                     <option value="1">Comercial</option>
                     <option value="2">Correio ou postal</option>
                     <option value="3">Acomodação temporária</option>
                     <option value="4" selected="">Residencial</option>
                     <option value="8">Sem endereço fixo</option>
                     <option value="9">Desconhecido/não declarado</option>
                  </select>
               </div>
               <div class="col-xs-12">
                  <label for="data_inicial">Data inicial</label>
                  <input type="date" name="data-inicial">
               </div>
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Indicador de Acurácia</legend>
                     <div class="acuracia" >
                        <span>Dia: </span>
                        <div><input  type="radio" name="acurado" value="1">Acurado<br></div>
                        <div><input  type="radio" name="estimado" value="2">Estimado<br></div>
                        <div><input  type="radio" name="desconhecido" value="3">Desconhecido<br></div>
                     </div>
                     <div class="acuracia" >
                        <span>Mês: </span>
                        <input  type="radio"  name="acurado" value="1">Acurado<br>
                        <input  type="radio"  name="estimado" value="2">Estimado<br>
                        <input type="radio" name="desconhecido" value="3">Desconhecido<br>
                     </div>
                     <div class="acuracia" >
                        <span>Ano: </span>
                        <input  type="radio"  name="acurado" value="1">Acurado<br>
                        <input  type="radio"  name="estimado" value="2">Estimado<br>
                        <input type="radio" name="desconhecido" value="3">Desconhecido<br>
                     </div>
                  </fieldset>
               </div>
               <div class="space"></div>
               <div class="col-xs-12">
                  <label for="data_final">Data final</label>
                  <input type="date" name="data_final">
               </div>
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Indicador de Acurácia</legend>
                     <div class="acuracia" >
                        <span>Dia: </span>
                        <input  type="radio"  name="acurado" value="1">Acurado<br>
                        <input  type="radio"  name="estimado" value="2">Estimado<br>
                        <input type="radio" name="desconhecido" value="3">Desconhecido<br>
                     </div>
                     <div class="acuracia" >
                        <span>Mês: </span>
                        <input  type="radio"  name="acurado" value="1">Acurado<br>
                        <input  type="radio"  name="estimado" value="2">Estimado<br>
                        <input type="radio" name="desconhecido" value="3">Desconhecido<br>
                     </div>
                     <div class="acuracia" >
                        <span>Ano: </span>
                        <input  type="radio"  name="acurado" value="1">Acurado<br>
                        <input  type="radio"  name="estimado" value="2">Estimado<br>
                        <input type="radio" name="desconhecido" value="3">Desconhecido<br>
                     </div>
                  </fieldset>
               </div>
               <div class="space"></div>
               <div class="col-xs-12 col-md-3">
                  <label for="caixa_postal">Caixa Postal</label>
                  <input type="number"  name="caixa_postal">
               </div>
               <div class="col-xs-12 col-md-3">
                  <label for="cep">Cep</label>
                  <input type="number"  name="cep" placeholder="Exemplo, 74000-010.">
               </div>
               <div class="col-xs-12 col-md-3">
                  <label for="bairro">Bairro</label>
                  <input type="text"  name="bairro" >
               </div>
               <div class="col-xs-12 col-md-3">
                  <label for="distrito">Distrito</label>
                  <input type="text"  name="distrito" >
               </div>
               <div class="col-xs-12">
                  <label for="end">Endereço</label>
                  <input type="text"  name="end" >
               </div>
            </div>
            <div id="end-div"></div>
            <div class="col-xs-12 botao" @click.stop.prevent ="addInputEnd">
               <button class="addMore">Acionar outro endereço</button>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Nacionalidade</legend>
                     <div class="acuracia" >
                        <input  type="radio"  name="vehicle1" value="brasileiro" v-model="nacionalidade">Brasileiro <br>
                        <input  type="radio"  name="vehicle1" value="estrangeiro" v-model="nacionalidade">Estrangeiro <br>
                     </div>
                  </fieldset>
               </div>
               <div class="space"></div>
               <div class="col-xs-12" v-show="nacionalidade === 'brasileiro'">
                  <label for="">Selecione um estado:</label>
                  <select id="estados" v-model="selected">
                     <option value="first" disabled selected>Selecione um Estado</option>
                     <option v-for="item in estados" v-bind:value="item.cidades" v-bind:key="item.sliga"> {{ item.nome }} </option>
                  </select>
                  <label for="">Municípios:</label>
                  <select id="cidades">
                     <option v-for="item in selected" v-bind:value="item.sigla" v-bind:key="item.sigla"> {{item}} </option>
                  </select>
               </div>
               <div class="col-xs-12" v-show="nacionalidade === 'estrangeiro'">
                  <label for="paises">País</label>
                  <select name="paises" id="pais">
                     <option v-for="pais in paises" v-bind:value="pais.sigla" v-bind:key="pais.sigla">{{pais.nome_pais}}</option>
                  </select>
                  <label for="estado">Estado</label>
                  <input type="text" name="estado">
                  <label for="municipio" >Município</label>
                  <input type="text" name="municipio">
               </div>
            </div>
         </form>
      </div>
      <send-btn></send-btn>
      </formulario-wrap>
</template>
<script>
import estados from "@/assets/combo_dinamico.json";
import paises from "@/assets/paises.json";
export default {
  name: "sidebar",
  data() {
    return {
      estados,
      selected: estados[0].cidades,
      nacionalidade: "",
      paises
    };
  },
  methods: {
    currentState: function(el) {
      this.currentState = el;
    },
    addInputEnd: function() {
      var id = document.getElementById("enderecos-clone");
      var idFrame = document.getElementById("end-div");
      var clone = id.cloneNode(true);
      idFrame.appendChild(clone);
    }
  }
};
</script>
<style lang="scss">
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
</style>
>

</style>

