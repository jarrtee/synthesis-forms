<template>
  <router-view v-slot="{Component}">
    <transition name="fade"> <!--设置页面跳转动画效果-->
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less" scoped>

// .fade-enter-from{   /* 进入时的透明度为0 和 刚开始进入时的原始位置通过active透明度渐渐变为1 */  
//   opacity: 0;
//   transform: translateX(-100%);
// }
 
// .fade-enter-to{   /*定义进入完成后的位置 和 透明度 */
//   transform: translateX(0%);
//   opacity: 1; 
// }
 
.fade-leave-active,.fade-enter-active {
    transition: all 1.0s ease-out;
}
 
.fade-leave-from { /* 页面离开时一开始的css样式,离开后为leave-to，经过active渐渐透明 */
  transform: translateX(0%);
  opacity: 1;
}
 
.fade-leave-to{   /* 这个是离开后的透明度通过下面的active阶段渐渐变为0 */  
  transform: translateX(100%);
  opacity: 0;
}

</style>