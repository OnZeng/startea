<template>
  <div class="msg-box1">
    <!--头像*留言框*按钮-->
    <div class="msg-box2">
      <!--头像-->
      <div class="msg-box3" style="flex: 1">
        <el-avatar shape="square" :size="70" fit="contain" :src="temp.msg_img"></el-avatar>
      </div>
      <!--输入框-->
      <div style="flex: 8">
        <!--用户信息填写框-->
        <div class="ttttt">
          <el-input placeholder="试试QQ号" v-model="temp.msg_name" @blur="getqq()" class="qwdqwd">
            <template slot="prepend" class="llllll">昵称</template>
          </el-input>
          <el-input placeholder="必填" v-model="temp.qq_email" class="qwdqwd">
            <template slot="prepend">邮箱</template>
          </el-input>
          <el-input placeholder="选填" v-model="temp.url" class="qwdqwd">
            <template slot="prepend">网址</template>
          </el-input>
        </div>
        <!--留言输入框-->
        <el-input
            class="iiiii"
            maxlength="200"
            v-model="temp.msg_content"
            resize="none"
            type="textarea"
            :rows="6"
            placeholder="写点什么吗？
可以在「昵称」处填写QQ号，自动获取「头像」「QQ昵称」和「QQ邮箱」！
🍊请务必填写QQ邮箱 用以接收评论回复提醒~"
        >
        </el-input>
      </div>
      <!--表情和按钮-->
      <div class="msg-box4">
        <!--表情-->
        <div class="msg-box4-1 el-popover-style">
          <el-popover
              effect="dark"
              width="336"
              trigger="click"
          >
            <!--表情库-->
            <div style="display: flex;flex-wrap: wrap">
              <div class="expression" @click="copy(1)" v-for="item in expression[0]">{{ item }}</div>
            </div>
            <div class="msg-box4-1-1" slot="reference">😄</div>
          </el-popover>
          <el-popover
              effect="dark"
              width="336"
              trigger="click"
          >
            <!--表情库-->
            <div style="display: flex;flex-wrap: wrap">
              <div class="expression" @click="copy(1)" v-for="item in expression[1]">{{ item }}</div>
            </div>
          <div class="msg-box4-1-1" slot="reference">☀️</div>
          </el-popover>
          <el-popover
              effect="dark"
              width="336"
              trigger="click"
          >
            <!--表情库-->
            <div style="display: flex;flex-wrap: wrap">
              <div class="expression" @click="copy(1)" v-for="item in expression[2]">{{ item }}</div>
            </div>
          <div class="msg-box4-1-1" slot="reference">🍎</div>
          </el-popover>
          <el-popover
              effect="dark"
              width="336"
              trigger="click"
          >
            <!--表情库-->
            <div style="display: flex;flex-wrap: wrap">
              <div class="expression" @click="copy(1)" v-for="item in expression[4]">{{ item }}</div>
            </div>
          <div class="msg-box4-1-1 k1" slot="reference">🆗</div>
          </el-popover>
        </div>
        <!--按钮-->
        <div class="msg-box4-2">
          <div class="msg-box4-3 lll" @click="ooo">预览</div>
          <div class="msg-box4-3" @click="comment()">发送</div>
        </div>
      </div>
    </div>
    <!--评论组件-->
    <div class="msg-box5" v-for="(item,index) in msg_list">
      <!--头像-->
      <div class="msg-box6">
        <el-avatar shape="square" :size="70" fit="contain" :src="item.msg_img"></el-avatar>
      </div>
      <!--用户信息-->
      <div style="flex: 5">
        <div class="msg-box7">
          <div class="msg-box7-1">{{ item.msg_name }}<span style="padding: 0 5px;background-color: rgb(97, 147, 187);border-radius: 4px;color: white" v-if="item.msg_role==='2'">站长</span></div>
          <div class="msg-box7-2">{{ item.msg_home }}&nbsp;<span class="ppppp">{{ item.msg_type }}</span></div>
          <div class="msg-box7-3">{{ item.msg_date }}</div>
        </div>
        <!--用户评论内容框-->
        <div class="msg-box8">
          <div class="msg-box8-1">{{ item.msg_content }}</div>
          <div class="msg-box8-2" @click="hfpl(index)"><i class="el-icon-chat-dot-round"></i></div>
        </div>
        <!--评论回复-->
        <div class="msg-box9" v-show="item.msg_reply!=''" v-for="item2 in item.msg_reply">
          <!--头像-->
          <div class="msg-box9-1">
            <el-avatar shape="square" :size="70" fit="contain" :src="item2.msg_img"></el-avatar>
          </div>
          <div style="flex: 5">
            <!--回复者信息-->
            <div class="msg-box9-2">
              <div class="msg-box9-2-1">{{ item2.msg_name }}<span style="padding: 0 5px;background-color: rgb(97, 147, 187);border-radius: 4px;color: white" v-if="item2.msg_role==='2'">站长</span></div>
              <div class="msg-box9-2-2">{{ item2.msg_home }}&nbsp;<span class="ppppp">{{ item2.msg_type }}</span></div>
              <div class="msg-box9-2-3">{{ item2.msg_date }}</div>
            </div>
            <!--          回复者评论内容-->
            <div class="msg-box9-3"><p style="margin:10px">{{ item2.msg_content }}</p></div>
          </div>
        </div>
      </div>
    </div>
    <!--评论回复弹出框--><!--评论回复弹出框-->
    <!--评论回复弹出框--><!--评论回复弹出框-->
    <!--评论回复弹出框--><!--评论回复弹出框-->
    <el-dialog :title="'回复给「'+hf+'」：'" :visible.sync="dialogVisible" :modal="false" :width="width"
               custom-class="rrrr"
               :destroy-on-close="true" :before-close="close">
      <!--头像*留言框*按钮-->
      <div class="msg-box2">
        <!--头像-->
        <div class="msg-box3">
          <el-avatar shape="square" :size="70" fit="contain" :src="temp2.msg_img"></el-avatar>
        </div>
        <!--输入框-->
        <div>
          <!--用户信息填写框-->
          <div>
            <el-input placeholder="试试QQ号" v-model="temp2.msg_name" @blur="getqq">
              <template slot="prepend">昵称</template>
            </el-input>
            <el-input placeholder="必填" v-model="temp2.qq_email">
              <template slot="prepend">邮箱</template>
            </el-input>
            <el-input placeholder="选填" v-model="temp2.url">
              <template slot="prepend">网址</template>
            </el-input>
          </div>
          <!--留言输入框-->
          <el-input
              maxlength="200"
              v-model="temp2.msg_content"
              resize="none"
              type="textarea"
              :rows="6"
              placeholder="写点什么吗？
可以在「昵称」处填写QQ号，自动获取「头像」「QQ昵称」和「QQ邮箱」！
🍊请务必填写QQ邮箱 用以接收评论回复提醒~"
          >
          </el-input>
        </div>
        <!--表情和按钮-->
        <div class="msg-box4">
          <!--表情-->
          <div class="msg-box4-1 el-popover-style">
            <el-popover
                effect="dark"
                width="336"
                trigger="click"
            >
              <!--表情库-->
              <div style="display: flex;flex-wrap: wrap">
                <div class="expression" @click="copy" v-for="item in expression[0]">{{ item }}</div>
              </div>
              <div class="msg-box4-1-1" slot="reference">😄</div>
            </el-popover>
            <el-popover
                effect="dark"
                width="336"
                trigger="click"
            >
              <!--表情库-->
              <div style="display: flex;flex-wrap: wrap">
                <div class="expression" @click="copy" v-for="item in expression[1]">{{ item }}</div>
              </div>
            <div class="msg-box4-1-1" slot="reference">☀️</div>
            </el-popover>
            <el-popover
                effect="dark"
                width="336"
                trigger="click"
            >
              <!--表情库-->
              <div style="display: flex;flex-wrap: wrap">
                <div class="expression" @click="copy" v-for="item in expression[2]">{{ item }}</div>
              </div>
            <div class="msg-box4-1-1" slot="reference">🍎</div>
            </el-popover>
            <el-popover
                effect="dark"
                width="336"
                trigger="click"
            >
              <!--表情库-->
              <div style="display: flex;flex-wrap: wrap">
                <div class="expression" @click="copy" v-for="item in expression[4]">{{ item }}</div>
              </div>
            <div class="msg-box4-1-1 k1" slot="reference">🆗</div>
            </el-popover>
          </div>
          <!--按钮-->
          <div class="msg-box4-2">
            <div class="msg-box4-3" @click="ooo">预览</div>
            <div class="msg-box4-3" @click="hfpl_2">发送</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "msg2",
  data() {
    return {
      //弹出框宽度
      width:'100%',
      //回复评论弹出框
      dialogVisible: false,
      //回复指定用户
      hf: '',
      //用户评论
      temp: {
        msg_id:'',
        msg_name: '',
        qq_email: '',
        url: '',
        msg_content: '',
        msg_type: '',
        msg_home: '',
        msg_date: '',
        msg_img: '',
        msg_reply: []
      },
      //用户评论回复
      temp2: {
        index: '',
        msg_name: '',
        qq_email: '',
        url: '',
        msg_content: '',
        msg_type: '',
        msg_home: '',
        msg_date: '',
        msg_img: '',
        msg_reply: [],
        msg_hf:''
      },
      //评论列表
      msg_list: [
        // {
        //   msg_id: 1,
        //   msg_name: '小白小白',
        //   msg_content: '我的世界',
        //   msg_date: '2022-4-2-15:10',
        //   msg_type: 'Windows10',
        //   msg_home: '江西省鹰潭市',
        //   msg_img: 'https://startea.top/1231141.jpg',
        //   msg_reply: [
        //     {
        //       msg_id: 2,
        //       msg_name: '曾梦想',
        //       msg_content: '可以可以',
        //       msg_date: '2022-4-2-15:10',
        //       msg_type: 'Windows10',
        //       msg_home: '江西省鹰潭市',
        //       msg_img: 'https://startea.top/1231141.jpg',
        //       msg_hf: '1'
        //     },
        //
        //   ]
        // },
      ],
      //留言数据临时容器
      k_list:[],
      //表情库
      expression: [
        ['😀','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','🙂','😉','😇','🥰','😍','🤩'
          ,'😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔'
          ,'🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷'
          ,'🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🤓','🧐','😤','😡'
          ,'😠','🤬','😈','👿','💀','☠️','👽','👾','👻','🤡'
        ],
          [
            '🐵','🐒','🦍','🦧','🐶','🐕','🦮','🐕‍🦺','🐩','🐺','🦊','🐕‍','🐩','🐺','🦊','🦝','🐱','🐈','🦁','🐯','🐅','🐆','🐴','🐐',
            '🐊','🐢','🐸','🦎','🐍','🐲','🐉','🦕','🦖','🐛','🐌','🦋',
          ],
          [
            '🍎','🍇','🍉','🍊','🍋','🍌','🍍','🥭','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥'
            ,'🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬',
            '🥦','🧄','🧅','🍄','🥜','🌰','🥛','☕','🍵','🍶','🍾','🍷',
            '🍸','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🍦','🍮'
          ],
          [
            '😷','🤒','🏥','⚕️','🦠','👨‍⚕️','👩‍⚕️','☠️','💊','🙏','😱','💉',
            '🚑','🩺','🥼','🌡️','🔬','🙅','☣️','☕','🍵','🌿','💧','🔥',
          ],
          [
            '🆗','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️',
            '↪️','⤴️','⤵️','🔃','🔄','▶️','◀️','⏸️','✔️','✖️','©️','®️'
          ]
  ]
  }
  },
  methods: {
    ooo(){
      this.$message.info('暂不支持markdown语法')
    },
    //请求QQ头像和邮箱和昵称
    getqq(){
      let pattern = /^\d{6,12}$/
      if (pattern.test(this.temp.msg_name)){
          this.$message('获取QQ信息中,请稍等')
              //发送请求
          this.axios({
            method:'get',
            url:'https://startea.top/api/getqqinfo',
            params:{
              qq:this.temp.msg_name
            }
          }).then((response)=>{
            this.$message({
              type:"success",
              message:'获取QQ信息成功'
            })
            // console.log(response.data)
            window.localStorage.setItem('avatar',response.data.imgurl)
            window.localStorage.setItem('email',response.data.mail)
            window.localStorage.setItem('name',response.data.name)
            this.temp.msg_name=window.localStorage.getItem('name')
            this.temp.qq_email=window.localStorage.getItem('email')
            this.temp.msg_img=window.localStorage.getItem('avatar')
          }).catch(()=>{
            this.$message({
              type:"error",
              message:'获取QQ信息失败'
            })
          })
      }else {
        console.log('不发送请求')
      }
    },
    //打开回复评论弹出框
    hfpl(index) {
      this.temp2.msg_name=window.localStorage.getItem('name')
      this.temp2.qq_email=window.localStorage.getItem('email')
      this.temp2.msg_img=window.localStorage.getItem('avatar')
      this.hf = this.msg_list[index].msg_name
      this.temp2.msg_hf=this.msg_list[index].msg_id
      this.temp2.index = index
      this.dialogVisible = true
    },
    //回复评论方法
    hfpl_2() {
      let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,10}$/
      if (reg.test(this.temp2.msg_name)) {
        let reg2 = /[1-9]\d{5,10}@qq\.com/
        if (reg2.test(this.temp2.qq_email)) {
          let reg3 = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
          if (this.temp2.url === '' || reg3.test(this.temp2.url)) {
            if (this.temp2.msg_content !== '' || this.temp2.msg_content.replace(/(^\s*)|(\s*$)/g, "") !== "") {
              //获取客户端类型
              let a = navigator.userAgent;
              if (/Windows/i.test(a)) {
                this.temp2.msg_type = 'Windows10'
              } else if (/iPhone/i.test(a)) {
                this.temp2.msg_type = 'iPhome端'
              } else if (/Android/i.test(a)) {
                this.temp2.msg_type = 'Android端'
              } else if (/iPad/i.test(a)) {
                this.temp2.msg_type = 'iPad端'
              } else {
                this.temp2.msg_type = '其他类型客户端'
              }
              //前端时间格式化
              let date = new Date()
              this.temp2.msg_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + date.getMinutes()
              this.axios({
                method:'post',
                url:'https://startea.top/api/message_2',
                data:{
                  msg_name:this.temp2.msg_name,
                  qq_email:this.temp2.qq_email,
                  msg_content:this.temp2.msg_content,
                  msg_type:this.temp2.msg_type,
                  msg_img:this.temp2.msg_img,
                  msg_home:this.temp2.msg_home,
                  url:this.temp2.url,
                  msg_hf:this.temp2.msg_hf
                }
              }).then((res)=>{
                if (res.data.msg==='1'){
                  this.msg_list[this.temp2.index].msg_reply.push(JSON.parse(JSON.stringify(this.temp2)))
                  this.temp2.msg_content = ''
                  this.dialogVisible = false
                  this.$message.success('留言成功！')
                }else if (res.data===0){
                  this.$message.error('留言失败！')
                }
              }).catch(()=>{
                this.$message.error('请求失败！')
              })
            } else this.$message.error('请说点什么，再发送吧')
          } else this.$message.error('请输入正确的url或不填')
        } else this.$message.error('请输入正确的QQ邮箱')
      } else this.$message.error('昵称仅限中文、数字、字母，长度1~10！')
    },
    //用户评论
    comment() {
      let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,10}$/
      if (reg.test(this.temp.msg_name)) {
        let reg2 = /[1-9]\d{5,10}@qq\.com/
        if (reg2.test(this.temp.qq_email)) {
          let reg3 = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
          if (this.temp.url === '' || reg3.test(this.temp.url)) {
            if (this.temp.msg_content !== '' || this.temp.msg_content.replace(/(^\s*)|(\s*$)/g, "") !== "") {
              //获取客户端类型
              let a = navigator.userAgent;
              if (/Windows/i.test(a)) {
                this.temp.msg_type = 'Windows10'
              } else if (/iPhone/i.test(a)) {
                this.temp.msg_type = 'iPhome端'
              } else if (/Android/i.test(a)) {
                this.temp.msg_type = 'Android端'
              } else if (/iPad/i.test(a)) {
                this.temp.msg_type = 'iPad端'
              } else {
                this.temp.msg_type = '其他类型客户端'
              }
              //前端时间格式化
              let date = new Date()
              this.temp.msg_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + date.getMinutes()
              this.axios({
                method:'post',
                url:'https://startea.top/api/message_2',
                data:{
                  msg_name:this.temp.msg_name,
                  qq_email:this.temp.qq_email,
                  msg_content:this.temp.msg_content,
                  msg_type:this.temp.msg_type,
                  msg_img:this.temp.msg_img,
                  msg_home:this.temp.msg_home,
                  url:this.temp.url
                }
              }).then((res)=>{
                if (res.data.msg==='1'){
                  window.scrollTo(0,50000)
                  this.temp.msg_id=res.data.id
                  this.msg_list.push(JSON.parse(JSON.stringify(this.temp)))
                  this.temp.msg_content = ''
                  this.$message.success('留言成功！')
                }else if (res.data===0){
                  this.$message.error('留言失败！')
                }
              }).catch(()=>{
                this.$message.error('请求失败！')
              })
            } else this.$message.error('请说点什么，再发送吧')
          } else this.$message.error('请输入正确的url或不填')
        } else this.$message.error('请输入正确的QQ邮箱')
      } else this.$message.error('昵称仅限中文、数字、字母，长度1~10！')
    },
    //将表情复制到剪切板
    copy(i) {
      //创建临时元素
      // let input = document.createElement("input");
      // console.log(event.target.innerText)
      // //将当前元素内容填充到临时元素中
      // input.value = event.target.innerText
      //暂时插入到页面中
      // document.body.appendChild(input);
      //选中当前内容
      // input.select()
      // //执行复制
      // document.execCommand('copy')
      //删除插入的元素
      // document.body.removeChild(input);
      // this.$message.success({
      //   message: '复制到剪切板！'
      // })
      if (i === 1) {
        this.temp.msg_content += event.target.innerText
      } else {
        this.temp2.msg_content += event.target.innerText
      }

    },
    //关闭弹出框时回调
    close() {
      this.temp2.msg_content = ''
      this.dialogVisible = false
    },
    //请求评论信息
    pla(){
      // console.log(this.k_list.length)
        for (let i=0;i<this.k_list.length;i++){
          //判断是评论还是回复
          if (this.k_list[i].msg_hf==null){
            //渲染评论时给它加一个空数组
            this.k_list[i].msg_reply=[]
            this.msg_list.push(this.k_list[i])
            for (let j=0;j<this.k_list.length;j++){
              if (this.k_list[i].msg_id===this.k_list[j].msg_hf){
                //向指定的评论里添加回复数据
                this.msg_list[this.msg_list.length-1].msg_reply.push(this.k_list[j])
              }
            }
          }
        }
    }
  },
  created() {
      this.k_list=this.$store.state.message
      this.temp.msg_home=this.$store.state.gsd.home
      this.temp2.msg_home=this.$store.state.gsd.home
    this.temp.msg_name=window.localStorage.getItem('name')
    this.temp.qq_email=window.localStorage.getItem('email')
    this.temp.msg_img=window.localStorage.getItem('avatar')
    this.temp2.msg_name=window.localStorage.getItem('name')
    this.temp2.qq_email=window.localStorage.getItem('email')
    this.temp2.msg_img=window.localStorage.getItem('avatar')
  },
  mounted() {
      this.pla()
    if (document.documentElement.clientWidth>1000){
      this.width='60%'
    }else this.width='100%'
    // console.log(document.documentElement.clientWidth)

  }
}
</script>

<style scoped>
/deep/.el-dialog__wrapper{
  overflow-y: hidden;
}
.qwdqwd{
  width: auto;
  margin: 0 0 10px 5px;
}
.msg-box1 {
  width: 95%;
  min-height: 400px;
  /*background-color: #4BAE4F;*/
  padding-bottom: 20px;
}

.msg-box2 {
  width: 95%;
  min-height: 240px;
  /*background-color: #326dcc;*/
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.msg-box3 {
  width: 70px;
  height: 70px;
  border-radius: 4px;
  /*background-color: #9a6e3a;*/
}

/*用户信息输入框样式*/
/deep/ .el-input-group {
  width: auto;
  margin: 0 0 10px 5px;
}

/*用户信息输入框前置内容*/
/deep/ .el-input-group__prepend {
  background-color: rgb(69, 69, 88);
  border: 1px solid rgb(69, 69, 88);
  color: white;
  cursor: default;
}

/deep/ .el-input-group__prepend:hover {
  background-color: rgb(97, 147, 187);
  border: 1px solid rgb(97, 147, 187);
}

/*用户信息输入框内容*/
/deep/ .el-input__inner {
  background-color: rgb(19, 19, 26);
  border: 1px solid rgb(69, 69, 88);
  color: white;
}

/*用户评论内容区域*/
/deep/ .el-textarea__inner {
  background-color: rgb(19, 19, 26);
  border: 1px solid rgb(19, 19, 26);
  /*margin-left: 10px;*/
  color: white;
  height: 100%;
}

.msg-box4 {
  width: 90%;
  height: 45px;
  /*background-color: #990055;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-left: 80px;
}

.msg-box4-1 {
  display: flex;
}

/*表情选项框*/
.msg-box4-1-1 {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(69, 69, 88);
  margin-left: 10px;
}

.msg-box4-1-1:hover {
  background-color: rgb(97, 147, 187);
}

.msg-box4-2 {
  display: flex;
}

/*按钮*/
.msg-box4-3 {
  width: 70px;
  height: 36px;
  background-color: rgb(69, 69, 88);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  margin-right: 15px;
}

.msg-box4-3:hover {
  background-color: rgb(97, 147, 187);
}

/*表情选项框*/
.expression {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expression:hover {
  background-color: rgb(97, 147, 187);
}

/*
 * 评论组件
*/
.msg-box5 {
  width: 95%;
  /*min-height: 240px;*/
  /*background-color: #4BAE4F;*/
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

/*头像框*/
.msg-box6 {
  width: 70px;
  height: 70px;
  border-radius: 4px;
  /*background-color: #9a6e3a;*/
}

/*用户信息盒子*/
.msg-box7 {
  width: 806px;
  height: 34px;
  /*background-color: #9a6e3a;*/
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}

/*用户信息*/
.msg-box7-1 {
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: #f30505;*/
  border-radius: 4px;
  cursor: default;
  color: rgb(97, 147, 187);
}

.msg-box7-1:hover {
  background-color: rgb(97, 147, 187);
  color: white;
}

.msg-box7-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.msg-box7-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/*评论内容框*/
.msg-box8 {
  width: 806px;
  min-height: 50px;
  background-color: rgb(19, 19, 26);
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}

.msg-box8-1 {
  margin: 10px;
  color: white;
  word-break:break-all;
}

/*回复按钮*/
.msg-box8-2 {
  width: 24px;
  height: 24px;
  /*background-color: #4BAE4F;*/
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.msg-box8-2:hover {
  background-color: rgb(97, 147, 187);
}

/*
*
*
*评论回复
*/
.msg-box9 {
  width: 806px;
  /*min-height: 300px;*/
  /*background-color: #990055;*/
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

/*评论回复者头像*/
.msg-box9-1 {
  width: 70px;
  height: 70px;
  border-radius: 4px;
}

/*评论回复者信息*/
.msg-box9-2 {
  width: 730px;
  height: 34px;
  /*background-color: #4ec752;*/
  margin-left: 6px;
  display: flex;
  justify-content: space-between;
}

.msg-box9-2-1 {
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: #f30505;*/
  border-radius: 4px;
  cursor: default;
  color: rgb(97, 147, 187);
}

.msg-box9-2-1:hover {
  background-color: rgb(97, 147, 187);
  color: white;
}

.msg-box9-2-2 {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.msg-box9-2-3 {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*评论回复内容*/
.msg-box9-3 {
  color: white;
  width: 730px;
  min-height: 50px;
  background-color: rgb(19, 19, 26);
  margin-left: 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

/*回复评论弹出框*/
/deep/ .el-dialog {
  background-color: rgb(35, 35, 44);
  color: white;
}

/deep/ .el-dialog__title {
  color: white;
}
</style>


<style>
.el-popover {
  background-color: #990055 !important;
  border: 0 !important;
  font-size: 20px !important;
  color: #fdf9f9 !important;
}

.el-popper[x-placement^=bottom] .popper__arrow::after {
  border-bottom-color: #990055 !important;
}

.el-popper[x-placement^=top] .popper__arrow::after {
  border-top-color: #990055 !important;
}

.el-popper[x-placement^=top] .popper__arrow {
  border-top-color: #990055 !important;
}

.el-popper[x-placement^=bottom] .popper__arrow {
  border-bottom-color: #990055 !important;
}

@media screen and (max-width: 1025px){
  .msg-box1{
    width: 100% !important;
  }
}
@media screen and (max-width: 1005px){
  .msg-box2{
    width: 100% !important;
  }
  .msg-box3{
    flex: 1;
  }
  .ttttt{
    flex: 4;
  }
  .qwdqwd{
    width: 100% !important;
  }
  .msg-box5{
    width: 100% !important;
  }
  .msg-box7{
    width: 100% !important;
  }
  .msg-box7-3{
    display: none!important;
  }
  .msg-box8{
    width: 100% !important;
  }
  .msg-box9{
    width: 100% !important;
  }
  .msg-box9-2-3{
    display: none!important;
  }
  .msg-box9-2{
    width: auto!important;
  }
  .msg-box9-3{
    width: auto!important;
  }
}
@media screen and (max-width: 574px){
  .msg-box4{
    margin-left: 60px!important;
  }
}
@media screen and (max-width: 518px){
  .msg-box4{
    margin-left: 40px!important;
  }
  .msg-box7{
    font-size: 14px;
  }
  .msg-box8{
    font-size: 14px;
  }
  .msg-box9-2{
    font-size: 12px;
  }
  .msg-box9-3{
    font-size: 12px;
  }
}
@media screen and (max-width: 499px){
  .msg-box4{
    width: 100% !important;
    margin-left: 20px!important;
  }
}
@media screen and (max-width: 475px){
  .msg-box4{
    margin-left: 0!important;
  }
}
@media screen and (max-width: 449px){
  .qwdqwd{
    margin: 0!important;
  }
  .iiiii{
    width: 95% !important;
  }
  .msg-box4{
    /*margin-left: 20px!important;*/
  }
  .msg-box7{
    font-size: 12px;
    margin-left: 0!important;
  }
  .msg-box8{
    font-size: 12px;
    margin-left: 0!important;
  }
  .msg-box9-2{
    width: 93% !important;
    font-size: 10px;
  }
  .msg-box9-3{
    width: 93% !important;
    font-size: 10px;
  }
  .k1{
    display: none!important;
  }
  .ppppp{
    display: none!important;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 376px){
  .msg-box3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .msg-box7-2{
    display: none!important;
  }
  .msg-box9-2-2{
    display: none!important;
  }
  .llllll{
    padding: 0!important;
  }
  .iiiii{
    width: 320px!important;
  }
}
@media screen and (max-width: 365px){
  .msg-box4{
    margin-left: 0!important;
  }
  .msg-box9-3{
    width: 90% !important;
  }
  .msg-box4-1-1{
    display: none!important;
  }
  .iiiii{
    width: 300px!important;
  }
}
@media screen and (max-width: 333px){
  .iiiii{
    width: 280px!important;
    height: 170px;
  }
}
</style>