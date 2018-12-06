import Vue from 'vue'
import Router from 'vue-router'
import app from '@/App'
import HelloWorld from '@/components/HelloWorld'
import cute from '@/components/good'
import login from '@/components/login/login'
import NotFoundComponent from '@/components/NotFoundComponent'
import index from '@/components/page/index'
import navbar from '@/components/page/navbar'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/',
  routes: [
    { path: '*', component: NotFoundComponent },

    {
      path:'/',
      component:navbar,
      children:[
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/cute',
          name: 'cute',
          component: cute
        },

        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },

  ]
});
