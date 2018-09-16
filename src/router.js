import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
