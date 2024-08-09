<template>
  <div id="main">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :ellipsis="false"
          ><!-- background-color="transparent"
                text-color="#333"
                active-text-color="#333"
                :ellipsis="false" -->
          <!-- <el-sub-menu index="6" class="menu-item-6">
            <el-icon class="title-icon-1"><HomeFilled/></el-icon>
            <template #title>主页</template>
            <el-menu-item index="6-1">item one</el-menu-item>
            <el-menu-item index="6-2">item two</el-menu-item>
            <el-menu-item index="6-3">item three</el-menu-item>
          </el-sub-menu> -->
          <el-menu-item index="6" class="menu-item-6">
            <span class="title-label-1"><strong>主页</strong></span>
            <el-icon class="title-icon-1"><HomeFilled /></el-icon>
          </el-menu-item>
          <el-menu-item index="1" class="menu-item-1">
            <span class="title-label-2"><strong>API</strong></span>
            <el-icon class="title-icon-2"><Link /></el-icon>
          </el-menu-item>
          <el-menu-item index="2" class="menu-item-2">
            <span class="title-label-3"><strong>栏目二</strong></span>
            <el-icon class="title-icon-3"><Grid /></el-icon>
          </el-menu-item>
          <el-menu-item index="3" class="menu-item-3">
            <span class="title-label-4"><strong>栏目三</strong></span>
            <el-icon class="title-icon-4"><Coin /></el-icon>
          </el-menu-item>
          <el-menu-item index="4" class="menu-item-4">
            <span class="title-label-5"><strong>栏目四</strong></span>
            <el-icon class="title-icon-5"><Calendar /></el-icon>
          </el-menu-item>
          <el-menu-item index="5" class="menu-item-5">
            <span class="title-label-6"><strong>栏目五</strong></span>
            <el-icon class="title-icon-6"><Money /></el-icon>
          </el-menu-item>
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
            <el-button class="button-3" @click = "Create_account" circle>
              <el-icon><UserFilled /></el-icon>
            </el-button>
          </div>
          <div class="div-button-6">
            <el-button class="button-6" @click="TEXTPUT" circle>
              <el-icon><Bicycle /></el-icon>
            </el-button>
          </div>
          <div class="div-button-7">
            <el-button class="button-7" @click="TEXTPUT" circle>
              <el-icon><Setting /></el-icon>
            </el-button>
          </div>
          <div class="div-button-4">
            <el-button class="button-5"> </el-button>
          </div>
          <div class="div-button-5">
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
        <el-aside width="130px">
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
                    <el-icon class="left-icon-1"><location /></el-icon>
                    <span class="left-label-1">侧栏一</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1" style="justify-content: center"
                      >item one</el-menu-item
                    >
                    <el-menu-item index="1-2" style="justify-content: center"
                      >item two</el-menu-item
                    >
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3" style="justify-content: center"
                      >item three</el-menu-item
                    >
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon class="left-icon-2"><icon-menu /></el-icon>
                  <span class="left-label-2">侧栏二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon class="left-icon-3"><document /></el-icon>
                  <span class="left-label-3">侧栏三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon class="left-icon-4"><setting /></el-icon>
                  <span class="left-label-4">侧栏四</span>
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
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  UserFilled,
  Sunny,
  Moon,
  Bicycle,
  HomeFilled,
  Link,
  Grid,
  Coin,
  Calendar,
  Money,
} from "@element-plus/icons-vue";
import { ref } from "vue";
// import HomePage from "./components/HomePage.vue";
import { useDark, useToggle } from "@vueuse/core";
import Account_FormVue from "./components/Account_Form.vue";

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
    Document,
    IconMenu,
    Location,
    Setting,
    UserFilled,
    Sunny,
    Moon,
    Bicycle,
    HomeFilled,
    Link,
    Grid,
    Coin,
    Calendar,
    Money,
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

    function Create_account() {
      {
        {
          Account_FormVue;
        }
      }
    }

    return {
      handleSelect,
      toggleDark,
      Create_account,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./Main-forms.less");
</style>
