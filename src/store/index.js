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
      // var base64Url = payload.token.split('.')[1]
      // var base64 = base64Url.replace('-', '+').replace('_', '/')
      // var encToken = JSON.parse(window.atob(base64))
      localStorage.token = payload.token
      // localStorage.token_expiration = encToken.exp
      // localStorage.refresh_token = payload.refresh_token
      // localStorage.refresh_expiration = payload.refresh_expiration
      // localStorage.uid = payload.user_id
      // localStorage.uuid = payload.user_uuid
      // localStorage.urole = encToken.role
      // localStorage.login = encToken.login
      // localStorage.store_uuid = encToken.store_uuid
      // state.user = payload.user
      // this._vm.$http.defaults.headers.common.Authorization = 'Bearer ' + payload.token
      // if (retryRequest && retryRequest.response.status === 401 && !retryRequest.config.__isRetryRequest) {
      //   retryRequest.config.headers.Authorization = 'Bearer ' + payload.token
      //   retryRequest.config.__isRetryRequest = true
      //   this._vm.$http(retryRequest.config)
      // }
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
        console.log(response.data)
        commit('setUser', {payload: response.data})
      })
      .catch(error => {
        console.log(error)
      })
    },
    regUser (commit, user) {
      Vue.axios.post('https://startbase.online/api/web/users/signup', user)
      .then(response => {
        console.log(response.data)
        // commit('setUserData', {payload: response.data})
        // commit('setMessage', 'Вы успешно вошли в систему')
        router.push('/')
      })
      .catch(error => {
        console.log(error)
        // commit('setLoading', false)
        // if (error.response.status === 401) {
        //   commit('setError', error.response.data.message)
        // }
        // dispatch('validateError', error)
      })
    },
    // loginUser ({commit, dispatch}, user) {
    //   commit('setLoading', true)
    //   Vue.axios.post('http://startbase.online/api/web/users/login', user)
    //   .then(response => {
    //     commit('setLoading', false)
    //     commit('setUserData', {payload: response.data})
    //     commit('setMessage', 'Вы успешно вошли в систему')
    //     router.push('/')
    //     this._vm.$http
    //       .get('users/' + localStorage.uuid)
    //       .then(response => {
    //         localStorage.loginTelephony = response.data.login_telephony
    //         localStorage.passwordTelephony = response.data.password_telephony
    //       }).catch(error => {
    //         dispatch('validateError', error)
    //       })
    //   })
    //   .catch(error => {
    //     commit('setLoading', false)
    //     if (error.response.status === 401) {
    //       commit('setError', error.response.data.message)
    //     }
    //     // dispatch('validateError', error)
    //   })
    // },
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
