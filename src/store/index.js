import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
// import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUsers (state, payload) {
      state.users = payload
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
    getUser (commit, id) {
      Vue.axios.get('http://startbase.online/api/web/users/' + id)
      .then(response => {
        commit('setUser', {payload: response.data})
      })
      .catch(error => {
        console.log(error)
      })
    },
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
    // checkToken: _.debounce(function ({ commit, dispatch }, retryRequest) {
    //   if (!this._vm.$http.defaults.headers.common.Authorization) this._vm.$http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
    //   this._vm.$http
    //     .post('auth/refresh', {'refresh': localStorage.refresh_token}).then(response => {
    //       // console.log('token updated')
    //       commit('setUserData', {payload: response.data, retryRequest})
    //     })
    //     .catch(() => {
    //       dispatch('logOut')
    //     })
    // }, 500),
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
    }
  }
})
