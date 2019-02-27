<template>
  <div class="container">
    <cqw></cqw>
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <div v-show="!loading">
      <h3>{{title}}</h3>
        <div class="card-columns">
          <div class="card" v-for="item in list" :key="item.id">
                    <router-link :to="{path:'/bkd/'+item.id}">
                      <img class="card-img-top" :src="getImages(item.images.small)" alt="item.title">
                    </router-link>
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.subtitle}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">评分：{{item.rating.average}} / 评价：{{item.rating.numRaters}}</li>
            
              <li class="list-group-item"> 年份：{{item.pubdate}} </li>
             <li class="list-group-item"> 作者： <template v-for="author in item.author">{{author}} </template> </li>
               <li class="list-group-item" >类型：
                 <template v-for="(tags, index) in item.tags">
                   <template v-if="index<3">{{tags.name}}/</template>
                 </template>
               </li>
            </ul>
            <div class="card-body">
              <router-link  class="btn btn-primary" role="button" :to="{path:'/bkd/'+item.id}">{{item.title}}</router-link>
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
      loading: 'bookList/loading',
      title: 'bookList/title',
      list: 'bookList/list'
    }),
    },
    props: ['bookType'],// 接收父组件传过来的值 --in_theaters=正在上映的电影  --search==搜索电影
    mounted(){
        
      if (this.bookType == 'search') {
        var obj = {
          k:this.$route.params.searchKey,
          start:0,
          count:5
        }        
        this.$store.dispatch('bookList/searchBook', obj);
      }
    },
    methods: {
        ... mapActions({
          searchBook:'bookList/searchBook'
        }),
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
        let _u = _url.substring( 8 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
         return _url
      
      
    }
    

    },
        components: {
      cqw
    }
  }
</script>

<style scoped>
.card-img-top{
  border-top-left-radius:10px; 
  border-top-right-radius:10px; 
}
.card{
  border-top-left-radius:10px; 
  border-top-right-radius:10px; 

}
</style>