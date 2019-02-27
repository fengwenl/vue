<template>

  <div class="container">
      <cqw></cqw>
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <div v-show="!loading">
        <h3>TOP30排行榜电影</h3>
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
                </template></li>
               <li class="list-group-item" >主演：
                 <template v-for="(casts, index) in item.casts">
                   <template v-if="index<3">{{casts.name}}/</template>
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
  import mvpage from '@/components/mvpage.vue'
  import cqw from '@/components/search.vue'
  export default {
    computed: mapGetters({
      loading: 'movieList/loading',
      title: 'movieList/title',
      list: 'movieList/list'
    }),
   
    mounted(){
        var obj = {
          start:0,
          count:5
        }        
        this.$store.dispatch('movieList/mvtop',obj);
    },
    methods: {
        ... mapActions({
          searchMovie:'movieList/mvtop'
        }),
    // 解决403图片缓存问题
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 8 );
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
