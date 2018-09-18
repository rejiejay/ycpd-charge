/**
 * Created by rejiejay on 2018/03/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import userinfo from './userinfo';

export default new Vuex.Store({
    modules: {
        userinfo
    }
});
