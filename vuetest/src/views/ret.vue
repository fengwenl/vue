<template>
  <div class="container">
    <cqw></cqw>
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <div v-show="!loading">
 <h2>{{genres}}</h2>
        <div class="card-columns">
          <div class="card" v-for="item in list" :key="item.id">
                    <router-link :to="{path:'/detail/'+item.id}">
                      <img class="card-img-top" :src="getImages(item.images.small)" alt="item.title">
                    </router-link>
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.original_title}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">评分：{{item.rating.average}}</li>
              <li class="list-group-item"> 类型：{{item.genres}}{{getGenres}} </li>
            </ul>
            <div class="card-body">
              <router-link  class="btn btn-primary" role="button" :to="{path:'/detail/'+item.id}">{{item.title}}</router-link>
            </div>
          </div>
        </div>  
     
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
   import cqw from '@/components/search.vue'
  export default {

    computed:{ 
      ...mapGetters({
      loading: 'loading',
      title: 'title',
      list: 'list',
      genres:'genres'

    }),
      getGenres(){
        return this.getFilterData(this.list.genres);
      }
    },
    props: ['movieType'],// 接收父组件传过来的值 --in_theaters=正在上映的电影  --search==搜索电影
    mounted(){
        
      if (this.movieType == 'search') {
        this.$store.dispatch('searchMovie', this.$route.params.searchKey);
      } else {
        this.$store.dispatch('getInTheaters');
      }
    },
    methods: {
        ... mapActions([
      'searchMovie'
    ]),
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

</style>