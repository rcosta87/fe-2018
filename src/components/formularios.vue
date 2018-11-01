<template>
  <section id="indentificadores" class="col-xs-12 col-md-10 no-padding">
    <header class="header">
            <div class="title-wrap">
                <h1 class="title-content">{{section_title}}</h1>
                <div class="divisor"></div>
            </div>
     </header>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ["section_title"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/media_queries.scss";
@import "@/assets/icon-font.min.scss";

form {
  padding: 25px 0;
  font-family: inherit;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    background-color: transparent;
    border: 1px solid #dbe2e8;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: inherit;
    padding: 0.8rem 0;
    width: calc(100% - 45px);
    margin-bottom: 1.2rem;
    text-indent: 0.8rem;
    font-family: inherit;
  }
}

input[type="submit"] {
  background-color: #02ccba;
  border: 0.1rem solid #02ccba;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  height: 40px;
  letter-spacing: 0.1rem;
  line-height: 40px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  width: auto;
  text-indent: 0%;
}

[class*="col-"].no-padding {
  padding: 0;
}

.form-wrap {
  background-color: white;
  margin: 0 auto;
  padding-left: 2em;
  padding-right: 2em;
  width: 90%;
  border-radius: 5px;
  position: relative;
  top: -125px;
  box-shadow: 8px 10px 12px 0 rgba(46, 61, 73, 0.2);
}

textarea {
  background-color: #f8f8f8;
  border-radius: 2px;
  width: 100%;
  font-family: "Catamaran", sans-serif;
  background-color: #f8f8f8;
  text-indent: 0%;
  color: #546e7a;
}

.checkbox-field {
  margin: 20px 0 0;
  padding: 20px 0 0;
  color: #546e7a;
  font-family: inherit;
  .check {
    width: auto;
    text-indent: 0%;
  }

  .acuracia {
    display: flex;
    flex-wrap: nowrap;
    input {
      width: auto;
      text-indent: 0%;
      margin: 0 5px;
    }
  }
}
select,
input,
.nome-completo,
.acuracia span,
.acuracia input,
.acuracia,
.check {
  color: #546e7a;
  font-family: inherit;
}

label,
legend,
strong {
  color: #546e7a + 40;
  font-weight: bold;
}

.form-group {
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  border-radius: 5px;
  width: 100%;
}

.header {
  position: relative;
  height: 300px;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 57%, 0 100%);
  clip-path: polygon(0 0, 100% 0%, 100% 57%, 0 100%);
  background-image: linear-gradient(to right, #2193b0, #6dd5ed);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    //background-image: url("@/assets/rawpixel-611110-unsplash.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
  }
}

.divisor {
  width: 120px;
  height: 2px;
  background-color: white;
  position: relative;
  margin-top: 15px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 8px;
    background-color: inherit;
  }
}
</style>

