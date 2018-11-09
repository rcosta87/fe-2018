<template>
  <formulario-wrap>

          <div class="pacientes-list-wrap">
            <h1 class="title-content">Pacientes Cadastrados</h1>
            <div class="filter">
              <div>
               <label for="uso">Filtrar por:</label>
               <select id="uso" v-model="selection">
                  <option value="indenficidador">Indentificador</option>
                  <option value="nome">Nome</option>
               </select>
              </div>
               <div v-show="selection" class="search">
                  <label for="pesquisar">Entrar com {{selection}} : </label>
                  <input type="search" name="pesquisar" class="search-input" placeholder="O que você procura?">
               </div>

            </div>
            <div class="paciente">
              <div class="title">

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

        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>
  </formulario-wrap>
</template>
<script>
export default {
  data: function() {
    return {
      selection: ""
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/media_queries.scss";
.filter {
  padding: 25px 2rem;
  display: flex;

  @include mobile {
    flex-wrap: wrap;
    .search {
      margin-left: 0;
    }
  }

  @include desktop {
    flex-wrap: nowrap;
    .search {
      margin-left: 25px;
    }
  }

  select,
  input {
    background-color: transparent;
    border: 1px solid #dbe2e8;
    border-radius: 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    padding: 10px 0;
    margin-bottom: 1.2rem;
    text-indent: 0.8rem;
    font-family: inherit;
    width: 150px;
  }
}
.pacientes-list-wrap {
  background-color: white;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  position: relative;
  min-height: 450px;
  -webkit-box-shadow: 8px 10px 12px 0 rgba(46, 61, 73, 0.2);
  box-shadow: 8px 10px 12px 0 rgba(46, 61, 73, 0.2);
  @include mobile {
    padding: 0;
  }
  @include desktop {
    padding: 0 2rem;
  }

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
  flex-wrap: wrap;
  padding: 15px 2rem;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.search-input {
  position: relative;
  width: 150px;

  &:before {
    content: "\f002";
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;
    position: absolute;
    right: 15px;
    width: 15px;
    height: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

