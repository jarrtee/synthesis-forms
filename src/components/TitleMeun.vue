<template>
  <div class="body">
    <!--菜单按钮组件-->
    <!--Meunボタンコンポーネント-->
    <el-button class="button-1">
      <span ><img src="../assets/ERP_logo.png" class="icon-1"/></span>
      <span class="character-1"><strong>{{characterFirst}}</strong></span>
    </el-button>
    <el-button class="button-2">
      <span ><img src="../assets/MES_logo.png" class="icon-2"/></span>
      <span class="character-2"><strong>{{characterSecond}}</strong></span>
    </el-button>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import {ref} from "vue"

export default {
  date() {
    return {};
  },
  components: {
    Search,
  },
  setup(){
    const characterFirst = ref("ERP")
    const characterSecond = ref("MES")
    return{
        characterFirst,
        characterSecond,
    }
  }
};
</script>

<style lang="less" scoped>
.body {
  position: relative;
  width: 260px;
  height: 200px;
  padding: 15px;
  background-color: #fafafc;

  .button-1 {
    position: relative;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    top: -5px;
    width: 60px;
    height: 60px;
    background-color:white;

    .icon-1 {
      position: absolute;
      top: -5px;
      left: 2px;
      width: 100%;
      size: 25px;
    }
    .character-1 {
      position: relative;
      top: 18px;
      right: 4px;
      font-size: 12px;
      color: gray;
    }
  }
  .button-1:hover {
    background-color: #fce6fb;
    
  }
  .button-1 span:first-child {
    margin-right: 8px; /* 可以调整间距 */
  }

  .button-2 {
    position: absolute;
    display: flex;
    left: 75px;
    top: 10px;
    width: 60px;
    height: 60px;
    background-color:white;

    .icon-2 {
      position: absolute;
      top: -5px;
      left: 2px;
      width: 100%;
      size: 25px;
    }
    .character-2 {
      position: relative;
      top: 18px;
      left: 1px;
      font-size: 12px;
      color: gray;
    }
  }
  .button-2:hover {
    background-color: #d1e3ca;
  }


}
</style>
