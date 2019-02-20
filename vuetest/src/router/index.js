import Vue from 'vue'
import Router from 'vue-router'
//import search from '@/components/search'
const search = r => require.ensure([], () => r(require('@/components/search')), 'search')
const test = r => require.ensure([], () => r(require('@/components/test')), 'test')
const sea = r => require.ensure([], () => r(require('@/views/sea')), 'sea')
const Detail = r => require.ensure([], () => r(require('@/views/dt')), 'detail')
const ml = r => require.ensure([], () => r(require('@/components/ml')), 'ml')
//const ret = r => require.ensure([], () => r(require('@/views/ret')), 'ret')
Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ml',
      component: ml
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
   
    {
      path: '/sea/:searchKey',
      name: 'sea',
      component: sea
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path:'/detail/:id',
      component: Detail
    },
    
  ]
})
