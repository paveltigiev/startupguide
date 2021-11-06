<template>
  <div class="searchBox">
    <el-input @input="findIt" class="search-bar input-with-select" placeholder="Найти стартап, инвестора, сервисы" v-model="searchQuery">
      <!-- <el-button @click="findIt" slot="append" icon="el-icon-search"></el-button> -->
    </el-input>
    <div class="search-results" v-if="showResults" v-clickOutside="closeResults">
      <div class="loading" v-if="loading">
        <img src="/img/loading.gif" alt="">
      </div>
      <div class="nothingFind" v-if="nothingFind">
        По вашему запросу ничего не найдено
      </div>
      <div class="search-result-entry" v-for="(item, i) in links" :key="i">
        <el-row>
          <el-col :span="12">
            <div @click="goToItem(item)">{{item.search_result}}</div>
          </el-col>
          <el-col :span="12">
            <div @click="goToItem(item)" class="type">{{item.type}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import router from '@/router'
export default {
  name: 'Search',
  components: {
  },
  data() {
    return {
      searchQuery: '',
      showResults: false,
      loading: false,
      links: [],
      types: [
        {
          id: 0,
          name: 'Стартап или инновационная компания'
        },
        {
          id: 1,
          name: 'Программа или мера поддержки'
        },
        {
          id: 2,
          name: 'Человек - физическое лицо'
        },
        {
          id: 3,
          name: 'Навык или компетенция'
        },
        {
          id: 4,
          name: 'Компании по рыночным нишам'
        },
        {
          id: 5,
          name: 'Компании по инновационным направлениям'
        },
        {
          id: 6,
          name: 'Тип поддержки'
        },
      ]
    }
  },
  directives: {
    clickOutside: {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          // here I check that click was outside the el and his children
          if (!(el == event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },
  methods: {
    closeResults() {
      this.showResults = false
      this.searchQuery = ''
    },
    findIt: _.debounce(function () {
      if (this.searchQuery.length > 3) {
        this.showResults = true
        this.loading = true
        this.nothingFind = false
        this.links = []
        Vue.axios.get('https://startbase.online/api/web/search?find=' + this.searchQuery)
        .then(response => {
          this.loading = false
          if (response.data.length < 1) {
            this.nothingFind = true
          } else {  
            this.links = response.data
          }
        })
      }
    }, 200),
    goToItem(item) {
      this.searchQuery = ''
      this.showResults = false
      switch(item.entity_type_id) {
        case 0:
          router.push('/companies/' + item.result_id)
          break
        case 1:
          router.push('/supportentities/' + item.result_id)
          break
        case 2:
          router.push('/users/' + item.result_id)
          break
        case 3:
          router.push('/?/' + item.result_id)
          break
        case 4:
          router.push('/companies/' + item.result_id)
          break
        case 5:
          router.push('/companies/' + item.result_id)
          break
        case 6:
          router.push('/supportentities/' + item.result_id)
          break
      }
    }
  },
  computed: {
  },
  watch: {
    links() {
      this.links.forEach(si => {
        this.types.forEach(ti => {
          if (si.entity_type_id == ti.id) {
            si.type = ti.name
          }
        })
      })
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .searchBox {
    position: relative;
    margin: 21px 40px;
    padding: 10px 16px;

    .search-bar {
      width: 100%;
      font-size: 1.6em;
    }
    .search-results {
      z-index: 100;
      position: absolute;
      top: 54px;
      right: 16px;
      left: 16px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #DCDFE6;
      max-height: 300px;
      overflow-y: scroll;
      .search-result-entry {
        cursor: pointer;
        padding: 8px;
        border-bottom: 1px solid #c0c0c0;
        .type {
          text-align: right;
          opacity: 0.4;
        }
      }
      .nothingFind {
        padding: 20px;
        text-align: center;
      }
      .loading {
        text-align: center;
        img {
          width: 100px;
        }
      }
    }
  }

</style>
