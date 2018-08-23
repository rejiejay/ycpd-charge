import common from './config.default.js';
import local from './config.local.js';
import prod from './config.prod.js';

let isProduction = false; // 是否生产环境

let main = () => {
    let config = common; // 共同配置
    let plugin = {};

    if (isProduction) { // 生产环境
        plugin = prod;
    } else {
        plugin = local;
    }

    for (let key in plugin) { // 配置
        config[key] = plugin[key];
    }

    return config;
}

module.exports = main();
