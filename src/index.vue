<template>
    <router-view/>
</template>

<script>

import loadPageVar from '@/utils/loadPageVar';

export default {
    name: 'Index',

    // /**
    //  * 初始化全局页面需要的数据
    //  * openid 微信唯一标识
    //  * CarNo 车主车牌号
    //  * CustomerID 车主车牌号
    //  */
    // mounted: function () {
    //     // 判断参数是否携带进来，否则报错
    //     let openid = loadPageVar(openid);
    //     let CarNo = loadPageVar(CarNo);
    //     let CustomerID = loadPageVar(CustomerID);
    //     if (openid && CarNo && CustomerID) {
    //         window.localStorage.setItem('ycpd_charge_openid', openid);
    //         window.localStorage.setItem('ycpd_charge_carno', CarNo);
    //         window.localStorage.setItem('ycpd_charge_customerid', CustomerID);
    //     } else {
    //         location.hostname === 'localhost' ? '本地环境就别给我BB' : console.error(`页面初始化参数不完整${openid}${CarNo}${CustomerID}`);
    //     }
    // },
}

</script>

