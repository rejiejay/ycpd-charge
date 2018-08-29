let config = {
    // 获取权限验证配置信息
    getWxConfig: 'http://picc.hotgz.com/wx/apiHandler.ashx',
}

if ( // 测试环境
    window.location.hostname === 'localhost' ||
    window.location.host === 'store.demo.ichebaoyang.com' || 
    process.env.NODE_ENV === 'development'
) {
    // 获取权限验证配置信息
    config.getWxConfig = 'http://store.demo.ichebaoyang.com/wx/apiHandler.ashx';
}

function getWxConfig() {
    $.ajax({
        url: `${config.getWxConfig}?action=WxConfig&url=${encodeURIComponent(window.location.href)}`,
        type: "get",
        success(wxConfig) {
            resolve(wxConfig)
        },
        error(error) {
            reject(`向服务器获取权限验证配置信息发生错误!, 原因: ${error}`);
        }
    });
}

/**
 * 初始化微信JS-SDK
 * @param {Array} jsApiList
 * @return {Promise} resolve(ture) reject(error)
 */
let initJSSDK = function (jsApiList) {
    return new Promise((resolve, reject) => {
        getWxConfig() // 获取权限验证配置信息
        .then(
            wxConfig => {

                wx.ready(function () { // 注册 配置成功的事件
                    resolve(true);
                });

                wx.error(function (res) {	// 注册 配置失败的事件
                    reject('向服务器发起请求获取权限验证配置信息成功, 但是初始化配置信息失败, 原因: ' + JSON.stringify(res));
                });

                wx.config({ // 初始化配置信息
                    debug: false,
                    appId: wxConfig.appId,
                    timestamp: wxConfig.timestamp,
                    nonceStr: wxConfig.nonceStr,
                    signature: wxConfig.signature,
                    jsApiList: jsApiList
                });

                // 5秒超时
                setTimeout(function () {
                    reject('获取权限验证配置信息超时!');
                }, 5000);
            }, 
            error => reject(error)
        );
    });
}

export default initJSSDK;
