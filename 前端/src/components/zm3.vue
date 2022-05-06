<template>
  <div>
    <transition appear appear-to-class="animate__animated animate__bounceInRight" mode="out-in">
    <div class="animate__animated animate__fadeInLeft">
      <div class="box1" v-for="item in items" v-bind:key="item.id" @click="ttt(item.article_id,item.article_title)">
        <!--      标题-->
        <div class="box1-1">{{ item.article_title }}</div>
        <!--      内容介绍-->
        <div class="box1-2">{{ item.article_jj }}</div>
        <!--      时间标签和文章分类标签-->
        <div class="box1-3">
          <p class="box1-3-1" style="margin-left: 20px">{{ item.article_date }}</p>
          <p class="box1-3-1" style="margin-right: 20px">{{ item.article_type }}</p>
        </div>
      </div>
    </div>
    </transition>
    <!--分页功能-->
    <el-pagination
        :hide-on-single-page="this.list.length>=6?false:true"
        :background="true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-size="queryInfo.pagesize"
        layout="prev, pager, next"
        :total="list.length">
    </el-pagination>

  </div>
</template>

<script>
export default {
  name: "zm3",
  data() {
    return {
      //事件源
      list: [
        // {
        //   article_id:'',
        //   article_title: '我的世界',
        //   article_jj: '我的世界啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊达瓦达瓦我的世界啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊达瓦达瓦我的世界啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊达瓦达瓦我的世界啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊达瓦达瓦我的世界啊啊啊啊啊啊啊啊啊啊啊',
        //   article_date: '2021-12-6-13:46',
        //   article_type: 'JavaScript'
        // },
      ],
      //文章列表数据项
      queryInfo: {
        query: "",
        //当前的页数
        pagenum: 1,
        //当前每页显示多少条数据
        pagesize: 5
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      items: [],
    }
  },
  methods: {
    //导航到当前文章
    ttt(id,title){
      window.scrollTo(0,0)
      this.$router.push({
        path:'/post',
        query: {
          id:id,
          title:title
        }
      })
    },
    //监听每页多少条数据
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.queryInfo.pagesize = val;
      let current = val * (this.queryInfo.pagenum - 1);
      this.items = this.list.slice(current, (current + this.queryInfo.pagesize));
    },
    //监听页面页码值
    handleCurrentChange(val) {
      let current = (val - 1) * this.queryInfo.pagesize;
      this.items = this.list.slice(current, (current + this.queryInfo.pagesize));
      // console.log(`当前页: ${val}`);
    },
  },
  created() {
    for (let i=0;i<this.$store.state.article.length;i++){
      this.list.push(JSON.parse(JSON.stringify(this.$store.state.article[i])))
    }
    this.items = this.list.slice(0, this.queryInfo.pagesize);
  }
}
</script>

<style scoped>
.box1 {
  width: 920px;
  height: 220px;
  background-color: rgba(35, 35, 44, 1);
  border-radius: 20px;
  margin-bottom: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.box1:hover {
  transition: 1s;
  transform: scale(1.02, 1.02);
}

.box1-1 {
  width: 100%;
  height: 80px;
  /*background-color: #365691;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
}

.box1-2 {
  /*width: 100%;*/
  height: 80px;
  /*background-color: rebeccapurple;*/
  font-size: 18px;
  padding: 0 20px;
}

.box1-3 {
  width: 100%;
  height: 60px;
  /*background-color: orange;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box1-3-1 {
  padding: 14px;
  background-color: rgb(19, 19, 26);;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.box1-3-1:hover {
  background-color: rgb(97, 147, 187);
}

/*修改分页默认样式*/
/deep/ .btn-prev {
  background-color: rgb(35, 35, 44) !important;
  padding: 20px !important;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
}

/deep/ .active {
  background-color: rgb(35, 35, 44) !important;
  padding: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
}

/deep/ .number {
  background-color: rgb(35, 35, 44) !important;
  padding: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
}

/deep/ .btn-next {
  background-color: rgb(35, 35, 44) !important;
  padding: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
}

/deep/ .btn-quicknext {
  background-color: rgb(35, 35, 44) !important;
  padding: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
}

/deep/ .btn-quickprev {
  background-color: rgb(35, 35, 44) !important;
  padding: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
}

/deep/ .el-pagination {
  display: flex;
  border-radius: 10px !important;
}

/deep/ .el-pager {
  display: flex;
  border-radius: 10px !important;
}

/deep/ .is-background {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1025px){
  .box1{
    width: 740px;
    margin-left: 4px;
  }
}
@media screen and (max-width: 1001px){
  .box1{
    width: 680px;
  }
}
@media screen and (max-width: 962px){
  .box1{
    width: 500px;
  }
}
@media screen and (max-width: 792px){
  .box1{
    width: 400px;
  }
}
@media screen and (max-width: 684px){
  .box1{
    width: 350px;
  }
  .box1-2{
    overflow: hidden;
  }
}
@media screen and (max-width: 668px){
  .box1{
    width: 300px;
  }
}
@media screen and (max-width: 638px){
  .box1{
    width: 300px;
  }
}
@media screen and (max-width: 579px){
  .box1{
    width: 100%;
  }
}
@media screen and (max-width: 335px){
  .box1-3-1{
    padding: 10px;
    font-size: 12px;
  }
}
</style>