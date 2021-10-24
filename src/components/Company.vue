<template>
  <div class="startup-page">
    <div class="row-box pb-0">
      <el-row :gutter="20">
        <el-col :span="6">
          <a href="/companies" class="btn-back" onclick="back()">
            <span class="img-span">
              <img src="/img/leftchevron.svg" alt="">
            </span>
            <span class="span-back">Назад</span>
          </a>
        </el-col>
        <el-col :span="18">
          <div class="breadcrumbs">
            <a href="/companies">Компании</a>
            <span>
              →
            </span>
            <span>{{company.c_name}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="row-box bordered pt-0">
      <el-row :gutter="20">
        <el-col :span="6">
          <img src="https://api.freelogodesign.org/assets/thumb/logo/22192360_400.png" class="img-fluid" :alt="company.c_name">
        </el-col>
        <el-col :span="18">
          <div class="">
            <h1 class="startup-title">{{company.c_name}}</h1>                
            <div class="company-description-icon" v-if="isOwner">
              <a href="#" class="add-to-favorite btn" @click="goCompany(company.c_id)">
                <img src="/img/edit.svg" alt="">
                <span>Редактировать</span>
              </a>
            </div>
            <div class="company-description-icon" v-else>
              <a href="#" class="add-to-favorite btn">
                <img src="/img/download.svg" alt="">
                <span>Добавить в избранное</span>
              </a>
            </div>
          </div>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="startup-year-title">
                ИНН
              </div>
              <div class="startup-year">
                {{company.c_inn}}
              </div>
            </el-col>
            <el-col :span="4">
              <div class="startup-year-title">
                Основана
              </div>
              <div class="startup-year">
                {{company.reg_date}}
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="row-box bordered">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="btn">InnoTech</div>
        </el-col>
        <el-col :span="18">
          <div class="startup-desc">
            {{company.c_desc}}
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="row-box bordered">
      <el-row :gutter="20">
        <el-col :span="9" :offset="6">
          <h3 class="contacts-title">
            Контакты
          </h3>
          <div class="contacts-row" v-for="(item, index) in sites" :key="index">
            <a :href="item">{{item}}</a>
          </div>
          <!-- <div class="contacts-row">
            <svg width="20" height="17" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#at-sign"></use>
            </svg>
            <a href="mailto:moscow@skmenergy.com">moscow@skmenergy.com</a>
          </div>

          <div class="contacts-row">
            <svg width="20" height="20" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#phone"></use>
            </svg>
            +7 (495) 540-58-43
          </div>

          <div class="contacts-row">
            <svg width="20" height="20" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#map"></use>
            </svg>
            г. Москва, набережная Краснопресненская, д. 12 оф. 1503
          </div>

          <div class="contacts-row">
            <svg width="20" height="20" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#monitor"></use>
            </svg>
            <a target="_blank" rel="nofollow" href="https://www.skmenergy.com/">www.skmenergy.com/</a>
          </div> -->
        </el-col>
        <el-col :span="9">
          <div class="contacts-column">
            <h3 class="contacts-title">
              Продукты
            </h3>
            <div class="contacts-row">
              {{company.products_desc}}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="">
      <template>
        <el-table
          :data="findata.items"
          style="width: 100%">

          <el-table-column
            prop="cal_year"
            label="Год">
          </el-table-column>
          <el-table-column
            prop="earnings"
            label="Заработок">
          </el-table-column>
          <el-table-column
            prop="stuff"
            label="Персонал">
          </el-table-column>
          <el-table-column
            prop="reserves"
            label="Резервы">
          </el-table-column>
          <el-table-column
            prop="assets"
            label="Ресурсы">
          </el-table-column>
          <el-table-column
            prop="core_funds"
            label="Основные фонды">
          </el-table-column>
          <el-table-column
            prop="gross_profit"
            label="Валовая прибыль">
          </el-table-column>
          <el-table-column
            prop="investments"
            label="Инвестиции">
          </el-table-column>
          <el-table-column
            prop="other_income"
            label="Другой доход">
          </el-table-column>
          <el-table-column
            prop="net_profit"
            label="Чистая прибыль">
          </el-table-column>
          <el-table-column
            prop="profit_tax"
            label="Налог на прибыль">
          </el-table-column>
          <el-table-column
            prop="property_tax"
            label="Налог на имущество">
          </el-table-column>
          <el-table-column
            prop="nds"
            label="НДС">
          </el-table-column>
          <el-table-column
            prop="insurance_med"
            label="Мед. страх.">
          </el-table-column>
          <el-table-column
            prop="insurance_soc"
            label="Соц. страх.">
          </el-table-column>
          <el-table-column
            prop="pension_costs"
            label="Пенс. отчисл.">
          </el-table-column>
          <el-table-column
            prop="trade_fee"
            label="Торговая комиссия">
          </el-table-column>
          <el-table-column
            prop="moscow_profit_tax"
            label="Московский налог на прибыль">
          </el-table-column>
          <el-table-column
            prop="federal_profit_tax"
            label="Федеральный налог на прибыль">
          </el-table-column>

        </el-table>
      </template>
    </div>

    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/33/vladikavkaz/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Владикавказ</a><a href="https://yandex.ru/maps/33/vladikavkaz/?ll=44.687550%2C43.035209&utm_medium=mapframe&utm_source=maps&z=17" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUqRTUh8B" width="100%" height="340" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>

  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Company',
  props: ['id'],
  components: {
  },
  data() {
    return {
      sites: [],
    }
  },
  computed: {
    company () {
      return this.$store.getters.company
    },
    markets () {
      return this.$store.getters.markets
    },
    isOwner () {
      return this.company.owner_id == localStorage.id
    },
    findata () {
      return this.$store.getters.findata
    }
  },
  methods: {
    goCompany(id) {
      router.push('/companies/edit/' + id)
    }
  },
  watch: {
    company() {
      if (this.company.web_sites) {
        this.sites = this.company.web_sites.split('§');
      }
    }
  },
  created() {
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getCompany', this.id)
    this.$store.dispatch('getFindata', this.id)
  }
}
</script>

<style lang="scss">
  .startup-page {
    background: #F2F3F6;

    .row-box {
      padding: 40px;
      margin-bottom: 0.8125rem;
      &.bordered {
        border-bottom: 2px solid #fff;
        margin-bottom: 0;
      }
    }

    .breadcrumbs {
      color: #1D2435;
      font-weight: 400;
      a {
        text-decoration: none;
        color: #1D2435;
      }
    }
    .startup-title {
      margin-top: 0;
      margin-bottom: 32px;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 600
    }
    .startup-desc {
      font-size: 16px;
      line-height: 23px;
      font-weight: normal;
      font-style: normal;
      max-width: 567px;
    }

    .startup-year-title {
      font-size: 0.625rem;
      text-transform: uppercase;
      line-height: 0.8125rem;
      font-weight: 500;
      color: #1D2435;
      opacity: 0.5;
      font-style: normal;
      margin-bottom: 0.25rem
    }

    .startup-year {
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      margin-bottom: 32px;
      color: #1D2435;
    }

    .add-to-favorite {
      position: absolute;
      right: 0;
      top: 0;
      text-decoration: none !important;
      padding: 0 15px;
      line-height: 42px;
      font-size: 12px;
      span {
        display: none;
        text-transform: uppercase;
        transition: all .5s;
        color: #1D2435;
        margin-left: 18px;
      }
      &:hover {
        span {
          display: inline-block;
        }
      }
    }

    .contacts-title {
      margin-top: 0;
      padding-bottom: 1rem;
    }

    .contacts-row {
      display: flex;
      flex-direction: row;
      margin-bottom: 1.25rem;
      line-height: 21px;
      font-size: 1rem;
      font-weight: 500;
    }

    .btn-back {
      text-decoration: none;
      color: #1D2435;
      padding: 6px 1px;
      border: none;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;
      font-size: 10px;
      text-transform: uppercase;
      margin-right: 12.25rem;
      background: #FFFFFF;
      border-radius: 31px;
      outline: none;
      span {
        margin-right: 9px;
        margin-left: 7px;
        display: flex;
        align-items: center;
        img {
          vertical-align: middle;
          border-style: none;
        }
      }
    }

  }

</style>