import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 启动充电
     */
    startCharging: () => new Promise((resolve, reject) => {
        let requestReason = '微信下单';
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originJAVA}/ycpd/v1/WxPay`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                CustomerID: window.localStorage.ycpd_charge_customerid,
                CustomerID: window.localStorage.ycpd_charge_customerid,
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
