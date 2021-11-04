<template>
  <div>
    <div class="content-wrapper">
      <h1>Результаты поиска</h1>
    </div>

    <el-row v-for="(item, i) in search.payload" :key="i" class="search-result-entry">
      <el-col :span="6">
        <div @click="goToItem(item)">{{item.type}}</div>
      </el-col>
      <el-col :span="18">
        <div @click="goToItem(item)">{{item.search_result}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Search',
  components: {
  },
  data() {
    return {
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
  methods: {
    goToItem(item) {
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
    search () {
      return this.$store.getters.search
    }
  },
  watch: {
    search() {
      this.search.payload.forEach(si => {
        this.types.forEach(ti => {
          if (si.entity_type_id == ti.id) {
            si.type = ti.name
          }
        })
      })
    }
  },
  created() {
    this.$store.dispatch('getSearch')
  }
}
</script>

<style lang="scss">
  .search-result-entry {
    cursor: pointer;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid #c0c0c0;
  }
</style>
