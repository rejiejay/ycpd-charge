import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 启动充电
     */
    startCharging: () => new Promise((resolve, reject) => {
        // return resolve({ // 启动成功的假数据
        //     code: 200,
        //     data: {
        //         ConnectorID: "180100075501110001_1",
        //         StartChargeSeq: "MA5DM667XA00A11DE66DD42CB",
        //         StartChargeSeqStat: 1,
        //         SuccStat: 0,
        //     },
        //     msg: "success",
        // });

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
                CustomerID: window.localStorage.ycpd_charge_customerid, // 使用真实数据

                OperatorID: window.localStorage.ycpd_charge_operatorid, // 使用真实数据

                // ConnectorID: window.localStorage.ycpd_charge_connectorid, // 使用真实数据

                ConnectorID: '180100075504110001_1', // 暂时写死 测试假数据

               //  QrCode: 180100075501110001, // 可以非必填
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
    }),

    /**
     * 查询 用户金额
     */
    checkMoney: () => new Promise((resolve, reject) => {
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

        let requestReason = '用户金额';
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originJAVA}/ycpd/v1/CheckMoney?OpenId=${window.localStorage.ycpd_charge_openid}&customerId=${window.localStorage.ycpd_charge_customerid}`,
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
    }),

    /**
     * 退款
     */
    outTradeMoney: () => new Promise((resolve, reject) => {
        // return resolve({ // 启动成功的假数据
        //     code: 200,
        //     data: {
        //         ConnectorID: "180100075501110001_1",
        //         StartChargeSeq: "MA5DM667XA00A11DE66DD42CB",
        //         StartChargeSeqStat: 1,
        //         SuccStat: 0,
        //     },
        //     msg: "success",
        // });

        let requestReason = '退款';
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originJAVA}/ycpd/v1/WxRefund`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                CustomerID: window.localStorage.ycpd_charge_customerid,
                CarNo: window.localStorage.ycpd_charge_carno,
                OpenID: window.localStorage.ycpd_charge_openid,
                Out_trade_no: window.localStorage.ycpd_charge_out_trade_no,
                refund_fee: window.localStorage.ycpd_charge_refund_fee,
                Refund_desc: '养车频道充电退款',
                Project: window.localStorage.ycpd_charge_project,
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 200) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`${requestReason}数据有误! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
