<template>
    <div class="search-view has-header">
        <el-input placeholder="请输入内容"  v-model="searchKey" @keyup.enter="seach" class="input-with-select">
          <el-button slot="append" type="info" icon="el-icon-search"  @click="seach"></el-button>
        

        </el-input> 
    <!-- <ret></ret> -->
    <!-- <router-view></router-view> -->
 <!-- <sea></sea> -->

  </div>

</template>

<script>
 //import movieList from '@/views/ret.vue'
//import { mapState } from 'vuex'
//import sea from '@/components/douban/test/sea'


export default {
 //components: { ret },

 name:'cqw',
  data(){

    return {
      //searchkey: ''
      searchKey: '',
     // movieType: 'in_theaters'// 正在热映类型
    }
  },
  // components: {
  //     'movie-list': movieList
  //   },
      methods: {
      seach(){
        //刷新页面
       // this.$router.go(0)
        if (!this.searchKey) {
          alert('请输入搜索内容');
          return;
        }
       //搜索页面跳转
       this.$router.push({
         path: '/sea/' + this.searchKey,
       })
        this.searchKey = "";
      }
    },
  // methods:{
  //   search(){
  //       if (!this.searchKey) {
  //         alert('请输入搜索内容');
  //         return;
  //       }
  //       this.$router.push({
  //         path:'/search/' + this.searchkey,
  //       })
  //       this.searchkey = "";

  //   }
  // }
    // components: {
    //   sea
    // }
  
}
</script>
<style>
.has-header{
  margin-bottom: 20px;
}
.el-input-group {
    width: 100%;
}
 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  .el-card__body{
    height: 570px;
  }
</style>
