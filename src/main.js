import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App) //创建VUE对象
//导入路由配置
import router from './router'
app.use(router)
 
import VueWechatTitle from 'vue-wechat-title'; 
app.use(VueWechatTitle)
 
app.mount('#app')