<template>
  <div class="datatable-page">
    <div class="companies">
      <div class="content-wrapper">
        <h1>Стартапы и технологические компании</h1>
      </div>

      <div
        v-for="(item, index) in companies.items"
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
  name: 'Companies',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    goCompany(id) {
      router.push('/companies/' + id)
    }
  },
  computed: {
    companies () {
      return this.$store.getters.companies
    },
    markets () {
      return this.$store.getters.markets
    }
  },
  watch: {
    companies () {
      this.companies.items.forEach(comp => {
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
    this.$store.dispatch('getCompanies')
  }
}
</script>

<style lang="scss">
  .companies {
    padding: 10px;
    .company-row {
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
  }

</style>