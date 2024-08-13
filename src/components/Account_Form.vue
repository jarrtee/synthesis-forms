<template>
  <el-dialog
    width="700"
    draggable="true"
    close-on-press-escape="true"
    :modal="false"
    :close-on-click-modal="false"
    class="dialog-form"
  >
    <template #header>
      <div class="custom-header">
        <span>用户管理</span>
      </div>
    </template>
    <el-container class="layout-container-demo">
      <el-aside width="100px">
        <el-scrollbar>
          <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :ellipsis="false"
          >
          <el-menu-item index="1" class="menu-item-1">
            <span class="title-label-1"><strong>主页主页</strong></span>
            <el-icon class="title-icon-1"><HomeFilled /></el-icon>
          </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-dialog>
</template>

<script>
import {
  HomeFilled,
} from "@element-plus/icons-vue";

export default {
  components: {
    HomeFilled
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.Vue3Barcode path,
.Vue3Barcode rect {
  overflow: visible;
}
@import url("./Less/Account_From.less");
</style>
