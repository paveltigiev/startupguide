<template>
  <div class="datatable-page">
    <div class="content-wrapper">
      <h1>Стартапы и технологические компании</h1>
    </div>
    <el-table
      :data="startups"
      style="width: 100%">
      <el-table-column width="142">
        <template scope="scope">
          <img :src="scope.row.image" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Название"
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
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/43/bd/0fe5350a721fb99eccbc671a914bde0c4bc7db81d34421c1fa4abaa0423f.jpg',
          name: 'Tele2',
          desc: 'Телекоммуникационная компания и оператор сотовой связи. Реализуя стратегию lifestyle enabler, оператор выходит за рамки телекома и создает новую экосистему мобильных сервисов в партнерстве с лидерами...',
          market: 'Telecom',
          est: '2013'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/43/bd/0fe5350a721fb99eccbc671a914bde0c4bc7db81d34421c1fa4abaa0423f.jpg',
          name: 'Tele2',
          desc: 'Телекоммуникационная компания и оператор сотовой связи. Реализуя стратегию lifestyle enabler, оператор выходит за рамки телекома и создает новую экосистему мобильных сервисов в партнерстве с лидерами...',
          market: 'Telecom',
          est: '2013'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/43/bd/0fe5350a721fb99eccbc671a914bde0c4bc7db81d34421c1fa4abaa0423f.jpg',
          name: 'Tele2',
          desc: 'Телекоммуникационная компания и оператор сотовой связи. Реализуя стратегию lifestyle enabler, оператор выходит за рамки телекома и создает новую экосистему мобильных сервисов в партнерстве с лидерами...',
          market: 'Telecom',
          est: '2013'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/43/bd/0fe5350a721fb99eccbc671a914bde0c4bc7db81d34421c1fa4abaa0423f.jpg',
          name: 'Tele2',
          desc: 'Телекоммуникационная компания и оператор сотовой связи. Реализуя стратегию lifestyle enabler, оператор выходит за рамки телекома и создает новую экосистему мобильных сервисов в партнерстве с лидерами...',
          market: 'Telecom',
          est: '2013'
        },
        {
          image: 'https://portal.inno.msk.ru/img/crm/company/logo/43/bd/0fe5350a721fb99eccbc671a914bde0c4bc7db81d34421c1fa4abaa0423f.jpg',
          name: 'Tele2',
          desc: 'Телекоммуникационная компания и оператор сотовой связи. Реализуя стратегию lifestyle enabler, оператор выходит за рамки телекома и создает новую экосистему мобильных сервисов в партнерстве с лидерами...',
          market: 'Telecom',
          est: '2013'
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