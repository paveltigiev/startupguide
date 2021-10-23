import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
// import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: [],
    companies: [],
    myCompanies: [],
    myProfile: {},
    company: {},
    stages: [],
    statuses: [],
    markets: [],
    isAuthenticated: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUsers (state, payload) {
      state.users = payload
    },
    setCompanies (state, payload) {
      state.companies = payload
    },
    setMyCompanies (state, payload) {
      state.myCompanies = payload
    },
    setCompany (state, payload) {
      state.company = payload
    },
    setMyProfile (state, payload) {
      state.myProfile = payload
      localStorage.email = payload.email
      localStorage.fio = payload.fio
      localStorage.id = payload.id
      localStorage.role = payload.role
      localStorage.city = payload.city
    },
    setStages (state, payload) {
      state.stages = payload
    },
    setStatuses (state, payload) {
      state.statuses = payload
    },
    setMarkets (state, payload) {
      state.markets = payload
    },
    setUserData (state, payload) {
      console.log(payload)
      localStorage.access_token = payload.access_token
      localStorage.email = payload.email
      localStorage.fio = payload.fio
      localStorage.id = payload.id
      localStorage.role = payload.role
      localStorage.city = payload.city
      state.isAuthenticated = true
    }
  },
  actions: {
    getUsers (commit) {
      Vue.axios.get('http://startbase.online/api/web/users')
      .then(response => {
        console.log(response.data)
        commit('setUsers', {payload: response.data})
      })
      .catch(error => {
        console.log(error)
      })
    },
    // getUser (commit, id) {
    //   Vue.axios.get('http://startbase.online/api/web/users/' + id)
    //   .then(response => {
    //     commit('setUser', {payload: response.data})
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // },
    regUser ({commit}, user) {
      Vue.axios.post('https://startbase.online/api/web/users/signup', user).then(response => {
        commit('setUserData', {access_token: response.data.access_token, user})
        location.reload()
        // commit('setMessage', 'Вы успешно вошли в систему')
      })
      .catch(error => {
        console.log(error)
      })
    },
    loginUser ({commit}, user) {
      Vue.axios.post('https://startbase.online/api/web/users/login', user)
      .then(response => {
        commit('setUserData', {access_token: response.data.access_token, user})
        location.reload()
        // commit('setMessage', 'Вы успешно вошли в систему')
      })
      .catch(error => {
        console.log(error)
      })
    },
    getCompanies ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/companies')
      .then(response => {
        commit('setCompanies', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getMyCompanies ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/companies/my')
      .then(response => {
        console.log(response.data)
        commit('setMyCompanies', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getMyProfile ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/users/profile')
      .then(response => {
        commit('setMyProfile', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    updateUser (_, payload) {
      console.log(payload)
      Vue.axios.put('https://startbase.online/api/web/users/' + payload.id, payload)
      // .then(response => {
      //   commit('setMyProfile', response.data)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
    createCompany (_, payload) {
      console.log(payload)
      Vue.axios.post('https://startbase.online/api/web/companies', payload)
      // .then(response => {
      //   commit('setCompanies', response.data)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
    updateCompany (_, payload) {
      console.log(payload)
      Vue.axios.put('https://startbase.online/api/web/companies/' + payload.c_id, payload)
      // .then(response => {
      //   commit('setCompanies', response.data)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
    getCompany ({commit}, id) {
      Vue.axios.get('https://startbase.online/api/web/companies/' + id)
      .then(response => {
        commit('setCompany', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getStages ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/stages')
      .then(response => {
        commit('setStages', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getStatuses ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/statuses')
      .then(response => {
        commit('setStatuses', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getMarkets ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/markets')
      .then(response => {
        commit('setMarkets', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    logOut ({commit}) {
      localStorage.clear()
      commit('setUser', null)
      location.reload()
    }
  },
  modules: {
  },
  getters: {
    user (state) {
      return state.user
    },
    // isAuthenticated: (state) => !!state.user,
    isAuthenticated () {
      if (localStorage.access_token !== '' && localStorage.access_token !== 'undefined' && localStorage.access_token) {
        return true
      } else {
        return false
      }
    },
    users (state) {
      return state.users
    },
    companies (state) {
      return state.companies
    },
    myCompanies (state) {
      return state.myCompanies
    },
    myProfile (state) {
      return state.myProfile
    },
    company (state) {
      return state.company
    },
    stages (state) {
      return state.stages
    },
    statuses (state) {
      return state.statuses
    },
    markets (state) {
      return state.markets
    }
  }
})
