<template>
  <div class="startup-page">
    <div class="row-box pb-0">
      <el-row :gutter="20">
        <el-col :span="6">
          <a href="#" class="btn-back" onclick="back()">
            <span class="img-span">
              <img src="/img/leftchevron.svg" alt="">
            </span>
            <span class="span-back">Назад</span>
          </a>
        </el-col>
        <el-col :span="18">
          <div class="breadcrumbs">
            <a href="/startups">Стартапы и тех. компании</a>
            <span>
              →
            </span>
            <span>SKM Market Predictor</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="row-box bordered pt-0">
      <el-row :gutter="20">
        <el-col :span="6">
          <img src="https://portal.inno.msk.ru/img/crm/company/logo_card/fa/67/5fb6c7dcffdb3a35138df813d06ac2b5527f7fcdefa814b718b4b52035ce.png" class="img-fluid" alt="ФЛ &quot;СКМ Маркет Предиктор АС&quot;">
        </el-col>
        <el-col :span="18">
          <div class="">
            <h1 class="startup-title">SKM Market Predictor</h1>                
            <div class="company-description-icon">
              <a href="#" class="add-to-favorite btn" data-user-id="" data-company-id="6193" data-is-oii="0">
                <img src="/img/download.svg" alt="">
                <span>Добавить в избранное</span>
              </a>
            </div>
          </div>
          <div class="startup-year-title">
            Год создания
          </div>
          <div class="startup-year">
            2013
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="row-box bordered">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="btn">CleanTech</div>
        </el-col>
        <el-col :span="18">
          <div class="startup-desc">
            Компания специализируется на предоставлении аналитической информации и консалтинговых услуг для энергетических рынков. Разработчик автоматизированной системы оптимизации заявок участников на «рынке на сутки вперед» (РСВ) с помощью сценарного математического моделирования результатов прогноза и подбора оптимальных параметров заявки РСВ.
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
            <!-- <svg width="20" height="17" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#at-sign"></use>
            </svg> -->
            <a href="mailto:moscow@skmenergy.com">moscow@skmenergy.com</a>
          </div>

          <div class="contacts-row">
            <!-- <svg width="20" height="20" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#phone"></use>
            </svg> -->
            +7 (495) 540-58-43
          </div>

          <div class="contacts-row">
            <!-- <svg width="20" height="20" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#map"></use>
            </svg> -->
            г. Москва, набережная Краснопресненская, д. 12 оф. 1503
          </div>

          <div class="contacts-row">
            <!-- <svg width="20" height="20" class="mr-2">
              <use xlink:href="/static/img/svg-sprite/svg-symbols.svg#monitor"></use>
            </svg> -->
            <a target="_blank" rel="nofollow" href="https://www.skmenergy.com/">www.skmenergy.com/</a>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="contacts-column">
            <h3 class="contacts-title">
              Продукты
            </h3>
            <div class="contacts-row">
              Автоматизированная система оптимизации заявок
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
  name: 'Startup',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
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
      font-size: 1.6875rem;
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