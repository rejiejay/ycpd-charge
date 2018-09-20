<!-- 充电中 -->
<template>
<div class="process" id="process">
    <!-- 充电枪的 icon -->
    <div class="central">
        <div class="central-content flex-center" :style="'height: ' + (clientWidth - 60) + 'px;'">
            <div class="central-main">
                <div class="central-main-title">{{stationName}}</div>
                <div class="central-main-gunName">{{gunName}}</div>
                <div class="central-main-price">{{electricityFee}}元/度(含服务费{{serviceFee}}元)</div>

                <div class="central-main-progress flex-center">
                    <radial-progress-bar 
                        :diameter="130"
                        :completed-steps="chargingPercentage"
                        :total-steps="100"
                        :strokeWidth="8"
                        startColor="#00cc44"
                        stopColor="#00cc44"
                        innerStrokeColor="#dbffdd"
                    >
                        <div class="progress-radial-content progress-radial-percentage">{{chargingPercentage}}<span>%</span></div>
                        <div class="progress-radial-content progress-radial-describe" :style="pageState === 'connectFailed' ? 'color: #FF8D18': ''">{{pageState === 'connectFailed' ? '连接断开': '充电中'}}</div>
                        <div class="progress-radial-content" :style="pageState === 'connectFailed' ? 'color: #FF8D18': ''">{{chargingTimehhMMss}}</div>
                    </radial-progress-bar>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import RadialProgressBar from '@/components/RadialProgressBar'; // 充电百分比的圈圈

export default {
    name: 'process',

    components: {
        RadialProgressBar, // 充电百分比的圈圈
    },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            /**
             * 页面状态
             * @param {string} normal 正常充电
             * @param {string} connectFailed 连接失败
             * @param {string} finishing 结束中
             * @param {string} finished 结束失败
             */
            pageState: 'normal',

            stationName: '深圳信挚工业一期充电站', // 充电站名称

            gunName: '1号枪', // 充电枪名
            
            electricityFee: '0.9', // 电费
            
            serviceFee: '0.6', // 服务费

            chargingPercentage: 74, // 充电百分比

            chargingTimestamp: 0, // 充电时间戳
        }
    },

    computed: {
        /**
         * 充电时间
         */
        chargingTimehhMMss: function () {
            // 01:01:01 = 3661000
            var myChargingTimestamp = this.chargingTimestamp;
            var HH = Math.floor(myChargingTimestamp / 3600000);
            var MM = Math.floor((myChargingTimestamp - (HH * 3600000)) / 60000); // 3661000 - 3600000 / 60000
            var SS = Math.floor((myChargingTimestamp - ((HH * 3600000) + (MM * 60000))) / 1000); // 3661000 - 3600000 / 60000

            HH = HH < 10 ? `0${HH}` : `${HH}`;
            MM = MM < 10 ? `0${MM}` : `${MM}`;
            SS = SS < 10 ? `0${SS}` : `${SS}`;

            return `${HH}:${MM}:${SS}`
        }
    },

    mounted: function () {
        // 初始化页面状态
        this.pageState = this.$route.params.pageState;
    },

    destroyed: function () {
        if (window.setTimeId) {
            this.breakChargingTime();
        }
    },

    methods: {
        /**
         * 开始充电计时
         */
        startChargingTime() {
            window.setTimeId = window.setInterval(() => {
                this.chargingTimestamp += 1000;
            }, 1000);
        },

        /**
         * 充电断开
         */
        breakChargingTime() {
            window.clearInterval(window.setTimeId);
            window.setTimeId = null;
        }
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.process {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 充电过程 icon 中心部分
.central {
    padding: 30px;
    font-size: 14px;
    color: @black3;
    text-align: center;

    // 框架
    .central-content {
        border-radius: 10px;
        background: #fff;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);
    }

    // 标题
    .central-main-title {
        font-weight: bold;
        font-size: 16px;
        color: @black1;
    }

    // 充电枪
    .central-main-gunName {
        padding: 10px 0px;
    }

    // 费用
    .central-main-price {
        padding-bottom: 25px;
    }

    // 充电百分比
    .central-main-progress {
        color: #00CC44;

        .progress-radial-content {
            position: relative;
            top: 10px;
        }

        .progress-radial-percentage {
            font-family: 'SFUIText-Regular';
            font-weight: 400;
            font-size: 48px;

            span {
                font-size: 16px;
            }
        }

        .progress-radial-describe {
            font-size: 12px;
            padding-top: 7.5px;
        }
    }

}

</style>
