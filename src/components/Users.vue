<template>
  <div class="datatable-page">
    <div class="users">
      <div class="content-wrapper">
        <h1>Пользователи</h1>
      </div>
      <el-row
        :gutter="20"
        class="company-row-header"
      >
        <el-col :span="6" class="name">
          ФИО
        </el-col>
        <el-col :span="12" class="">
          Должность
        </el-col>
        <el-col :span="3" class="">
          Навыки
        </el-col>
      </el-row>
      <div
        v-for="(item, index) in users.items"
        :key="index"
        @click="goUser(item.u_id)"
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

        </el-row>
      </div>
      <el-pagination
        background
        @current-change="changePage"
        layout="prev, pager, next"
        :page-size="20"
        :pager-count="10"
        :total="users._meta.totalCount"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Users',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    goUuser(id) {
      router.push('/users/' + id)
    },
    changePage(page) {
      this.$store.dispatch('getUsers', page)
    }
  },
  computed: {
    companies () {
      return this.$store.getters.users
    }
  },
  watch: {
  },
  created() {
    this.$store.dispatch('getUsers', 1)
  }
}
</script>

<style lang="scss">
</style>