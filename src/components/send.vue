<template>
   <nav id="form-navigation">
      <router-link class="btn-prev" :to="prev" v-show="!hasNext">Voltar</router-link>
      <router-link class="next" :to="rota">Salvar</router-link>
      <div style="height: 150px; width: 100%;"></div>
   </nav>
</template>

<script>
export default {
  props: {
    rota: String,
    prev: String,
    hasNext: Boolean
  }
};
</script>
<style lang="scss">
#form-navigation {
  position: relative;
  width: 90%;
  margin: 50px auto;
  padding-left: 2em;
  padding-right: 2em;

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

  .next {
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
    &:after {
      content: "\f061";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      border-radius: 0px 50px 50px 0px;
      margin-left: 9px;
    }
    span {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
