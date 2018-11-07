<template>
      <formulario-wrap>
            <div class="intro-home">
              <div class="intro-section-1">
                <div class="title-intro-wrap">
                  <h1 class="title-intro">Bem-vindo!</h1>
                  <div class="divisor-intro"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eum nemo officiis reprehenderit enim similique blanditiis dicta animi accusantium suscipit odit quia, expedita ut, eius tempore atque ad consequatur quo.</p>
              </div>
              <div class="intro-section-2">
                  <div class="cadastrar-pacientes">
                      <div class="title-subsection">
                        <h2>Cadastrar paciente</h2>
                        <div class="divisor-subsection"></div>

                      </div>
                      <p>Selecione esta opção para adicionar novos pacientes</p>
                      <router-link to="/identificadores">Acessar</router-link>
                  </div>
                  <div class="editar-pacientes">
                    <div class="title-subsection">
                        <h2>Pacientes cadastrados</h2>
                        <div class="divisor-subsection"></div>
                      </div>
                      <p>Selecione esta opção para visualizar os pacientes cadastrados, editar dados ou excluir
                        </p>
                      <router-link to="/identificadores">Acessar</router-link>
                  </div>
              </div>
            </div>
     </formulario-wrap>
</template>

<script>
export default {};
</script>

<style lang="scss">
.intro-home {
  width: 100%;
  margin: 90px auto 90px;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: 450px 1fr;
}

.editar-pacientes,
.cadastrar-pacientes {
  p {
    margin: 18px 0;
    color: #7c96a2;
  }
  a {
    color: #6dd5ed;
    font-weight: bold;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    &:after {
      content: "\e87a";
      font-family: "Linearicons-Free";
      color: inherit;
      padding-left: 8px;
    }
  }
}

.title-subsection {
  font-weight: bold;
  font-size: 20px;
  color: #2193b0;
}

.divisor-subsection {
  width: 115px;
  margin-top: 3px;
  height: 4px;
  border-radius: 1px;
  background: #2193b0;
}

.intro-section-1 {
  padding: 0 40px 40px;

  .title-intro-wrap {
    padding: 15px 0;
  }

  .title-intro {
    color: white;
    font-weight: bold;
    font-size: 1.8rem;
  }

  .divisor-intro {
    width: 115px;
    margin-top: 3px;
    height: 4px;
    border-radius: 1px;
    background: #fff;
  }
  p {
    color: #fff;
  }
}

.intro-section-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-right: 2rem;

  > div {
    background-color: #fff;
    padding: 15% 40px;
    box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
    border-radius: 5px;
  }
}
</style>

