import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/index',
    alias: ['/list', '/'],
    name: 'list',
    component: () => import('@/router/list/index'), // 列表
    meta: { title: '充电桩' },
  }, {
    path: '/list/detail',
    name: 'listDetail',
    component: () => import('@/router/list/detail'), // 列表详情
    meta: { title: '列表详情' },
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
