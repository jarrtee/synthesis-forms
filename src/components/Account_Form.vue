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
    <Vue3Barcode value='125421654'  width='3' height='40' :options="{ format: 'CODE128' , displayValue: false }" style="width: 100px;"></Vue3Barcode>
    <el-radio-group v-model="size" aria-label="size control">
      <el-radio-button value="large">large</el-radio-button>
      <el-radio-button value="default">default</el-radio-button>
      <el-radio-button value="small">small</el-radio-button>
    </el-radio-group>
  </el-dialog>
</template>

<script>

// import { ref } from 'vue'
import Vue3Barcode from 'vue3-barcode'

export default {

  components: {
    Vue3Barcode
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
