<template>
    <div class="search-view has-header">
        <el-input placeholder="请输入内容"  v-model="searchKey" @keyup.enter.native="seach" class="input-with-select">
          <el-select v-model="searchsl" slot="prepend" placeholder="请选择">
            <el-option label="豆瓣电影" value="sea"></el-option>
            <el-option label="豆瓣书籍" value="bks"></el-option>
            <el-option label="豆瓣音乐" value="mus"></el-option>
          </el-select>
          <el-button slot="append" type="info" icon="el-icon-search"  @click="seach"></el-button>
        </el-input> 
       <el-button type="primary" @click="mvtop">top30电影</el-button>
       <el-button type="primary" @click="ml">正在上映电影</el-button>
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

      searchKey: '',
      searchsl: '',

     // movieType: 'in_theaters'// 正在热映类型
    }
  },

mounted(){
      if(this.$route.name =='sea' ){
        return  this.searchsl = this.$route.name 
      }
      else if(this.$route.name=='bks'){
        return  this.searchsl = this.$route.name 
      }else if(this.$route.name=='bkd'){
        return  this.searchsl = 'bks'
      }else if(this.$route.name=='det'){
        return  this.searchsl = 'sea' 
      }else if(this.$route.name=='mvtop'){
        return  this.searchsl = 'sea' 
      }else if(this.$route.name=='ml'){
        return  this.searchsl = 'sea' 
      }else if(this.$route.name=='mus'){
        return  this.searchsl = 'mus' 
      }else if(this.$route.name=='mu'){
        return  this.searchsl = 'mus' 
      }
},
      methods: {
      mvtop(){
        this.$router.push({
          path: '/mvtop/' 
        
      }) 
      },
      ml(){
        this.$router.push({
          path: '/' 
        
      }) 
      },
      seach(){

          //判定搜素值
        if (!this.searchKey) {
          alert('请输入搜索内容');
          return;
        } else if(this.searchsl == ""){
            alert('请选择类型');
            return;
        } else if(this.searchsl == "bks"){
         //搜索页面跳转
          this.$router.push({
            path: '/bks/' + this.searchKey
          
       }) 
           this.searchKey = "";
        } else if(this.searchsl == "sea"){         
        //搜索页面跳转
          this.$router.push({
            path: '/sea/' + this.searchKey
       }) 
            this.searchKey = "";
          }else if(this.searchsl == "mus"){         
        //搜索页面跳转
          this.$router.push({
            path: '/mu/' + this.searchKey
       }) 
            this.searchKey = "";
          }else if(this.searchsl == "mu"){         
        //搜索页面跳转
          this.$router.push({
            path: '/mu/' + this.searchKey
       }) 
            this.searchKey = "";
          }
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
.aaa{
  display: none;
}
.el-button--primary{
  margin: 10px;
}
.has-header{
  margin-bottom: 20px;
  margin-top: 20px;
}
.el-input-group {
    width: 100%;
}
  .el-select .el-input {
    width: 120px;
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
