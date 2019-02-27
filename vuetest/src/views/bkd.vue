<template>
<div class="container ">
    <cqw></cqw>
  <div class="row featurette">
      <div class="col-md-5 order-md-1">
          <img class="align-self-start mr-3" :src="getImages(book.images.large)" alt="item.title">
      </div>
        <div class="media-body" v-show="!loading">
          <h5 class="mt-0">{{book.title}}({{book.pubdate}})</h5>
          <p>作者：{{getDirectors}}</p>
          <p>出版社：{{book.publisher}}</p>
          <p>原作名：{{book.alt_title}}</p>
          <p>页数：{{book.pages}}</p>
          <p>价格：{{book.price}}</p>
          <p>            
            <h3>{{book.title}}介绍</h3>
            <p>{{book.summary}}</p>
            <p><a :href="(book.alt)">更多详情前往豆瓣书籍</a></p>
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
        loading: 'bookDetail/loading',
        book: 'bookDetail/book'
      }),
      // 获取导演
      getDirectors(){
        return this.getFilterData(this.book.author);
      },
    },
    mounted(){
      // 获取书本详情
      this.$store.dispatch('bookDetail/getBookDetailById', this.$route.params.id);
    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
      '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/bkd/') == 0) {
          this.$store.dispatch('bookDetail/getBookDetailById', this.$route.params.id);
        }
      }
    },
    methods: {
      // 过滤数据
      getFilterData(obj){
        let arr = [];
        if (!obj || obj.length == 0)return '';

        for (let i = 0; i < obj.length; i++) {
          arr.push(obj[i])
        }
        return arr.join('/');
      },
      // 解决403图片缓存问题
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 8 );
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
    height: 400px;
  }
/* Featurettes
------------------------- */

.featurette {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}




</style>
