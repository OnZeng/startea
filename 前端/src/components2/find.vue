<template>
<div>
  <div class="box1">
    <p class="animate__animated animate__lightSpeedInLeft">{{val}}</p>
  </div>
  <div class="box2">
    <el-skeleton
        :count="3"
        style="width: 90%"
        :loading="loading"
        :animated="true"
        :throttle="10"
        :rows="wz_list.length+4"
    >
    <div class="box2-1 animate__animated animate__bounceInLeft">
  <div class="box3" v-for="item in wz_list" @click="dh(item.article_id)">
  <div class="box4">{{item.article_title}}</div>
  <div class="box5">{{item.article_date}}</div>
  </div>
    </div>
    </el-skeleton>
  </div>
</div>
</template>

<script>

export default {
  name: "find",
  data(){
    return{
      loading: true,
      val:'',
      wz_list:[
        // {
        //   article_title:'Vue中脚手架的使用',
        //   article_date:'2022-4-3-18:01'
        // }
      ]
    }
  },
  methods:{
    dh(id){
      window.scrollTo(0,0)
      this.$router.push({
        path:'/post',
        query:{
          id:id,
        }
      })
    },
    //根据文章分类查询指定文章
    wenzhang8(){
      this.wz_list=[]
      this.axios({
        method:'get',
        url:'https://startea.top/api/wenzhang_7',
        params:{
          class_name:this.val
        }
      }).then(function (response) {
        // console.log(response)
        for (let i=0;i<response.data.length;i++){
          this.wz_list.push(JSON.parse(JSON.stringify(response.data[i])))
        }
        // console.log(1)
      }.bind(this))
    },
    //根据文章标签查询指定文章
    wenzhang9(){
      this.wz_list=[]
      this.axios({
        method:'get',
        url:'https://startea.top/api/wenzhang_8',
        params:{
          article_type:this.val
        }
      }).then(function (response) {
        // console.log(response)
        for (let i=0;i<response.data.length;i++){
          this.wz_list.push(JSON.parse(JSON.stringify(response.data[i])))
        }
        // console.log(2)
      }.bind(this))
    },
    //检测数组
    jcszz(){
      // console.log(this.wz_list.length===0)
      if (this.wz_list.length!==0){
        this.loading=false
      }
    }
  },

  created() {
    // console.log(this.$route.query.tag)
    if (this.$route.query.tag!=undefined){
      this.val=this.$route.query.tag
      this.wenzhang9()
    }else {
      this.val=this.$route.query.class
      this.wenzhang8()
    }
  },
  mounted() {
    let a=setInterval(()=>{
      this.jcszz()
      if (this.loading===false){
        clearInterval(a)
      }
    },1)
  },
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
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  align-items: center;
}
.box2-1{
  /*width: 1000px;*/
  min-height: 400px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  align-items: center;
}
.box3{
  width: 90%;
  height: 70px;
  background-color: rgb(19,19,26);
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  margin-top: 15px;
}
.box3:hover{
  transition: 1.5s;
  transform: scale(1.03, 1.03);
}
.box4{
  flex: 4;
  height: 100%;
  /*background-color: #990055;*/
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
.box5{
  padding: 0 10px;
  height: 30px;
  /*background-color: #4BAE4F;*/
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  border-radius: 10px;
}
.box5:hover{
  background-color: rgb(97,147,187);
}
@media screen and (min-width: 2559px){
  .box2{
    height: 800px;
  }
}
</style>