<template>
  <div>
    <div class="box1">
      <!--标题-->
      <h1 style="margin-left: 20px">{{title}}</h1>
      <div class="box1-1">
        <div class="box1-2">{{tag}}</div>
        <div class="box1-2">{{date}}</div>
      </div>
    </div>
<!--    文章内容-->
    <div class="box2-1">
      <el-skeleton
          :count="3"
          style="margin: 0 auto"
          :loading="loading"
          :animated="true"
          :throttle="100"
          :rows="8"
      >
    <div class="box2" v-html="content" v-show="kkk">
    </div>
      </el-skeleton>
    </div>
<!--    声明-->
    <div class="box3">
      <div class="box4">
        <p style="color: #7cb47e"><span style="color: #4BAE4F">文章标题：</span>{{title}}</p>
        <p style="color: #78bb7a;"><span style="color: #4BAE4F">文章链接：</span>{{url}}<span @click="url_copy"><a class="a2 el-icon-document-copy"></a></span></p>
        <p style="color: #4BAE4F">本站所有文章除特别声明外，均采用<span><a class="a1" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a></span>转载请注明来自<span><a class="a1" href="https://startea.top" target="_blank">StarTea个人博客</a></span></p>
      </div>
    </div>
    <div class="box5">
      <div class="fgx"></div>
    <comment></comment>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import comment from "./comment";
export default {
  Prism,
  name: "post",
  components:{
    comment
  },
  data(){
    return{
      //文章显示
      loading:true,
      kkk:false,
      title:'',
      tag:'',
      date:'',
      content:'',
      id: '',
      //文章链接地址
      url:`https://startea.top`,
    }
  },
  methods:{
    //检测文章内容
    jcszz(){
      // console.log(this.wz_list.length===0)
      if (this.content!==''){
        this.loading=false
      }
    },
    url_copy(){
      //创建临时元素
      let input = document.createElement("input");
      // console.log(event.target.innerText)
      // //将当前元素内容填充到临时元素中
      input.value = this.url
      //暂时插入到页面中
      document.body.appendChild(input);
      //选中当前内容
      input.select()
      // //执行复制
      document.execCommand('copy')
      //删除插入的元素
      document.body.removeChild(input);
      this.$message.success({
        message: '复制文章链接成功！'
      })
    },
    fsqq(){
      this.axios({
        method:'get',
        url:'https://startea.top/api/wenzhang_9',
        params:{
          id:this.$route.query.id
        }
      }).then((res)=>{
        // console.log(res.data[0])
        this.date=res.data[0].article_date
        this.title=res.data[0].article_title
        this.tag=res.data[0].article_type
        this.content=res.data[0].article_content
        this.url=`https://startea.top/post?id=${this.id}`
        setTimeout(()=>{
          // console.log(Prism)
          Prism.highlightAll()
        },5)
        setTimeout(()=>{
          this.kkk=true
        },10)
      })
    }
  },
  created() {
    this.fsqq()
    this.id=this.$route.query.id
  },
  mounted() {
    let a=setInterval(()=>{
      this.jcszz()
      if (this.loading===false){
        clearInterval(a)
      }
    },1)
  }
}
</script>

<style scoped>
/*分割线*/
.fgx {
  margin: 24px 0;
  height: 5px;
  background-image: linear-gradient(90deg, #868686 50%, transparent 0);
  background-size: 28px 5px;
  /*background-repeat: repeat-x;*/
}
.box1 {
  width: 1000px;
  min-height: 500px;
  /*background-color: rebeccapurple;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  /*align-items: center;*/
  color: white;
  font-size: 60px;
  text-shadow: 0 0 6px #000;
  margin: 0 auto;
}
.box1-1{
  width: 100%;
  display: flex;
  margin-top: 40px;
}
.box1-2{
  height: 40px;
  padding: 0 10px;
  border-radius: 14px;
  background-color: rgba(35, 35, 44, 1);
  color: white;
  font-size: 18px;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  cursor: default;
  margin-left: 20px;
}
.box1-2:hover{
  background-color: rgb(97, 147, 187);
}
/*文章内容*/
.box2 {
  width: 1000px;
  min-height: 400px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  color: white;
}
.box2-1{
  margin: 0 auto;
}
/*文章声明*/
.box3 {
  width: 1000px;
  min-height: 200px;
  background-color: rgba(35, 35, 44, 1);
  /*background-color: #4BAE4F;*/
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  color: white;
}
/*声明链接*/
.a1{
  padding: 2px 10px;
  /*background-color: #990055;*/
  border-radius: 8px;
  list-style: none;
  text-decoration: none;
}
.a1:hover{
  background-color: rgb(97, 147, 187);
}
/*copy按钮*/
.a2{
  padding: 4px 5px;
  /*background-color: #990055;*/
  border-radius: 8px;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  color: white;
}
h1{
  font-size: 80px;
}
.a2:hover{
  background-color: rgb(97, 147, 187);
}
.box4{
  width: 90%;
  padding: 20px;
  background-color: rgb(19,19,26);
  margin: 0 auto;
  border-radius: 20px;
}
.box5{
  width: 1000px;
  padding: 20px;
  min-height: 200px;
  background-color: rgba(35, 35, 44, 1);
  margin: 0 auto;
}
@media screen and (max-width: 1110px){
  h1{
    font-size: 60px;
  }
  .box1{
    width: 90%;
  }
  .box2{
    width: 90%;
  }
  .box3{
    width: 90%;
  }
  .box4{
    font-size: 16px;
  }
  .box5{
    width: 90%;
  }
}
@media screen and (max-width: 764px){
  h1{
    font-size: 45px;
  }
  .box4{
    font-size: 12px;
  }
}
@media screen and (max-width: 500px){
  h1{
    font-size: 35px;
  }
}
@media screen and (max-width: 426px){
  .box1{
    width: 87%;
  }
  .box2{
    width: 87%;
  }
  .box3{
    width: 87%;
  }
  .box4{
    font-size: 12px;
  }
  .box5{
    width: 87%;
  }
  .box1-2{
    font-size: 12px;
  }
}
</style>