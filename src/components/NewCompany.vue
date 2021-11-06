<template>
  <div class="newcompany-page">
    <div class="content-wrapper">
      <h1>Создание компании</h1>
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
        <el-button type="primary" @click="createCompany">Создать</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: 'Profile',
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
        market_id: [],
        innos: [],
        markets: [],
        technoparks: [],
        status: '',
        stage_id: '',
        isprivate: '',
        bmodel_id: ''
      }
    }
  },
  methods: {
    createCompany() {
      this.$store.dispatch('createCompany', this.form)
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
    technoparks () {
      return this.$store.getters.technoparks
    },
    bmodels () {
      return this.$store.getters.bmodels
    }
  },
  watch: {
  },
  created() {
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getStatuses')
    this.$store.dispatch('getInnovations')
    this.$store.dispatch('getTechnoparks')
    this.$store.dispatch('getStages')
    this.$store.dispatch('getBmodels')
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