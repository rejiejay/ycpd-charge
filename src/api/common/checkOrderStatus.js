import config from "@/config/index";
import { Indicator } from 'mint-ui';

/**
 * 查询充电状态
 * @param {string} StartChargeSeq 充电订单号 MA5DM667XA00A11DE66DD42CB
 */
let checkOrderStatus = StartChargeSeq => new Promise((resolve, reject) => {
    // return resolve({
    //     code: 200,
    //     data: {
    //         ConnectorID: "180100075501110001_1",
    //         ConnectorStatus: 3,
    //         CurrentA: 0,
    //         CurrentB: 0,
    //         CurrentC: 0,
    //         ElecMoney: 0,
    //         EndTime: "2018-10-22",
    //         SeviceMoney: 0,
    //         Soc: 0,
    //         StartChargeSeq: "MA5DM667XA00A11DE66DD42CB",
    //         StartChargeSeqStat: 2,
    //         StartTime: "2018-10-22",
    //         TotalMoney: 0.38,
    //         TotalPower: 0.29,
    //         VoltageA: 0,
    //         VoltageB: 0,
    //         VoltageC: 0,
    //     },
    //     msg: "success",
    // });

    let requestReason = '查询充电状态';
    Indicator.open('正在加载数据...'); // 弹出加载框
    $.ajax({
        url: `${config.url.originJAVA}/rjhl/v1/queryChargeStatus`,
        type: "post",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            StartChargeSeq: StartChargeSeq,
        }),
        success(res) {
            Indicator.close(); // 关闭加载框
            resolve(res);
        },
        error(error) {
            Indicator.close(); // 关闭加载框
            console.error(error);
            reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
        }
    });
})

export default checkOrderStatus
