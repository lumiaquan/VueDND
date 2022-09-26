import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDND from 'awe-dnd'

createApp(App).use(store).use(router).use(VueDND).mount('#app')
