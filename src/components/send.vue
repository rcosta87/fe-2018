<template>
<div>
   <nav id="form-navigation">
      <router-link class="btn-prev" :to="prev" v-show="!hasNext">Voltar</router-link>
      <a class="send" :to="rota" @click.stop.prevent="popUp()">Salvar</a>
      <div style="height: 150px; width: 100%;"></div>
   </nav>
   <div class="popupw-wrap" v-show="active">
     <div class="popup" >
      <div class="title">
            <div>
              <h2 class="title-popup">Dados cadastrados com sucesso!</h2>
              <div class="divisor-popup"></div>
            </div>
            <button class="out" @click.stop.prevent="popUp()">Ok</button>
       </div>
    </div>
   </div>

  </div>
</template>

<script>
export default {
  props: {
    rota: String,
    prev: String,
    hasNext: Boolean
  },
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    popUp() {
      this.active = !this.active;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/media_queries.scss";

.popupw-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.out {
  margin: 20px 0;
  background-color: #ffc159;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-family: inherit;
  color: white;
  width: 100%;
  cursor: pointer;
}

.divisor-popup {
  width: 115px;
  margin-top: 3px;
  height: 4px;
  border-radius: 1px;
  background: #ffc159;
}

.title-popup {
  font-weight: bold;
  font-size: 20px;
  color: #2193b0;
}

.popup {
  padding: 40px;
  width: 200px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  z-index: 999;
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#form-navigation {
  position: relative;
  width: 90%;
  margin: 50px auto;
  @include mobile {
    padding-left: 0;
    padding-right: 0;
  }
  @include desktop {
    padding-left: 2em;
    padding-right: 2em;
  }

  a {
    text-decoration: none;
  }

  .btn-prev {
    color: #7c96a2;
    cursor: pointer;
    position: absolute;
    left: 0;
    padding: 0.75rem 1.25rem;
    &:before {
      content: "\f060";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      border-radius: 0px 50px 50px 0px;
      margin-left: 9px;
      color: #7c96a2 - 10;
      padding-right: 9px;
    }
  }

  .send {
    position: absolute;
    right: 0;
    border-radius: 50px;
    padding: 0.75rem 1.25rem;
    box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
    background-color: #0288d1;
    border: none;
    font-weight: bold;
    color: #d3d3d3;
    cursor: pointer;

    span {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
