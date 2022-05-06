<template>
<div>
  <div class="box1">
    <p class="animate__animated animate__lightSpeedInLeft">小作品</p>
  </div>
  <div class="box2">
    <div class="box2-c animate__animated animate__bounceInUp">
      <div class="box2-1" @click="tiao(item.show_url)" v-for="item in tableData" :style="{backgroundImage: 'url(' + item.show_img + ')',}">
        <div class="box2-2">{{item.show_title}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "show",
  data(){
    return{
      tableData: [
        // {
        //   show_title:'个人博客页面',
        //   show_url:'https://startea.top',
        //   show_img:'https://q1.qlogo.cn/g?b=qq&nk=2528358258&s=640'
        // }
      ]
    }
  },
  methods:{
    tiao(i){
        window.open(i,'_blank');
    }
  },
  created() {
    this.tableData=this.$store.state.show
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
  min-height: 500px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
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
  background-size: cover;
  background-position: center;
}
.box2-1:nth-child(2){
  background-size: cover;
  background-position: center;
}
.box2-1:nth-child(3){
  background-size: cover;
  background-position: center;
}
.box2-1:nth-child(4){
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
@media screen and (max-width: 501px){
  .box2-1{
    width: 100%;
  }
  .box2-c{
    margin: 0;
  }
}
@media screen and (max-width: 375px){
  .box2-2{
    font-size: 30px;
  }
  .box2-1{
    height: 200px;
  }
}
</style>