/**
 * 单一状态树 唯一数据源 (SSOT)
 */
const state = {
}

/**
 * store 中的 state 中派生出一些状态
 * 目标是保持 state 的纯净
 */
const getters = {
    // /**
    //  * 获取 用户信息
    //  */
    // getAgentInfo(states) {
    //     return states.agentInfo;
    // },
}

/**
 * Action 类似于 mutation
 * Action 可以包含任意异步操作。
 */
const actions = {
    // /**
    //  * 请求初始化 用户信息
    //  */
    // initCustomerDetails({ commit, state }, param) {
    //     commit('initCustomerDetails', param);
    // },
}

/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 */
const mutations = {
    // /**
    //  * 初始化 用户信息 到state
    //  */
    // initAgentInfo (states, param) {
    //     states.agentInfo = param;
    // },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}