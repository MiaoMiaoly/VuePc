import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/main/index',
    name: '网站首页',
    component: resolve => require(['@/modules/Index.vue'], resolve),
  },

  {
    path: '/main',
    name: 'MainMenu',
    component: resolve => require(['@/modules/MainMenu.vue'], resolve),
    children: [
      {
        path: '/index',
        name: '网站首页',
        component: resolve => require(['@/modules/Index.vue'], resolve)
      },
      {
        path: '/case',
        name: '公司案例',
        component: resolve => require(['@/modules/CompanyCase.vue'], resolve)
      },
      {
        path: '/album',
        name: '公司相册',
        component: resolve => require(['@/modules/CompanyAlbum.vue'], resolve)
      },
      {
        path: '/blog',
        name: '团队博客',
        component: resolve => require(['@/modules/TeamBlog.vue'], resolve)
      },
      {
        path: '/aboutus',
        name: '关于我们',
        component: resolve => require(['@/modules/AboutUs.vue'], resolve)
      },
      // {
      //   path: '/map',
      //   name: '地图测试',
      //   component: resolve => require(['@/modules/MapTest.vue'], resolve)
      // },
    ]
  },
 
]
const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})

export default router