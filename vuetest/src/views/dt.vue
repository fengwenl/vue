<template>
<div class="container ">
    <cqw></cqw>
  <div class="row featurette">
      <div class="col-md-5 order-md-1">
          <img class="align-self-start mr-3" :src="getImages(movie.images.large)" alt="item.title">
      </div>
        <div class="media-body" v-show="!loading">
          <h5 class="mt-0">{{movie.title}}({{movie.year}})</h5>
          <p>导演：{{getDirectors}}</p>
          <p>主演：{{getCasts}}</p>
          <p>评分：{{movie.rating.average}}</p>
          <p>            
            <h3>{{movie.title}}剧情介绍</h3>
            <p>{{movie.summary}}</p>
            </p>
        </div>
  </div>
</div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import cqw from '@/components/search.vue'
  export default {
    computed: {
      ...mapGetters({
        loading: 'loading1',
        movie: 'movie'
      }),
      // 获取导演
      getDirectors(){
        return this.getFilterData(this.movie.directors);
      },
      // 获取主演
      getCasts(){
        return this.getFilterData(this.movie.casts);
      }
    },
    mounted(){
      // 获取电影详情
      this.$store.dispatch('getMovieDetailById', this.$route.params.id);
    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
      '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/detail/') == 0) {
          this.$store.dispatch('getMovieDetailById', this.$route.params.id);
        }
      }
    },
    methods: {
      // 过滤数据
      getFilterData(obj){
        let arr = [];
        if (!obj || obj.length == 0)return '';

        for (let i = 0; i < obj.length; i++) {
          arr.push(obj[i].name)
        }
        return arr.join('/');
      },
      // 解决403图片缓存问题
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
    
    },
    components: {
      cqw
    }
  }
</script>

<style scoped>

  .align-self-start{
    border-radius: 10px;
  }
/* Featurettes
------------------------- */

.featurette {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}




</style>
