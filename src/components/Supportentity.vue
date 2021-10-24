<template>
  <div class="startup-page">
    <div class="row-box pb-0">
      <el-row :gutter="20">
        <el-col :span="6">
          <a href="/supportentities" class="btn-back" onclick="back()">
            <span class="img-span">
              <img src="/img/leftchevron.svg" alt="">
            </span>
            <span class="span-back">Назад</span>
          </a>
        </el-col>
        <el-col :span="18">
          <div class="breadcrumbs">
            <a href="/supportentities">Акселерационные программы</a>
            <span>
              →
            </span>
            <span>{{supportentity.Name}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="row-box bordered pt-0">
      <el-row :gutter="20">
        <el-col :span="6">
          <img src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png" class="img-fluid" :alt="supportentity.Name">
        </el-col>
        <el-col :span="18">
          <div class="">
            <h1 class="startup-title">{{supportentity.Name}}</h1>
          </div>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="startup-year-title">
                СТАТУС
              </div>
              <div class="startup-year">
                {{supportentity.status}}
              </div>
            </el-col>
            <el-col :span="8">
              <div class="startup-year-title">
                Сумма поддержки
              </div>
              <div class="startup-year">
                {{supportentity.min}} - {{supportentity.max}}
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="row-box bordered">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="btn">{{supportentity.support_type_name}}</div>
        </el-col>
        <el-col :span="18">
          <div class="startup-desc">
            {{supportentity.Desc}}
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
          <div class="contacts-row">
            – &nbsp;{{supportentity.address}}
          </div>
          <div class="contacts-row">
            – &nbsp; <a :href="supportentity.website">{{supportentity.website}}</a>
          </div>
<!--
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
              ДЛЯ КОГО
            </h3>
            <div class="contacts-row">
              {{supportentity.requirement}}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/33/vladikavkaz/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Владикавказ</a><a href="https://yandex.ru/maps/33/vladikavkaz/?ll=44.687550%2C43.035209&utm_medium=mapframe&utm_source=maps&z=17" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUqRTUh8B" width="100%" height="340" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>

  </div>
</template>

<script>
export default {
  name: 'Supportentity',
  props: ['id'],
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    supportentity () {
      return this.$store.getters.supportentity
    }
  },
  methods: {
  },
  watch: {
  },
  created() {
    this.$store.dispatch('getSupportentity', this.id)
  }
}
</script>

<style lang="scss">
  .startup-page {
    background: #F2F3F6;

    .el-dialog {
      .form-header {
        margin-bottom: 25px;
        text-align: left;
        .title {
          font-weight: 500;
          font-size: 22px;
          line-height: 26px;
          color: #1D2435;
          margin-right: 110px;
        }
      }
      .el-dialog__headerbtn .el-dialog__close {
        display: none;
      }
      .close-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        background: transparent;
        border: 0;
        cursor: pointer;
      }
    }

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
    .findata-table {
      h2 {
        margin: 16px 0 16px 20px;
        line-height: 40px;
      }
      .btn {
        margin-right: 20px;
      }
      .cell {
        white-space: nowrap;
      }
    }

  }

</style>