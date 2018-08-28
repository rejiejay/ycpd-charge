import config from './../../config/index';

const ajaxs = {
    /**
     * 获取充电桩列表
     */
    GetStationList: () => new Promise((resolve, reject) => {
        // resolve({
        //     Code: 200,
        //     Data: [
        //         {
        //             StationName: "合肥高新区祥源城充电站test",
        //             Address: "安徽省-合肥市-蜀山区-高新区创新大道与云飞路交口",
        //             StationLat: "31.838185",
        //             StationLng: "117.130569",
        //             distance: 21.32,
        //             rowid: 1
        //         }
        //     ],
        //     Authorization: "",
        //     Msg: ""
        // });
        $.ajax({
            url: `${config.url}/Charge/GetStationList`,
            type: "get",
            success(val) {
                console.log('获取充电桩列表', val);
                resolve(val);
            },
            error(error) {
                reject(`向服务器获取充电桩列表发生错误!, 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}

export default ajaxs;
