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
              <el-input class="search-bar input-with-select" placeholder="Найти стартап, инвестора, сервисы" v-model="searchQuery">
                <el-button @click="findIt" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col  :xs="24" :sm="6" class="login-box">
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
        <el-col :span="6" class="footer-logo-box" justify="center" align="middle" hidden-sm-and-down>
          <a href="/" target="_blank" class="footer-logo">
              <img src="/img/aim-logo.svg" width="180" height="65" class="img-fluid" alt="Агентство инноваций города Москвы">
          </a>
        </el-col>
        <el-col :span="6" class="footer-content partners">
          <h5>Наши партнеры</h5>
          <el-row :gutter="0">
            <el-col :xs="24" :sm="12">
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj9v7Sg8uPzAhUTi8MKHVt2ChwQFnoECAcQAQ&url=https%3A%2F%2Ffondatom.ru%2Fabout%2F&usg=AOvVaw2n256RCg26miZqxvpeS_UF" target="_blank">Фонд "Атом"</a>
              <a href="https://connectim.pro" target="_blank">Connect +</a>
              <a href="https://startech.vc/en" target="_blank">Startech.vc</a>
              <a href="https://www.napoleonit.com" target="_blank">Napoleon.it</a>
            </el-col>
            <el-col :xs="24" :sm="12">
              <a href="#" target="_blank">Meetsapp</a>
              <a href="http://sberbank.ru" target="_blank">Sber</a>
              <a href="https://sk.ru" target="_blank">Skolkovo</a>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10" class="footer-content">
          <h5>О проекте</h5>
          <a href="/" target="_blank">Политика в отношении обработки персональных данных</a>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>

<script>
import router from '@/router'
const Regform = () => import('@/components/Regform')
export default {
  name: 'App',
  components: {
    Regform
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    findIt() {
      this.$store.dispatch('getSearch', this.searchQuery)
      router.push('/search')
    }
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

</style>
