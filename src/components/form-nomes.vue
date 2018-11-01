<template>
   <formulario-wrap section_title="Nomes">
      <div class="form-wrap">
         <form class="row" id="nomes">
            <div class="col-xs-12 col-md-6">
               <label for="nome">Nome</label>
               <input type="text" v-model="nome" name="nome">
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="sobrenome">Sobrenome</label>
               <input type="text" v-model="sobrenome" name="sobrenome">
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="titulo">Título</label>
               <input type="text" v-model="titulo" name="titulo" placeholder="Prof., Dr.">
            </div>
            <div class="col-xs-12 col-md-6">
               <label for="sufixo">Sufixo</label>
               <input type="text" v-model="sufixo" name="sufixo" placeholder="Júnior, Filho">
            </div>
            <div class="col-xs-12 nome-completo">
               <h2><strong>Nome completo</strong></h2>
               <p>&nbsp;</p>
               <p v-if="nome || titulo || sobrenome || sufixo">{{ titulo + ' ' + sufixo + ' ' + nome + ' ' + sobrenome}}</p>
               <p v-else>-- preencha os campos --</p>
            </div>
            <div class="space"></div>
            <div class="col-xs-12">
               <label for="uso">Uso</label>
               <select id="uso">
                  <option value="1">Relatório (R)</option>
                  <option value="2">Nome de recém-nascido
                     (N)
                  </option>
                  <option value="3">Nome profissional ou
                     comercial (C)
                  </option>
                  <option value="4">Nome de solteiro
                     (nascimento) (original)
                  </option>
                  <option value="5">Nome registrado (nome
                     legal)
                  </option>
                  <option value="8">Outro nome (alias)
                  </option>
               </select>
            </div>
         </form>
      </div>

      <nav-forms titulo="Dados Demográficos" rota="/dados-demograficos"></nav-forms>
   </formulario-wrap>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      nome: "",
      sobrenome: "",
      titulo: "",
      sufixo: ""
    };
  }
};
</script>



