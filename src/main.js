import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
// 导入饿了么 ui
import ElementUI from 'element-ui';
// 导入饿了么 的样式
import 'element-ui/lib/theme-chalk/index.css';
// 注册一下
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
router,
  render: h => h(App),
}).$mount('#app')
