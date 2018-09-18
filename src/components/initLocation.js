import initJSSDK from './initJSSDK';

/**
 * H5 定位
 * @return {Promise} resolve({
 *   longitude: longitude,
 *   latitude: latitude,
 * }) reject(error)
 */
let getHtml5Location = () => new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(

        // 成功获取
        succeed => resolve({
            longitude: succeed.coords.longitude,
            latitude: succeed.coords.latitude,
        }), 

        // 获取失败
        error => reject("H5获取定位信息异常, 原因：" + JSON.stringify(error)), 

        // 其他参数
        {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 60000
        }
    );
});
    
/**
 * 微信 定位
 * @return {Promise} resolve({
 *   longitude: longitude,
 *   latitude: latitude,
 * }) reject(error)
 */
let getWxLocation = () => new Promise((resolve, reject) => {
    // 初始化微信JS-SDK
    initJSSDK(['getLocation', 'openLocation'])
    .then(
        succeed => {
            wx.getLocation({
                type: 'wgs84',
        
                success(res) {
                    resolve({
                        longitude: res.longitude, // 经度
                        latitude: res.latitude, // 纬度
                    });
                },

                fail(res) {
                    reject("获取地理位置信息失败：" + res.errMsg);
                },

                cancel() {
                    reject("获取地理位置信息被取消");
                }
            });
            
            // 5秒超时
            setTimeout(function () {
                reject('获取地理位置信息超时!');
            }, 5000);
        }, 
        error => reject(error)
    )
});

/**
 * 初始化位置定位
 */
let initLocation = function () {
    return new Promise(function (resolveLocation, rejectLocation) {
        if (window.location.hostname === 'localhost') {
            // 本地环境是获取不了的, 直接返回一个测试数据
            return resolveLocation({
                longitude: 114.079429, // 经度
                latitude: 22.622513, // 纬度
            });
        }

        getWxLocation() // 微信定位
        .then(
            wxPosition => { // 微信定位成功
                resolveLocation(wxPosition); // 整个项目 返回成功
            }, 
            wxError => { // 微信定位失败
                getHtml5Location() // H5 定位
                .then(
                    position => {
                        resolveLocation(position); // 整个项目 返回成功
                    }, 
                    error => {
                        console.error(error);
                        rejectLocation(error); // 整个项目 返回失败
                    }
                );

            }
        )
    });
}

export default initLocation;
