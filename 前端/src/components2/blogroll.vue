<template>
  <div>
    <div class="box1">
      <p class="animate__animated animate__lightSpeedInLeft">友情链接</p>
    </div>
    <!--列表-->
    <div class="box2" style="overflow-x: hidden">
      <div class="box2-1 animate__animated animate__bounceInRight">
      <div class="box3" v-for="item in linklist" @click="link(item.link_url)">
        <!--头像-->
        <div class="box4"><img v-bind:src="item.link_img" class="img"></div>
        <!--链接介绍-->
        <div class="box5">
        <div class="box6">{{item.link_title}}</div>
        <div class="box7">{{item.link_content}}</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogroll",
  data(){
    return{
      linklist:[
        // {
        //   link_img:'https://startea.top/1231141.jpg',
        //   link_title:'博客',
        //   link_content:'我的世界我的世界我的世界我的世界我的世界',
        //   link_url:'https://startea.top'
        // }
      ]
    }
  },
  methods:{
      link(link){
        window.open(link, '_blank');
      }
  },
  created() {
    this.linklist=this.$store.state.link
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
}
.box2-1{
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  padding: 20px;
  overflow-x: hidden;
}
.box3 {
  width: 300px;
  height: 90px;
  background-color: rgb(19, 19, 26);
  border-radius: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin:10px 10px;
}

.box3:hover {
  transition: 0.5s;
  transform: scale(1.03, 1.03);
}
/*头像框*/
.box4 {
  width: 70px;
  height: 70px;
  border-radius: 14px;
  /*background-color: #4BAE4F;*/
  margin: 0 0 0 5px;
}
/*头像*/
.img{
  width: 70px;
  height: 70px;
  border-radius: 14px;
}
/*链接名称及介绍*/
.box5 {
  width: 100%;
  height: 70px;
  /*background-color: #326dcc;*/
  border-radius: 14px;
}
/*链接名称*/
.box6{
  /*width: 100%;*/
  height: 30px;
  /*background-color: #9a6e3a;*/
  display: flex;
  align-items: center;
  color: rgb(97, 147, 187);
  font-weight: 700;
  font-size: 20px;
  padding: 0 5px;
}
/*链接介绍*/
.box7{
  /*width: 100%;*/
  height: 40px;
  /*background-color: #666666;*/
  display: flex;
  align-items: center;
  color: white;
  padding: 0 5px;
  font-size: 16px;
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
  .box6{
    font-size: 18px;
  }
  .box7{
    font-size: 14px;
  }
}
@media screen and (max-width: 375px){
  .box6{
    font-size: 16px;
  }
  .box7{
    font-size: 12px;
  }
}
</style>