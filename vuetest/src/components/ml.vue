<template>

  <div class="container">
      <cqw></cqw>
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <div v-show="!loading">
      <h3>正在上映的电影</h3>
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
                <li class="list-group-item">年份：{{item.year}}</li>
              <li class="list-group-item">评分：{{item.rating.average}} / 评价：{{item.collect_count}}</li>
              <li class="list-group-item"> 类型： <template v-for="genres of item.genres">{{genres}}/ </template> </li>
              <li class="list-group-item">导演：
                  <template v-for="directors in item.directors">
                      <template >{{directors.name}}/</template>
                </template>
                </li>
               <li class="list-group-item" >主演：
                 <template v-for="(casts, index) in item.casts">
                   <template>{{casts.name}}/</template>
                 </template>
               </li> 
            </ul>
            <div class="card-body">
              <router-link  class="btn btn-primary" role="button" :to="{path:'/detail/'+item.id}">{{item.title}}</router-link>
            </div>
          </div>
        </div>  
    </div>
    <mvpage></mvpage>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import cqw from '@/components/search.vue'
   import mvpage from '@/components/mvpage.vue'
  export default {
    computed: mapGetters({
      loading: 'movieList/loading',
      title: 'movieList/title',
      list: 'movieList/list'
    }),
    props: ['movieType'],// 接收父组件传过来的值 --in_theaters=正在上映的电影  --search==搜索电影
    mounted(){
      if (this.movieType == 'search') {
            var obj = {
            k:this.$route.params.searchKey,
            start:0,
            count:5
            }
            this.$store.dispatch('movieList/searchMovie',obj); 
      } else {
            var obj = {
            start:0,
            count:5
            }
            this.$store.dispatch('movieList/getInTheaters',obj); 
      
      }
    },
    methods: {
        ... mapActions({
          searchMovie:'movieList/searchMovie'
        }),
    // 解决403图片缓存问题
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
    },
        components: {
      cqw,
      mvpage
    }
  }
</script>

<style scoped>

</style>
