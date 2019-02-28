import Vue from 'vue'
import Router from 'vue-router' 
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VCharts from 'v-charts'

Vue.prototype.$echarts = echarts
Vue.use(Router)  
Vue.use(ElementUI)
Vue.use(VCharts)

const router = new Router({
  routes
});

Vue.config.productionTip = false

new Vue({ 
  router,  
  render: h => h(App)
}).$mount('#app')
