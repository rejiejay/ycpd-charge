/**
 * 单一状态树 唯一数据源 (SSOT)
 */

let state = {
    openid: false, // 微信对应用户身份的 openid   默认为false
};

/**
 * 测试环境 state 
 */
if (process.env.NODE_ENV === 'development') {
    // state.openid = 'oI0FV0pK5sqCnE_LBBXb6sxdROwg'
}

export default state
