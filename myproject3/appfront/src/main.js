import Vue from 'vue'
import Router from 'vue-router' 
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VCharts from 'v-charts'

import VueResource from 'vue-resource'

//Vue.config.productionTip = false

Vue.use(VueResource)


Vue.prototype.$echarts = echarts
Vue.use(Router)  
Vue.use(ElementUI)
Vue.use(VCharts)

 const router = new Router({
  routes
}); 

Vue.config.productionTip = false

Vue.prototype.$goRoute = function (index,text) {
  this.$router.push({path:index, query:{pk_refinfo:text,value: (new Date())}})
}

/*
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) 
*/ 

new Vue({ 
  router,  
  render: h => h(App)
}).$mount('#app') 
