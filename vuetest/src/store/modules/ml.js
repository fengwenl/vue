import * as types from '../mutation-types'
import movie from '../../api/movie'


const state = {
    loading: true,
    title: '',
    list: [],
    count:'',
    total:''
  }
  
  const getters = {
    loading: state => state.loading,
    list: state => state.list,
    title: state => state.title,
    count: state => state.count,
    total: state => state.total
  }
  
  const actions = {
    // 获取正在上映的电影
    getInTheaters({ commit },key){
      state.loading = true;
      movie.getInTheatersMovie(key.start, key.count).then(data => {
        commit(types.MOVIE_LIST, data)
      })
    },
    // 搜索电影
    searchMovie({ commit }, key){
      state.loading = true;
      movie.searchMovie(key.k ,key.start, key.count).then(data => {
        commit(types.MOVIE_LIST, data)
      })
    },

    mvtop({ commit },key){
      state.loading = true;
      movie.mvtop(key.start, key.count).then(data => {
        commit(types.MOVIE_LIST, data)
      })
    },
    //book

  }
  
  const mutations = {
    [types.MOVIE_LIST](state, data){
      state.title = data.title;
      state.list = data.subjects;
      state.count = data.count;
      state.total = data.total;
      state.loading = false;
    } 
  }
  


export default {
  namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  