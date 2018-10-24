<!-- 充电订单详情 -->
<template>
<div class="order-result" id="order-result">
    <!-- 主要部分 -->
    <div class="order-result-main">
        <div class="result-main-content flex-column-center">
            <div class="main-content-title">订单完成</div>

            <div class="main-content-process">
                <radial-progress-bar 
                    :diameter="130"
                    :completed-steps="chargingPercentage"
                    :total-steps="100"
                    :strokeWidth="8"
                    startColor="#2196f3"
                    stopColor="#2196f3"
                    innerStrokeColor="#bbdefb"
                >
                    <div class="progress-radial-content">
                        <div class="progress-radial-percentage">{{chargingPercentage}}<span>%</span></div>
                        <div class="progress-radial-tip" v-if="chargingPercentage === 100">充满自动停止</div>
                    </div>
                </radial-progress-bar>
            </div>
            
            <div class="main-content-describe flex-center">
                <div class="content-describe-main flex-start-center">
                    <div class="describe-main-item">
                        <div class="main-item-text">{{ChargingTime}}<span>分钟</span></div>
                        <div class="main-item-lable">充电时长</div>
                    </div>
                    <div class="describe-main-item">
                        <div class="main-item-text">{{TotalPower}}<span>度</span></div>
                        <div class="main-item-lable">充电量</div>
                    </div>
                    <div class="describe-main-item">
                        <div class="main-item-text"><span>￥</span>{{TotalMoney}}</div>
                        <div class="main-item-lable">充电费用</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 订单信息 -->
    <div class="order-result-infor">
        <div class="result-infor-content">
            <div class="infor-content-item flex-start-center">
                <div class="content-item-label">订&nbsp;&nbsp;单&nbsp;&nbsp;号:</div>
                <div class="content-item-main">{{StartChargeSeq}}</div>
                <div class="content-item-icon">
                    <svg width="16" height="16" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="结束充电" transform="translate(-463.000000, -773.000000)" fill="#5594FF" fill-rule="nonzero"><g id="list" transform="translate(0.000000, 743.000000)"><g id="copy" transform="translate(463.000000, 30.000000)">
                        <path d="M6,2 L6,0 L26,0 L26,24 L24,24 L24,2 L6,2 Z M2,4 L22,4 L22,28 L2,28 L2,4 Z M4,6 L4,26 L20,26 L20,6 L4,6 Z M6,10 L14,10 L14,12 L6,12 L6,10 Z M6,16 L18,16 L18,18 L6,18 L6,16 Z" id="icon_copy"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="infor-content-line"></div>
            <div class="infor-content-item flex-start-center">
                <div class="content-item-label">订&nbsp;&nbsp;单&nbsp;&nbsp;号:</div>
                <div class="content-item-main">{{StationName}}</div>
            </div>
            <div class="infor-content-line"></div>
            <div class="infor-content-item flex-start-center">
                <div class="content-item-label">充电时间:</div>
                <div class="content-item-main">{{StartTime}}</div>
            </div>
            <div class="infor-content-line"></div>
            <div class="infor-content-item flex-start-center">
                <div class="content-item-label">预存电费:</div>
                <div class="content-item-main">￥{{Money}}</div>
            </div>
            <div class="infor-content-line"></div>
            <div class="infor-content-item flex-start-center">
                <div class="content-item-label">退&nbsp;&nbsp;&nbsp;&nbsp;款:</div>
                <div class="content-item-main">￥{{RefundMoney}}<span style="color: #999999;">(原路返回)</span></div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

// 请求类
import ajaxsQueryChargeRecordDetail from "@/api/common/queryChargeRecordDetail";
// 组件类
import RadialProgressBar from '@/components/RadialProgressBar'; // 充电百分比的圈圈

export default {
    name: 'order-result',

    components: {
        RadialProgressBar, // 充电百分比的圈圈
    },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            
            chargingPercentage: 100, // 充电百分比

            ChargingTime: '正在加载...', // 充电时长
            TotalPower: '正在加载...', // 充电量
            TotalMoney: '正在加载...', // 充电费用
            StationName: '正在加载...', // 充电桩名称
            StartChargeSeq: '正在加载...', // 订单号
            StartTime: '正在加载...', // 充电时间
            Money: '正在加载...', // 预存电费
            RefundMoney: '正在加载...', // 退款
        }
    },

    mounted: function () {
        this.queryChargeRecordDetail(); // 获取订单详情
    },

    methods: {
        queryChargeRecordDetail: function queryChargeRecordDetail() {
            const _this = this;
            const StartChargeSeq = this.$route.params.StartChargeSeq;

            ajaxsQueryChargeRecordDetail(StartChargeSeq)
            .then(
                res => {
                    _this.chargingPercentage = res.Soc;
                    _this.ChargingTime = res.ChargingTime;
                    _this.TotalPower = res.TotalPower;
                    _this.TotalMoney = res.TotalMoney;
                    _this.StationName = `${res.StationName} ${res.ConnectorID.split('_')[1]}号枪`
                    _this.StartChargeSeq = res.StartChargeSeq;
                    _this.StartTime = res.StartTime;
                    _this.Money = res.Money;

                    _this.RefundMoney = res.RefundMoney;
                }, error => {
                   alert(error); 
                }
            );
        }
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.order-result {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 主要内容
.order-result-main {
    padding: 10px;

    // 框架复用部分
    .result-main-content {
        padding: 15px;
        border-radius: 10px;
        background: #fff;
    }

    // 标题
    .main-content-title {
        padding-top: 15px;
        padding-bottom: 25px;
        font-size: 14px;
        font-weight: bold;
        color: @black1;
    }

    // 中间小圈圈
    .main-content-process {
        color: #5594FF;
        text-align: center;

        .progress-radial-content {
            position: relative;
            top: 5px;
        }

        .progress-radial-percentage {
            font-family: 'SFUIText-Regular';
            font-weight: 400;
            font-size: 48px;

            span {
                font-size: 16px;
            }
        }

        .progress-radial-tip {
            padding-top: 2.5px;
            font-size: 10px;
        }
    }

    // 底部描述
    .main-content-describe {
        padding-top: 30px;
        padding-bottom: 5px;
        width: 100%;

        .content-describe-main {
            width: 80%;

            .describe-main-item {
                text-align: center;
                width: 33.33%;
            }
        }

        .main-item-text {
            font-size: 16px;
            color: #5594FF;

            span {
                font-size: 12px;
            }
        }

        .main-item-lable {
            padding-top: 5px;
            font-size: 12px;
            color: @black3;
        }
    }
}

// 订单信息
.order-result-infor {
    font-size: 14px;

    // 框架部分
    .result-infor-content {
        background: #fff;
        padding-left: 15px;
    }

    .infor-content-item {
        height: 45px;
        line-height: 45px;
    }

    .infor-content-line {
        width: 100%;
        height: 1px;
        background: #ddd;
    }

    .content-item-label {
        color: @black3;
        padding-right: 10px;
    }

    .content-item-main {
        color: @black1;
    }

    .content-item-icon {
        position: relative;
        top: 2.5px;
        padding-left: 5px;
    }
}

</style>
