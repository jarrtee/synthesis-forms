<template>
  <div id="main">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="transparent"
          text-color="#333"
          active-text-color="#333"
          @select="handleSelect"
          :ellipsis="false"
        >
          <el-menu-item index="1" class="menu-item-1">首页</el-menu-item>
          <el-sub-menu index="2" class="menu-item-2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" class="menu-item-3">Info</el-menu-item>
          <el-menu-item index="4" class="menu-item-4">Orders</el-menu-item>
          <el-menu-item index="5" class="menu-item-5">Orders1</el-menu-item>
          <div class="div-button-1">
            <el-button class="button-1" @click="show = !show" circle>
              <el-icon><Search /></el-icon>
            </el-button>
            <el-input-group>
              <transition name="fade">
                <el-input
                  v-model="input"
                  v-if="show"
                  type="text"
                  class="input-find"
                  placeholder="Please input"
                  v-focus
                />
              </transition>
              <transition name="fade">
                <el-button v-if="show" class="button-2" @click="enterclick"
                  >Search</el-button
                >
              </transition>
            </el-input-group>
          </div>
          <div class="div-button-3">
            <el-button class="button-4" @click="menuchoose" circle>
              <el-icon><icon-menu /></el-icon>
            </el-button>
          </div>
          <div class="div-button-2">
            <el-button class="button-3" @click="TEXTPUT" circle>
              <el-icon><UserFilled /></el-icon>
            </el-button>
          </div>
          <div class="div-button-4">
            <el-button class="button-5"> </el-button>
          </div>
          <div class="div-button-5">
            <!-- <span @click.stop="toggleDark()" style="font-size: xx-small;color: purple;">切换主题</span> -->
            <el-switch
              v-model="isDarkTheme"
              size="middle"
              @change="toggleDark()"
              style="--el-switch-on-color: gray"
            >
              <template #active-action>
                <el-icon style="color: midnightblue"><Moon /></el-icon>
              </template>
              <template #inactive-action>
                <el-icon style="color: firebrick"><Sunny /></el-icon>
              </template>
            </el-switch>
          </div>
        </el-menu>
      </el-header>
      <el-container>
      <el-aside width="130px" >
        <el-row class="row-menu">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1" style="justify-content: center;">item one</el-menu-item>
                  <el-menu-item index="1-2" style="justify-content: center;">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3" style="justify-content: center;">item three</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Search,
  // Document,
  Menu as IconMenu,
  // Location,
  // Setting,
  UserFilled,
  Sunny,
  Moon,
} from "@element-plus/icons-vue";
import { ref } from "vue";
// import HomePage from "./components/HomePage.vue";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// const isDarkTheme = ref("true")

const activeIndex = ref("1");

export default {
  data() {
    return {
      show: false,
      input: "",
      isDarkTheme: false,
    };
  },
  components: {
    Search,
    // Document,
    IconMenu,
    // Location,
    // Setting,
    UserFilled,
    Sunny,
    Moon,

    // HomePage,
  },
  directives: {
    focus: {
      // 当绑定元素插入时触发
      inserted(el) {
        el.focus();
      },
    },
  },
  setup() {
    function handleSelect(index) {
      activeIndex.value = index;
    }

    return {
      handleSelect,
      toggleDark,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./Main-forms.less");
</style>
