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
    name: 'listDetail1',
    component: () => import('@/router/list/detail'), // 列表详情
    meta: { title: '列表详情' },
  },
  //  { // 第一版的UI
  //   path: '/index2',
  //   name: 'list',
  //   component: () => import('@/router/list1/index'), // 列表
  //   meta: { title: '充电桩' },
  // }, {
  //   path: '/list2/detail',
  //   name: 'listDetail1',
  //   component: () => import('@/router/list1/detail'), // 列表详情
  //   meta: { title: '列表详情' },
  // },
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
