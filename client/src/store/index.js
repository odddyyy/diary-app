import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
const DEV_URL = 'http://localhost:3000'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
  },
  mutations: {
    doLogin(state, name){
      state.name = name
    }
  },
  actions: {
    async doLogin(context, payload) {
      try {
        const logginIn = await axios({
          method: 'POST',
          url: `${DEV_URL}/login`,
          data: {
            email: payload.email,
            password: payload.password
          }
        })
        const { token, name } = logginIn.data
        localStorage.setItem('access_token', token)
        Swal.fire({
          imageUrl:'https://media0.giphy.com/media/l0IxYD16t9PDEdg9q/giphy.gif',
          title: name,
          showConfirmButton: false,
          timer: 2500
        })
        context.commit('doLogin', name)

      } catch (response) {
        console.log(response.response)
      }
    },
    async doRegister(context, payload) {
      try {
        const register = await axios({
          method:'POST',
          url:`${DEV_URL}/register`,
          data: {
            name: payload.name,
            email: payload.email,
            password: payload.password
          }
        })
        const { token, name } = register.data
        localStorage.setItem('access_token', token)
        Swal.fire(`Thank you for registering ${name}. Please enjoy the app!`)
        context.commit('doLogin', name)
      } catch (response) {
        Swal.fire({
          icon:'error',
          title: response.response.data
        })
      }
    }
  },
  modules: {
  }
})
