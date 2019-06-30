import Vue from 'vue';
import Vuex from 'vuex';
import ax from './server'
import {
  TimeSelect
} from 'element-ui';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null,
    allProduct: [],
    message: 'saya dari vuex. ',
    lagi: 'lagi lohh ini selanjutnya'
  },
  mutations: {
    //to access here use commit, state payload
    onLoginMutation(state, payload) {
      // console.log(payload, 'dari mutation')
      // console.log(this.state.isLogin)
      state.isLogin = true
      // console.log(this.state.isLogin)
      localStorage.setItem('access_token', payload.access_token)
      this.$router.push('/shop')
    },
    allData(state,payload) {
      // console.log(payload,' ini payload hasil BroadcastChannel, bentuknya', typeof payload)
      console.log(payload,'dari mutaion')
      state.allProduct = payload
    },
    loginFail(state,payload){
      state.isLogin = false
    },
    logOut(state,payload){
      console.log('mutate',payload)
      state.isLogin = payload
    }
  },
  actions: {
    // to access here use dispatch
    onRegister(contex, payload) {
      console.log('indise register',payload)
      let newUser = {
        username: payload.username,
        email: payload.email,
        password: payload.password
      }
      ax({
          url: '/users/register',
          method: 'POST',
          data: newUser
        })
        .then(response => {
          console.log(response)
          console.log(payload)
          this.$store.dispatch('onLogin',payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    onLogin(context, payload) {
      console.log('login kesini', payload)
      // console.log(payload.email, payload.password)
      let loginData = {
        email: payload.email,
        password: payload.password
      }
      ax({
        url: '/users/login',
        method: 'POST',
        data: loginData
      })
        .then(({ data })=> {
          console.log(data)
          context.commit('onLoginMutation',data)
        })
        .catch(err=> {
          console.log(err)
        })
    },
    readData(context,payload){
      console.log('mengambil data')
      ax({
        url: `/products/all`,
        method: `GET`
      })
        .then(({ data })=> {
          // console.log(data)
          context.commit('allData', data)
        })
        .catch(err=> [
          console.log(err)
        ])
    }
  },
});
