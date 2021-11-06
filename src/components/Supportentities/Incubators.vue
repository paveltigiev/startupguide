<template>
  <div class="datatable-page">
    <div class="content-wrapper">
      <h1>Бизнес инкубаторы</h1>
    </div>
    <div class="supportentities">
      <el-row :gutter="20" class="supportentity-row-header">
        <el-col :span="9" class="name">Название </el-col>
        <el-col :span="12" class="">Описание </el-col>
        <el-col :span="3" class="">Статус </el-col>
      </el-row>
      <div
        v-for="(item, index) in supportentities.items"
        :key="index"
        @click="goSupportentity(item.sp_id)"
      >
        <el-row :gutter="20" class="supportentity-row">
          <el-col :span="9" class="name">
            <img
              src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png"
              :alt="item.Name"
              width="60"
            />
            {{ item.Name }}
          </el-col>
          <el-col :span="12" class=""> {{ item.Desc }} &nbsp; </el-col>
          <el-col :span="3" class=""> {{ item.status }} &nbsp; </el-col>
        </el-row>
      </div>
      <el-pagination
        v-if="supportentities._meta"
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
import router from "@/router";
export default {
  name: "Supportentity",
  components: {},
  data() {
    return {
      filterParams: {
        support: '',
        service: '2'
      }
    };
  },
  methods: {
    goSupportentity(id) {
      router.push("/supportentities/" + id);
    },
    changeSupportentities(page) {
      this.$store.dispatch("getSupportentities", { page, filterParams: this.filterParams });
    },
    searchSupport() {
      this.$store.dispatch("getSupportentities", { page: 1, filterParams: this.filterParams });
    }
  },
  computed: {
    supportentities() {
      return this.$store.getters.supportentities;
    },
    supportactions() {
      return this.$store.getters.supportactions
    },
    supportproviders() {
      return this.$store.getters.supportproviders
    }
  },
  watch: {},
  created() {
    this.$store.dispatch("getSupportentities", { page: 1, filterParams: this.filterParams });
    this.$store.dispatch("getSupportactions");
    this.$store.dispatch("getSupportproviders");
  },
};
</script>

<style lang="scss" scoped>
  .supportentities {
    padding-top: 0;
  }
</style>
