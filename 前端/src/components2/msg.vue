<template>
  <div>
    <div class="box1">
      <p class="animate__animated animate__lightSpeedInLeft">留言板</p>
    </div>
    <div class="box2">
      <!--简言-->
      <div class="box3 animate__animated animate__bounceInLeft">
        <p class="p1">傍晚好，<strong>小白小白</strong></p>
        <p class="p1">欢迎来到我的博客!</p>
        <p class="p1">可以在这里留言、吐槽，</p>
        <p class="p1"><strong>交换友链。</strong></p>
      </div>
      <!--我的世界链接-->
      <div class="box4">
        <p class="p1">本站链接</p>
        <p class="p2">name：<span class="p3">小白小白</span></p>
        <p class="p2">link：<span class="p3">https://startea.top</span></p>
        <p class="p2">avatar：<span class="p3">https://startea.top/startea.jpg</span></p>
        <p class="p2">descr：<span class="p3">小白小白的自述</span></p>
        <!--分割线-->
        <div class="fgx"></div>
      </div>
      <!--留言组件-->
      <keep-alive>
      <msg2></msg2>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import msg2 from "./msg2";
export default {
  name: "msg",
  components:{
    msg2
  },
  activated(){
    // console.log('123')
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
  align-items: center;
  padding: 20px;
}

/*简言*/
.box3 {
  width: 90%;
  min-height: 200px;
  /*background-color: #a3b277;*/
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.p1 {
  color: white;
  font-size: 32px;
  font-weight: 700;
}

.p2 {
  color: #b2b2fa;
  font-size: 20px;
  font-weight: 400;
}

.p3 {
  color: #f1f197;
}

strong {
  color: #6193bb;
}

/*我的链接*/
.box4 {
  width: 95%;
  min-height: 200px;
  /*background-color: #9a6e3a;*/
}

/*分割线*/
.fgx {
  margin: 24px 0;
  height: 5px;
  background-image: linear-gradient(90deg, #868686 50%, transparent 0);
  background-size: 28px 5px;
  /*background-repeat: repeat-x;*/
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
@media screen and (max-width: 449px){
  .box2{
    /*width: 100%;*/
    padding: 0;
  }
  .p1{
    font-size: 25px;
  }
}
@media screen and (max-width: 425px){
  .p2{
    font-size: 16px
  }
}
@media screen and (max-width: 350px){
  .p1{
    font-size: 20px;
  }
  .p2{
    font-size: 14px
  }
}
</style>