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
    this.$store.dispatch('getSupportentities')
  }
}
</script>

<style lang="scss">
  .supportentities {
    padding: 10px;
    .supportentity-row {
      background: #fff;
      border-bottom: 1px solid #c0c0c0;
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
    .supportentity-row-header {
      background: #fff;
      border-bottom: 1px solid #c0c0c0;
      color: #1D2435;
      font-size: .875rem;
      padding: 16px;
      font-weight: bold;
    }
  }

</style>
