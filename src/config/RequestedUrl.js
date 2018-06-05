// 真实环境请求的链接
let RequestedUrl = {
    /**
     * 用户信息 (openid)
     * @param {methods} POST
     * @param {contentType} json application/json; charset=utf-8
     * @param {contentType} text text/html; charset=utf-8
     * @param {string} OpenID openid
     */
    getUserInfor: 'http://ycpdapi.hotgz.com/Customer/GetCustomerInfoByOpenID',
}

/**
 * 测试环境 请求
 */
if (process.env.NODE_ENV === 'development') {
    RequestedUrl.getUserInfor = 'http://api.demo.hotgz.com/Customer/GetCustomerInfoByOpenID';
}

export default RequestedUrl
