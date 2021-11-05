<template>
  <div class="startup-page">
    <div class="row-box pb-0">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="6" :lg="6">
          <a href="/companies" class="btn-back" onclick="back()">
            <span class="img-span">
              <img src="/img/leftchevron.svg" alt="">
            </span>
            <span class="span-back">Назад</span>
          </a>
        </el-col>
        <el-col :xs="24" :sm="18" :lg="18">
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
        <el-col :xs="24" :sm="18" :lg="6">
          <img :src="company.logo_url" class="img-fluid" :alt="company.c_name" v-if="company.logo_url">
          <img src="https://api.freelogodesign.org/assets/thumb/logo/22192360_400.png" class="img-fluid" :alt="company.c_name" v-else>
        </el-col>
        <el-col :xs="24" :sm="18" :lg="18">
          <div class="">
            <h1 class="startup-title">{{company.c_name}}</h1>
            <div class="company-description-icon" v-if="isOwner">
              <div class="add-to-favorite btn" @click="goCompany(company.c_id)">
                <img src="/img/edit.svg" alt="">
                <span>Редактировать</span>
              </div>
            </div>
            <!-- <div class="company-description-icon" v-else>
              <a href="#" class="add-to-favorite btn">
                <img src="/img/download.svg" alt="">
                <span>Добавить в избранное</span>
              </a>
            </div> -->
          </div>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :lg="4">
              <div class="startup-year-title">
                ИНН
              </div>
              <div class="startup-year">
                {{company.c_inn}}
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="4">
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
        <el-col :xs="24" :sm="6" :lg="6">
          <div class="btn" v-for="(item, i) in company.markets" :key="i">{{item.market_name_ru}}</div>
          <div class="btn" v-for="(item, i) in company.innos" :key="i">{{item.topic_name_ru}}</div>
          <div class="btn" v-for="(item, i) in company.technoparks" :key="i">{{item.tp_name}}</div>
          &nbsp;
        </el-col>
        <el-col :xs="24" :sm="18" :lg="18">
          <div class="startup-desc">
            {{company.c_desc}}
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="row-box bordered">
      <el-row :gutter="20">
        <el-col  :xs="24" :sm="9" :lg="{span: 9, offset:6}">
          <h3 class="contacts-title">
            Контакты
          </h3>
          <div v-if="sites">
            <div class="contacts-row" v-for="(item, index) in sites" :key="index">
              <a :href="item">{{item}}</a>
            </div>
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
        <el-col :xs="24" :sm="9" :lg="9">
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

    <div class="findata-table" style="overflow: hidden">
      <el-button type="primary" @click="findataDialog = true" class="btn pull-right" v-if="isOwner">Добавить запись</el-button>
      <el-dialog :visible="findataDialog">
        <div class="form-header">
          <button class="close-btn" type="button" @click="findataDialog = false">
            <img src="/img/close-btn.svg" alt="">
          </button>
          <div class="title">Добавить финансовый отчет</div>
        </div>
        <el-form :model="newFindata">
          <el-form-item>
            <el-input v-model="newFindata.cal_year" placeholder="Год"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.earnings" placeholder="Заработок"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.stuff" placeholder="Персонал"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.reserves" placeholder="Резервы"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.assets" placeholder="Ресурсы"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.core_funds" placeholder="Основные фонды"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.gross_profit" placeholder="Валовая прибыль"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.investments" placeholder="Инвестиции"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.other_income" placeholder="Другой доход"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.net_profit" placeholder="Чистая прибыль"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.profit_tax" placeholder="Налог на прибыль"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.property_tax" placeholder="Налог на имущество"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.nds" placeholder="НДС"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.insurance_med" placeholder="Мед. страх."></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.insurance_soc" placeholder="Соц. страх."></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.pension_costs" placeholder="Пенс. отчисл."></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.trade_fee" placeholder="Торговая комиссия"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.moscow_profit_tax" placeholder="Московский налог на прибыль"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newFindata.federal_profit_tax" placeholder="Федеральный налог на прибыль"></el-input>
          </el-form-item>
        </el-form>
        <div class="dialog-footer">
          <el-button type="primary" @click="addFindata()" class="sendBtn">Добавить</el-button>
        </div>
      </el-dialog>
      <el-button type="secondary" @click="getNalogData()" class="btn pull-right">Запросить данные из налоговой</el-button>
      <h2 v-if="findata.items">Финансовая отчетность</h2>
      <div v-if="findata.items">
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
        <el-pagination
          background
          @current-change="changeFindataPage"
          layout="prev, pager, next"
          :page-size="20"
          :pager-count="10"
          :total="findata._meta.totalCount"
          >
        </el-pagination>
      </div>
    </div>

    <div class="supportentities bordered" v-if="supportentities.items">
      <h2>Подходящие программы поддержки</h2>
      <el-row
        :gutter="20"
        class="supportentity-row-header"
      >
        <el-col :span="9" class="name">
          Название
        </el-col>
        <el-col :span="12" class="">
          Описание
        </el-col>
        <el-col :span="3" class="">
          Статус
        </el-col>
      </el-row>
      <div
        v-for="(item, index) in supportentities.items"
        :key="index"
        @click="goSupportentity(item.sp_id)"
      >
        <el-row
          :gutter="20"
          class="supportentity-row"
        >
          <el-col :span="9" class="name">
            <img src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png" :alt="item.Name" width="60">
            {{item.Name}}
          </el-col>
          <el-col :span="12" class="">
            {{item.Desc}} &nbsp;
          </el-col>
          <el-col :span="3" class="">
            {{item.status}} &nbsp;
          </el-col>
        </el-row>
      </div>
      <el-pagination
        background
        @current-change="changeSupportentitiesForCompany"
        layout="prev, pager, next"
        :page-size="20"
        :pager-count="10"
        :total="supportentities._meta.totalCount"
        >
      </el-pagination>
    </div>

    <div v-else-if="isLogged" class="loading-box supportentities bordered">
      <h2>Подходящие акселерационные программы для компании</h2>
      <img src="/img/loading.gif" alt="">
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
      findataDialog: false,
      newFindata: {
        cal_year: '',
        earnings: '',
        stuff: '',
        reserves: '',
        assets: '',
        core_funds: '',
        gross_profit: '',
        investments: '',
        other_income: '',
        net_profit: '',
        profit_tax: '',
        property_tax: '',
        nds: '',
        insurance_med: '',
        insurance_soc: '',
        pension_costs: '',
        trade_fee: '',
        moscow_profit_tax: '',
        federal_profit_tax: ''
      }
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
    isLogged () {
      return localStorage.id
    },
    findata () {
      return this.$store.getters.findata
    },
    supportentities () {
      return this.$store.getters.supportentities
    }
  },
  methods: {
    goCompany(id) {
      router.push('/companies/edit/' + id)
    },
    goSupportentity(id) {
      router.push('/supportentities/' + id)
    },
    getNalogData() {
      this.$store.dispatch('getNalogdata', this.company)
    },
    addFindata() {
      this.findataDialog = false
      this.newFindata.company_id = this.id
      this.$store.dispatch('addFindata', this.newFindata)
    },
    changeFindataPage(page) {
      this.$store.dispatch('getFindata', {id: this.id, page})
    },
    changeSupportentitiesForCompany(page) {
      this.$store.dispatch('getSupportentitiesForCompany', {id: this.id, page})
    }
  },
  watch: {
    company() {
      if (this.company.web_sites !== null && this.company.web_sites !== '') {
        this.sites = this.company.web_sites.split('§');
      }
    }
  },
  created() {
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getCompany', this.id)
    this.$store.dispatch('getFindata', {id: this.id, page: 1})
    this.$store.dispatch('getSupportentitiesForCompany', {id: this.id, page: 1})
  }
}
</script>

<style lang="scss">
</style>
