// api/movie.js
import axios from 'axios'

export default {
  // 获取正在上映的电影
  getInTheatersMovie(start ,count ){
    return this.reqUrl(`/v2/movie/in_theaters?city=广州&start=${start}&count=${count}`)
  },
  // 电影搜索

 searchMovie(key,start,count){
    return this.reqUrl(`/v2/movie/search?q=${key}&start=${start}&count=${count}`)
  },
  mvtop(start,count){
    return this.reqUrl(`/v2/movie/top250&start=${start}&count=${count}`)
  },
  // 获取电影详情
  getMovieDetailById(id){
    return this.reqUrl(`/v2/movie/subject/${id}`)
  },
  // 搜索书籍 https://api.douban.com/v2/book/search?q=javascript&count=1
  searchBook(key, start, count){
    return this.reqUrl(`/v2/book/search?q=${key}&start=${start}&count=${count}`)
  },
  getBookDetailById(id){
    return this.reqUrl(`/v2/book/${id}`)
  },
  searchMusic(key, start, count){
    return this.reqUrl(`/v2/music/search?q=${key}&start=${start}&count=${count}`)
  },
  
  getMusicDetailById(id){
    return this.reqUrl(`/v2/music/${id}`)
  },  
  // axios 请求
  reqUrl(url){
    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
        resolve(response.data);
      })
    })
  }
}

