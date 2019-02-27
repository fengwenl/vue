<template>
      <div class="container block" >
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="5"
          :total="20"
          layout="total, prev, pager, next"
          >
        </el-pagination>
      </div>
</template>

<script>
export default {

    name:'mvpage',
    data(){
        return{
            currentPage: 1,
           
        }
    },

    methods: {   
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },        
      handleCurrentChange() {
        //点击页数页面转变
        if(this.$route.name =='sea'){
            if(this.currentPage == 1){
            var obj = {
            k:this.$route.params.searchKey,
            start:0,
            count:5
            }
            this.$store.dispatch('movieList/searchMovie',obj);          
            }else if(this.currentPage == 2){
            var obj = {
            k:this.$route.params.searchKey,
            start:5,
            count:5
            }
            this.$store.dispatch('movieList/searchMovie',obj);
            }else if(this.currentPage == 3){
            var obj = {
            k:this.$route.params.searchKey,
            start:10,
            count:5
            }
            this.$store.dispatch('movieList/searchMovie',obj);
            }else if(this.currentPage == 4){
            var obj = {
            k:this.$route.params.searchKey,
            start:15,
            count:5
            }
            this.$store.dispatch('movieList/searchMovie',obj);
            }
        }else if(this.$route.name=='mvtop'){
            if(this.currentPage == 1){
            var obj = {
            k:this.$route.params.searchKey,
            start:0,
            count:5
            }
            this.$store.dispatch('movieList/mvtop',obj);  
         
            }else if(this.currentPage == 2){
            var obj = {
            k:this.$route.params.searchKey,
            start:5,
            count:5
            }
            this.$store.dispatch('movieList/mvtop',obj);
        
            }else if(this.currentPage == 3){
            var obj = {
            k:this.$route.params.searchKey,
            start:11,
            count:5
            }
            this.$store.dispatch('movieList/mvtop',obj);
  
            }else if(this.currentPage == 4){
            var obj = {
            k:this.$route.params.searchKey,
            start:17,
            count:5
            }
            this.$store.dispatch('movieList/mvtop',obj);  
            }
        }else if(this.$route.name=='ml'){
            if(this.currentPage == 1){
            var obj = {
            start:0,
            count:5
            }
            this.$store.dispatch('movieList/getInTheaters',obj);          
            }else if(this.currentPage == 2){
            var obj = {
            start:5,
            count:5
            }
            this.$store.dispatch('movieList/getInTheaters',obj);
            }else if(this.currentPage == 3){
            var obj = {
            start:10,
            count:5
            }
            this.$store.dispatch('movieList/getInTheaters',obj);
            }else if(this.currentPage == 4){
            var obj = {
            start:15,
            count:5
            }
            this.$store.dispatch('movieList/getInTheaters',obj);
            }
        }else if(this.$route.name=='bks'){
            if(this.currentPage == 1){
            var obj = {
            start:0,
            count:5
            }
            this.$store.dispatch('bookList/searchBook',obj);          
            }else if(this.currentPage == 2){
            var obj = {
            k:this.$route.params.searchKey,    
            start:5,
            count:5
            }
            this.$store.dispatch('bookList/searchBook',obj);
            }else if(this.currentPage == 3){
            var obj = {
            k:this.$route.params.searchKey,    
            start:10,
            count:5
            }
            this.$store.dispatch('bookList/searchBook',obj);
            }else if(this.currentPage == 4){
            var obj = {
            k:this.$route.params.searchKey,    
            start:15,
            count:5
            }
            this.$store.dispatch('bookList/searchBook',obj);
            }
        }else if(this.$route.name=='mu'){
            if(this.currentPage == 1){
            var obj = {
            start:0,
            count:5
            }
            this.$store.dispatch('musicList/searchMusic',obj);          
            }else if(this.currentPage == 2){
            var obj = {
            k:this.$route.params.searchKey,    
            start:5,
            count:5
            }
            this.$store.dispatch('musicList/searchMusic',obj);
            }else if(this.currentPage == 3){
            var obj = {
            k:this.$route.params.searchKey,    
            start:10,
            count:5
            }
            this.$store.dispatch('musicList/searchMusic',obj);
            }else if(this.currentPage == 4){
            var obj = {
            k:this.$route.params.searchKey,    
            start:15,
            count:5
            }
            this.$store.dispatch('musicList/searchMusic',obj);
            }
        }   
      },        
    },

}
</script>

<style>

</style>
