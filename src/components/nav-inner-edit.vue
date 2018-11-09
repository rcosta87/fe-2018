<template>
    <nav id="header-pacientes">
        <ul>
          <li><router-link to="/identificadores-edit">Indentificadores</router-link></li>
          <li><router-link to="/nomes-edit">Nomes</router-link></li>
          <li><router-link to="/dados-demograficos-edit">Dados Demográficos</router-link></li>
          <li><router-link to="/enderecos-edit">Endereços</router-link></li>
          <li><router-link to="/comunicacoes-edit">Comunicações</router-link></li>
          <li><router-link to="/vinculos-edit">Vínculos</router-link></li>
        </ul>
      </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
#header-pacientes {
  padding: 20px 5px 10px;
  z-index: 1;
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  li {
    padding: 5px;
    a {
      text-decoration: none;
      color: #7c96a2;
      font-size: 13px;
    }

    &:after {
      content: "\e876";
      font-family: "Linearicons-Free";
      padding-left: 5px;
      color: #2193b0;
      font-size: 9px;
    }

    &:last-child {
      &::after {
        content: "";
      }
    }

    a.router-link-active {
      font-weight: bold;
    }
  }
}
</style>

