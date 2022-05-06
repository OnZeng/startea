<template>
  <div>
    <div class="box1">
      <p class="animate__animated animate__lightSpeedInLeft">自言自语</p>
    </div>
    <div class="box2">
      <div class="box3" v-for="item in saylist">
        <!--头像-->
        <div class="box4 animate__animated animate__bounceInLeft"><img v-bind:src="item.say_img" class="img"></div>
        <!--内容-->
        <div class="box5 animate__animated animate__bounceInRight">
          <div class="box6">{{item.say_content}}</div>
          <!--时间-->
          <div class="box7">
          <div class="box8">{{item.say_date}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "say",
  data(){
    return{
      saylist:[
        // {
        //   say_img:'https://startea.top/1231141.jpg',
        //   say_content:'我的世界的武器大全五点七五废弃物废弃物废弃物发我父亲无法区分我的世界的武器大全五点七五废弃物废弃物废弃物发我父亲无法区分我的世界的武器大全五点七五废弃物废弃物废弃物发我父亲无法区分',
        //   say_date:'2021-10-13-14:46'
        // },
      ]
    }
  },
  created() {
    this.saylist=this.$store.state.say
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
  overflow-x: hidden;
}

.box3 {
  width: 920px;
  min-height: 96px;
  /*background-color: rgb(19, 19, 26);*/
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.box3:hover{
  transition: 1s;
  transform: scale(1.03, 1.03);
}
/*头像*/
.box4 {
  width: 60px;
  min-height: 100%;
  background-color: rgba(35, 35, 44, 1);
}
/*头像大小*/
.img {
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  border-radius: 14px;
  overflow-y: hidden;
}
/*右侧内容*/
.box5 {
  width: 840px;
  min-height: 100%;
  background-color: rgb(19,19,26);
  border-radius: 14px;
}
/*右侧内容区域*/
.box6 {
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  color: #FFFFFF;
  font-size: 20px;
}
/*右侧时间区域*/
.box7 {
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
/*时间标签*/
.box8 {
  height: 30px;
  padding: 2px 10px;
  background-color: rgb(69, 69, 88);
  border-radius: 14px;
  line-height: 30px;
  text-align: center;
  margin-right: 10px;
  color: white;
  font-size: 18px;
  cursor: default;
}
.box8:hover{
  background-color: rgb(97,147,187);
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
    width: 90%;
  }
}
@media screen and (max-width: 450px){
  .box6{
    font-size: 15px;
  }
  .box8{
    font-size: 13px;
  }
}
@media screen and (max-width: 376px){
  .box6{
    font-size: 13px;
  }
  .box8{
    font-size: 12px;
  }
}
</style>