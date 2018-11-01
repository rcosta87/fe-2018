<template>
   <formulario-wrap section_title="Vínculos">
      <div class="form-wrap">
         <div class="space"></div>
         <form class="row" id="vinculos">
            <div class="col-xs-12 col-md-3">
               <label for="identificador">Indentificador</label>
               <input type="text" name="indetificador">
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
