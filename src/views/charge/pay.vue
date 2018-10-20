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
</div>
</template>

<script>

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

</style>
