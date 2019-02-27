import * as types from '../mutation-types'
import movie from '../../api/movie'

const state = {
  loading: true,
  movie: {
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
  movie: state => state.movie
}

const actions = {
  // 根据ID获取电影信息
  getMovieDetailById({ commit }, id){
    state.loading = true;
    movie.getMovieDetailById(id).then(data => {
      commit(types.MOVIE_DETAIL, data)
    })
  }
}

const mutations = {
  [types.MOVIE_DETAIL](state, data){
    state.movie = data;
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
