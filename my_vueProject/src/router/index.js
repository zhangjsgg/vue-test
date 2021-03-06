import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainBody from '@/components/mainBody'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mainBody',
      name: 'mainBody',
      component: mainBody
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },

  ]
})
