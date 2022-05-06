<template>
  <div>
    <div class="box1">
      <p class="animate__animated animate__lightSpeedInLeft">关于</p>
    </div>
    <div class="box2">
      <!--切换按钮-->
      <div class="box3">
        <span class="p1" v-bind:class="{p3:value}">关于本站</span>
        <el-switch
            :width="70"
            v-model="value"
            active-color="rgb(19, 19, 26)"
            inactive-color="rgb(19, 19, 26)" class="switch">
        </el-switch>
        <span class="p2" v-bind:class="{p4:value}">关于我</span>
      </div>
      <!--关于我-->
      <transition appear  :enter-active-class="value?'animate__animated animate__bounceInLeft':'animate__animated animate__bounceInRight'">
      <div class="box4" v-if="value">
        <div>
          <h1>✨你好啊，我叫小白小白！</h1>
          <ul class="ul1">
            <li>👓一名在校菜鸟<strong>大专生</strong></li>
            <li>💻 热爱前端开发</li>
            <li>🍊希望成为一名优秀前端工程师</li>
          </ul>
          <p style="margin: 10px 0 10px 0">这是我自己写的个人博客，感谢你在茫茫互联网中找到了这里～</p>
          <p style="margin: 10px 0 10px 0">为了练习学到的东西,做了一个小站,初来乍到,多有不足,请谅解！😘😝😋</p>
          <h1>📖联系方式</h1>
          <ul class="ul1">
            <li>🐧QQ：<span style="background-color: rgb(55,77,78);border-radius: 8px;padding: 3px 6px">2528358258</span></li>
            <li>💬WX：<span style="background-color: rgb(55,77,78);border-radius: 8px;padding: 3px 6px">zm1953594748</span></li>
          </ul>
        </div>
      </div>
      <!--关于本站-->
      <div class="box4" v-else key="edit">
        <div>
          <h1>🖥️关于本站</h1>
          <ul class="ul1">
            <li>本站UI模仿大佬<a @click="aa" style="cursor: pointer;color: #4db4b0">「飞鸟」</a>的个人博客。</li>
            <li>当您看到此处时，博主很开心又多了一位博主成长历程的见证者</li>
            <li>本网站于2022年3月6号赶鸭子上架，主要用于记录与分享个人学习心得。(依然是个小菜鸟😀😀😀😀)</li>
            <li>博主希望此博客能为博主积累技术，也能结识更多的各方面爱好者</li>
            <li>本站前后端均为个人书写，个人水平有限，大佬路过还请多多批评指正。</li>
          </ul>
          <h1>📚技术栈</h1>
          <h3>前端</h3>
          <ul class="ul1">
            <li>Vue2+VueX+Axios+ElmentUI</li>
          </ul>
          <h3>后端</h3>
          <ul class="ul1">
            <li>Node+Express+Mysql</li>
          </ul>
          <h3>部署</h3>
          <ul class="ul1">
            <li>腾讯云学生机+阿里云9.9包年的云数据库</li>
          </ul>
          <h3>其他</h3>
          <ul class="ul1">
            <li>如果想和博主交换友链，可以<a @click="bb" class="aaa">「点击我」</a>留下足迹，欢迎各路大佬交流~</li>
          </ul>
          <h4>我的链接：</h4>
          <div class="box5">
            <p style="color: #79c0ff;">name：<span style="color: #6f8194;">小白小白</span></p>
            <p style="color: #79c0ff;">link：<span style="color: #8b949e;">https://startea.top</span></p>
            <p style="color: #79c0ff;">avatar：<span style="color: #8b949e;">https://startea.top/startea.jpg</span></p>
            <p style="color: #79c0ff;">descr：<span style="color: #8b949e;">小白小白的自述</span></p>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      //按钮切换
      value: false
    }
  },
  methods:{
    //跳转到大佬博客
    aa(){
      window.open('https://lzxjack.top/','_blank')
    },
    //添加链接
    bb(){
      this.$message.info('模块还没写好,请联系博主添加友情链接😘')
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
  min-height: 500px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
  padding: 20px;
}

.box3 {
  width: 90%;
  height: 80px;
  /*background-color: #9a6e3a;*/
  /*margin-top: 20px;*/
  display: flex;
  align-items: center;
  color: white;
}

.p1 {
  font-size: 30px;
  font-weight: 700;
}

.p2 {
  font-size: 30px;
  color: #696969;
  font-weight: 700;
}

.p3 {
  color: #696969;
}

.p4 {
  color: white;
}

.switch {
  margin-left: 20px;
}

/*滑块*/
/deep/ .el-switch__core {
  height: 40px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: rgb(19, 19, 26);
}

/*滑块圆球*/
/deep/ .el-switch__core:after {
  /*top: 10px;*/
  width: 37px;
  height: 37px;
  box-sizing: border-box;
  background-color: rgb(69, 69, 88) !important;
}

/deep/ .el-switch.is-checked .el-switch__core::after {
  left: 70%;
  margin-left: -18px;
}

.box4 {
  width: 90%;
  min-height: 100px;
  /*background-color: #9a6e3a;*/
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

.ul1 {
  margin-left: 40px;
}
h1 {
  color: #6193bb;
}

h3 {
  margin-left: 20px;
  color: #9b794f;
  margin-top: 3px;
}
h4{
  margin-left: 20px;
  margin-top: 10px;
}
strong{
  color: #589d5d;
}
li{
  margin-top: 10px;
}
.box5{
  padding: 20px;
  width: auto;
  height: 100px;
  background-color: rgb(37,43,48);
  margin: 0 auto;
  border-radius: 14px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*align-items: center;*/
}
.aaa{
  color: #7e9a55;
  cursor: pointer;
}
.aaa:hover{
  color: #4BAE4F;
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
@media screen and (max-width: 600px){
  .box4{
    font-size: 14px;
  }
}
@media screen and (max-width: 479px){
  .box4{
    font-size: 12px;
  }
  .switch {
    margin-left: 0;
  }
  h3,h4{
    margin-left: 0;
  }
  .box5{
    width: auto;
  }
}
@media screen and (max-width: 426px){
  .ul1{
    margin-left: 0;
  }
  li{
    margin-left: 0;
  }
  .p1{
    font-size: 25px;
  }
  .p2{
    font-size: 25px;
  }
  .box2{
    width: 85%;
  }
}
@media screen and (max-width: 376px){
  .p1{
    font-size: 20px;
  }
  .p2{
    font-size: 20px;
  }
}
</style>