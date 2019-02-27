import Vue from 'vue'
import Router from 'vue-router'
//import search from '@/components/search'
const search = r => require.ensure([], () => r(require('@/components/search')), 'search')
const test = r => require.ensure([], () => r(require('@/components/test')), 'test')
const sea = r => require.ensure([], () => r(require('@/views/sea')), 'sea')
const Detail = r => require.ensure([], () => r(require('@/views/dt')), 'detail')
const bks = r => require.ensure([], () => r(require('@/views/bks')), 'bks')
const ml = r => require.ensure([], () => r(require('@/components/ml')), 'ml')
const test2 = r => require.ensure([], () => r(require('@/components/test2')), 'test2')
const bkd = r => require.ensure([], () => r(require('@/views/bkd')), 'bkd')
const mvtop = r => require.ensure([], () => r(require('@/views/mvtop')), 'mvtop')
const mu = r => require.ensure([], () => r(require('@/views/mus/mu')), 'mu')
const mus = r => require.ensure([], () => r(require('@/views/mus/mus')), 'mus')
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
      path: '/mvtop',
      name: 'mvtop',
      component: mvtop
    },
    {
      path: '/bks/:searchKey',
      name: 'bks',
      component: bks
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path:'/detail/:id',
      name: 'det',
      component: Detail
    },
    {
      path:'/bkd/:id',
      name: 'bkd',
      component: bkd
    },
    {
      path: '/mu/:searchKey',
      name: 'mu',
      component: mu
    },
    {
      path:'/mus/:id',
      name: 'mus',
      component: mus
    },
    
  ]
});




