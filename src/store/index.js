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
    myCompanies: [],
    myProfile: {},
    findata: {},
    company: {},
    supportactions: {},
    innovations: {},
    stages: [],
    statuses: [],
    supportentities: {},
    supportentity: {},
    markets: {},
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
    setFindata (state, payload) {
      state.findata = payload
    },
    setInnovations (state, payload) {
      state.innovations = payload
    },
    setSupportactions (state, payload) {
      state.supportactions = payload
    },
    setSupportentities (state, payload) {
      state.supportentities = payload
    },
    setSupportentity (state, payload) {
      state.supportentity = payload
    },
    setUserData (state, payload) {
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
        commit('setUsers', {payload: response.data})
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getUser ({commit}, id) {
      Vue.axios.get('http://startbase.online/api/web/users/' + id)
      .then(response => {
        commit('setUser', {payload: response.data})
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getFindata ({commit}, payload) {
      Vue.axios.get('https://startbase.online/api/web/findata/getbycompany/' + payload.id + '?page=' + payload.page)
      .then(response => {
        commit('setFindata', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    addFindata ({dispatch}, payload) {
      Vue.axios.post('https://startbase.online/api/web/findata', payload)
      .then(() => {
        this._vm.$message.success('Запись добавлена!')
        dispatch('getFindata', {id: payload.company_id, page: 1})
      })
      .catch(error => {
        this._vm.$message.error(error.message);
      })
    },
    getSupportactions ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/supportactions')
      .then(response => {
        commit('setSupportactions', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getSupportentities ({commit}, payload) {
      Vue.axios.get('https://startbase.online/api/web/supportentities?page=' + payload.page)
      .then(response => {
        commit('setSupportentities', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getSupportentitiesForCompany ({commit}, payload) {
      Vue.axios.get('https://startbase.online/api/web/supportentities/relevant/' + payload.id + '?page=' + payload.page)
      .then(response => {
        commit('setSupportentities', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getSupportentity ({commit}, id) {
      Vue.axios.get('https://startbase.online/api/web/supportentities/' + id)
      .then(response => {
        commit('setSupportentity', response.data.items[0])
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getInnovations ({commit}) {
      Vue.axios.get('GET https://startbase.online/api/web/innovations')
      .then(response => {
        commit('setiInnovations', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    regUser ({commit}, user) {
      Vue.axios.post('https://startbase.online/api/web/users/signup', user).then(response => {
        commit('setUserData', {access_token: response.data.access_token, user})
        location.reload()
        this._vm.$message.success('Вы зарегистрированы!')
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    loginUser ({commit}, user) {
      Vue.axios.post('https://startbase.online/api/web/users/login', user)
      .then(response => {
        commit('setUserData', {access_token: response.data.access_token, user})
        location.reload()
        this._vm.$message.success('Вы вошли в систему!');
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getCompanies ({commit}, page) {
      Vue.axios.get('https://startbase.online/api/web/companies?page=' + page)
      .then(response => {
        commit('setCompanies', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getMyCompanies ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/companies/my')
      .then(response => {
        commit('setMyCompanies', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getMyProfile ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/users/profile')
      .then(response => {
        commit('setMyProfile', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    updateUser (_, payload) {
      Vue.axios.put('https://startbase.online/api/web/users/' + payload.id, payload)
      .then(() => {
        this._vm.$message.success('Профиль обновлен!');
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    createCompany (_, payload) {
      Vue.axios.post('https://startbase.online/api/web/companies', payload)
      .then(response => {
        router.push('/companies/' + response.data.c_id)
        this._vm.$message.success('Компания создана!')
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    updateCompany (_, payload) {
      Vue.axios.put('https://startbase.online/api/web/companies/' + payload.c_id, payload)
      .then(() => {
        this._vm.$message.success('Компания обновлена!');
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getCompany ({commit}, id) {
      Vue.axios.get('https://startbase.online/api/web/companies/' + id)
      .then(response => {
        commit('setCompany', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getStages ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/stages')
      .then(response => {
        commit('setStages', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getStatuses ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/statuses')
      .then(response => {
        commit('setStatuses', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
      })
    },
    getMarkets ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/markets')
      .then(response => {
        commit('setMarkets', response.data)
      })
      .catch(error => {
        this._vm.$message.error(error);
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
    },
    findata (state) {
      return state.findata
    },
    supportactions (state) {
      return state.supportactions
    },
    supportentities (state) {
      return state.supportentities
    },
    supportentity (state) {
      return state.supportentity
    },
    innovations (state) {
      return state.innovations
    }
  }
})
