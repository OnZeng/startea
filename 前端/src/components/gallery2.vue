<!--suppress ALL -->
<template>
<div>
  <div class="box2-c animate__animated animate__bounceInUp">
    <div class="box2-1" @click="tiao(1)">
      <div class="box2-2">风景</div>
    </div>
    <div class="box2-1" @click="tiao(2)">
      <div class="box2-2">科幻</div>
    </div>
    <div class="box2-1" @click="tiao(3)">
      <div class="box2-2">永劫无间</div>
    </div>
    <div class="box2-1" @click="tiao(4)">
      <div class="box2-2">随意</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "gallery2",
  methods:{
    tiao(i){
      if (i===1){
        window.scrollTo(0,0)
        this.$router.push({
          path:'/gallery/one',
          query:{
            id:1
          }
        }).catch(()=>{})
      }else if (i===2){
        window.scrollTo(0,0)
        this.$router.push({
          path:'/gallery/one',
          query:{
            id:2
          }
        }).catch(()=>{})
      }else if (i===3){
        window.scrollTo(0,0)
        this.$router.push({
          path:'/gallery/one',
          query:{
            id:3
          }
        }).catch(()=>{})
      }else if (i===4){
        window.scrollTo(0,0)
        this.$router.push({
          path:'/gallery/one',
          query:{
            id:4
          }
        }).catch(()=>{})
      }
    }
  },
}
</script>

<style scoped>
.box2-c{
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: hidden;
}
.box2-1{
  width: 400px;
  height: 300px;
  background-color: rgba(0,0,0,.3);
  margin: 25px;
  border-radius: 14px;
  cursor: pointer;
}
.box2-1:nth-child(1){
  background-image: url("../assets/BacgroundImage/20210326164016.jpg");
  background-size: cover;
  background-position: center;
}
.box2-1:nth-child(2){
  background-image: url("../assets/BacgroundImage/20210605145920.jpg");
  background-size: cover;
  background-position: center;
}
.box2-1:nth-child(3){
  background-image: url("../assets/BacgroundImage/yjwj.jpg");
  background-size: cover;
  background-position: center;
}
.box2-1:nth-child(4){
  background-image: url("../assets/BacgroundImage/20210326164022.jpg");
  background-size: cover;
  background-position: center;
}
.box2-1:hover{
  transition: 1s;
  transform: scale(1.02,1.02);
}
.box2-2{
  width: 80%;
  height: 100px;
  display: flex;
  flex-direction: column-reverse;
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin: 0 auto;
}
@media screen and (max-width: 530px){
  .box2-1{
    width: 90%;
  }
}
@media screen and (max-width: 375px){
  .box2-1{
    height: inherit;
  }
  .box2-2{
    flex-direction: column;
  }
}
</style>