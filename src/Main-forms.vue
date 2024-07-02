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
          <el-menu-item index="1" class="menu-item-1">Home Page</el-menu-item>
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
              v-model = 'isDarkTheme'
              :active-action-icon="View"
              :inactive-action-icon="Hide"
              size="middle"
              @change="toggleDark()" 
              style="--el-switch-on-color: gray"
            />
            <el-icon>
            <Sunny/><Moon/>
            </el-icon>
          </div>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="130px">
          <el-row class="row-menu">
            <el-col :span="25">
              <el-menu
                active-text-color="burlywood"
                background-color="transparent"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="mediumaquamarine"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1" style="right: 20px"
                      >item one</el-menu-item
                    >
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon><icon-menu /></el-icon>
                  <span>Two</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon><document /></el-icon>
                  <span>Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon><setting /></el-icon>
                  <span>Four</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
        >
          <div v-if="activeIndex === '1'">内容1</div>
          <div v-else-if="activeIndex === '3'">内容2</div>
        </el-main>
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

} from "@element-plus/icons-vue";
import { ref } from "vue";
// import HomePage from "./components/HomePage.vue";
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isDarkTheme = ref("true")

const activeIndex = ref("1");

export default {
  data() {
    return {
      show: false,
      input: "",
    };
  },
  components: {
    Search,
    Document,
    IconMenu,
    Location,
    Setting,
    UserFilled,

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
      isDarkTheme
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./Main-forms.less");
</style>
