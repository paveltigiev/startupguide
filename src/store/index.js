import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
// import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: [],
    search: [],
    companies: [],
    myCompanies: [],
    myProfile: {},
    skills: {},
    findata: {},
    company: {},
    supportactions: {},
    supportproviders: {},
    innovations: {},
    technoparks: {},
    stages: [],
    bmodels: [],
    statuses: [],
    supportentities: {},
    supportentity: {},
    markets: {},
    isAuthenticated: false,
    loading: false
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
    setSkills (state, payload) {
      state.skills = payload
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
    setTechnoparks (state, payload) {
      state.technoparks = payload
    },
    setBmodels(state, payload) {
      state.bmodels = payload
    },
    setSupportactions (state, payload) {
      state.supportactions = payload
    },
    setSupportentities (state, payload) {
      state.supportentities = payload
    },
    setSupportproviders (state, payload) {
      state.supportproviders = payload
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
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setSearch(state, payload) {
      state.search = payload
    }
  },
  actions: {
    addUserToCompany (_, payload) {
      Vue.axios.post('https://startbase.online/api/web/companies/join', payload)
      .then(() => {
        this._vm.$message.success('Ваш запрос на добавления в компанию отправлен!');
      })
    },
    addToFriends (_, id) {
      Vue.axios.post('https://startbase.online/api/web/users/connect/' + id)
      .then(() => {
        this._vm.$message.success('Ваш запрос на добавления в друзья отправлен!');
      })
    },
    acceptFriend ({dispatch}, id) {
      let payload = {"accept": true}
      Vue.axios.put('https://startbase.online/api/web/users/connect/' + id, payload)
      .then(() => {
        this._vm.$message.success('Вы одобрили заявку в друзья!');
        dispatch('getMyProfile')
      })
    },
    denyFriend ({dispatch}, id) {
      let payload = {"accept": false}
      Vue.axios.put('https://startbase.online/api/web/users/connect/' + id, payload)
      .then(() => {
        this._vm.$message.success('Вы отклонили заявку в друзья!');
        dispatch('getMyProfile')
      })
    },
    acceptCompany ({dispatch}, id) {
      let payload = {
        accept: true,
        company_id: id
      }
      Vue.axios.put('https://startbase.online/api/web/companies/updinvitation', payload)
      .then(() => {
        this._vm.$message.success('Вы одобрили приглашение в компанию!');
        dispatch('getMyProfile')
        dispatch('myCompanies')
      })
    },
    denyCompany ({dispatch}, id) {
      let payload = {
        accept: false,
        company_id: id
      }
      Vue.axios.put('https://startbase.online/api/web/companies/updinvitation', payload)
      .then(() => {
        this._vm.$message.success('Вы отклонили приглашение в компанию!');
        dispatch('getMyProfile')
        dispatch('myCompanies')
      })
    },
    getNalogdata ({dispatch}, payload) {
      Vue.axios.get('https://startbase.online/api/web/taxes/' + payload.c_inn)
      .then(() => {
        this._vm.$message.success('Финансовая отчетность обновлена')
        dispatch('getFindata', {id: payload.c_id, page: 1})
      })
    },
    getUsers ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/users')
      .then(response => {
        commit('setUsers', response.data)
      })
    },
    getSearch ({commit}, q) {
      Vue.axios.get('https://startbase.online/api/web/search?find=' + q)
      .then(response => {
        commit('setSearch', {payload: response.data})
      })
    },
    getUser ({commit}, id) {
      Vue.axios.get('https://startbase.online/api/web/users/' + id)
      .then(response => {
        commit('setUser', {payload: response.data})
      })
    },
    getFindata ({commit}, payload) {
      Vue.axios.get('https://startbase.online/api/web/findata/getbycompany/' + payload.id + '?page=' + payload.page)
      .then(response => {
        commit('setFindata', response.data)
      })
    },
    addFindata ({dispatch}, payload) {
      Vue.axios.post('https://startbase.online/api/web/findata', payload)
      .then(() => {
        this._vm.$message.success('Запись добавлена!')
        dispatch('getFindata', {id: payload.company_id, page: 1})
      })
    },
    // справочник по типам сущностей
    getSupportproviders ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/supportproviders')
      .then(response => {
        commit('setSupportproviders', response.data)
      })
    },
    // типы оказываемой поддержки
    getSupportactions ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/supportactions')
      .then(response => {
        commit('setSupportactions', response.data)
      })
    },
    getSupportentities ({commit}, payload) {
      console.log(payload)
      Vue.axios.get('https://startbase.online/api/web/supportentities/search?support=' + payload.filterParams.support + '&service=' + payload.filterParams.service + '&page=' + payload.page)
      .then(response => {
        commit('setSupportentities', response.data)
      })
    },
    getSupportentitiesForCompany ({commit}, payload) {
      setTimeout(function() {
        Vue.axios.get('https://startbase.online/api/web/supportentities/relevant/' + payload.id + '?page=' + payload.page)
        .then(response => {
          commit('setSupportentities', response.data)
        })
        // .catch(error => {
        //   this._vm.$message.error(error);
        // })
      }, 1000)
    },
    getSupportentity ({commit}, id) {
      Vue.axios.get('https://startbase.online/api/web/supportentities/' + id)
      .then(response => {
        commit('setSupportentity', response.data.items[0])
      })
      // .catch(error => {
      //   this._vm.$message.error(error);
      // })
    },
    getInnovations ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/innovations')
      .then(response => {
        commit('setInnovations', response.data)
      })
    },
    getTechnoparks ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/technoparks')
      .then(response => {
        commit('setTechnoparks', response.data)
      })
    },
    getBmodels ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/bmodels')
      .then(response => {
        commit('setBmodels', response.data)
      })
    },
    getExistSupportentity ({commit}, id) {
      Vue.axios.get('https://startbase.online/api/web/supportentities/existedforcompany/' + id)
      .then(response => {
        commit('setSupportentity', response.data)
      })
    },
    regUser ({commit}, user) {
      Vue.axios.post('https://startbase.online/api/web/users/signup', user).then(response => {
        commit('setUserData', {access_token: response.data.access_token, user})
        location.reload()
        this._vm.$message.success('Вы зарегистрированы!')
      })
      // .catch(error => {
      //   this._vm.$message.error(error);
      // })
    },
    loginUser ({commit}, user) {
      Vue.axios.post('https://startbase.online/api/web/users/login', user)
      .then(response => {
        commit('setUserData', {access_token: response.data.access_token, user})
        location.reload()
        this._vm.$message.success('Вы вошли в систему!');
      })
      // .catch(error => {
      //   this._vm.$message.error(error);
      // })
    },
    getCompanies ({commit}, page) {
      Vue.axios.get('https://startbase.online/api/web/companies?page=' + page)
      .then(response => {
        commit('setCompanies', response.data)
      })
      // .catch(error => {
      //   this._vm.$message.error(error);
      // })
    },
    getMyCompanies ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/companies/my')
      .then(response => {
        commit('setMyCompanies', response.data)
      })
      // .catch(error => {
      //   this._vm.$message.error(error);
      // })
    },
    getMyProfile ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/users/profile')
      .then(response => {
        commit('setMyProfile', response.data)
      })
    },
    getSkills ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/skills')
      .then(response => {
        commit('setSkills', response.data)
      })
    },
    updateUser (_, payload) {
      Vue.axios.put('https://startbase.online/api/web/users/' + payload.id, payload)
      .then(() => {
        this._vm.$message.success('Профиль обновлен!');
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
    },
    deleteCompany (_, id) {
      Vue.axios.delete('https://startbase.online/api/web/companies/' + id)
      .then(() => {
        router.push('/profile')
        this._vm.$message.success('Компания удалена!');
      })
    },
    getCompany ({commit}, id) {
      commit('setLoading', true)
      Vue.axios.get('https://startbase.online/api/web/companies/' + id)
      .then(response => {
        commit('setLoading', false)
        commit('setCompany', response.data)
      })
    },
    getStages ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/stages')
      .then(response => {
        commit('setStages', response.data)
      })
    },
    getStatuses ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/statuses')
      .then(response => {
        commit('setStatuses', response.data)
      })
    },
    getMarkets ({commit}) {
      Vue.axios.get('https://startbase.online/api/web/markets')
      .then(response => {
        commit('setMarkets', response.data)
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
    skills (state) {
      return state.skills
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
    supportproviders (state) {
      return state.supportproviders
    },
    supportentities (state) {
      return state.supportentities
    },
    supportentity (state) {
      return state.supportentity
    },
    innovations (state) {
      return state.innovations
    },
    technoparks (state) {
      return state.technoparks
    },
    loading (state) {
      return state.loading
    },
    search (state) {
      return state.search
    },
    bmodels (state) {
      return state.bmodels
    }
  }
})
