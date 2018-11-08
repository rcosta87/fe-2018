<template>
   <formulario-wrap>
      <div class="form-wrap">
        <nav-inner></nav-inner>

        <h1 class="title-content">Dados Demográficos</h1>
         <div class="space"></div>
         <form class="row" id="dados_demograficos">
            <div class="form-group row">
               <div class="col-xs-12">
                  <label for="mae">Mãe</label>
                  <input name="mae" type="text" placeholder="nome completo da mãe">
               </div>
               <div class="col-xs-12">
                  <label for="pai">Pai</label>
                  <input name="pai" type="text" placeholder="nome completo do pai">
               </div>
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Situação Familiar (convive com)</legend>
                     <input type="checkbox" class="check"  value="1">companheiro(a) e filho(s)<br>
                     <input type="checkbox" class="check"  value="2">companheiro(a) com laços conjugais e sem filhos<br>
                     <input type="checkbox" class="check"  value="3">companheiro(a), com filho(s) e/ou outro(s) familiar(es)<br>
                     <input type="checkbox" class="check"  value="4">familiar(es) sem companheiro(a)<br>
                     <input type="checkbox" class="check"  value="5">outra(s) pessoa(s) sem laços consanguíneos e/ou laços conjugais<br>
                     <input type="checkbox" class="check"  value="6">vive só<br>
                  </fieldset>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <label for="data-nascimento">Data de Nascimento</label>
                  <input name="data-nascimento" type="date" >
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
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Seguimento</legend>
                     <input type="checkbox" class="check" name="data_seguimento" value="4">Data precisa de seguimento<br>
                  </fieldset>
               </div>
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Fonte de Notificação</legend>
                     <div class="acuracia" >
                        <input  type="radio"  name="cartorio" value="1">Cartório <br>
                        <input  type="radio"  name="prestador" value="2">Prestador de assistência à saúde <br>
                        <input type="radio" name="outro" value="3">Outro<br>
                        <input type="radio" name="desconhecido" value="4">Desconhecido<br>
                     </div>
                  </fieldset>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <label for="data-nascimento">Óbito</label>
                  <input name="data-nascimento" type="date" >
               </div>
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Indicador de Acurácia</legend>
                     <div class="acuracia" >
                        <span>Dia: </span>
                        <input  type="radio"   value="1">Acurado<br>
                        <input  type="radio"   value="2">Estimado<br>
                        <input type="radio"  value="3">Desconhecido<br>
                     </div>
                     <div class="acuracia" >
                        <span>Mês: </span>
                        <input  type="radio"   value="1">Acurado<br>
                        <input  type="radio"   value="2">Estimado<br>
                        <input type="radio"  value="3">Desconhecido<br>
                     </div>
                     <div class="acuracia" >
                        <span>Ano: </span>
                        <input  type="radio"   value="1">Acurado<br>
                        <input  type="radio"   value="2">Estimado<br>
                        <input type="radio"  value="3">Desconhecido<br>
                     </div>
                  </fieldset>
               </div>
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Fonte de Notificação</legend>
                     <div class="acuracia" >
                        <input  type="radio"  name="cartorio" value="1">Cartório <br>
                        <input  type="radio"  name="prestador" value="2">Prestador de assistência à saúde <br>
                        <input type="radio" name="outro" value="3">Outro<br>
                        <input type="radio" name="desconhecido" value="4">Desconhecido<br>
                     </div>
                  </fieldset>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Raça</legend>
                     <input type="checkbox" class="check"  value="1">branca<br>
                     <input type="checkbox" class="check"  value="2">preta<br>
                     <input type="checkbox" class="check"  value="3">parda<br>
                     <input type="checkbox" class="check"  value="4">amarela<br>
                     <input type="checkbox" class="check"  value="5">indígena<br>
                  </fieldset>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Sexo</legend>
                     <input type="checkbox" class="check"  value="1">masculino (M)<br>
                     <input type="checkbox" class="check"  value="2">feminino (F)<br>
                     <input type="checkbox" class="check"  value="3">intersexo ou indeterminado (I)<br>
                     <input type="checkbox" class="check"  value="4">não declarado (U)<br>
                  </fieldset>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <fieldset class="checkbox-field">
                     <legend>Nacionalidade</legend>
                     <div class="acuracia" >
                        <input  type="radio"  name="brasileiro" value="brasileiro" v-model="nacionalidade" checked>Brasileiro <br>
                        <input  type="radio"  name="estrangeiro" value="estrangeiro" v-model="nacionalidade">Estrangeiro <br>
                     </div>
                  </fieldset>
               </div>
               <div class="space"></div>
               <div class="form-group row" v-show="nacionalidade === 'brasileiro'">
                  <div class="col-xs-12">
                     <label for="estados">Selecione um estado:</label>
                     <select id="estados" name="estados" v-model="selected">
                        <option value="first" disabled selected>Selecione um Estado</option>
                        <option v-for="item in estados" v-bind:value="item.cidades" v-bind:key="item.sliga"> {{ item.nome }} </option>
                     </select>
                     <label for="cidades">Municípios:</label>
                     <select id="cidades" name="cidades">
                        <option v-for="item in selected" v-bind:value="item.sigla" v-bind:key="item.sigla"> {{item}} </option>
                     </select>
                  </div>
               </div>
               <div class="form-group row" v-show="nacionalidade === 'estrangeiro'">
                  <div class="col-xs-12">
                     <label for="">País de Nascimento</label>
                     <select id="pais">
                        <option v-for="pais in paises" v-bind:value="pais.sigla" v-bind:key="pais.sliga"> {{ pais.nome_pais }} </option>
                     </select>
                     <label for="data_entrada">Data de entrada no Brasil</label>
                     <input type="date" name="data_entrada">
                  </div>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <label for="pluralidade">Pluralidade de nascimentos:</label>
                  <select name="pluraridade">
                     <option value="1">Único</option>
                     <option value="2">Gêmeos</option>
                     <option value="3">Trigêmeos</option>
                     <option value="4">Quádruplos</option>
                     <option value="5">Quíntuplos</option>
                     <option value="6">Sêxtuplos</option>
                     <option value="7">Outros</option>
                     <option value="9" selected="">Não declarado</option>
                  </select>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <label for="ordem_nasimento">Ordem de nascimento</label>
                  <select name="ordem_nasimento">
                     <option value="1">único ou primeiro</option>
                     <option value="2">segundo</option>
                     <option value="3">terceiro</option>
                     <option value="4">quarto</option>
                     <option value="5">quinto</option>
                     <option value="6">sexto</option>
                     <option value="7">outros</option>
                     <option value="9" selected="">não declarado</option>
                  </select>
               </div>
            </div>
            <div class="form-group row">
               <div class="col-xs-12">
                  <label for="comentarios">Comentário de identificação</label>
                  <textarea id="comentarios" name="comentarios"
                     rows="3" cols="33" maxlength="200"
                     wrap="hard" placeholder="exemplo: dois pacientes com o mesmo nome. Não é o mesmo que 123456">
                  </textarea>
               </div>
            </div>
            <div class="space"></div>
         </form>
      </div>
      <nav-forms titulo="Endereços" rota="/enderecos" prev="/nomes"></nav-forms>
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
      paises,
      selected: estados[0].cidades,
      nacionalidade: ""
    };
  },
  methods: {
    currentState: function(el) {
      this.currentState = el;
    }
  }
};
</script>

