<template>
  <div class="main">
    <div class="box1">
      <!--文章目录-->
      <div class="box2">
        <zm3></zm3>
      </div>
      <!--方块-->
      <div class="box3">
        <!--    欢迎语句-->
        <div class="box4">
          <div class="box4-1">
            <p>晚上好,<br>我叫<span style="color: rgb(97, 147, 187)">小白小白</span>,<br>欢迎来到,<br>我的<span
                style="color: rgb(97, 147, 187)">个人博客</span>。</p>
          </div>
        </div>
        <!--    联系方式-->
        <div class="box5">
          <div class="box5-1" @click="ka(4)"><i class="iconfont icon-github"></i></div>
          <div class="box5-1" @click="ka(5)"><i class="iconfont icon-csdn"></i></div>
          <el-popover
              effect="dark"
              trigger="hover"
          >
            <img src="../assets/BacgroundImage/wx.png">
          <div class="box5-1" slot="reference"><i class="iconfont icon-weixin"></i></div>
          </el-popover>
          <el-popover
              effect="dark"
              trigger="hover"
          >
            <img src="../assets/BacgroundImage/2528358258.jpg">
          <div class="box5-1" slot="reference"><i class="iconfont icon-qq"></i></div>
          </el-popover>
        </div>
        <!--    文章大分类-->
        <div class="box6">
          <!--      1-->
          <div class="box6-1" @click="ka(1)">
            <div class="box6-2" style="color: white">文章</div>
            <div class="box6-3">{{ wzsl }}</div>
          </div>
          <!--          2-->
          <div class="box6-1" @click="ka(2)">
            <div class="box6-2" style="color: white">分类</div>
            <div class="box6-3">{{ classs }}</div>
          </div>
          <!--      3-->
          <div class="box6-1" @click="ka(3)">
            <div class="box6-2" style="color: white">标签</div>
            <div class="box6-3">{{ tags }}</div>
          </div>
        </div>
        <!--    用户个人信息-->
        <div class="box7">
          <p>晚上好,<span style="color: rgb(97, 147, 187)">游客</span></p>
          <p>来自<span style="color: rgb(96,217,107);">{{ home }}</span></p>
          <p>IP地址</p>
          <p style="color: rgb(97, 147, 187)">{{ ip }}<span style="color: white;font-size: 16px">(密)</span></p>
          <p>{{ czxt }}</p>
        </div>
        <!--    系统信息-->
        <div class="box8">
          <div class="box8-1"><p>总访问量：<span>{{ fwl }}</span></p></div>
          <div class="box8-1"><p>运行时长：<span>{{ tt1 }}</span>天</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//文章组件
import zm3 from './zm3'

export default {
  name: "zm2",
  components: {
    zm3
  },
  data() {
    return {
      //分类数量
      classs:'',
      //标签数量
      tags: '',
      //文章数量
      wzsl: '',
      //操作系统
      czxt: '',
      //总访问量
      fwl: '',
      //归属地
      home: '',
      //ip地址
      ip: '',
      //运行时间
      //用于执行周期性定时器函数
      a1: 0,
      //服务器运行时长
      tt1: '', //天数
      tt2: '', //小时
      tt3: '', //分钟
      tt4: '', //秒
    }
  },
  methods: {
    //导航至分类,标签,文章处
    ka(i){
      if (i===1){
        window.scrollTo(0,0)
        this.$router.push('/articles')
      }else if (i===2){
        window.scrollTo(0,0)
        this.$router.push('/class')
      }else if (i===3){
        window.scrollTo(0,0)
        this.$router.push('/tags')
      }else if (i===4){
        window.open('https://github.com/OnZeng/startea','_blank')
      }else if (i===5){
        window.open('https://blog.csdn.net/zengMoodFF?spm=1019.2139.3001.5343','_blank')
      }
    },
    //统计网站运行时间
    countDown(time) {
      //当前时间
      let nowTime = +new Date()
      //设置时间
      let inputTime = +new Date(time)
      let times = (nowTime - inputTime) / 1000
      //天数差
      let d = parseInt(times / 60 / 60 / 24)
      // d=d<10?'0'+d:d
      // console.log(d)
      //小时差
      let h = parseInt(times / 60 / 60 % 24)
      // h=h<10?'0'+h:h
      //分钟差
      let m = parseInt(times / 60 % 60)
      // m=m<10?'0'+m:m
      //秒差
      let s = parseInt(times % 60)
      // s=s<10?'0'+s:s
      this.tt1 = d
      this.tt2 = h
      this.tt3 = m
      this.tt4 = s

    },
  },
  created() {
    this.countDown('2022-3-6 10:48:11')
    //获取客户端类型
    let a = navigator.userAgent;
    if (/Windows/i.test(a)) {
      this.czxt = 'Windows10'
    } else if (/iPhone/i.test(a)) {
      this.czxt = 'iPhome端'
    } else if (/Android/i.test(a)) {
      this.czxt = 'Android端'
    } else if (/iPad/i.test(a)) {
      this.czxt = 'iPad端'
    } else {
      this.czxt = '其他类型客户端'
    }
  },
  mounted() {
    this.classs = this.$store.state.classs
    this.tags = this.$store.state.tags
    this.home = this.$store.state.gsd.home
    this.ip = this.$store.state.gsd.ip
    this.fwl = this.$store.state.fwl
    this.wzsl = this.$store.state.wzsl
    this.a = setInterval(() => {
      this.tt4++
      if (this.tt4 === 60) {
        this.tt3++
        this.tt4 = 0
      } else if (this.tt3 == 60) {
        this.tt2++
        this.tt3 = 0
      } else if (this.tt2 == 60) {
        this.tt1++
        this.tt2 = 0
      }
    }, 1000)
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 1000px;
  /*background-color: green;*/
}

.box1 {
  width: 1200px;
  min-height: 800px;
  /*background-color: yellow;*/
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.box2 {
  width: 920px;
  min-height: 200px;
  /*background-color: red;*/
}

.box3 {
  width: 260px;
  min-height: 200px;
  /*background-color: #000b80;*/
  margin-left: 20px;
}

/*
*欢迎语句
*/
.box4 {
  width: 260px;
  height: 200px;
  background-color: rgba(35, 35, 44, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-image: url("../assets/BacgroundImage/123.jpeg");*/
  background-size: cover;
  background-position: center;
}

.box4:hover {
  transition: 1s;
  transform: scale(1.03, 1.03);
}

.box4-1 {
  width: 200px;
  height: 150px;
  /*background-color: blue;*/
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
}

/*
*联系方式
*/
.box5 {
  width: 260px;
  height: 80px;
  background-color: rgba(35, 35, 44, 1);
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.box5:hover {
  transition: 1s;
  transform: scale(1.03, 1.03);
}

.box5-1 {
  width: 50px;
  height: 50px;
  background-color: yellow;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.box5-1:hover {
  background-color: rgb(97, 147, 187);
}

/*
*文章大分类
*/
.box6 {
  width: 260px;
  height: 80px;
  background-color: rgba(35, 35, 44, 1);
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.box6:hover {
  transition: 1s;
  transform: scale(1.03, 1.03);
}

.box6-1 {
  width: 60px;
  height: 60px;
  /*background-color: yellow;*/
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: rgb(97, 147, 187);
}

.box6-1:hover {
  background-color: rgb(97, 147, 187);
  color: rgb(189, 195, 200);
}

.box6-2 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.box6-3 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box7 {
  width: 260px;
  height: 260px;
  background-color: rgba(35, 35, 44, 1);
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}

.box7:hover {
  transition: 1s;
  transform: scale(1.03, 1.03);
}

.box8 {
  width: 260px;
  height: 110px;
  background-color: rgba(35, 35, 44, 1);
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.box8:hover {
  transition: 1s;
  transform: scale(1.03, 1.03);
}

.box8-1 {
  width: 220px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px;
}

.box8-1:hover {
  background-color: rgb(97, 147, 187);
}
@media screen and (max-width: 1025px){
  .box1{
    width: 100%;
  }
  .box2{
    width: 740px;
  }
}
@media screen and (max-width: 1001px){
  .box2{
    width: 680px;
  }
}
@media screen and (max-width: 962px){
  .box1{
    display: flex;
    justify-content: center;
  }
  .box2{
    width: 500px;
  }
}
@media screen and (max-width: 792px){
  .box2{
    width: 400px;
  }
}
@media screen and (max-width: 684px){
  .box2{
    width: 300px;
  }
}
@media screen and (max-width: 579px){
  .box2{
    width: 90%;
  }
  .box3{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }
  .box4{
    width: 100%;
    margin-top: 10px;
  }
  .box4-1{
    width: 400px;
    font-size: 25px;
  }
  .box5{
    width: 230px;
  }
  .box6{
    width: 230px;
    margin-left: 5px;
  }
  .box7{
    width: 230px;
  }
  .box8{
    width: 230px;
    margin-left: 5px;
  }
}
@media screen and (max-width: 521px){
  .box3{
    margin-left: 0;
  }
  .box5{
    width: 100%;
  }
  .box6{
    width: 100%;
    margin-left: 0;
    font-size: 20px;
  }
  .box7{
    width: 100%;
  }
  .box8{
    width: 100%;
    font-size: 20px;
  }
}
@media screen and (max-width: 328px){
  .box4-1{
    width: 200px;
  }
  .box5{
    width: 100%;
  }
  .box6{
    width: 100%;
    margin-left: 0;
    font-size: 16px;
  }
  .box7{
    width: 100%;
    font-size: 16px;
  }
  .box8{
    width: 100%;
    font-size: 16px;
  }
}
</style>