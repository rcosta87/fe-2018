<template>
  <formulario-wrap show>
    <div class="login-wrap">
        <div class="avatar">
        </div>
        <div class="form">
          <div class="user">
            <label for="user">Usuário: </label>
            <input type="text" name="user">
          </div>
          <div class="senha">
            <label for="senha">Senha:  </label>
            <input type="password" name="senha" id="senha">
          </div>
          <div class="entrar">
            <button type="submit" class="entrar" @click.stop.prevent="submit()">Entrar</button>
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
  methods: {
    submit() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss">
.login-wrap {
  background-color: #fff;
  padding: 60px 40px;
  -webkit-box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  border-radius: 5px;
  opacity: 0.95;
  width: 280px;
  margin: 280px auto 0;
  transform: translateY(-50%);
}

.form {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
}

.entrar {
  background-color: #ffc159;
  border-radius: 5px;
  color: #fff;
  border: none;
  box-shadow: none;
  display: inline;
  cursor: pointer;
  font-family: inherit;
}
.user,
.senha,
.entrar {
  margin: 10px 0;
  width: 100%;

  label {
    display: block;
  }
  input {
    width: 100%;
    background-color: transparent;
    border: 1px solid #dbe2e8;
    border-radius: 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    padding: 0.8rem 0;
    margin-bottom: 1.2rem;
    text-indent: 0.8rem;
    font-family: inherit;
  }
}
</style>
