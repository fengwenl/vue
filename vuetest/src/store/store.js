import Vue from 'vue'
import Vuex from 'vuex'
import movieList from './modules/ml'
import movieDetail from './modules/md'
import bookList from './modules/bl'
import bookDetail from './modules/bd'
import musicList from './modules/mu'
import musicDetail from './modules/mus'

Vue.use(Vuex);
export default new Vuex.Store({
 
  modules:{
    movieList,
    movieDetail,
    bookList,
    bookDetail,
    musicList,
    musicDetail,
  },

})
