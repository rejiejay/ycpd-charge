import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/index',
        alias: ['/list', '/'],
        name: 'list',
        component: () => import('@/views/list/index'),
        meta: { title: '充电站列表' },
    }, {
        path: '/list/detail/:id',
        name: 'list-detail',
        component: () => import('@/views/list/detail'),
        meta: { title: '充电站详情' },
    },

    // 全景地图
    {
        path: '/map/fullview',
        name: 'fullview-map',
        component: () => import('@/views/map/fullview'),
        meta: { title: '充电站详情' },
    },

    // 启动充电 （扫码充电）
    {
        path: '/launch/:pageState',
        name: 'launch',
        component: () => import('@/views/charge/launch'),
        meta: { title: '启动充电' },
    }, {
        path: '/process/:pageState',
        name: 'process',
        component: () => import('@/views/charge/process'),
        meta: { title: '充电中' },
    }, {
        path: '/pay',
        name: 'pay-select',
        component: () => import('@/views/charge/pay'),
        meta: { title: '启动充电' },
    },

    // 充电记录
    {
        path: '/order/list',
        name: 'order-list',
        component: () => import('@/views/order/list'),
        meta: { title: '充电记录' },
    }, {
        path: '/order/detail/:id',
        name: 'order-result',
        component: () => import('@/views/order/detail'),
        meta: { title: '充电详情' },
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
