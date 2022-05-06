<template>
<div>
  <div class="box1">
    <p class="animate__animated animate__lightSpeedInLeft">所有文章</p>
  </div>
  <div class="box2">
<!--搜索-->
  <div class="box3 animate__animated animate__bounceInDown">
  <div class="box4"><el-input placeholder="搜索文章标题" class="input1" v-model="value"></el-input></div>
  <div class="box5">
    <div  class="box6" @click="kta()"><i class="el-icon-right"></i></div>
    <div  class="box6" @click="kta2()"><i class="el-icon-refresh-right"></i></div>
  </div>
  </div>
<!--所有文章-->
    <div class="box7">
      <div class="box7-1 animate__animated animate__bounceInLeft">
        <div class="box8" v-for="item in sx_list" @click="a(item.article_id,item.article_title)">
          <div class="box9">{{item.article_title}}</div>
          <div class="box10">{{item.article_date}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "articles",
  data(){
    return{
      //搜索标题
      value:'',
      //数据源
      wz_list:[
        // {
        //   article_id:'',
        //   article_title:'Vue中脚手架的使用',
        //   article_date:'2022-4-3-18:01'
        // },

      ],
      //筛选后的数据
      sx_list:[

      ]
    }
  },
  methods:{
    //搜索指定文章
    kta(){
      if (this.value!==''){
        this.sx_list=[]
        for (let i=0;i<this.wz_list.length;i++){
          console.log(String(this.wz_list[i]).toLowerCase().indexOf(this.value))
          if (String(this.wz_list[i].article_title).toLowerCase().indexOf(String(this.value).toLowerCase())!==-1){
               this.sx_list.push(JSON.parse(JSON.stringify(this.wz_list[i])))
          }
        }
      }else {
        this.sx_list=[]
        for (let i=0;i<this.wz_list.length;i++){
          this.sx_list.push(JSON.parse(JSON.stringify(this.wz_list[i])))
        }
      }
    },
    //重置搜索
    kta2(){
      this.sx_list=[]
      this.value=''
      for (let i=0;i<this.wz_list.length;i++){
        this.sx_list.push(JSON.parse(JSON.stringify(this.wz_list[i])))
      }
    },
    //进入文章
    a(id,title){
      window.scrollTo(0,0)
      this.$router.push({
        path:'/post',
        query:{
          id:id,
          title:title
        }
      })
    }
  },
  mounted() {
    for (let i=0;i<this.$store.state.article.length;i++){
      this.wz_list.push(JSON.parse(JSON.stringify(this.$store.state.article[i])))
    }
    this.kta()
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
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  align-items: center;
}
.box3{
  width: 90%;
  height: 50px;
  /*background-color: #990055;*/
  display: flex;
}
.box4{
  flex: 6;
  /*background-color: #9a6e3a;*/
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box5{
  flex: 1;
  line-height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.box6{
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background-color: rgb(19, 19, 26);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
  font-weight: 700;
}
/deep/.el-input__inner{
  background-color: rgb(19,19,26);
  border:1px solid rgb(19,19,26);
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  height: 50px;
  border-radius: 14px;
}
/deep/.el-input__inner:hover{
  border:1px solid rgb(98,164,218);
}
/deep/.el-input__inner:active{
  border:1px solid rgb(98,164,218);
}
.box6:hover{
  background-color: rgb(98,164,218);
}
.box7 {
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
.box7-1{
  width: 1000px;
  min-height: 400px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  align-items: center;
}
.box8{
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
.box8:hover{
  transition: 1.5s;
  transform: scale(1.03, 1.03);
}
.box9{
  flex: 4;
  height: 100%;
  /*background-color: #990055;*/
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
.box10{
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
.box10:hover{
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
  .box7{
    width: 90%;
  }
  .box7-1{
    width: 100%;
  }
  .box8{
    width: 80%;
  }
}
@media screen and (max-width: 498px){
  .box6{
    font-size: 16px;
  }
  .box7{
    width: 100%;
  }
  .box8{
    width: 90%;
  }
  .box9{
    font-size: 16px;
  }
  .box10{
    font-size: 16px;
  }
  /deep/.el-input__inner{
    font-size: 16px;
  }
}
@media screen and (max-width: 450px){
  .box6{
    font-size: 12px;
  }
  .box9{
    font-size: 12px;
  }
  .box10{
    font-size: 12px;
  }
  /deep/.el-input__inner{
    font-size: 12px;
  }
}
</style>