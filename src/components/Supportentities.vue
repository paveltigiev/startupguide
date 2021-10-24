<template>
  <div class="datatable-page">
    <div class="supportentities">
      <div class="content-wrapper">
        <h1>Подбор акселерационных программ</h1>
      </div>
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
        @current-change="changeSupportentities"
        layout="prev, pager, next"
        :page-size="20"
        :pager-count="10"
        :total="supportentities._meta.totalCount"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Supportentity',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    goSupportentity(id) {
      router.push('/supportentities/' + id)
    },
    changeSupportentities(page) {
      this.$store.dispatch('getSupportentities', {page})
    }
  },
  computed: {
    supportentities () {
      return this.$store.getters.supportentities
    }
  },
  watch: {
  },
  created() {
    this.$store.dispatch('getSupportentities', {page: 1})
  }
}
</script>

<style lang="scss">
</style>
