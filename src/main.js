import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index';
import router from './router';
import Index from './index.vue';

import 'mint-ui/lib/style.min.css'; // mint-ui 样式
import "./components/css/index.less"; // 顶层样式

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') { // 如果是测试环境, 则生成控制台
    require.ensure([], require => { // 异步加载控制台
        let VConsole = require('vconsole');

        let defaultPlugins = ['system', 'network', 'element', 'storage'];
        if (window.location.host === 'localhost:8000') { // 本地测试不需要 system 输出
            defaultPlugins = ['network', 'element', 'storage']
        }
        new VConsole({
            defaultPlugins: defaultPlugins
        });
    });
}

Vue.use(Vuex);

window.myVue = new Vue({
    el: '#app',
    store: store,
    components: { Index },
    template: '<Index/>',
    router,
});
