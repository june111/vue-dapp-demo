import Vue from 'vue'
import Router from 'vue-router'
import Casino from '@/components/casino-dapp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'dapp-demo/',
  routes: [{
    path: '/',
    name: 'casino-dapp',
    component: Casino
  }]
})
