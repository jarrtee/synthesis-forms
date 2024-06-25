<!-- <template>
  <div id="main">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template> -->
<template>
  <div id="main">
    <el-container>
      <el-header>
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">Home Page</el-menu-item>
          <el-sub-menu index="2">
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
          <el-menu-item index="3">Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
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
              <el-button v-if="show" class="button-2" @click="enterclick"
                >Search</el-button
              >
            </el-input-group>
          </div>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="130px">
          <el-row class="row-menu">
            <el-col :span="25">
              <el-menu
                active-text-color="burlywood"
                background-color="aliceblue"
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
        <el-main>Main</el-main>
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
} from "@element-plus/icons-vue";

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
    
  },
};
</script>

<style lang="less" scoped>
@import url("./Main-forms.less");
</style>
