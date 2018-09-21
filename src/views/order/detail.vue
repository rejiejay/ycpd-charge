<!-- 充电订单详情 -->
<template>
<div class="order-result" id="order-result">
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
                        <div class="progress-radial-tip">充满自动停止</div>
                    </div>
                </radial-progress-bar>
            </div>
            
            <div class="main-content-describe flex-center">
                <div class="content-describe-main flex-start-center">
                    <div class="describe-main-item">
                        <div class="main-item-text">99<span>分钟</span></div>
                        <div class="main-item-lable">充电时长</div>
                    </div>
                    <div class="describe-main-item">
                        <div class="main-item-text">125.50<span>度</span></div>
                        <div class="main-item-lable">充电量</div>
                    </div>
                    <div class="describe-main-item">
                        <div class="main-item-text"><span>￥</span>229.80</div>
                        <div class="main-item-lable">充电费用</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>

import RadialProgressBar from '@/components/RadialProgressBar'; // 充电百分比的圈圈

export default {
    name: 'order-result',

    components: {
        RadialProgressBar, // 充电百分比的圈圈
    },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            
            chargingPercentage: 74, // 充电百分比
        }
    },

    mounted: function () {
    },

    methods: {},
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

</style>
