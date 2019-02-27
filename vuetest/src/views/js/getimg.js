
  import {mapGetters, mapActions} from 'vuex'
   import cqw from '@/components/search.vue'
   import mvpage from '@/components/mvpage.vue'
  export default {

    computed:{ 
      ...mapGetters({
      loading: 'musicList/loading',
      title: 'musicList/title',
      list: 'musicList/list'
    }),

    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
    '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/mu/') == 0) {
          // 调用子组件方法
            var obj = {
            k:this.$route.params.searchKey,
            start:0,
            count:5
            }   
          this.$store.dispatch('musicList/searchMusic',obj);
        }
      }
    },
 
    mounted(){

      if (this.$route.name =='mu') {
        var obj = {
          k:this.$route.params.searchKey,
          start:0,
          count:5
        }        
        this.$store.dispatch('musicList/searchMusic', obj);
      }
    },
    methods: {
      ... mapActions({
        searchMusic:'musicList/searchMusic'
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
    }
    

    },
        components: {
      cqw,
      mvpage
    }
  }
