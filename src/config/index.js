import common from './config.default.js';
import local from './config.local.js';
import prod from './config.prod.js';
import mock from './config.mock.js';

let main = () => {
    let config = common; // 共同配置
    let plugin = {};

    // 测试环境
    if ( window.location.hostname === 'localhost' || window.location.host === 'store.demo.ichebaoyang.com' || process.env.NODE_ENV === 'development' ) {
        // plugin = mock; // 使用moke测试数据
        plugin = local;
    } else {
        plugin = prod;
    }

    // 初始化共同配置
    for (let key in plugin) { 
        config[key] = plugin[key];
    }

    return config;
}

export default main();
