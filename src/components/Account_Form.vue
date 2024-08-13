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
    <el-radio-group v-model="size" aria-label="size control">
      <el-radio-button value="large">large</el-radio-button>
      <el-radio-button value="default">default</el-radio-button>
      <el-radio-button value="small">small</el-radio-button>
    </el-radio-group>
  </el-dialog>
</template>

<script>

// import { ref } from 'vue'


export default {

  components: {
    
  },
  setup() {

    return{
    }
  },
};
</script>

<style lang="less" scoped>
.Vue3Barcode path, .Vue3Barcode rect {
  overflow: visible;
}
@import url("./Less/Account_From.less");
</style>
