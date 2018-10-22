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

    <!-- 描述 -->
    <div class="describe flex-center">
        <div class="describe-content">
            <div class="describe-accomplish">
                <span>充满时间:</span>
                {{accomplishTime}}分钟
            </div>
            <div class="describe-electricityFee">
                <span>费&emsp;&emsp;用:</span>
                {{electricityFee}}元
            </div>
            <div class="describe-power">
                <span>电&emsp;&emsp;量:</span>
                {{electricityPower}}度
            </div>
        </div>
    </div>

    <!-- 提示信息 -->
    <div class="tip flex-column-center">
        <div class="tip-describe" v-if="pageState === 'connectFailed'">充电桩通信延迟，这不影响您正常充电</div>
        <div class="tip-describe" v-if="pageState === 'connectFailed'">结束充电后您即可离场，订单信息稍后将推送给您</div>
        <div class="tip-describe" v-if="pageState === 'finished'">停止充电通信失败...请联系场站管理人员处理</div>
        <div class="tip-describe" v-if="pageState === 'finished'">订单信息稍后将推送给您</div>
    </div>

    <!-- 按钮 -->
    <div class="submit flex-center">
        <div class="submit-content" v-if="pageState === 'finishing'">正在结束充电...</div>
        <div class="submit-content" v-else>手动结束充电</div>
    </div>

    <!-- 底部提示信息 -->
    <div class="tip-2 flex-column-center">
        <div class="tip-2-content" v-if="pageState === 'finishing'">结束充电大约需要2分钟，请耐心等候</div>
        <div class="tip-2-content" v-else>电池充满后会自动结束充电</div>
    </div>
</div>
</template>

<script>

// 请求类
import ajaxs from "@/api/charge/process";

// 组件类
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

            accomplishTime: '90', // 充满时间(分钟)

            electricityPower: '55', // 电量(度)
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

        this.initPageData(); // 初始化页面数据
    },

    destroyed: function () {
        if (window.setTimeId) {
            this.breakChargingTime();
        }
    },

    methods: {
        /**
         * 初始化页面数据
         */
        initPageData: function initPageData() {
            let query = this.$route.query;
            
            
        },

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

// 描述
.describe {
    font-size: 14px;
    color: @black1;

    .describe-content > div {
        padding: 3.5px 0px;
    }

    span {
        padding-right: 5px;
        color: @black3;
    }
}

// 提示信息
.tip {
    padding-top: 15px;
    font-size: 12px;
    color: #FF8D18;

    .tip-describe {
        padding-bottom: 2.5px;
    }
}


// 按钮
.submit {
    padding-top: 25px;

    .submit-content {
        width: 200px;
        height: 45px;
        line-height: 45px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: #AAAAAA;
    }
}

// 底部提示信息
.tip-2 {
    padding-top: 15px;
    font-size: 12px;
    color: @black3;
}

</style>
