import Vue from 'vue'
import App from './App.vue'
import Socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = new Socketio('http://nethergonnaend.cf:3654')

Vue.use(VueSocketIO, SocketInstance)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
