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
          <router-link to="/corporates">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_15"></use>
            </svg>
            <span>Корпорации</span>
          </router-link>
          <router-link to="/venture">
            <svg width="28" height="15">
              <use xlink:href="/img/svg-symbols.svg#startup_type_3"></use>
            </svg>
            <span>Венчурные фонды</span>
          </router-link>
          <router-link to="/accelerators">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_5"></use>
            </svg>
            <span>Акселераторы и инкубаторы</span>
          </router-link>
          <router-link to="/incubators">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_4"></use>
            </svg>
            <span>Бизнес-инкубаторы</span>
          </router-link>
          <router-link to="/pilot">
            <svg width="28" height="30">
              <use xlink:href="/img/svg-symbols.svg#startup_type_7"></use>
            </svg>
            <span>Площадки пилотного тестирования</span>
          </router-link>
          <!-- <router-link to="/">Инжиниринговые центры </router-link>
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
              <SearchBox/>
            </el-col>
            <el-col  :xs="24" :sm="6" class="login-box">
              <div class="reqsBadge" v-if="freqs > 0">{{freqs}}</div>
              <Regform></Regform>
            </el-col>
          </el-row>
        </header>
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
// import router from '@/router'
const Regform = () => import('@/components/Regform')
const SearchBox = () => import('@/components/Search')
export default {
  name: 'App',
  components: {
    Regform,
    SearchBox
  },
  data() {
    return {
      freqs: 0,
      creqs: 0,
    }
  },
  methods: {
  },
  computed: {
    myProfile () {
      return this.$store.getters.myProfile
    }
  },
  watch: {
    myProfile() {
      this.freqs = 0
      this.myProfile.connections.forEach(item => {
        if (item.status_id == 3) {
          this.freqs++
        }
      })
    }
  },
  created() {
    this.$store.dispatch('getMyProfile')
  }
}
</script>

<style lang="scss">
  .reqsBadge {
    position: absolute;
    right: 73px;
    top: 27px;
    font-size: 12px;
    width: 18px;
    height: 18px;
    background: #fff;
    color: #000;
    border-radius: 50%;
    border: 1px solid red;
  }
</style>
