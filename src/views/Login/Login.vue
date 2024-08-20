<template>
  <div id="body">
    <div class="main">
      <div class="title"><strong>Welcome to Login</strong></div>
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
          v-model="input"
          style="width: 240px"
          placeholder="Usernasme"
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
          v-model="input1"
          style="width: 240px; left: 7px"
          placeholder="Password"
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
          @keydown.enter="enterdown()"
          @click="enterLogin"
          >Login in</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Edit, Check, Message } from "@element-plus/icons-vue";
import { ref } from "vue";

export default {
  date() {
    return {};
  },
  mounted() {
    // onMounted(() => {
    //   //绑定监听事件
    //   window.addEventListener("enterdown", enterdown);
    // });
    // onUnmounted(() => {
    //   //销毁事件
    //   window.removeEventListener("enterdown", enterdown, false);
    // });
  },
  components: {
    Edit,
    Check,
    Message,
  },
  setup() {
    const input = ref("");
    const input1 = ref("");
    const checked = ref("false");

    const enterdown = (e) => {
	if (e.keyCode == 13 || e.keyCode == 100) {
		enterLogin()
	}
}

    return {
      input,
      input1,
      checked,
      enterdown
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Login/Login.less");
</style>
