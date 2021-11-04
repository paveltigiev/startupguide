<template>
  <div class="profile-page">
    <div class="content-wrapper">
      <h1>Личный кабинет</h1>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
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
          <el-form-item label="Должность">
            <el-input v-model="form.position"></el-input>
          </el-form-item>
          <el-form-item label="Опыт">
            <el-input v-model="form.experience"></el-input>
          </el-form-item>
          <el-form-item label="Навыки">
          <el-select
            class="skills-selector"
            v-model="selected_skills"
            multiple
            filterable
            allow-create
            value-key="id"
            placeholder="Выберите навыки">
            <el-option
              v-for="item in skills.items"
              :key="item.id"
              :label="item.name"
              :value="item">
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
      </el-col>
      <el-col :span="6">
        <h3>Ваши друзья</h3>
        <div v-if="friends.length > 0">
          <div class="friend" v-for="(item, i) in friends" :key="i">
            <router-link :to="'/users/' + item.user1_id" class="userName">
              {{item.user1_name}}
            </router-link>
          </div>
        </div>
        <p v-else>
          У вас пока нет друзей. Вы можете найти их пользуясь поиском в верхней части сайта.
        </p>

        <h3 style="margin-top: 32px">Ваши заявки в друзья</h3>
        <div v-if="reqs.length > 0">
          <div class="friend" v-for="(item, i) in reqs" :key="i">
            <router-link :to="'/users/' + item.user1_id" class="userName">{{item.user1_name}}</router-link>
            &nbsp;
            <span @click="acceptFriend(item.user1_id)" class="fr_actions">✅</span>
            <span @click="denyFriend(item.user1_id)" class="fr_actions">❌</span>
          </div>
        </div>
        <p v-else>
          У вас пока нет заявок в друзья.
        </p>
      </el-col>
    </el-row>

    <div class="companies">
      <div class="content-wrapper" style="padding-bootom:0">
        <a href="/newcompany" class="createCompanyBtn bnt">Создать компанию</a>
        <h1>Мои компании</h1>
      <h2 v-if="myCompanies.items == []">У вас пока нет компаний. Но вы можете <a href="/newcompany">создать её</a>.</h2>
      </div>

      <el-row
        :gutter="20"
        class="company-row-header"
      >
        <el-col :span="6" class="name">
          Название
        </el-col>
        <el-col :span="12" class="">
          Описание
        </el-col>
        <el-col :span="3" class="">
          Рынок
        </el-col>
        <el-col :span="3" class="">
          Основана
        </el-col>
      </el-row>
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
        email: '',
        fio: '',
        city: '',
        position: '',
        experience: '',
        avatar: '',
        contact: '',
        skils: '',
        role: 0
      },
      selected_skills: [],
      friends: [],
      reqs: []
    }
  },
  methods: {
    acceptFriend(id) {
      this.$store.dispatch('acceptFriend', id)
    },
    denyFriend(id) {
      this.$store.dispatch('denyFriend', id)
    },
    resetForm() {
      this.form = Object.assign({}, this.myProfile)
      this.selected_skills = []
      this.myProfile.skills.forEach(item => {
        let sk = {
          id: item.skill_id,
          name: item.name
        }
        this.selected_skills.push(sk)
      })
    },
    updateUser() {
      this.form.skills = []
      if (this.selected_skills) {
        this.selected_skills.forEach((item) => {
          let sk = {
            skill_id: item.id,
            name: item.name,
            is_main: false
          }
          this.form.skills.push(sk)
        }) 
      } else {
        this.form.skills = []
      }
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
      return this.$store.getters.myCompanies
    },
    markets () {
      return this.$store.getters.markets
    },
    skills () {
      return this.$store.getters.skills
    }
  },
  watch: {
    myProfile() {
      this.form = Object.assign({}, this.myProfile)
      this.selected_skills = []
      this.myProfile.skills.forEach(item => {
        let sk = {
          id: item.skill_id,
          name: item.name
        }
        this.selected_skills.push(sk)
      })
      this.friends = []
      this.reqs = []
      this.myProfile.connections.forEach(item => {
        if (item.status_id == 1) {
          this.friends.push(item)
        }
      })
      this.myProfile.connections.forEach(item => {
        if (item.status_id == 3) {
          this.reqs.push(item)
        }
      })
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
    this.$store.dispatch('getSkills')
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
  .companies {
    padding: 0 10px 20px;
    .company-row {
      background: #fff;
      border-bottom: 1px solid #c0c0c0;
      cursor: pointer;
      transition: none;
      color: #1D2435;
      font-size: 0.875rem;
      padding: 16px;
      cursor: pointer;
      transition: none;
      color: #1D2435;
      font-size: .875rem;
      padding: 16px;
      .name {
        img {
          margin-right: 16px;
        }
      }
      &:hover {
        color: #1d2435;
        background: #f8f4df;
      }
    }
    .company-row-header {
      color: #1D2435;
      font-size: .875rem;
      padding: 16px;
      font-weight: bold;
    }
  }

  .fr_actions {
    cursor: pointer;
    margin-left: 8px;
  }
  .userName {
    color: blue !important;
  }

</style>