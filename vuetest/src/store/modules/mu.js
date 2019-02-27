import * as types from '../mutation-types'
import movie from '../../api/movie'


const state = {
    loading: true,
    title: '',
    list: [],

  }
  
  const getters = {
    loading: state => state.loading,
    list: state => state.list,
    title: state => state.title
  }
  
  const actions = {
    //book

    searchMusic({ commit }, key){
        state.loading = true;
        movie.searchMusic(key.k ,key.start, key.count).then(data => {
          commit(types.MUSIC_LIST, data)
        })
      },
  }
  
  const mutations = {

    [types.MUSIC_LIST](state, data){
      state.title = data.title;
      state.list = data.musics;
      state.loading = false;
    },   
  }
  


export default {
  namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  