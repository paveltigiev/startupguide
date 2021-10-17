<template>
  <div class="datatable-page">
    <div class="content-wrapper">
      <h1>Стартапы и технологические компании</h1>
    </div>
    <el-table
      :data="startups"
      style="width: 100%">
      <el-table-column width="120" align="center" label="Название">
        <template scope="scope">
          <img :src="scope.row.image" alt="" height="40">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        width="140">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="Описание"
        >
      </el-table-column>
      <el-table-column
        prop="market"
        label="Рынок"
        width="120">
      </el-table-column>
      <el-table-column
        prop="est"
        label="Год создания"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Startups',
  components: {
  },
  data() {
    return {
      startups: [
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/3a/22/12a98809671424f2441921a42f6f87b163767e212601a2fc7537dc65434f.png',
          name: 'Tele2',
          desc: 'Онлайн-школа и разработчик интерактивных образовательных курсов для детей 6-12 лет по блогингу, 3D-моделированию и разработке игр.',
          market: 'EdTech',
          est: '2019'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/3a/22/12a98809671424f2441921a42f6f87b163767e212601a2fc7537dc65434f.png',
          name: 'Tele2',
          desc: 'Онлайн-школа и разработчик интерактивных образовательных курсов для детей 6-12 лет по блогингу, 3D-моделированию и разработке игр.',
          market: 'EdTech',
          est: '2019'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/3a/22/12a98809671424f2441921a42f6f87b163767e212601a2fc7537dc65434f.png',
          name: 'Tele2',
          desc: 'Онлайн-школа и разработчик интерактивных образовательных курсов для детей 6-12 лет по блогингу, 3D-моделированию и разработке игр.',
          market: 'EdTech',
          est: '2019'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/3a/22/12a98809671424f2441921a42f6f87b163767e212601a2fc7537dc65434f.png',
          name: 'Tele2',
          desc: 'Онлайн-школа и разработчик интерактивных образовательных курсов для детей 6-12 лет по блогингу, 3D-моделированию и разработке игр.',
          market: 'EdTech',
          est: '2019'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/3a/22/12a98809671424f2441921a42f6f87b163767e212601a2fc7537dc65434f.png',
          name: 'Tele2',
          desc: 'Онлайн-школа и разработчик интерактивных образовательных курсов для детей 6-12 лет по блогингу, 3D-моделированию и разработке игр.',
          market: 'EdTech',
          est: '2019'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>