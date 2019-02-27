import * as types from '../mutation-types'
import movie from '../../api/movie'

const state = {
    loading: true,
    book: {
      images: {
        large: ''
      },
      rating: {
        average: 0
      }
    }
  }

  const getters = {
    loading: state => state.loading,
    book: state => state.book
  }

  const actions = {
    // 根据ID获取书本信息
    getBookDetailById({ commit }, id){
      state.loading = true;
      movie.getBookDetailById(id).then(data => {
        commit(types.BOOK_DETAIL, data)
      })
    }
  }

const mutations = {
  [types.BOOK_DETAIL](state, data){
    state.book = data;
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
