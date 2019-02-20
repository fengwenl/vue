<template>
  <div>
      <!-- sea -->
 
    <movie-list :movie-type="movieType" ref="updateList"></movie-list>
  </div>
</template>

<script>
//const index = r => require.ensure([], () => r(require('@/views/sea')), 'sea')
  import movieList from '@/views/ret'
  //import cqw from '@/components/search.vue'
  export default{
    name:'sea',
    data(){
      return {
        movieType: 'search'// 搜索类型
      }
    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
    '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/sea/') == 0) {
          // 调用子组件方法
          this.$refs.updateList.searchMovie(this.$route.params.searchKey);
        }
      }
    },
    components: {
      'movie-list': movieList,
    
    }
  }
</script>

<style>
</style>
