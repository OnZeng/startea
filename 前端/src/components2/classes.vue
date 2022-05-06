<template>
<div>
  <div class="box1">
    <p class="animate__animated animate__lightSpeedInLeft">分类</p>
  </div>
  <div class="box2 animate__animated animate__bounceInLeft">
  <div class="box3" v-for="item in class_list" @click="find(item.class_name)">
  {{item.class_name}}
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "classes",
  data(){
    return{
      class_list:[
        // {
        //   class_name:'前端工程化'
        // },
      ]
    }
  },
  methods:{
    //查找分类文章
    find(val){
      window.scrollTo(0,0)
      this.$router.push({
        path:'/find',
        query:{
          class:val
        }
      })
    }
  },
  mounted() {
    for (let i=0;i<this.$store.state.fl.length;i++){
      this.class_list.push(JSON.parse(JSON.stringify(this.$store.state.fl[i])))
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
  min-height: 400px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.box3{
  width: 90%;
  height: 70px;
  background-color: rgb(19,19,26);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin-top: 10px;
  color: white;
  font-size: 20px;
}
.box3:hover{
  transition: 1.5s;
  transform: scale(1.03, 1.03);
}
@media screen and (min-width: 2559px){
  .box2{
    height: 800px;
  }
}
@media screen and (max-width: 1005px){
  .box2{
    width: 90%;
  }
  .box3{
    font-size: 16px;
  }
}
</style>