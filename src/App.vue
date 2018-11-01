<template>
  <div id="app">
     <div class="container-fluid">
      <div class="row row-sidebar">
         <div class="col-xs-12 col-md-2 sidebar-column">
            <!--Sidebar-->
            <aside class="sidebar">
               <!--Title-->

               <div class="sidebar-container">
               <section id="intro-user">
                  <div class="thumb">
                     <img src="@/assets/photo-1524593689594-aae2f26b75ab.jpg" alt="">
                  </div>
                  <h1>Marlene Sophia Alves</h1>
                  <small style="font-weight: normal">@marnela_alves</small>
               </section>
               <!--Title-->
               <!--Menu-->
               <nav id="menu-principal">
                  <ul class="menu">
                     <li >
                        <a v-on:click="turnActive()" target="javascript:void(0)" style="cursor: pointer">Novo paciente</a>
                        <ul class="sub-menu" v-show="isActive">
                           <li>
                              <router-link to="/">Indenficadores</router-link>
                           </li>
                           <li>
                              <router-link to="/nomes">Nomes</router-link>
                           </li>
                           <li>
                              <router-link to="/dados-demograficos">Dados Demográficos</router-link>
                           </li>
                           <li>
                              <router-link to="/enderecos">Endereços</router-link>
                           </li>
                           <li>
                              <router-link to="/comunicacoes">Comunicações Eletrônicas</router-link>
                           </li>
                           <li>
                              <router-link to="/vinculos">Vínculos</router-link>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <router-link to="/">Pacientes</router-link>
                     </li>
                  </ul>
               </nav>
               <!--Menu-->
               <nav>
                  <ul class="menu-bottom">
                     <li>
                        <router-link to="/">Sair</router-link>
                     </li>
                  </ul>
               </nav>

               </div>
            </aside>
            <!--Sidebar-->
         </div>
     <router-view/>

      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    turnActive: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/reset.scss";
@import "./assets/flexboxgrid.min.css";
@import url("https://use.fontawesome.com/releases/v5.4.2/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Catamaran");
@import "@/assets/sass/media_queries.scss";
@import "@/assets/icon-font.min.scss";

.sidebar-container {
  position: fixed;
  width: 100%;
}

body {
  font-family: "Catamaran", sans-serif;
  background-color: #f8f8f8;
  position: relative;
}

.space {
  width: 100%;
  height: 30px;
}

.title-wrap {
  padding: 90px 20px;
}

#intro-user {
  padding: 90px 0 50px;
  color: #546e7a;
  font-weight: bold;

  h1 {
    padding: 15px 0;
  }
}

.thumb {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: darkgray;
  overflow: hidden;

  img {
    width: 100%;
  }
}

.menu {
  margin: 0;
  padding: 0 0 15px;

  .sub-menu {
    padding: 15px 0 15px 15px;
    li {
      padding: 4px 0;
    }
  }

  > li {
    padding: 8px 0;
    a {
      text-decoration: none;
      color: #546e7a;
    }

    &::before {
      font-family: "Linearicons-Free";
      font-weight: bold;
      padding-right: 15px;
      color: #0288d1;
    }

    &:first-child {
      &::before {
        content: "\e881";
      }
    }

    &:nth-child(2) {
      &:before {
        content: "\e82b";
      }
    }
  }
}

.menu-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 15px 0;
  li {
    padding: 8px 0;
    a {
      text-decoration: none;
      color: #546e7a;
    }

    &:before {
      content: "\e820";
      font-family: "Linearicons-Free";
      font-weight: bold;
      padding-right: 15px;
      color: #a0a9b5;
    }
  }
}

.sidebar-column {
  background-color: white;
  -webkit-box-shadow: 5px 0px 21px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 5px 0px 21px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 0px 21px 0px rgba(0, 0, 0, 0.15);
}

.sidebar {
  @include mobile {
    height: auto;
  }
  @include desktop {
    height: 100vh;
  }
  position: relative;
}

.title-content {
  font-size: 1.8rem;
  color: white;
}
</style>
