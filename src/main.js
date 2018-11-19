// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
// import VueAMap from 'vue-amap';
// Vue.use(VueAMap);
Vue.use(animate)
Vue.use(ElementUI)
Vue.config.productionTip = false
// VueAMap.initAMapApiLoader({
//   key: '203d2845e6003e8f772dd6e9da907236',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geocoder'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4',
//   uiVersion: '1.0.11' // 版本号
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
