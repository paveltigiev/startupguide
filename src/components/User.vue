<template>
  <div class="profile-page">
    <div class="content-wrapper">
      <h1>User</h1>
    </div>
    <!-- <el-form :model="form" label-width="120px" class="profile-form">
      <el-form-item label="ФИО">
        <el-input v-model="form.fio"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Город">
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="Должность">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="Опыт">
        <el-input v-model="form.experience"></el-input>
      </el-form-item>
      <el-form-item label="Навыки">
      <el-select
        class="skills-selector"
        v-model="selected_skills"
        multiple
        filterable
        allow-create
        value-key="id"
        placeholder="Выберите навыки">
        <el-option
          v-for="item in skills.items"
          :key="item.id"
          :label="item.name"
          :value="item">
        </el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="Контакты">
        <el-input type="textarea" v-model="form.contact"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateUser">Обновить</el-button>
        <el-button @click="resetForm">Вернуть</el-button>
      </el-form-item>
    </el-form>
 -->
<!-- 
    <div class="companies">
      <div class="content-wrapper">
        <a href="/newcompany" class="createCompanyBtn bnt">Создать компанию</a>
        <h1>Мои компании</h1>
      <h2 v-if="myCompanies.items == []">У вас пока нет компаний. Но вы можете <a href="/newcompany">создать её</a>.</h2>
      </div>

      <el-row
        :gutter="20"
        class="company-row-header"
      >
        <el-col :span="6" class="name">
          Название
        </el-col>
        <el-col :span="12" class="">
          Описание
        </el-col>
        <el-col :span="3" class="">
          Рынок
        </el-col>
        <el-col :span="3" class="">
          Основана
        </el-col>
      </el-row>
      <div
        v-for="(item, index) in myCompanies.items"
        :key="index"
        @click="goCompany(item.c_id)"
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
          <el-col :span="3" class="">
            {{item.reg_date}}
          </el-col>
        </el-row>
      </div>
    </div> -->
  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: 'User',
  props: ['id'],
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
  },
  created() {
    this.$store.dispatch('getUser', this.id)
  }
}
</script>

<style lang="scss">
</style>