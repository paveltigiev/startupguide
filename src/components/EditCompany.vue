<template>
  <div class="newcompany-page">
    <div class="content-wrapper">
      <h1>Редактирование компании</h1>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <el-form :model="form" label-width="120px" class="newcompany-form">
          <el-form-item label="Название">
            <el-input v-model="form.c_name"></el-input>
          </el-form-item>
          <el-form-item label="Логотип">
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept="image/*" />
            <button type="submit" @click.prevent="sendFile">Загрузить</button>
            <img :src="form.full_logo" :alt="form.c_name" v-if="form.full_logo" class="companyFormLogo img-fluid">
          </el-form-item>
          <el-form-item label="Описание">
            <el-input type="textarea" v-model="form.c_desc"></el-input>
          </el-form-item>
          <el-form-item label="Продукт">
            <el-input type="textarea" v-model="form.products_desc"></el-input>
          </el-form-item>
          <el-form-item label="ИНН">
            <el-input v-model="form.c_inn"></el-input>
          </el-form-item>
          <el-form-item label="ОКВЭДЫ">
            <el-input v-model="form.add_okveds"></el-input>
          </el-form-item>
          <el-form-item label="Веб-саты">
            <el-input v-model="form.web_sites"></el-input>
          </el-form-item>
          <el-form-item label="Рынок">
            <el-select v-model="form.markets" placeholder="Выберите рынок" multiple>
              <el-option
              v-for="(item, i) in markets.items"
              :key="'m'+i"
              :label="item.market_name_ru"
              :value="item.market_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Инновация">
            <el-select v-model="form.innos" placeholder="Выберите инновацию" multiple>
              <el-option
              v-for="(item, i) in innovations.items"
              :key="'i'+i"
              :label="item.topic_name_ru"
              :value="item.topic_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Технопарки">
            <el-select v-model="form.technoparks" placeholder="Выберите технопарк" multiple>
              <el-option
              v-for="(item, i) in technoparks.items"
              :key="'i'+i"
              :label="item.tp_name"
              :value="item.tp_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Бизнес модель">
            <el-select v-model="form.bmodel_id" placeholder="Выберите бизнес модель">
              <el-option
              v-for="(item, i) in bmodels.items"
              :key="'i'+i"
              :label="item.bdmod_name"
              :value="item.bmod_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Статус">
            <el-select v-model="form.status" placeholder="Выберите статус">
              <el-option
              v-for="(item, i) in statuses.items"
              :key="'ss'+i"
              :label="item.status_name"
              :value="item.stat_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Стадия">
            <el-select v-model="form.stage_id" placeholder="Выберите стадию" >
              <el-option
              v-for="(item, i) in stages.items"
              :key="'s'+i"
              :label="item.stage_name_ru"
              :value="item.sid">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Приватный">
            <el-checkbox v-model="form.isprivate"></el-checkbox>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="updateCompany">Обновить</el-button>
            <el-button type="danger" @click="deleteCompany">Удалить</el-button>
            <el-button @click="resetForm">Вернуть</el-button>
            <el-button @click="goCompany">Посмотреть</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <div class="addUser">
          <h3 for="addingUser">Добавить пользователя в компанию</h3>
          <el-select v-model="addingUser" placeholder="Выберите пользователя">
            <el-option
            v-for="(item, i) in users.items"
            :key="'us'+i"
            :label="item.fio"
            :value="item.id">
            </el-option>
          </el-select>
          <el-button type="success" @click="addUser">Пригласить пользователя</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '@/router'
export default {
  name: 'Profile',
  props: ['id'],
  components: {
  },
  data() {
    return {
      addingUser: '',
      file: null,
      form: {
        c_name: '',
        c_desc: '',
        products_desc: '',
        c_inn: '',
        add_okveds: '',
        full_logo: '',
        web_sites: '',
        markets: [],
        technoparks: [],
        innos: [],
        inno_id: '',
        bmodel_id: '',
        status: '',
        stage_id: '',
        isprivate: ''
      }
    }
  },
  methods: {
    addUser() {
      let payload = {
        company_id: this.id,
        users: this.addingUser
      }
      this.$store.dispatch('addUserToCompany', payload)
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    sendFile () {
      let formData = new FormData();
      formData.append('logo', this.file);
      formData.append('company_id', this.id);
      Vue.axios.post( 'https://startbase.online/api/web/companies/updlogo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(response => {
        this.form.full_logo = response.data
      }).catch(error => {
        this.$message.error(error)
      })
    },
    resetForm() {
      this.form = Object.assign({}, this.company)
    },
    deleteCompany() {
      this.$store.dispatch('deleteCompany', this.id)
    },
    updateCompany() {
      delete this.form.market_id
      delete this.form.inno_id
      delete this.form.logo_url
      this.$store.dispatch('updateCompany', this.form)
    },
    goCompany() {
      router.push('/companies/' + this.id)
    }
  },
  computed: {
    markets () {
      return this.$store.getters.markets
    },
    statuses () {
      return this.$store.getters.statuses
    },
    stages () {
      return this.$store.getters.stages
    },
    innovations () {
      return this.$store.getters.innovations
    },
    company () {
      return this.$store.getters.company
    },
    bmodels () {
      return this.$store.getters.bmodels
    },
    technoparks () {
      return this.$store.getters.technoparks
    },
    users () {
      return this.$store.getters.users
    }
  },
  watch: {
    company() {
      this.form = Object.assign({}, this.company)
      let _markets = []
      let _technoparks= []
      let _innos = []
      if (this.form.markets) {
        this.form.markets.forEach((item) => {
          _markets.push(item.market_id)
        }) 
      }
      this.form.markets = _markets
      if (this.form.innos) {
        this.form.innos.forEach((item) => {
          _innos.push(item.inno_id)
        }) 
      }
      this.form.innos = _innos
      if (this.form.technoparks) {
        this.form.technoparks.forEach((item) => {
          _technoparks.push(item.tp_id)
        }) 
      }
      this.form.technoparks = _technoparks
    }
  },
  created() {
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getStatuses')
    this.$store.dispatch('getInnovations')
    this.$store.dispatch('getTechnoparks')
    this.$store.dispatch('getStages')
    this.$store.dispatch('getBmodels')
    this.$store.dispatch('getCompany', this.id)
    this.$store.dispatch('getUsers', 1)
  }
}
</script>

<style lang="scss">
  .newcompany-page {
    .newcompany-form {
      background: #fff;
      padding: 40px 20px;
      .el-select {
        width: 100%;
      }
      .companyFormLogo {
        float: right;
        height: 40px;
      }
    }
    .addUser {
      width: 96%;
      box-sizing: border-box;
      padding: 20px;
      background: #fff;
      .el-input {
        margin-bottom: 20px;
      }
    }
  }
</style>