import Vue from 'vue'
import Vuex from 'vuex'
import movieList from './modules/ml'
import movieDetail from './modules/md'

Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    movieList,
    movieDetail
  }
})
