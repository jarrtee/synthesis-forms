<template>
    <h1>!!!!!!</h1>
</template>

<el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="ghostwhite" 
          text-color="#fff"
          active-text-color="ghostwhite"
          @select="handleSelect"
          :ellipsis="false"
        >
          
          <el-menu-item index="1" style="left: 65%">Home Page</el-menu-item>
          
          <!-- <el-sub-menu index="2" style="right:65%">
            <template  #title >Workspace</template>
            <el-menu-item index="2-1" >item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu> -->
          <el-menu-item index="3" style="left: 65%">Info</el-menu-item>
          <el-menu-item index="4" style="left: 65%">Orders</el-menu-item>
          <el-menu-item index="5" style="left: 65%">Orders1</el-menu-item>
          <div class="div-button-1">
            <el-button class="button-1" @click="show = !show" circle >
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
                  style="right: -2px;"
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
        </el-menu>