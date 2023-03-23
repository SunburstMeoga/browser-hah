import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './lang/index'

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

Vue.use(router)

Vue.use(ElementUI)


Vue.config.productionTip = false


new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')