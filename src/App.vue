<template>
  <div id="app">
     <div class="container-fluid">
      <div class="row ">

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

body {
  font-family: "Catamaran", sans-serif;
  background-color: #eceff1;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

.title-content {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 30px 1rem 15px;
  color: #2193b0;
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    width: 80px;
    height: 2px;
    left: 0;
    bottom: -10px;
    position: absolute;
    background-color: #ffc107;
  }
}
</style>
