<!-- 启动充电——预充电费 -->
<template>
<div class="pay-select">

    <!-- 选中面额 -->
    <div class="pay-select-amount">
        <div class="select-amount-row flex-start">
            <div class="select-amount-item amount-item-left" :class="{'amount-item-selected': out_trade_no === '5'}" @click="selectedAmount('5')" :style="`width: ${(clientWidth - 45) / 2}px;`"><span>5</span>元</div>
            <div class="select-amount-item" :class="{'amount-item-selected': out_trade_no === '10'}" @click="selectedAmount('10')" :style="`width: ${(clientWidth - 45) / 2}px;`"><span>10</span>元</div>
        </div>

        <div class="select-amount-row flex-start">
            <div class="select-amount-item amount-item-left" :class="{'amount-item-selected': out_trade_no === '20'}" @click="selectedAmount('20')" :style="`width: ${(clientWidth - 45) / 2}px;`"><span>20</span>元</div>
            <div class="select-amount-item" :class="{'amount-item-selected': out_trade_no === '30'}" @click="selectedAmount('30')" :style="`width: ${(clientWidth - 45) / 2}px;`"><span>30</span>元</div>
        </div>

        <div class="select-amount-row flex-start">
            <div class="select-amount-item amount-item-left" :class="{'amount-item-selected': out_trade_no === '50'}" @click="selectedAmount('50')" :style="`width: ${(clientWidth - 45) / 2}px;`"><span>50</span>元</div>
            <div class="select-amount-item" :class="{'amount-item-selected': out_trade_no === '100'}" @click="selectedAmount('100')" :style="`width: ${(clientWidth - 45) / 2}px;`"><span>100</span>元</div>
        </div>
    </div>
    
    <!-- 支付方式 -->
    <div class="pay-way">
        <div class="pay-way-content">
            <div class="pay-way-title">支付方式</div>
            <div class="pay-way-item flex-start-center">
                <div class="way-item-main flex-start-center flex-rest">
                    <svg width="20" height="20" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-预充电费" transform="translate(-30.000000, -731.000000)" fill="#24AF41" fill-rule="nonzero"><g id="支付方式" transform="translate(0.000000, 618.000000)"><g id="icon" transform="translate(30.000000, 113.000000)"><path d="M15.2492925,25.1874927 C12.8550745,26.6337033 12.4999574,24.3759305 12.4999574,24.3759305 L9.49956762,16.7919483 C8.34488043,13.1879649 10.4986298,15.167066 10.4986298,15.167066 C10.4986298,15.167066 12.3466371,16.6812843 13.749293,17.6039402 C15.1510895,18.527065 16.7488624,17.8750339 16.7488625,17.8750339 L36.3652241,8.06757583 C32.7456939,3.18933503 26.7674534,0 19.9990178,0 C8.95331777,0 0,8.48796629 0,18.9590571 C0,24.98261 2.9644523,30.3425694 7.5826541,33.8167872 L6.74976371,39.0025669 C6.74976371,39.0025669 6.34351383,40.5163555 7.75066188,39.8141292 C8.70929441,39.3358871 11.1533171,37.6194423 12.6083949,36.5763567 C14.9710136,37.4663711 17.475299,37.9211062 19.9999943,37.9185438 C31.044835,37.9185438 39.9999496,29.4305775 39.9999496,18.9594868 C39.9999496,15.9266361 39.2452623,13.0622228 37.9088174,10.5195282 C31.6585848,14.5924177 17.1221827,24.0581962 15.2492925,25.1874927 Z" id="icon_wechat"></path></g></g></g></g></svg>
                    <span>微信支付</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-预充电费" transform="translate(-688.000000, -734.000000)"><g id="支付方式" transform="translate(0.000000, 618.000000)"><g id="icon" transform="translate(30.000000, 113.000000)"><circle id="Oval-2-Copy" fill="#5594FF" cx="674" cy="19" r="16"></circle><path d="M681.292893,13.2928932 C681.683418,12.9023689 682.316582,12.9023689 682.707107,13.2928932 C683.097631,13.6834175 683.097631,14.3165825 682.707107,14.7071068 L672.707107,24.7071068 C672.316582,25.0976311 671.683418,25.0976311 671.292893,24.7071068 L666.292893,19.7071068 C665.902369,19.3165825 665.902369,18.6834175 666.292893,18.2928932 C666.683418,17.9023689 667.316582,17.9023689 667.707107,18.2928932 L672,22.5857864 L681.292893,13.2928932 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
            </div>
        </div>
    </div>
    
    <!-- 立即充值 -->
    <div class="pay-submit">
        <div class="pay-submit-content" @click="paySubmit">立即充值</div>
    </div>
    
    <!-- 提示信息 -->
    <div class="pay-tip">
        <div class="pay-tip-row1">充电结束后，将扣除本次充电费用，剩余金额原路退回。</div>
        <div class="pay-tip-row2">• 预充费用使用完后，设备将自动停止充电</div>
        <div class="pay-tip-row2">• 电池充满后，设备将自动停止充电</div>
    </div>
</div>
</template>

<script>

// 请求类
import ajaxs from "@/api/charge/pay";

export default {
    name: 'pay-select',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 默认 50元
             */
            out_trade_no: '50', // 选中的金额
        }
    },

    mounted: function () { },

    methods: {
        /**
         * 选中金额
         */
        selectedAmount: function selectedAmount(amount) {
            this.out_trade_no = amount;
        },

        /**
         * 立即充值
         */
        paySubmit: function paySubmit(amount) {
            ajaxs.WxPay(this.out_trade_no)
            .then(
                res => {
                    let myTotal_fee = amount;
                    // 判断是否小于1，因为因为小于1就有小数点
                    if (res.total_fee < 1) {
                        myTotal_fee = res.total_fee;
                    } else {
                        if (/.*\..*/.test(res.total_fee)) {
                            myTotal_fee = res.total_fee;
                        } else {
                            myTotal_fee = `${res.total_fee}.0`;
                        }
                    }

                    window.location.href = `http://picc.hotgz.com/WxPay.aspx?project=${res.project}&out_trade_no=${res.out_trade_no}&total_fee=${myTotal_fee}&body=${window.encodeURIComponent('充电预付款')}&attach=${window.encodeURIComponent('充电预付款')}&returnurl=${window.encodeURIComponent(window.localStorage.ycpd_charge_returnurl)}&notifyurl=${window.encodeURIComponent(res.notifyurl)}&sign=${res.sign}`;
                }, error => {
                    alert(error);
                }
            )
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.pay-select {
    position: relative;
    width: 100%;
    font-size: 14px;
    min-height: 100%;
    color: @black2;
    background-color: #f1f1f1;
}

// 选中面额
.pay-select-amount {
    padding: 5px 15px 15px 15px;
    background: #fff;

    // 一行
    .select-amount-row {
        padding-top: 10px;
    }

    // 一个项
    .select-amount-item {
        line-height: 60px;
        border-radius: 5px;
        text-align: center;
        background-color: #F5F5F5;

        span {
            font-size: 24px;
            padding-right: 2.5px;
        }
    }

    // 坐标的项 右边距
    .amount-item-left {
        margin-right: 15px;
    }

    // 选中的项
    .amount-item-selected {
        color: #5594FF;
        background: #CEE0FF;
    }
}

// 支付方式
.pay-way {
    padding-top: 5px;

    .pay-way-content {
        background: #fff;
    }

    .pay-way-title {
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
        height: 45px;
        line-height: 45px;
        font-weight: bold;
    }

    .pay-way-item {
        padding: 0px 15px;
        height: 45px;

        .way-item-main span {
            padding-left: 7.5px;
        }
    }
}

// 立即充值
.pay-submit {
    padding: 35px 15px 15px 15px;

    .pay-submit-content {
        border-radius: 5px;
        line-height: 45px;
        text-align: center;
        color: #fff;
        background: #5594FF;
    }
}

// 提示信息
.pay-tip {
    padding: 0px 15px;
    font-size: 12px;

    .pay-tip-row1 {
        padding-bottom: 5px;
    }

    .pay-tip-row2 {
        padding-left: 2.5px;
        color: @black3;
    }
}

</style>
