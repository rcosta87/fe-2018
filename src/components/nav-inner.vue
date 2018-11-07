<template>
    <nav id="header-pacientes">
        <ul>
          <li><router-link to="/identificadores">Indentificadores</router-link></li>
          <li><router-link to="/nomes">Nomes</router-link></li>
          <li><router-link to="/dados-demograficos">Dados Demográficos</router-link></li>
          <li><router-link to="/enderecos">Endereços</router-link></li>
          <li><router-link to="/comunicacoes">Comunicações</router-link></li>
          <li><router-link to="/vinculos">Vínculos</router-link></li>
        </ul>
      </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
#header-pacientes {
  padding: 20px 2rem 20px;
  z-index: 1;
  ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  li {
    padding: 10px;
    a {
      text-decoration: none;
      color: #7c96a2;
      font-size: 15px;
    }

    a.router-link-active {
      border-bottom: 2px solid #7c96a2;
      font-weight: bold;
    }
  }
}
</style>

