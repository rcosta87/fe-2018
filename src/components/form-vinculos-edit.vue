<template>
   <formulario-wrap>
      <div class="form-wrap">
         <nav-inneredit></nav-inneredit>
         <h1 class="title-content">Vínculos</h1>
         <div class="space"></div>
         <form class="row" id="vinculos">
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
            <div class="col-xs-12 col-xs-12">
               <label for="emissor">Emissor</label>
               <input type="text"
                  id="emissor"
                  name="emissor" size="25" value="SPTC-GO">
            </div>
            <div class="col-xs-12 col-md-3">
               <label for="relacionamento">Relacionamento</label>
               <select name="relacionamento">
                  <option value="7" selected="">Avó materna</option>
                  <option value="8">Avô materno</option>
                  <option value="22">Cônjuge/companheiro(a)
                  </option>
                  <option value="23">Irmão</option>
                  <option value="24">Irmã</option>
                  <option value="25">Meio-irmão</option>
                  <option value="26">Meio-irmã</option>
                  <option value="27">Irmãos</option>
                  <option value="28">Criança</option>
                  <option value="29">Filha</option>
                  <option value="36">Avó paterna</option>
                  <option value="37">Avô paterno</option>
                  <option value="38">Tio materno</option>
                  <option value="40">Tio paterno</option>
                  <option value="41">Tia paterna</option>
                  <option value="189">Recém-nascido</option>
                  <option value="254">Pais</option>
                  <option value="262">Mãe adotiva</option>
                  <option value="263">Pai adotivo</option>
                  <option value="264">Responsável</option>
                  <option value="265">Coabitante</option>
                  <option value="939">Tia materna</option>
               </select>
            </div>
            <div class="col-xs-12 col-md-3">
               <label for="data_inicial">Data Inicial</label>
               <input type="date" name="data_inicial">
            </div>
            <div class="col-xs-12 col-md-3">
               <label for="data_final">Data Final</label>
               <input type="date" name="data-final">
            </div>
         </form>
         <div class="space"></div>
      </div>
      <send-btn></send-btn>
   </formulario-wrap>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {};
  },
  methods: {}
};
</script>
