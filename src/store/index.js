import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
// import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: [],
    companies: [],
    company: {},
    stages: [],
    markets: []
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
    setCompany (state, payload) {
      state.company = payload
    },
    setStages (state, payload) {
      state.stages = payload
    },
    setMarkets (state, payload) {
      state.markets = payload
    },
    setUserData (state, payload) {
      console.log(payload)
      localStorage.access_token = payload.access_token
      localStorage.user_name = payload.user.firstname
      localStorage.user_email = payload.user.email
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
      Vue.axios.get('http://startbase.online/api/web/stages')
      .then(response => {
        commit('setStages', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getMarkets ({commit}) {
      Vue.axios.get('http://startbase.online/api/web/markets')
      .then(response => {
        commit('setMarkets', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    logOut ({commit}) {
      router.push('/')
      localStorage.clear()
      commit('setUser', null)
    }
  },
  modules: {
  },
  getters: {
    user (state) {
      return state.user
    },
    users (state) {
      return state.users
    },
    companies (state) {
      return state.companies
    },
    company (state) {
      return state.company
    },
    stages (state) {
      return state.stages
    },
    markets (state) {
      return state.markets
    }
  }
})
