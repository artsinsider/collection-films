import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Films from './components/Films.vue'
import Test from './TestEnvironment/TestEnvironment.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/test environment',
      name: 'Test Environment',
      component: Test
    }
  ]
})
