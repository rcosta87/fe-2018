<template>
  <formulario-wrap>
      <div class="row">
        <div class="col-xs-12">
          <div class="pacientes-list-wrap">
            <h1 class="title-content">Pacientes Cadastrados</h1>

            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>
            <div class="paciente">
              <div class="title">
                <input type="checkbox" class="checkbox-mail">
                <h2>Calebe Emanuel Otávio Fogaça</h2>
              </div>
              <div class="date">
                  <p>21 ago 2018</p>
              </div>
              <div class="actions">
                <ul>
                  <li><router-link to="/identificadores"><i class="far fa-edit"></i></router-link></li>
                  <li><router-link to="/"><i class="far fa-trash-alt"></i></router-link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>
      </div>
  </formulario-wrap>
</template>
<script>
export default {};
</script>
<style lang="scss">
.pacientes-list-wrap {
  background-color: white;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  position: relative;
  min-height: 450px;
  -webkit-box-shadow: 8px 10px 12px 0 rgba(46, 61, 73, 0.2);
  box-shadow: 8px 10px 12px 0 rgba(46, 61, 73, 0.2);

  h1 {
    margin: 40px 2rem;
  }

  p {
    color: #7c96a2;
  }
}

.title {
  display: flex;
  color: #7c96a2;
  input {
    margin-right: 25px;
  }
}

.actions {
  ul {
    display: flex;

    li {
      padding: 0 5px;
      a {
        color: #7c96a2;
        &:hover {
          color: #2193b0;
        }
      }
    }
  }
}

.paciente {
  display: flex;
  padding: 15px 2rem;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>

