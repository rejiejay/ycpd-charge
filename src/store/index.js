/**
 * Created by rejiejay on 2018/03/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './user';

export default new Vuex.Store({
    modules: {
        user
    }
});
