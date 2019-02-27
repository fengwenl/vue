import * as types from '../mutation-types'
import movie from '../../api/movie'

const state = {
    loading: true,
    book: {},
    attrs:{}
  }

  const getters = {
    loading: state => state.loading,
    book: state => state.book,
    attrs: state => state.attrs
  }

  const actions = {
    // 根据ID获取书本信息
    getMusicDetailById({ commit }, id){
      state.loading = true;
      movie.getMusicDetailById(id).then(data => {
        commit(types.MUSIC_DETAIL, data)
      })
    }
  }

const mutations = {
  [types.MUSIC_DETAIL](state, data){
    state.book = data;
    state.attrs = data.attrs;
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
