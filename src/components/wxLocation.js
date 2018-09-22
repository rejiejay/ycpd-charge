import config from "./../config/index";

/**
 * 定位类
 */
var wxLocation = {
    /**
     * 初始化微信JS-SDK
     * @param {Array} jsApiList
     * @return {Promise} resolve(ture) reject(error)
     */
    initJSSDK: function initJSSDK(jsApiList) {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _this.getWxConfig() // 获取权限验证配置信息
            .then(function (wxConfig) {

                wx.ready(function () {
                    // 注册 配置成功的事件
                    resolve(true);
                });

                wx.error(function (res) {
                    // 注册 配置失败的事件
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
            }, function (error) {
                reject(error);
            });
        });
    },

    /**
     * 获取权限验证配置信息
     * @param {methods} GET
     * @param {contentType} json application/json; charset=utf-8
     * @return {Promise} resolve({) reject(error)
     */
    getWxConfig: function getWxConfig() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: config.url.getWxConfig + '?action=WxConfig&url=' + (window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? encodeURIComponent(window.location.href.split('#')[0]) : encodeURIComponent(window.location.href)),
                type: "get",
                success: function success(wxConfig) {
                    resolve(wxConfig);
                },
                error: function error(error) {
                    reject('向服务器获取权限验证配置信息发生错误!, 原因: ' + error);
                }
            });
        });
    },

    /**
     * 初始化
     * @return {object} { longitude: longitude, latitude: latitude }
     */
    init: function init() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _this.initJSSDK(['getLocation', 'openLocation']).then(function (succeed) {
                wx.getLocation({
                    type: 'wgs84',

                    success: function success(res) {
                        resolve({
                            longitude: res.longitude,
                            latitude: res.latitude
                        });
                    },

                    fail: function fail(res) {
                        reject("获取地理位置信息失败：" + res.errMsg);
                    },

                    cancel: function cancel() {
                        reject("获取地理位置信息被取消");
                    }
                });
            }, function (error) {
                reject(error);
            });
        });
	},
	
    /**
     * 根据定位获取所在城市名称
     * @param {Object} position longitude latitude
     * @return {string} 城市名称
     */
	getCityName: function getCityName(position) {
		return new Promise(function (resolve, reject) {
			/**
			 * 剪切掉匹配到文字的后半段部分
			 * @param {String} string 裁剪前的文字
			 * @param {String} match 要裁剪匹配的文字
			 * @return {String} 裁剪后的文字
			 */
			function sliceLastIndexOfBy (string, match) {
				var stringOfMatch = string.indexOf(match);
				if (stringOfMatch !== -1) {
					return string.slice(0, stringOfMatch);
				} else {
					return string
				}
			}

			$.ajax({
				url: `http://api.map.baidu.com/geocoder/v2/?ak=enYTT6LMF8UAQGe9xmiOKGsw&callback=renderReverse&location=${position.latitude},${position.longitude}&output=json&pois=1`,
				type: "get",
				dataType: "jsonp",
				jsonp: "callback",
				success(data) {
					if (data.status === 0) {
						resolve(sliceLastIndexOfBy(data.result.addressComponent.city, '市'));
					} else {
						reject('成功发起请求获取所在城市名称, 但是请求数据有误. 原因:' + error);
					}
				},
				error(error) {
					reject('请求获取所在城市名称失败. 原因:' + error);
				}
			});
		})
	},
}

export default wxLocation
