import config from "@/config/index";
import { Indicator } from 'mint-ui';

/**
 * 获取 订单详情
 */
let queryChargeRecordDetail = StartChargeSeq => new Promise((resolve, reject) => {
    // return resolve({
    //     code: 200,
    //     data: {
    //         ConnectorID: "180100075501110001_1",
    //         StartChargeSeq: "MA5DM667XA00A11DE66DD42CB",
    //         StartChargeSeqStat: 1,
    //         SuccStat: 0,
    //     },
    //     msg: "success",
    // });

    let requestReason = '订单详情';
    Indicator.open('正在加载数据...'); // 弹出加载框
    $.ajax({
        url: `${config.url.originJAVA}/ycpd/v1/QueryOrder/${StartChargeSeq}`,
        xhrFields: {
            withCredentials: true
        },
        type: "GET",
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
});

export default queryChargeRecordDetail
