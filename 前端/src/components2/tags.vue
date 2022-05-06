<template>
<div>
  <div class="box1">
    <p class="animate__animated animate__lightSpeedInLeft">标签</p>
  </div>
  <div class="box2 animate__animated animate__bounceInLeft">
  <div class="tags" v-for="item in tags_list" @click="find(item.tag_name)">
  <p>{{item.tag_name}}</p>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "tags",
  data(){
    return{
      tags_list:[
        // {
        //   tag_name:'JavaScript'
        // }
      ]
    }
  },
  methods:{
    //查找相对标签的文章
    find(val){
      window.scrollTo(0,0)
      this.$router.push({
        path:'/find',
        query:{
          tag:val
        }
      })
    },
  },
  mounted() {
    for (let i=0;i<this.$store.state.bq.length;i++){
      this.tags_list.push(JSON.parse(JSON.stringify(this.$store.state.bq[i])))
    }
  }
}
</script>

<style scoped>
.box1 {
  width: 100%;
  min-height: 500px;
  /*background-color: rebeccapurple;*/
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  text-shadow: 0 0 6px #000;
}

.box2 {
  width: 1000px;
  min-height: 100px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.tags{
  height: 20px;
  padding: 10px;
  margin:10px 3px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 12px;
  cursor: pointer;
}
.tags:hover{
  background-color: rgb(97, 147, 187);
}
@media screen and (min-width: 2559px){
  .box2{
    height: 800px;
  }
}
@media screen and (max-width: 1025px){
  .box2{
    width: 960px;
  }
}
@media screen and (max-width: 1005px){
  .box2{
    width: 90%;
  }
}
@media screen and (max-width: 426px){
  .box2{
    width: 85%;
  }
  .tags{
    padding: 2px;
    font-size: 16px;
    margin: 5px 1px;
  }
}
</style>