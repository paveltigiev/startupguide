<template>
  <div>
    <h1>Search</h1>
    {{search}}
  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: 'Search',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    // goUuser(id) {
    //   router.push('/users/' + id)
    // },
    changePage(page) {
      this.$store.dispatch('getSearch', page)
    }
  },
  computed: {
    search () {
      return this.$store.getters.search
    }
  },
  watch: {
  },
  created() {
    this.$store.dispatch('getSearch', 1)
  }
}
</script>

<style lang="scss">
</style>