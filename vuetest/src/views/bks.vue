<template>
  <div>
      <!-- sea -->
 
    <book-list :book-type="bookType" ref="updateList"></book-list>
     <mvpage></mvpage>
  </div>
</template>

<script>
//const index = r => require.ensure([], () => r(require('@/views/sea')), 'sea')
  import bookList from '@/views/bk'
  //import cqw from '@/components/search.vue'
   import mvpage from '@/components/mvpage.vue'
  export default{
    name:'bks',
    data(){
      return {
        bookType: 'search'// 搜索类型
      }
    },
    watch: {
      // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
    '$route'(to, from){
        // 防止返回重复调用
        if (to.path.indexOf('/bks/') == 0) {
          // 调用子组件方法
          this.$refs.updateList.searchBook(this.$route.params.searchKey);
        }
      }
    },
    components: {
      'book-list': bookList,
       mvpage
    }
  }
</script>

<style>
</style>
