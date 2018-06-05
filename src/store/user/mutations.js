/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 */
export default {
    initOpenid (states, openid) { // openid
        states.openid = openid;
    },
}
