<template>
  <div id="body">
    <div class="main">
      <div class="title"><strong>Welcome to NGTB MGT</strong></div>
      <div class="button_control">
        <el-button type="primary" circle>
          <el-icon><Edit /></el-icon>
        </el-button>
        <el-button type="success" circle>
          <el-icon><Check /></el-icon>
        </el-button>
        <el-button type="info" circle>
          <el-icon><Message /></el-icon>
        </el-button>
      </div>
      <div class="input-1">
        <el-tag
          style="
            position: relative;
            right: 22px;
            font-size: 14px;
            color: purple;
          "
          ><strong>用户名</strong></el-tag
        >
        <el-input
          v-model="Account_inf.Username"
          style="width: 240px"
          placeholder="Usernasme"
          v-on:keyup.enter="enterLogin"
        />
      </div>
      <div class="input-2">
        <el-tag
          style="
            position: relative;
            right: 22px;
            font-size: 14px;
            color: purple;
          "
          ><strong>密码</strong></el-tag
        >
        <el-input
          v-model="Account_inf.password"
          style="width: 240px; left: 7px"
          placeholder="Password"
          v-on:keyup.enter="enterLogin"
          type="password"
          :show-password="true"
        />

      </div>
      <div class="button-forget">
        <el-button
          plain
          text
          style="font-size: 12px; padding: 8px"
          class="forget_password"
          ><strong>忘记密码?</strong></el-button
        >
        <el-checkbox
          v-model="checked"
          label="是否保持登录状态"
          style="font-size: 10px; left: 40px; font-weight: bolder"
        />
        <!-- font-weight：设置字体样式/bolder：加粗 -->
      </div>
      <div class="button-login">
        <el-button
          type="primary"
          round
          style="width: 180px"
          class="login"
          @click="enterLogin"
          >Login in</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Edit, Check, Message,View ,Hide} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";


export default {
  date() {
    return {};
  },
  mounted() {},
  components: {
    Edit,
    Check,
    Message,
    View,
    Hide
  },
  setup() {
    const checked = ref("false");
    const Account_inf = reactive({
      Username: "",
      password: "",
    });

    const enterLogin = () => {
      console.log("1");
    };

    const validatePass = (value, callback)=>{
      if(value === ""){
        //若不能通过校验,规定使用calback,传入一个ERROR对象,把信息传入error对象
        callback(new Error("请输入密码"));
      }else{
        //校验成功,直接调用callback
        callback();
      }
    };
    const rules = reactive({
      username:[{ required:true,message:"请输入用户名",trigger:"blur"}],
      password:[{ validator: validatePass,trigger:"blur"}],
    });
    const submitForm = () =>{
      if(!formEl)return;
      formEl.validate((valid)=>{
        if(valid){
          loginAPI(ruleForm).then((res)=>{
            if(res.code === 200){
              //登录成功
              //1、存code
              localStorage.setItem("token",res.date.tokenHead+res.date.token);
              //跳转
                
              ElMessage.success("登录成功");
            }
          });
        }else{
          //提示用户
          ElMessage.error("0.0")
          //记得如果是校验失败,要返回false
          return false;
        }
      })
    }


    return {
      Account_inf,
      checked,
      enterLogin,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Login/Login.less");
</style>
