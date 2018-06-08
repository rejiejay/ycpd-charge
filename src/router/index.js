import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/index',
    alias: ['/home', '/'],
    name: 'home',
    component: () => import('@/router/home/index'), // 主页 首屏
    meta: { title: '充电桩' },
  }, {
    path: '/search/index',
    alias: ['/search'],
    name: 'search',
    component: () => import('@/router/search/index'), // 搜索
    meta: { title: '搜索' },
  },
];

let router = new Router({
  // mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) { // 路由发生变化修改页面 title
    document.title = to.meta.title;
  }

  next();
});

export default router;
