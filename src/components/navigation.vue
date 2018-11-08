<template>
<div>
   <nav id="form-navigation-bottom">
      <router-link class="btn-prev" :to="prev" v-show="!hasNext">Voltar</router-link>
      <router-link class="next" :to="rota"><span>{{titulo}} / </span>Próximo</router-link>
   </nav>
   <div style="height: 150px; width: 100%;"></div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    rota: String,
    prev: String,
    hasNext: Boolean
  }
};
</script>
<style lang="scss" >
@import "@/assets/sass/media_queries.scss";

#form-navigation-bottom {
  width: 90%;
  margin: 50px auto 0;
  position: relative;

  a {
    text-decoration: none;
  }

  .btn-prev,
  .next {
    @include mobile {
      position: relative;
      display: inline-block;
      margin: 15px 0;
    }
    @include desktop {
      position: absolute;
    }
  }
  .btn-prev {
    color: #7c96a2;
    cursor: pointer;
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
