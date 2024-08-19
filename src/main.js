import { createApp } from 'vue'
import Main from './Main-forms.vue'
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
//条码
import VueBarcode from 'vue3-barcode'



// createApp(Main).use(store).use(router).use(ElementPlus).use(Antd).use(VueBarcode).mount('#main')

const app = createApp(Main)
app.use(store).use(router).use(ElementPlus).use(Antd).use(VueBarcode).mount('#main')

Object.keys(Icons).forEach(key => {  
    app.component(key, Icons[key]);  
  });  



