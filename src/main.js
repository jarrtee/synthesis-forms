import { createApp } from 'vue'
import Main from './Main-forms.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

// const main = createApp(Main)
// main.use(ElementPlus)
// main.use(Antd)
// main.mount('#main')


createApp(Main).use(store).use(router).use(ElementPlus).use(Antd).mount('#main')
