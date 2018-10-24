import config from "@/config/index";
import { Indicator } from 'mint-ui';

/**
 * 查询是否还存在未完成订单
 */
let queryCheckOrders = () => new Promise((resolve, reject) => {
    let requestReason = '查询是否还存在未完成订单';
    Indicator.open('正在加载数据...'); // 弹出加载框
    
    $.ajax({
        url: `${config.url.originJAVA}/ycpd/v1/CheckOrders/${window.localStorage.ycpd_charge_customerid}`,
        type: "GET",
        success(val) {
            Indicator.close(); // 关闭加载框
            resolve(val);
        },
        error(error) {
            Indicator.close(); // 关闭加载框
            console.error(error);
            reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
        }
    });
})

export default queryCheckOrders
