import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//ElemetPlus 
import elementplus from "element-plus"
import 'element-plus/dist/index.css'
//import zhcn from "element-plus/dist/locale/zh-cn.mjs"
import * as elementplusicon from "@element-plus/icons-vue"


const app = createApp(App)

app.use(createPinia())
app.use(router)

for (const [key,component] of  Object.entries(elementplusicon)){
    app.component(key,component)
}

app.use(elementplus).mount('#app')
