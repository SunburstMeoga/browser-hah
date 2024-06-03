import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './lang'
import * as echarts from 'echarts';
import '@/assets/css/iconfont.css';
import 'tailwindcss/tailwind.css'
import '@/assets/font/font.css';

Vue.prototype.$echarts = echarts

Vue.use(router)
Vue.use(ElementUI)
Vue.config.productionTip = false


// import globalString from './lang/global';
// Vue.prototype.globalString = globalString
// import staffapi from './request/staffapi';
// Vue.prototype.$staffapi = staffapi;


new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')