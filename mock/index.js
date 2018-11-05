const Mock = require('./mock');//mockjs 导入依赖模块
// 返回一个函数
module.exports = function(app){
    // 监听http请求
    app.get('/user/userinfo', function (rep, res) {
        // 每次响应请求时读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(
            {
                "error": 0,
                "data": {
                    "userid": "@id()", // 随机生成用户id
                    "username": "@cname()", // 随机生成中文名字
                    "date": "@date()", // 随机生成日期
                    "avatar": "@image('200x200','red','#fff','avatar')", // 生成图片
                    "description": "@paragraph()", // 描述
                    "ip": "@ip()", // IP地址
                    "email": "@email()" // email
                }
            }
        ));
    });
}
