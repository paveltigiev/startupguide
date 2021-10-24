<template>
  <div class="home-page">
    <div class="home_indicators">
      <el-row :gutter="80">
        <el-col :span="6" class="home_indicator">
          <h1>2548</h1>
          <h6>
            стартапов и технологических компаний
            <a href="/startups"></a>
          </h6>
        </el-col>
        <el-col :span="6" class="home_indicator">
          <h1>132</h1>
          <h6>
            венчурных фондов
          </h6>
        </el-col>
        <el-col :span="6" class="home_indicator">
          <h1>211</h1>
          <h6>
            гибких рабочих пространств
          </h6>
          </el-col>
        <el-col :span="6" class="home_indicator">
          <h1>89</h1>
          <h6>
            АКСЕЛЕРАЦИОННЫХ ПРОГРАММ
          </h6>
        </el-col>
      </el-row>
    </div>

    <div class="nav-grid" role="grid">
      <el-row :gutter="0">
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="34" height="48">
                <use xlink:href="/img/svg-symbols.svg#rocket"></use>
              </svg>
            </figure>
            <h5 class="inner_title">Найти стартапы<br> и&nbsp;технологические<br> компании</h5>
          </a>
        </el-col>
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="44" height="46">
                <use xlink:href="/img/svg-symbols.svg#investments"></use>
              </svg>
            </figure>
            <h5 class="inner_title">Где получить<br> инвестиции</h5>
          </a>
        </el-col>
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="44" height="50">
                <use xlink:href="/img/svg-symbols.svg#market-box"></use>
              </svg>
            </figure>
            <h5 class="inner_title">КАК ВЫЙТИ НА РЫНОК<br> И ГДЕ НАЙТИ КЛИЕНТОВ</h5>
          </a>
        </el-col>
        <el-col :span="6" class="grid-item">
            <a href="/companies" class="grid-inner">
              <figure class="icon-box">
                <svg width="40" height="36">
                  <use xlink:href="/img/svg-symbols.svg#rooms"></use>
                </svg>
              </figure>
              <h5 class="inner_title">ГДЕ НАЙТИ<br> ПОМЕЩЕНИЕ ДЛЯ<br> ОФИСА/РАБОЧЕЕ МЕСТО</h5>
            </a>
        </el-col>
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="37" height="37">
                <use xlink:href="/img/svg-symbols.svg#prototype"></use>
              </svg>
            </figure>
            <h5 class="inner_title">ГДЕ ДОРАБОТАТЬ<br> ПРОТОТИП</h5>
          </a>
        </el-col>
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="38" height="38">
                <use xlink:href="/img/svg-symbols.svg#expand"></use>
              </svg>
            </figure>
            <h5 class="inner_title">ГДЕ ПРОКАЧАТЬ<br> КОМПЕТЕНЦИИ/<br> РАСШИРИТЬ НЕТВОРК</h5>
          </a>
        </el-col>
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="44" height="42">
                <use xlink:href="/img/svg-symbols.svg#question"></use>
              </svg>
            </figure>
            <h5 class="inner_title">ГДЕ ПОЛУЧИТЬ<br> КОНСУЛЬТАЦИЮ<br> ПО БИЗНЕС-ВОПРОСАМ</h5>
          </a>
        </el-col>
        <el-col :span="6" class="grid-item">
          <a href="/companies" class="grid-inner">
            <figure class="icon-box">
              <svg width="35" height="35">
                <use xlink:href="/img/svg-symbols.svg#checklist"></use>
              </svg>
            </figure>
            <h5 class="inner_title">ГДЕ ПРОТЕСТИРОВАТЬ<br> ПРОДУКТ</h5>
          </a>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    // findata () {
    //   return this.$store.getters.findata
    // }
  },
  created() {
    // this.$store.dispatch('getFindata')
  }
}
</script>


<style lang="scss">

.home-page {
  // background: #fff;

  .home_indicators {
    padding: 2rem 2rem 1rem 2.5rem;

    .home_indicator {
      h1 {
        margin-bottom: 0.25rem !important;
        font-size: 2.0625rem;
      }
      h6 {
        letter-spacing: .05em;
        color: #6E7A99 !important;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
        margin: 0 0 0.5rem;
      }
    }
  }
  .nav-grid {
    background: #1d2435 !important;
    .grid-item {
      border: solid rgba(255, 255, 255, 0.15);
      border-width: 0 1px 1px 0;
      color: #fff;

      .grid-inner {
        display: block;
        color: #fff;
        height: 290px;
        padding: 3rem 3rem 2.5rem;
        text-decoration: none;

        &:hover {
          color: #fff;
          background-color: #FF1F55;
          cursor: pointer;
        }

        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 5.25rem;
          height: 5.25rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1rem;
          margin-left: 0;
          margin-bottom: 2rem;
          transition: border-color .2s ease-out, box-shadow .2s ease-out, transform .2s ease-out;
          will-change: border-color, box-shadow, transform;

          svg {
            fill: none;
            stroke: #fff;
          }
        }

        .inner_title {
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: .05em;
          line-height: 1.35;
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>