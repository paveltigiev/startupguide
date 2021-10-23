<template>
  <div class="newcompany-page">
    <div class="content-wrapper">
      <h1>Редактирование компании</h1>
    </div>
    <el-form :model="form" label-width="120px" class="newcompany-form">
      <el-form-item label="Название">
        <el-input v-model="form.c_name"></el-input>
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
      <el-form-item label="Адрес логотипа">
        <el-input v-model="form.logo_url"></el-input>
      </el-form-item>
      <el-form-item label="Веб-саты">
        <el-input v-model="form.web_sites"></el-input>
      </el-form-item>
      <el-form-item label="Рынок">
        <el-select v-model="form.market_id" placeholder="Выберите рынок">
            <el-option
            v-for="item in markets.items"
            :key="item.market_id"
            :label="item.market_name_ru"
            :value="item.market_id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Статус">
        <el-select v-model="form.status" placeholder="Выберите статус">
            <el-option
            v-for="item in statuses.items"
            :key="item.stat_id"
            :label="item.status_name"
            :value="item.stat_id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Стадия">
        <el-select v-model="form.stage_id" placeholder="Выберите стадию">
            <el-option
            v-for="item in stages.items"
            :key="item.sid"
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
        <el-button @click="resetForm">Вернуть</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: 'Profile',
  props: ['id'],
  components: {
  },
  data() {
    return {
      form: {
        c_name: '',
        c_desc: '',
        products_desc: '',
        c_inn: '',
        add_okveds: '',
        logo_url: '',
        web_sites: '',
        market_id: '',
        status: '',
        stage_id: '',
        isprivate: ''
      }
    }
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.company)
    },
    updateCompany() {
      this.$store.dispatch('updateCompany', this.form)
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
    company () {
      return this.$store.getters.company
    }
  },
  watch: {
    company() {
      this.form = Object.assign({}, this.company)
    }
  },
  created() {
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getStatuses')
    this.$store.dispatch('getStages')
    this.$store.dispatch('getCompany', this.id)
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
    }
  }
</style>