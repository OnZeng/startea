<template>
<div class="box1">
  <div class="box2">
    <!--标题栏-->
    <div class="box3">
      <div class="font1">
        StarTea后台管理系统
      </div>
    </div>
    <!--输入框-->
    <div class="box4">
      <div class="box5">
        <div class="box8">
          <!--          <p class="font3">账号或密码错误</p>-->
        </div>
        <div class="box6">
          <el-input v-model="username" placeholder="用户名" class="input1" clearable prefix-icon="el-icon-user-solid"></el-input>
        </div>
        <div class="box8">
          <!--          <p class="font3">账号或密码错误</p>-->
        </div>
        <div class="box7">
          <el-input placeholder="密码" v-model="password" show-password class="input1" size="50" prefix-icon="el-icon-lock"></el-input>
        </div>
      </div>
    </div>
    <!--提交按钮-->
    <div class="box9">
        <el-button :loading="false" class="input2" @click="login">登陆</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "login",
  data: function () {
    return {
      username: "",
      password: "",
      //请求地址
      apiurl:'https://startea.top'
    }
  },
  methods: {
    //登录按钮
    login() {
      //正则表达式
      let reg1 = /[a-zA-Z0-9_]{5,12}$/
      let reg2 = /[a-zA-Z0-9_]{5,12}$/
      if (reg1.test(this.username)&&reg2.test(this.password)){
        this.axios({
          method:'get',
          url:this.apiurl+'/login',
          maxRedirects: 0,
          params:{
            user_name:this.username,
            user_password:this.password
          }
        }).then(function (response) {
          console.log(response.data)
          if (response.data===0){
            // window.sessionStorage.setItem('token',response.data.token)
            //存储用户信息
            // let userdata={
            //   user_id:response.data.user_id,
            //   user_name: response.data.user_name,
            //   user_date: response.data.user_date,
            //   user_role: response.data.user_role,
            //   user_petname:response.data.user_petname,
            //   user_img: response.data.user_img
            // }
            //存储用户信息至sessionstorage
            // window.sessionStorage.setItem('userdata',JSON.stringify(userdata))
            this.$message.error('登录失败')
          }
        }.bind(this)).catch(()=>{
          this.$message.error('登录失败')
        })
      }else {
        this.$message({
          message: '错了哦，请规范操作哦~',
          center: true,
          type:"error",
          duration:900
        })
      }
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.box1{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2{
  width: 440px;
  height: 310px;
  background-color: rgb(35,35,44);
  border-radius: 10px;
  opacity: 0.9;
}
/*
头部
*/
.box3{
  width: 100%;
  height: 60px;
  /*background-color: #9966FF;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.font1 {
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  color: white;
}
/*
主体
*/
.box4{
  width: 100%;
  /*background-color: #ea5325;*/
  display: flex;
  align-items: center;
}
.box5{
  width: 100%;
  height:160px;
  /*background-color: #2073bb;*/
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.box6{
  height: 50px;
  line-height: 50px;
}
.box7{
  height: 50px;
  line-height: 50px;
}
.input1{
  width: 65%;
  height: 50px;
  line-height: 50px;
}
.box8{
  height: 15px;
}
/*
尾部
*/
.box9{
  width: 100%;
  /*background-color: #666666;*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.input2{
  position: relative;
  background-color: #4CAF50;
  border: none;
  color: #FFFFFF;
  padding:15px 20px;
  width: 65%;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
/deep/.el-input__inner{
  background-color: rgb(19,19,26);
  border: 1px solid rgb(19,19,26);
  color: white;
}
/deep/.el-input{
  /*border: 1px solid rgb(19,19,26);*/
}
</style>