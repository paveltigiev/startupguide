<template>
  <div class="datatable-page">
    <div class="filter-box bg-dark">
      <h1 class="filter-title">Подбор акселерационных программ</h1>
      <h4 class="filter-subtitle">Детали проекта</h4>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-select
            v-model="filterParams.support"
            multiple
            placeholder="Типы оказываемой поддержки">
            <el-option
              v-for="item in supportactions.items"
              :key="item.support_type_id"
              :label="item.support_servicename"
              :value="item.support_type_id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="10">
          <el-select
            v-model="filterParams.service"
            multiple
            placeholder="Тип организации">
            <el-option
              v-for="item in supportproviders.items"
              :key="item.support_type_id"
              :label="item.provider_class"
              :value="item.support_type_id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3" class="pull-right">
          <button @click="searchSupport" class="btn accelerator-button">Подобрать</button>
        </el-col>
      </el-row>
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
        service: ''
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
