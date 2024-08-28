<template>
  <el-form :model="form" label-width="auto" style="max-width: 550px">
    <div class="left">
      <el-form-item
        label="头像"
        style="position: relative; left: 10px; top: 3px; font-weight: bolder"
      >
      </el-form-item>
      <el-form-item
        label="用户名"
        style="position: relative; top: 70px; left: 16px; font-weight: bolder"
      >
      </el-form-item>
      <el-form-item
        label="工号"
        style="position: relative; top: 70px; left: 15px; font-weight: bolder"
      >
      </el-form-item>
    </div>
    <div class="middle">
      <img :src="User_Picture" class="Picture_User" />
      <el-button
        @click="Picture_Exchange"
        plain
        style="
          position: relative;
          right: 90px;
          top: 65px;
          height: 20px;
          width: 60px;
          font-size: small;
        "
      >
        <strong>更换头像</strong>
      </el-button>
      <input
        type="file"
        @change="handleImageChange"
        style="display: none"
      /><!--文件类型用于上传图片-->
      <input type="text" class="User_input" />
      <input type="text" class="User_input1" />
    </div>
    <div class="right"></div>
  </el-form>
</template>

<script>
import { reactive } from "vue";
import { ref } from "vue";

export default {
  date() {
    return {};
  },
  setup() {
    //变量定义  変数定義
    const form = reactive({
      name: "",
    });
    const User_Picture = ref(require("@/assets/picture1.jpg"));

    //Picture更改事件
    const Picture_Exchange = () => {
      console.log("1");
      handleImageChange();
    };
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        User_Picture.value = e.target.result;
      };
      reader.readAsDataURL(file);
    };

    return {
      form,
      User_Picture,
      Picture_Exchange,
      handleImageChange,
    };
  },
};
</script>

<style lang="less" scoped>
.left {
  float: left;
  width: 13%;
  height: 100%;
  // background-color: aqua;
}
.middle {
  float: left;
  width: 35%;
  height: 100%;
  // background-color: red;

  .User_input {
    position: relative;
    width: 160px;
    height: 25px;
    top: 34px;
    right: 16px;
    border: 1px solid gray;
  }
  .User_input1 {
    position: relative;
    width: 160px;
    height: 25px;
    right: 16px;
    top: 38px;
    border: 1px solid gray;
  }
}
.Picture_User {
  width: 80px;
  height: 80px;
  position: relative;
  top: 10px;
  right: 20px;
  border: 1px solid gray;
}
</style>
