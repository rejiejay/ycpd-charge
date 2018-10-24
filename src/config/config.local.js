// 测试环境配置
module.exports = {

    url: {
        // 请求源
        origin: 'http://api.demo.hotgz.com',

        // java 那边的请求源
        originJAVA: 'http://120.79.36.217:8080/ycpd-charging-bizweb',

        // 图片的请求源地址 (将来可能会有变动)
        picture: 'http://api.demo.hotgz.com', 

        // 初始化微信JS-SDK
        getWxConfig: 'http://store.demo.ichebaoyang.com/wx/apiHandler.ashx',
    }
};
