<template>
   <nav id="form-navigation">
      <router-link class="next" :to="rota"><span>{{titulo}} / </span>Próximo</router-link>
   </nav>
</template>

<script>
export default {
  props: ["titulo", "rota"]
};
</script>
<style lang="scss">
#form-navigation {
  position: relative;
  top: -100px;
  width: 90%;
  margin: 0 auto;
  padding-left: 2em;
  padding-right: 2em;

  a {
    text-decoration: none;
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
