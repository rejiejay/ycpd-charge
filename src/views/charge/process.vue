<!-- 充电中 -->
<template>
<div class="process" id="process">
    <!-- 充电枪的 icon -->
    <div class="central">
        <div class="central-content flex-center" :style="'height: ' + (clientWidth - 60) + 'px;'">
            <div class="central-main">
                <div class="central-main-title">{{stationName}}</div>
                <div class="central-main-gunName">{{gunName}}</div>
                <div class="central-main-price" v-if="'暂不' === '显示'">{{electricityFee}}元/度(含服务费{{serviceFee}}元)</div>

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
                        <div class="progress-radial-content progress-radial-describe" :style="pageState === 'connectFailed' ? 'color: #FF8D18': ''">{{pageStateToNmae}}</div>
                        <div class="progress-radial-content" :style="pageState === 'connectFailed' ? 'color: #FF8D18': ''">{{chargingTimehhMMss}}</div>
                    </radial-progress-bar>
                </div>
            </div>
        </div>
    </div>

    <!-- 描述 -->
    <div class="describe flex-center">
        <div class="describe-content">
            <!-- <div class="describe-accomplish">
                <span>充满时间:</span>
                {{accomplishTime}}分钟
            </div> -->
            <div class="describe-electricityFee">
                <span>费&emsp;&emsp;用:</span>
                {{TotalMoney}}元（预存 ￥{{SaveMoney}}）
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

    <!-- 按钮-正常充电 -->
    <div class="submit flex-start-center" v-if="pageState === 'normal'">
        <div class="submit-refresh" @click="refreshChargingState" :class="{'submit-refreshing': refreshCount}" :style="`width: ${(clientWidth - 45) / 2}px;`">刷新<span style="padding-left: 5px;" v-if="refreshCount">{{refreshCount}}</span></div>
        <div class="submit-content" @click="stopCharging" :style="`width: ${(clientWidth - 45) / 2}px;`">手动结束充电</div>
    </div>

    <!-- 结束中 -->
    <div class="submit flex-center" v-if="pageState === 'finishing'">
        <div class="submit-refresh" @click="refreshFinishingState" :class="{'submit-refreshing': refreshCount}" :style="`width: ${(clientWidth - 45) / 2}px;`">刷新<span style="padding-left: 5px;" v-if="refreshCount">{{refreshCount}}</span></div>
        <div class="submit-content" :style="`width: ${(clientWidth - 45) / 2}px;`">正在结束...</div>
    </div>

    <!-- 按钮-结束失败 -->
    <div class="submit flex-start-center" v-if="pageState === 'finished'">
        <div class="submit-content" @click="stopCharging" :style="`width: ${(clientWidth - 45) / 2}px;`">手动结束充电</div>
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
import ajaxsCheckOrderStatus from "@/api/common/checkOrderStatus";
import ajaxsQueryChargeRecordDetail from "@/api/common/queryChargeRecordDetail";

// 组件类
import RadialProgressBar from '@/components/RadialProgressBar'; // 充电百分比的圈圈
import TimeConver from '@/utils/TimeConver';
import { MessageBox } from 'mint-ui';

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

            stationName: '正在加载...', // 充电站名称

            gunName: '正在加载...', // 充电枪名
            
            electricityFee: '正在加载...', // 电费
            
            serviceFee: '正在加载...', // 服务费

            chargingPercentage: 100, // 充电百分比

            chargingTimestamp: 0, // 充电时间戳

            accomplishTime: '正在加载...', // 充满时间(分钟)

            TotalMoney: '正在加载...', // 累计总金额

            SaveMoney: '正在加载...', // 预充金额

            electricityPower: '正在加载...', // 电量(度)

            isStopSuccessful: false, // 是否结束成功

            refreshCount: null, // 页面刷新倒计时
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
        },
        
        /**
         * 页面状态 转换为中文
         */
        pageStateToNmae: function pageStateToNmae() {
            if (this.pageState === 'normal') {
                return '充电中'
            }
            if (this.pageState === 'connectFailed') {
                return '连接失败'
            }
            if (this.pageState === 'finishing') {
                return '结束中'
            }
            if (this.pageState === 'finished') {
                return '结束失败'
            }
        },
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
        initPageData: function initPageData(isrefresh) {
            const _this = this;
            let query = this.$route.query;

            /**
             * 判断是否结束充电
             * 结束充电则不进行任何请求
             */
            if (this.isStopSuccessful) {
                return false;
            }
            
            ajaxsCheckOrderStatus(query.StartChargeSeq)
            .then(
                res => {
                    // 查询成功, 并且充电状态为 充电中的时候
                    if (res.code === 200 && res.data && res.data.StartChargeSeqStat === 2) {
                        _this.stationName = res.StationName; // 充电站名称

                        // 初始化枪名
                        if (res.data.ConnectorID && res.data.ConnectorID.split('_')[1]) {
                            _this.gunName = `${res.data.ConnectorID.split('_')[1]}号枪`; // 充电枪名
                        }

                        _this.electricityFee = res.data.ElecMoney; // 电费
                        _this.serviceFee = res.data.SeviceMoney; // 电费
                        _this.chargingPercentage = res.data.Soc; // 充电百分比

                        // 判断是否存在定时器，如果存在则不进行
                        if (!window.setTimeId) {
                            // 计算充电时间
                            _this.chargingTimestamp = new Date().getTime() - TimeConver.YYYYmmDDhhMMssToTimestamp(res.data.StartTime);
                            _this.startChargingTime();
                        }

                        _this.TotalMoney = res.data.TotalMoney; // 使用多少钱
                        _this.SaveMoney = res.data.SaveMoney; // 初始化预充金额
                        
                        _this.electricityPower = res.data.TotalPower; // 电量(度)

                    
                    // 如果查询到 充电状态为 充电结束的时候
                    } else if (res.code === 200 && res.data && res.data.StartChargeSeqStat === 3) {
                        _this.isStopSuccessful = true; // 设置为结束充电
                        // 跳转到充电结束页面
                        _this.jumpToRouter('/charge/finishing', { StartChargeSeq: res.data.StartChargeSeq });
                    } 

                    /**
                     * 刷新数据
                     * 先判断是不是手动刷新
                     * 手动刷新 - 不用循环执行
                     * 自动刷新 - 10秒循环调用
                     */
                    if (isrefresh !== 'isrefresh') {
                        window.setTimeout(() => {
                            _this.initPageData();
                        }, 10000);
                    }
                }, error => {
                    _this.pageState = 'connectFailed'; // 连接失败
                    alert(error);
                }
            );
        },

        /**
         * 刷新充电页面状态
         */
        refreshChargingState: function refreshChargingState() {
            const _this = this;

            // 如果存在倒计时 是不允许点击的
            if (this.refreshCount) {
                return false;
            }

            // 定时器倒计时 5 秒
            this.refreshCount = 6;
            for(var i = 0; i < 5; i++ ) {
                (function (i) { // 匿名函数自执行创建闭包
                    setTimeout(function() {
                        _this.refreshCount--;
                        if (i === 4) {
                            _this.refreshCount = 0;
                        }
                    }, i * 1000);
                })(i);
            }
            
            this.initPageData();
        },

        /**
         * 刷新结束页面状态
         */
        refreshFinishingState: function refreshFinishingState() {
            const _this = this;

            // 如果存在倒计时 是不允许点击的
            if (this.refreshCount) {
                return false;
            }

            // 定时器倒计时 5 秒
            this.refreshCount = 6;
            for(var i = 0; i < 5; i++ ) {
                (function (i) { // 匿名函数自执行创建闭包
                    setTimeout(function() {
                        _this.refreshCount--;
                        if (i === 4) {
                            _this.refreshCount = 0;
                        }
                    }, i * 1000);
                })(i);
            }
            
            this.checkOrderStop('isrefresh');
        },

        /**
         * 手动结束充电
         */
        stopCharging: function stopCharging() {
            const _this = this;
            let query = this.$route.query;

            this.pageState = 'finishing';
            ajaxs.stopCharge(query.StartChargeSeq)
            .then(
                res => {
                    // 操作结果：SuccStat	0：成功，1:失败
                    if (res.SuccStat === 0) {
                        _this.isStopSuccessful = true; // 设置为结束充电
                        // 跳转到充电结束页面
                        _this.jumpToRouter('/charge/finishing', { StartChargeSeq: query.StartChargeSeq });
                    } else {
                        // 结束失败
                        _this.pageState = 'finished';
                    }
                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 轮询 判断是否 成功停止充电 
         */
        checkOrderStop: function checkOrderStop(isrefresh) {
            const _this = this;

            // 如果是 成功停止充电，则不再进行判断
            if (this.isStopSuccessful) {
                return false;
            }

            ajaxsQueryChargeRecordDetail(this.$route.query.StartChargeSeq)
            .then(
                res => {
                    if (res.code === 200 && res.data) {
                        // 成功停止充电 跳转到成功页面
                        _this.isStopSuccessful = true; // 设置为 成功停止充电
                        _this.jumpToRouter(`/order/detail/${_this.$route.query.StartChargeSeq}`);
                    } else {
                        /**
                         * 若未 成功停止充电
                         * 先判断是不是手动刷新
                         * 手动刷新 - 不用循环执行
                         * 自动刷新 - 5秒循环调用
                         */
                        if (isrefresh !== 'isrefresh') {
                            window.setTimeout(() => {
                                _this.checkOrderStop();
                            }, 5000);
                        }
                    }
                }, error => {} // 失败不作处理
            );
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
        },

        /**
         * 跳转到路由
         * @param {object} query 携带的参数 非必填
         */
        jumpToRouter: function jumpToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.push(routerConfig);
        },
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
    padding: 25px 15px 15px 15px;

    .submit-refresh {
        margin-right: 15px;
        height: 45px;
        line-height: 45px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: #5594FF;
    }

    // 正在刷新中是灰色的
    .submit-refreshing {
        background: #AAAAAA;
    }

    .submit-content {
        height: 45px;
        line-height: 45px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: #FFAB18;
    }
}

// 底部提示信息
.tip-2 {
    padding-top: 15px;
    font-size: 12px;
    color: @black3;
}

</style>
