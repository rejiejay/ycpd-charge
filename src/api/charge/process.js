import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 启动充电
     */
    startCharging: () => new Promise((resolve, reject) => {
        return resolve({
            code: 200,
            data: {
                ConnectorID: "180100075501110001_1",
                StartChargeSeq: "MA5DM667XA00A11DE66DD42CB",
                StartChargeSeqStat: 1,
                SuccStat: 0,
            },
            msg: "success",
        });

        let requestReason = '启动充电';
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originJAVA}/rjhl/v1/startCharge`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                CustomerID: window.localStorage.ycpd_charge_customerid,

                OperatorID: window.localStorage.ycpd_charge_operatorid,
                ConnectorID: window.localStorage.ycpd_charge_connectorid,

                // OperatorID: window.localStorage.ycpd_charge_operatorid, // 暂时写死
                // ConnectorID: '180100075501110001_1',
                QrCode: 180100075501110001, // 暂时写死
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
                // if (res.code === 200) {
                //     resolve(res.data);
                // } else {
                //     console.error(res);
                //     reject(`${requestReason}数据有误! 原因: ${res.msg}`);
                // }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
