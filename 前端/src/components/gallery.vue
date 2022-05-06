<template>
  <div>
  <div class="box1">
  <p class="animate__animated animate__lightSpeedInLeft">我的图库</p>
  </div>
    <div class="box2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data(){
    return{
    }
  },
  created(){

  },
  beforeDestroy(){

  }
}
</script>

<style scoped>
.box1{
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
.box2{
  width: 1000px;
  min-height: 400px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: hidden;
  padding:30px 0;
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
}

</style>