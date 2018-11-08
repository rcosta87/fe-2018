<template>
      <formulario-wrap>
            <div class="intro-home">
              <div class="intro-section-2">
                <div class="dashbord">
                    <div class="title-intro-wrap">
                  <h1 class="title-intro">Bem-vindo!</h1>
                  <div class="divisor-intro"></div>
                </div>
                <p>{{info}}</p>
                </div>
                  <div class="cadastrar-pacientes">
                    <div class="icon-card">
                      <img src="@/assets/icon-2.svg" alt="">
                    </div>
                      <div class="card-content">
                        <div class="title-subsection">
                          <h2>Cadastrar paciente</h2>
                          <div class="divisor-subsection"></div>
                        </div>
                        <p>Selecione esta opção para adicionar novos pacientes</p>
                        <router-link to="/identificadores">Acessar</router-link>
                      </div>
                  </div>
                  <div class="editar-pacientes">
                    <div class="icon-card">
                      <img src="@/assets/icon-1.svg" alt="">
                    </div>
                    <div class="card-content">
                    <div class="title-subsection">
                        <h2>Pacientes cadastrados</h2>
                        <div class="divisor-subsection"></div>
                      </div>
                      <p>Selecione esta opção para visualizar os pacientes cadastrados, editar dados ou excluir
                        </p>
                      <router-link to="/identificadores">Acessar</router-link>
                      </div>
                  </div>
                  <div class="dashbord-pacientes-cadastrados">
                    <div class="icon"><img src="@/assets/icon-3.svg" alt=""></div>

                    <div class="info">
                      <h2>Número de Pacientes registrados</h2>
                      <div class="number">1.250</div>
                    </div>

                  </div>

                  <div class="dashbord-graphic">
                      <div id="chart"></div>
                  </div>
              </div>
            </div>
     </formulario-wrap>
</template>

<script>
import ApexCharts from "apexcharts";
export default {
  data: function() {
    return {
      info:
        "Este portal tem como objetivo realizar o cadastro de identificadores de indivíduos em saúde, utilizando como referência a norma ABNT NBR  15985:2011 - Informática em Saúde - Identificação dos indivíduos em saúde."
    };
  },
  mounted: function() {
    var options = {
      chart: {
        height: 200,
        type: "line",
        shadow: {
          enabled: false,
          color: "#bbb",
          top: 3,
          left: 2,
          blur: 3,
          opacity: 1
        }
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      series: [
        {
          name: "Pacientes",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }
      ],
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001"
        ]
      },
      title: {
        text: "Pacientes registrados no último mês",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#7c96a2",
          fontFamily: "Catamaran"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 4,
        opacity: 0.9,
        colors: ["#FFA41B"],
        strokeColor: "#fff",
        strokeWidth: 2,
        style: "inverted", // full, hollow, inverted
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: -10,
        max: 40,
        title: {
          text: "Cadastrados"
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/media_queries.scss";
.intro-home {
  width: 95%;
  @include mobile {
    margin: 20px auto 20px;
  }
  @include desktop {
    margin: 30px auto 90px;
  }
}

.dashbord {
  grid-area: a;
  padding: 45px 40px;
}

.dashbord-pacientes-cadastrados {
  grid-area: d;
}

.dashbord-graphic {
  grid-area: e;
}

.editar-pacientes {
  grid-area: c;
}
.cadastrar-pacientes {
  grid-area: b;
}

.intro-section-2 {
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @include mobile {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e";
    padding: 20px;
  }
  @include desktop {
    grid-template-areas:
      "a b c"
      "a d e";
    padding: 0;
    grid-template-columns: 350px 1fr 1fr;
  }

  > div {
    background-color: #fff;
    padding: 60px 40px;
    box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
    border-radius: 5px;
    opacity: 0.95;
  }

  .dashbord-pacientes-cadastrados {
    background: #ffc159;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      img {
        height: 55px;
      }
      margin-right: 25px;
    }

    .info {
      h2 {
        color: white;
        opacity: 0.6;
      }
      .number {
        color: white;
        font-weight: bold;
        font-size: 2.9rem;
      }
    } /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .dashbord-graphic {
    padding: 15px;
  }
}

.editar-pacientes,
.cadastrar-pacientes {
  display: flex;
  p {
    margin: 18px 0;
    color: #7c96a2;
  }
  a {
    color: #6dd5ed;
    font-weight: bold;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    &:after {
      content: "\e87a";
      font-family: "Linearicons-Free";
      color: inherit;
      padding-left: 8px;
    }
  }
}

.icon-card {
  padding-right: 40px;
  img {
    width: 55px;
  }
}

.title-subsection {
  font-weight: bold;
  font-size: 20px;
  color: #2193b0;
}

.divisor-subsection {
  width: 115px;
  margin-top: 3px;
  height: 4px;
  border-radius: 1px;
  background: #ffc159;
}

.title-intro-wrap {
  padding: 15px 0;
}

.title-intro {
  color: #2193b0;
  font-weight: bold;
  font-size: 1.8rem;
}

.divisor-intro {
  width: 115px;
  margin-top: 3px;
  height: 4px;
  border-radius: 1px;
  background: #ffc159;
}
p {
  color: #7c96a2;
}
</style>

