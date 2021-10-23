<template>
  <div class="profile-page">
    <div class="content-wrapper">
      <h1>Личный кабинет</h1>
    </div>
    <el-form :model="form" label-width="120px" class="profile-form">
      <el-form-item label="ФИО">
        <el-input v-model="form.fio"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Город">
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="Положение">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="Опыт">
        <el-input v-model="form.experience"></el-input>
      </el-form-item>
      <!-- <el-form-item label="Навыки">
        <el-input v-model="form.skils"></el-input>
      </el-form-item> -->
      <el-form-item label="Навыки">
      <el-select
        class="skills-selector"
        v-model="form.skils"
        multiple
        filterable
        allow-create
        placeholder="Выберите навыки">
        <el-option
          v-for="item in skils"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="Контакты">
        <el-input type="textarea" v-model="form.contact"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateUser">Обновить</el-button>
        <el-button @click="resetForm">Вернуть</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-row :gutter="20">
      <el-col :span="6">
      </el-col>
    </el-row> -->

    <div class="companies">
      <div class="content-wrapper">
        <a href="#" class="createCompanyBtn bnt">Создать компанию</a>
        <h1>Мои компании</h1>
      <h2 v-if="myCompanies.items = []">У вас пока нет компаний. Но вы можете создать ее.</h2>
      </div>

      <div
        v-for="(item, index) in myCompanies.items"
        :key="index"
        @click="goCompany(item.c_id)"
      >
        <el-row
          :gutter="20"
          class="company-row"
        >
          <el-col :span="6" class="name">
            <img :src="item.logo_url" :alt="item.c_name" width="60">
            {{item.c_name}}
          </el-col>
          <el-col :span="12" class="">
            {{item.c_desc}} &nbsp;
          </el-col>
          <el-col :span="3" class="">
            {{item.market_id}} &nbsp;
          </el-col>
          <el-col :span="3" class="">
            {{item.reg_date}}
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Profile',
  components: {
  },
  data() {
    return {
      form: {
        'email': '',
        'fio': '',
        'city': '',
        'position': '',
        'experience': '',
        'avatar': '',
        'contact': '',
        'skils': '',
        'role': 0
      },
      skils: [
        {
          value: 'html',
          label: 'html'
        },
        {
          value: 'js',
          label: 'js'
        },
        {
          value: 'css',
          label: 'css'
        }
      ]
    }
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.myProfile)
      console.log(this.myProfile)
    },
    updateUser() {
      // console.log(this.form)
      this.$store.dispatch('updateUser', this.form)
    },
    goCompany(id) {
      router.push('/companies/' + id)
    }
  },
  computed: {
    myProfile () {
      return this.$store.getters.myProfile
    },
    myCompanies () {
      return this.$store.getters.companies
    },
    markets () {
      return this.$store.getters.markets
    }
  },
  watch: {
    myProfile() {
      this.form = Object.assign({}, this.myProfile)
    },
    myCompanies () {
      this.myCompanies.items.forEach(comp => {
        comp.logo_url = 'https://api.freelogodesign.org/assets/thumb/logo/22192360_400.png'

        this.markets.items.forEach(market => {
          if (market.market_id == comp.market_id) {
            comp.market_id = market.market_name_ru
          }
        })
      })
    }
  },
  created() {
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getMyProfile')
    this.$store.dispatch('getMyCompanies')
  }
}
</script>

<style lang="scss">
  .profile-page {
    .createCompanyBtn {
      float: right;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid #409EFF;
      color: #FFF;
      background-color: #409EFF;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      text-decoration: none;
    }
    .profile-form {
      background: #fff;
      padding: 40px 20px;
      .skills-selector {
        width: 100%;
      }
    }
  }
</style>