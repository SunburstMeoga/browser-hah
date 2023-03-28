import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': require('./zh.js'),
        'en-US': require('./en.js')
    },
})
export default i18n