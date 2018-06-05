/**
 * Action 类似于 mutation
 * Action 可以包含任意异步操作。
 */
import RequestedUrl from './../../config/RequestedUrl';

let actions = {
    /**
     * 获取 用于交换 openid 的 code 方法
     * @param {string} param code
     */
    getOpenidCode: ({commit}, param) => {
        return new Promise((resolve, reject) => {
            fetch(`${RequestedUrl.getOpenidCode}?action=GetOpenID&code=${param}`, {
                'method': 'GET',
                'contentType': "application/json; charset=utf-8"
            }).then(
                response => response.json(),
                error => error
            ).then(val => {
                if (val && val.OpenID) {
                    resolve(val.OpenID);
                } else {
                    reject(`向服务器获用于交换 openid 的 code 有错误！ 原因:${JSON.stringify(val)}`);
                }
            })
            .catch(error => reject(`向服务器获用于交换 openid 的 code 发生错误！ 原因:${error}`));
        });
    },
}

export default actions
