import { createApp } from 'vue'
import Main from './Main-forms.vue'
// import text from './Text-11.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
// import 'element-plus/lib/theme-chalk/index.css';  
import * as Icons from '@element-plus/icons-vue';  
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
//引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'


// const main = createApp(Main)
// main.use(ElementPlus)
// main.use(Antd)
// main.mount('#main')

createApp(Main).use(store).use(router).use(ElementPlus).use(Antd).mount('#main')

const app = createApp(Main)
Object.keys(Icons).forEach(key => {  
    app.component(key, Icons[key]);  
  });  

// createApp(text).use(store).use(router).use(ElementPlus).use(Antd).mount('#text')

// const app = createApp(text)
// Object.keys(Icons).forEach(key => {  
//     app.component(key, Icons[key]);  
//   });  

