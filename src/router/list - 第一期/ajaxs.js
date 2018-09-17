import config from './../../config/index';

const ajaxs = {
    /**
     * 获取充电桩列表
     * @param {String || Number} longitude 经度
     * @param {String || Number} latitude 纬度
     * @param {Number} namekey 名称关键字筛选 非必填
     * @param {Number} orderType 排序方式 非必填 0 : 是距离排序  1 : 电费价格排序
     * @param {Number} pageIndex 显示的页码 非必填 默认 1
     * @param {Number} pageSize 每页显示的数量 非必填 默认 20
     */
    GetStationList: (param) => new Promise((resolve, reject) => {
        // resolve({
        //     Code: 200,
        //     Data: [
        //         {
        //             "StationName": "合肥外商俱乐部充电站",
        //             "Address": "安徽省-合肥市-蜀山区-合肥高新开发区科学大道83号合肥外商俱乐部酒店",
        //             "StationLat": "31.839111",
        //             "StationLng": "117.204031",
        //             "distance": 14.57,
        //             "SlowChargeCount": 0,
        //             "FastChargeCount": 10,
        //             "SlowChargeCountOff": 0,
        //             "FastChargeCountOff": 9,
        //             "IsOff": "1"
        //         }
        //     ],
        //     Authorization: "",
        //     Msg: ""
        // });
        $.ajax({
            url: `${config.url.origin}/Charge/GetStationList?${param}`,
            type: "GET",
            success(val) {
                if (val.Code === 200) {
                    resolve(val);
                } else {
                    reject(`获取充电桩列表成功, 但是数据有误! 原因: ${val.Msg}`);
                }
            },
            error(error) {
                reject(`向服务器获取充电桩列表发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 获取充电桩详情
     * @param {Number} id 充电桩的id
     */
    GetStationById: (id) => new Promise((resolve, reject) => {
        // resolve({
        //     "Code": 200,
        //     "Data": {
        //         "StationID": "55BFD54BB32B4B62B30C",
        //         "StationName": "子客户场站test",
        //         "Address": "安徽省_合肥市_瑶海区-万达广场",
        //         "StationLng": "117.350326",
        //         "StationLat": "31.877353",
        //         "ConnectorInfos": [{
        //             "ConnectorID": "065500300",
        //             "Power": 60.0,
        //             "Status": 2
        //         }, {
        //             "ConnectorID": "065500301",
        //             "Power": 60.0,
        //             "Status": 1
        //         }]
        //     },
        //     "Authorization": "",
        //     "Msg": ""
        // });
        $.ajax({
            url: `${config.url.origin}/Charge/GetStationById?id=${id}`,
            type: "GET",
            success(val) {
                if (val.Code === 200) {
                    resolve(val.Data);
                } else {
                    reject(`获取充电桩详情成功, 但是数据有误! 原因: ${val.Msg}`);
                }
            },
            error(error) {
                reject(`向服务器获取充电桩详情发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}

export default ajaxs;
