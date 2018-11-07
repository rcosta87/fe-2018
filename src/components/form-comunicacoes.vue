<template>
   <formulario-wrap>
      <div class="form-wrap">
        <h1 class="title-content">Comunicações Eletrônicas</h1>
         <div class="space"></div>
         <form class="row" id="comunicacoes">
            <div class="col-xs-12 col-md-3">
               <label for="meio">Meio</label>
               <select
                  id="meio"
                  name="meio">
                  <option selected value="telefone">Telefone</option>
                  <option value="celular">Celular</option>
                  <option value="fax">Fax</option>
                  <option value="pager">Pager</option>
                  <option value="email">Email</option>
                  <option value="url">URL</option>
               </select>
            </div>
            <div class="col-xs-12 col-md-3">
               <label for="telefone">Telefone</label>
               <input type="text" name="telefone">
            </div>
            <div class="col-xs-12 col-md-3">
               <label for="preferencia">Preferência</label>
               <select name="preferencia">
                  <option value="B" selected="">Horário comercial
                  </option>
                  <option value="D">Durante o dia</option>
                  <option value="W">Finais de semana</option>
                  <option value="A">Qualquer hora</option>
                  <option value="E">Período noturno</option>
               </select>
            </div>
            <div class="col-xs-12 col-md-3">
               <label for="utilizacao">Utilização</label>
               <select name="utilizacao">
                  <option value="B" selected="">Comercial</option>
                  <option value="D">Pessoal</option>
                  <option value="W">Comercial ou pessoal</option>
               </select>
            </div>
         </form>
         <div class="space"></div>
      </div>
      <nav-forms titulo="Vínculos" rota="/vinculos" prev="/enderecos"></nav-forms>
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
