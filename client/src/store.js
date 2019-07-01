import Vue from 'vue';
import Vuex from 'vuex';
import ax from './server'
import router from './router'
import {
  TimeSelect
} from 'element-ui';
import {
  rejects
} from 'assert';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: '',
    allProduct: [],
    myCart: [],
    myCart2: 'coba',
    message: 'saya dari vuex. ',
    lagi: 'lagi lohh ini selanjutnya'
  },
  mutations: {
    //to access here use commit, state payload
    onLoginMutation(state, payload) {
      // console.log(payload, 'dari mutation')
      // console.log(this.state.isLogin)
      // console.log(state.role, payload.role, '=========')
      state.isLogin = true
      state.role = payload.role
      // console.log(state.role, payload.role, '=========')
      // console.log(this.state.isLogin)
      // console.log(payload, 'dari login')
      localStorage.setItem('access_token', payload.access_token)
      localStorage.setItem('role', payload.role)
      localStorage.setItem('username', payload.username)
      localStorage.setItem('email', payload.email)
      // localStorage.setItem('access_token', payload.access_token)
    },
    setLogin(state, payload) {
      console.log('setLogin')
      state.isLogin = payload.isLogin
      state.role = payload.role
    },
    allData(state, payload) {
      // console.log(payload,' ini payload hasil BroadcastChannel, bentuknya', typeof payload)
      // console.log(payload, 'dari mutaion')
      state.allProduct = payload
    },
    loginFail(state, payload) {
      state.isLogin = false
    },
    logOut(state, payload) {
      // console.log('mutate', payload)
      state.isLogin = payload
    },
    myCart(state, payload) {
      console.log('didalam my cart')
      console.log(payload)
      state.myCart = payload.cart

    }
  },
  actions: {
    // to access here use dispatch
    onRegister(contex, payload) {
      console.log('indise register', payload)
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
          this.dispatch('onLogin', payload)
            .then(success => {
              console.log(success)
              router.push('/shop')
            })
            .catch(err => {
              console.log(err)
            })
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
      return new Promise((resolve, reject) => {
        ax({
          url: '/users/login',
          method: 'POST',
          data: loginData
        }).then(({
          data
        }) => {

          context.commit('onLoginMutation', data)
          ax.defaults.headers.common['access_token'] = data.access_token
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    readData(context, payload) {
      console.log('mengambil data')
      ax({
          url: `/products/all`,
          method: `GET`
        })
        .then(({
          data
        }) => {
          // console.log(data)
          context.commit('allData', data)
        })
        .catch(err => [
          console.log(err)
        ])
    },
    addItem(context, payload) {
      console.log('sampai di vuex', payload)
      ax({
          url: '/products/add',
          method: 'POST',
          data: payload
        })
        .then(({
          data
        }) => {
          console.log('di then')
          console.log(data)
        })
        .catch(err => {
          console.log('di error')
          console.log(err)
        })
    },
    deleteItem(context, payload) {
      console.log('masuk store dan in payloadnya=> ', payload)
      ax({
          url: `/products/remove/${payload}`,
          method: 'DELETE',
        })
        .then((response) => {
          console.log('masuk berthasil')
          console.log(response)
          this.dispatch('readData')
        })
        .catch((err) => {
          console.log('errornya tuh disini')
          console.log(err)
        })
    },
    addToCart(context, payload) {
      console.log(payload)
      console.log(localStorage.getItem('email'), 'ini email')
      let email = localStorage.getItem('email')
      ax({
          url: `/users/one`,
          method: 'POST',
          data: {
            email
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          data.cart.push(payload)
          return ax({
            url: '/users/update',
            method: 'POST',
            data: {
              cart: data.cart,
              email: data.email
            }
          })
        })
        .then(update => {
          console.log(update, 'ini update')
        })
        .catch(err => [
          console.log(err)
        ])
    },
    getMyCart(context, payload) {
      console.log('masuk ke getmycart')
      ax({
          url: `/users/one`,
          method: 'POST',
          data: {
            email: localStorage.getItem('email')
          }
        })
        .then(({
          data
        }) => {
          console.log(data, 'ini data')
          context.commit('myCart', {
            cart: data.cart,
            email: data.email,
            role: data.role
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
});
