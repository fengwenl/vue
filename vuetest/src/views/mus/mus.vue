<template>
<div class="container ">
    <cqw></cqw>
  <div class="row featurette">
      <div class="col-md-5 order-md-1">
          <img class="align-self-start mr-3" :src="getImages(book.image)" alt="item.title">
      </div>
        <div class="media-body" v-show="!loading">
          <h5 class="mt-0">{{book.title}}</h5>
          <p>表演者：{{getDirectors}}</p>
          <p>专辑类型: {{version}}</p>
          <p>介质：{{media}}</p>
          <p>发行时间：{{pubdate}}</p>
          <p>出版者：{{publisher}}</p>
          <p>其他单曲：{{tracks}}</p>

          <p>            
            <h3>{{book.title}}介绍</h3>
            <p>{{book.summary}}</p>
            <p><a :href="(book.alt)">更多详情前往豆瓣音乐</a></p>
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
        loading: 'musicDetail/loading',
        book: 'musicDetail/book',
        attrs: 'musicDetail/attrs'
      }),
      // 获取导演
      getDirectors(){
        return this.getFilterData(this.book.author);
      },
     publisher(){
        return this.getData(this.attrs.publisher);
      },
      singer(){
        return this.getData(this.attrs.singer);
      },
     version(){
        return this.getData(this.attrs.version);
      },
      pubdate(){
        return this.getData(this.attrs.pubdate);
      },
      title(){
        return this.getData(this.attrs.title);
      },
      media(){
        return this.getData(this.attrs.media);
      },
      tracks(){
        return this.gettracksData(this.attrs.tracks);
      },


    },
    mounted(){
      // 获取书本详情
      this.$store.dispatch('musicDetail/getMusicDetailById', this.$route.params.id);
    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
      '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/mus/') == 0) {
          this.$store.dispatch('musicDetail/getMusicDetailById', this.$route.params.id);
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
      getData(obj){
        let arr = [];
        if (!obj || obj.length == 0)return '';

        for (let i = 0; i < obj.length; i++) {
          arr.push(obj[i])
        }
        return arr.join('/');
      },
      gettracksData(obj){
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
