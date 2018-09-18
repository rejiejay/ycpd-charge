import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index';
import router from './router';
import Index from './index.vue';

import 'mint-ui/lib/style.min.css'; // mint-ui 样式
import "./components/css/index.less"; // 顶层样式

Vue.config.productionTip = false;

Vue.use(Vuex);

window.myVue = new Vue({
  el: '#app',
  store: store,
  components: { Index },
  template: '<Index/>',
  router,
});
