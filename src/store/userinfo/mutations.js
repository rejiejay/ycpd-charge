/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 */
export default {
    /**
     * 初始化 微信 用户 openid
     */
    initOpenid (states, openid) {
        states.openid = openid;
    },

    /**
     * 初始化 养车频道 用户 customerid
     */
    initCustomerid (states, customerid) {
        states.customerid = customerid;
    },

    /**
     * 初始化 车辆 id
     */
    initCarid (states, carid) {
        states.carid = carid;
    },
}
