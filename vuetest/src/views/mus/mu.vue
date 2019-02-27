<template>
  <div class="container">
    <cqw></cqw>
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <div v-show="!loading">
        <div class="card-columns">
          <div class="card" v-for="item in list" :key="item.id">
                    <router-link :to="{path:'/mus/'+item.id}">
                      <img class="card-img-top" :src="getImages(item.image)" alt="item.title">
                    </router-link>
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.subtitle}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">评分：{{item.rating.average}} / 评价：{{item.rating.numRaters}}</li>
            
                <li class="list-group-item" v-for="attrs in item.attrs.pubdate"> 年份：
                  {{attrs}}
                </li>
             <li class="list-group-item"> 作者： 
                 <template v-for="author in item.author">
                  {{author.name}}/
                 </template> 
            </li>
               <li class="list-group-item" >类型：
                 <template v-for="(tags, index) in item.tags">
                   <template v-if="index<3">{{tags.name}}/</template>
                 </template>
               </li>
            </ul>
            <div class="card-body">
              <router-link  class="btn btn-primary" role="button" :to="{path:'/mus/'+item.id}">{{item.title}}</router-link>
            </div>
          </div>
        </div>  
     
    </div>
    <mvpage></mvpage>
  </div>
</template>


<script>
import getimg from '@/views/js/getimg.js'
export default getimg
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