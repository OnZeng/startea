<template>
  <div>
    <div class="box1">
      <p class="animate__animated animate__lightSpeedInLeft">建站日志</p>
    </div>
    <div class="box2">
      <!--时间线-->
      <el-timeline :reverse="true">
        <el-timeline-item :timestamp="item.log_date" placement="top" :icon="icon" v-for="item in loglist">
          <div class="animate__animated animate__bounceInRight">
          <el-card class="card1">
            <h4>{{item.log_title}}</h4>
            <p class="p1">{{item.log_content}}</p>
          </el-card>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "log",
  data(){
    return{
      //时间线图标
      icon:'el-icon-timer',
      loglist:[
        // {
        //   log_title:'更新 Github 模板',
        //   log_content:'王小虎 提交于 2018/4/12 20:46',
        //   log_date:'2018/4/12'
        // }
      ]
    }
  },
  created() {
    this.loglist=this.$store.state.log
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
  overflow-x: hidden;
  align-items: center;
  padding: 20px 0;
  /*justify-content: center;*/
}
.card1{
  width: 800px;
  background-color: rgb(19, 19, 26);
  color: white;
  border: 0;
  font-size: 20px;
}
.card1:hover{
  transition: 0.5s;
  transform: scale(1.02,1.02);
}
.p1{
  font-size: 16px;
}
/deep/.is-top{
  font-size: 36px;
}
/deep/.is-top:hover{
  transition: 0.2s;
  transform: scale(1.02,1.02);
  color: rgb(97, 147, 187);
}
/deep/.el-timeline-item__node{
  width: 30px;
  height: 30px;
  left: -7px;
  background-color: rgb(62, 62, 77);
}
/deep/.el-timeline-item__tail{
  width: 30px;
  border-left:10px solid rgb(62, 62, 77);
  font-size: 16px;
}
@media screen and (max-width: 1005px){
  .box2{
    width: 90%;
  }
  .card1{
    width: auto;
  }
}
@media screen and (max-width: 743px){
  .card1{
    width: 500px;
  }
}
@media screen and (max-width: 620px){
  .card1{
    width: 400px;
  }
}
@media screen and (max-width: 510px){
  .card1{
    width: 300px;
  }
}
@media screen and (max-width: 426px){
  .card1{
    font-size: 16px;
    width: 300px;
  }
  .p1{
    font-size: 12px;
  }
}
@media screen and (max-width: 390px){
  .card1{
    width: 270px;
    font-size: 14px;
  }
}
@media screen and (max-width: 352px){
  .card1{
    width: 250px;
  }
}
@media screen and (max-width: 331px){
  .card1{
    width: 230px;
  }
}
@media screen and (max-width: 330px){
  .p1{
    font-size: 12px;
  }
}
</style>