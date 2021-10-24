<template>
  <div class="main-container">
    <el-row :gutter="0">
      <el-col :span="6" class="main-sidebar">
        <div class="main-logo">
          <a href="/">
            <img src="/img/logo.svg" width="180" height="65" class="img-fluid" alt="Агентство инноваций города Москвы">
          </a>
        </div>
        <div class="main-nav">
          <router-link to="/companies">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_1"></use>
            </svg>
            <span>Стартапы и тех.компании</span>
          </router-link>
          <router-link to="/companies">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_15"></use>
            </svg>
            <span>Корпорации</span>
          </router-link>
          <router-link to="/companies">
            <svg width="28" height="15">
              <use xlink:href="/img/svg-symbols.svg#startup_type_3"></use>
            </svg>
            <span>Венчурные фонды</span>
          </router-link>
          <router-link to="/companies">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_5"></use>
            </svg>
            <span>Акселераторы и инкубаторы</span>
          </router-link>
          <router-link to="/companies">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_4"></use>
            </svg>
            <span>Бизнес-инкубаторы</span>
          </router-link>
          <!-- <router-link to="/">Площадки пилотное тестирова...</router-link>
          <router-link to="/">Инжиниринговые центры </router-link>
          <router-link to="/">Коворкинги и офисы</router-link>
          <router-link to="/">Институты развития / ассоциац...</router-link> -->
        </div>
        <div class="main-nav dark">
          <router-link to="/supportentities">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#growth-program"></use>
            </svg>
            <span>ПОДБОР АКСЕЛЕРАЦИОННЫХ ПРОГРАММ</span>
          </router-link>
        </div>
      </el-col>
      <el-col :span="18" class="main-content">
        <header class="main-header">
          <el-row :gutter="0">
            <el-col :span="18" class="main-header-logo">
              <input type="search" class="search-bar" placeholder="Найти стартап, инвестора, сервисы">
            </el-col>
            <el-col :span="6" class="login-box">
              <Regform></Regform>
            </el-col>
          </el-row>
        </header>
        <!-- <div class="content-wrapper">
          <h1>СТАРТАП-НАВИГАТОР МОСКВЫ</h1>
          <h3>Вся информация, необходимая для роста бизнеса</h3>
        </div> -->
        <router-view></router-view>
      </el-col>
    </el-row>

    <footer class="main-footer">
      <el-row :gutter="0">
        <el-col :span="6" class="footer-logo-box" justify="center" align="middle">
          <a href="/" target="_blank" class="footer-logo">
              <img src="/img/aim-logo.svg" width="180" height="65" class="img-fluid" alt="Агентство инноваций города Москвы">
          </a>
        </el-col>
        <el-col :span="18" class="footer-content">
          <a href="/" target="_blank"><h5>О проекте</h5></a>
          <a href="/" target="_blank">Политика в отношении обработки персональных данных</a>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>

<script>
// import router from '@/router'
const Regform = () => import('@/components/Regform')
export default {
  name: 'App',
  components: {
    Regform
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    myProfile () {
      return this.$store.getters.myProfile
    }
  },
  created() {
    this.$store.dispatch('getMyProfile')
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    background: #0458FE;
  }
  .datatable-page {
    background: #F2F3F6;
    .el-table {
      padding-bottom: 20px;
      td.el-table__cell {
        border: 0;
        cursor: pointer;
      }
    }
  }
  .main-container {
    max-width: 1740px;
    margin: 0 auto;
    background: #24314A;
  }
  .main-header {
    width: 100%;
    height: 93px;

    .search-bar {
      padding: 10px 16px;
      margin: 21px 40px;
      width: 90%;
      font-size: 1.6em;
    }

    .login-box {
      background: #FF1F55;
      height: 93px;
      text-align: center;
      padding-top: 28px;
      a.dialogbtn {
        display: block;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  .main-sidebar {
    .main-logo {
      width: 100%;
      background: #fff;
      img {
        padding: 28px 22px;
      }
    }
    .main-nav {
      background: #fff;
      padding: 20px 0;
      a {
        display: inline-flex;
        align-items: center;
        padding: 16px 32px 16px 28px;
        text-decoration: none;
        span {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          text-transform: uppercase;
          color: #1D2435;
          position: relative;
        }

         svg {
          flex: 0 0 auto;
          fill: none;
          text-align: center;
          margin-right: 1.75rem;
          margin-top: 2px;
          stroke: #1D2435;
          transition: stroke .2s ease-out, fill .2s ease-out;
        }

        // &:before {
        //   position: absolute;
        //   content: '';
        //   left: 32px;
        //   top: 13px;
        //   width: 22px;
        //   height: 15px;
        //   background: url(/img/st-icon.svg) left top no-repeat;
        // }

        &.active {
          background: #E1E4F4;
        }
        &:hover {
          // background: #E1E4F4;
          text-decoration: underline;
        }
      }
      &.dark {
        background: none;
        a {
          span {
            color: #fff;
          }
          svg {
            stroke: #FF1F55;
          }
          &:before {
            filter: invert(50%);
          }
        }
        &:hover {
          background: none;
        }
      }
    }
  }
  .main-content {
    background: #fff url(/img/bg.png) left top no-repeat;
    background-size: 100%;
    .content-wrapper {
      padding: 40px 20px;
    }
  }
  .main-footer {
    width: 100%;
    height: 179px;
    background: #1D2435;
    color: #878B95;

    .footer-content {
      color: rgba(242, 243, 246, 0.5);
      padding: 52px !important;
      font-size: 11px;

      h5 {
        font-weight: bold;
        margin: 8px 0 16px;
        font-size: 14px;
        line-height: 1.28;
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
        text-transform: uppercase;
      }

      a {
        text-decoration: none;
        color: rgba(242, 243, 246, 0.5);
      }
    }

    .footer-logo-box {
      height: 179px;
      background: #171E2D;

      .footer-logo {
        opacity: .5;
        color: #F2F3F6;
        img {
          margin-top: 60px;
        }
      }
    }
  }

  a {
    transition-property: color, background-color, border-color, opacity;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .btn {
    display: inline-block;
    padding: 0.4375rem 0.8125rem 0.75rem 0.75rem;
    border-radius: 2.9375rem;
    box-shadow: 0px 10px 10px #e1e4f4, 0px -3px 10px #ffffff;
    color: #0459FF;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 0.8125rem;
    margin-right: 0.8125rem;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .pt-0 {
    padding-top: 0 !important;
  }
  .pb-0 {
    padding-bottom: 0 !important;
  }
  .pull-right {
    float: right;
  }

</style>
