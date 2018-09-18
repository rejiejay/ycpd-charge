// 生产环境配置
module.exports = {

    url: {
        // 请求源
        origin: '', // 生产环境用绝对定位就好

        // 图片的请求源地址 (将来可能会有变动) 
        picture: '', // 生产环境用绝对定位就好

        // 初始化微信JS-SDK
        getWxConfig: 'http://picc.hotgz.com/wx/apiHandler.ashx',
    }
};
