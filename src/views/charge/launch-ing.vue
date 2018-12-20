<!-- 启动充电 -->
<template>
<div class="launch" id="launch">

    <!-- 充电枪的 icon -->
    <div class="central">
        <div class="central-content flex-center" :style="'height: ' + (clientWidth - 60) + 'px;'">
            <div class="central-main">
                <div class="central-icon flex-center">
                    <!-- 空闲 和 占用 icon -->
                    <svg width="160px" height="160px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="path-1" cx="160" cy="160" r="160"></circle></defs><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电" transform="translate(-215.000000, -278.000000)"><g id="充电枪" transform="translate(70.000000, 198.000000)"><g id="Group" transform="translate(145.000000, 80.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="Mask" fill="#E1ECFF" xlink:href="#path-1"></use>
                        <path d="M231.891182,116.742606 L231.893456,119.370892 C234.774162,121.484107 237.360012,124.144668 239.475894,127.280544 L276.50383,182.15837 C286.407334,196.836011 282.561408,216.729034 267.910369,226.607981 C260.606587,231.532798 252.021808,233.012267 243.999928,231.482362 L274.268797,276.342808 L252.531351,291 L218.677238,240.825987 C218.677238,240.825987 215.657701,240.897566 214.73223,240.697796 C213.376631,240.376156 205.108211,231.027974 205.108211,231.027974 L201.63022,233.373125 L160.811328,172.876855 L112.541983,172.820627 C111.844766,172.821414 111.175413,172.544257 110.681977,172.050461 C110.188542,171.556665 109.911689,170.886924 109.912657,170.18938 L109.914397,167.051434 C109.754586,167.095823 109.601817,167.103779 109.412618,167.104614 L72.6703345,167.07029 C71.973118,167.071076 71.3037647,166.793919 70.8103292,166.300123 C70.3168938,165.806327 70.0400416,165.136587 70.0410096,164.439043 L70.0000128,131.89494 C69.9978377,131.197392 70.2735316,130.528274 70.7661136,130.035589 C71.2586955,129.542904 71.9275706,129.267255 72.6247898,129.269613 L109.367074,129.303937 C109.519842,129.295982 109.687304,129.309804 109.869459,129.345402 L109.871955,124.052395 L106.850978,122.762508 L106.855676,125.769375 L103.719196,125.761384 L103.720708,121.451262 L102.640651,120.975511 C102.036623,120.970898 101.582332,120.485104 101.578696,119.917233 L101.559077,115.716413 C101.562485,115.112108 102.047146,114.658571 102.614744,114.656064 L110.779696,114.663692 C111.252403,114.245931 111.861593,114.015425 112.49294,114.015434 L168.119317,114.053734 C169.174606,114.070916 170.11015,114.707477 170.516346,115.6376 L200.432765,115.680225 C200.846383,115.496384 201.296431,115.319662 201.724742,115.157597 C202.38247,113.319982 204.11321,111.99455 206.172663,112.000017 L227.152641,112.016579 C229.779692,112.01954 231.903601,114.136096 231.891182,116.742606 Z M242.665012,145.718051 C240.623657,142.692629 234.462732,132.532832 231.080083,130.886845 C223.906299,127.363614 204.034721,133.035654 197.159412,137.671559 C190.65281,142.05885 192.658173,150.175445 193.891797,152.003758 L234.425178,212.076882 C241.077939,221.93671 254.427446,224.557575 264.252414,217.932765 L265.119961,217.347793 C274.94493,210.722983 277.514907,197.367878 270.862146,187.508051 L242.665012,145.718051 Z M199.46062,140.94685 C204.452332,137.581023 219.576361,134.471371 225.519395,138.056361 C228.322232,139.757822 234.041738,149.006597 235.897148,151.756435 L261.653736,189.929386 C267.731298,198.93673 266.862636,210.13904 259.722592,214.953451 L259.09073,215.379505 C251.950686,220.193916 241.235206,216.802597 235.157645,207.795252 L198.122505,152.90675 C196.997572,151.239525 194.721653,144.142256 199.46062,140.94685 Z M233.955988,156.017056 C232.188762,153.397911 226.726595,144.664246 224.235117,142.97804 C218.925527,139.349528 206.196679,141.231796 202.136628,143.96942 C198.309184,146.550201 200.677204,153.114853 201.752267,154.708166 L236.831706,206.698192 C242.589918,215.232239 251.97392,218.97151 257.767951,215.064693 L258.275458,214.72249 C264.090635,210.801414 264.116647,200.717129 258.358435,192.183082 L233.955988,156.017056 Z" id="充电枪" fill="#5594FF" fill-rule="nonzero" mask="url(#mask-2)"></path></g></g></g></g>
                    </svg>
                </div>

                <div class="central-title flex-center">{{stationName}}</div>

                <div class="central-lable flex-center">
                    {{gunName}}
                    <span>启动中</span>
                </div>
            </div>
        </div>
    </div>

    <!-- tips -->
    <div class="tips flex-column-center">
        <div class="tips-booting-main">充电启动中...</div>
        <div class="tips-booting">启动大约需要2分钟，请确保充电枪已插好</div>
    </div>

    <!-- button -->
    <div class="button">
        <div class="button-content button-start" :class="{'button-content-refresh': refreshCount}" @click="refresh">刷新<span style="padding-left: 5px;" v-if="refreshCount">{{refreshCount}}</span></div>
    </div>

    <!-- 账户余额 -->
    <div class="wallet flex-center">
        <div class="flex-start-center">
            <div>账户余额</div>
            <span>￥{{wallet}}</span>
        </div>
    </div>
</div>
</template>

<script>

// 请求类
import ajaxs from "@/api/charge/launch";
import ajaxsQueryChargeRecord from "@/api/common/checkOrderStatus";

export default {
    name: 'launch',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            stationName: '正在加载...', // 充电站名称
            
            gunName: '正在加载...', // 充电枪名

            wallet: '正在加载...', // 账户余额

            isuInsufficientShow: false, // 余额不足模态框

            isLaunchSuccessful: false, // 是否启动成功
            StartChargeSeq: '', // 订单启动成功 缓存的号码

            checkMoneyCount: 0, // 请求 账户余额 的次数 5秒请求一次

            refreshCount: 0, // 页面刷新倒计时
        }
    },

    mounted: function () {
        this.getCheckMoney(); // 请求 账户余额

        this.checkOrderLaunch(); // 轮询 判断是否启动成功
    },

    methods: {
        /**
         * 请求 账户余额
         */
        getCheckMoney: function getCheckMoney() {
            const _this = this;

            if (this.checkMoneyCount >= 3) {
                return false; // 如果请求的次数 大于3次 则不再进行请求
            }

            this.checkMoneyCount++; // 请求的次数设置+1

            ajaxs.checkMoney()
            .then(  
                res => {
                    if (res.code === 200 && res.data.out_trade_no !== null) {
                        // 必须先判断是否数据相同, 下面再进行判断就无意义了
                        if (window.localStorage.ycpd_charge_total_fee && parseInt(window.localStorage.ycpd_charge_total_fee) == res.data.out_trade_no) {
                            // 如果数据相同说明 可能未更新数据
                            window.setTimeout(() => {
                                _this.getCheckMoney();
                            }, 2500); // 2.5秒请求一次
                        }
                        _this.wallet = res.data.total_fee; // 账户余额
                        window.localStorage.setItem('ycpd_charge_total_fee', res.data.total_fee); // 缓存一下 账户余额 用于判断是否更新
                        window.localStorage.setItem('ycpd_charge_out_trade_no', res.data.out_trade_no); // 全局缓存订单号
                        window.localStorage.setItem('ycpd_charge_refund_fee', res.data.total_fee); // 付款金额
                        window.localStorage.setItem('ycpd_charge_project', res.data.project); // 项目名称

                    } else {
                        console.error(res);
                    }
                }, error => {
                    alert(error);
                }
            );

        },

        /**
         * 页面刷新5秒倒计时
         */
        refresh: function refresh() {
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
            
            // 轮询
            this.checkOrderLaunch('isrefresh');
        },

        /**
         * 轮询 判断是否启动成功
         */
        checkOrderLaunch: function checkOrderLaunch(isrefresh) {
            const _this = this;

            // 如果是启动成功了，则不再进行判断
            if (this.isLaunchSuccessful) {
                return false;
            }

            ajaxsQueryChargeRecord(this.$route.query.StartChargeSeq)
            .then(
                res => {
                    _this.stationName = res.data.StationName; // 充电站名称

                    // 初始化枪名
                    if (res.data.ConnectorID && res.data.ConnectorID.split('_')[1]) {
                        _this.gunName = `${res.data.ConnectorID.split('_')[1]}号枪`; // 充电枪名
                    }

                    /**
                     * 查询到充电订单状态为充电中的时候
                     * 跳转到正在充电
                     */
                    if (res.code === 200 && res.data && res.data.StartChargeSeqStat === 2) {
                        _this.isLaunchSuccessful = true; // 设置为启动成功, 阻止继续请求
                        _this.jumpToRouter('/process/normal', { StartChargeSeq: res.data.StartChargeSeq }); // 启动成功跳转

                    // 表示启动失败 StartChargeSeqStat = 5  
                    } else if (res.code === 200 && res.data && res.data.StartChargeSeqStat === 5) {
                        _this.isLaunchSuccessful = true; // 设置为启动失败, 阻止继续请求
                        _this.jumpToRouter('/launch/bootfailed'); // 启动失败

                    } else {
                        /**
                         * 若未启动成功
                         * 先判断是不是手动刷新
                         * 手动刷新 - 不用循环执行
                         * 自动刷新 - 5秒循环调用
                         */
                        if (isrefresh !== 'isrefresh') {
                            window.setTimeout(() => {
                                _this.checkOrderLaunch();
                            }, 5000);
                        }
                    }
                }, error => {} // 失败不作处理
            )
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

// 余额不足模态框
@insufficient-modal-z-index: 2;
@insufficient-modal-shade-z-index: 3;
@insufficient-modal-main-z-index: 4;

.launch {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 充电枪的 icon 中心部分
.central {
    padding: 30px;

    .central-content {
        border-radius: 10px;
        background: #fff;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);

        .central-title {
            padding-top: 15px;
            font-size: 16px;
        }

        .central-lable {
            padding-top: 10px;
            font-size: 14px;

            span {
                padding-left: 5px;
            }
        }
    }
}

// 提示
.tips {
    font-size: 12px;

   
    .tips-notfree, // 非空闲/充电中
    .tips-offline, // 离线
    .tips-leisure, // 空闲
    .tips-booting, // 启动
    .tips-bootfailed, // 启动失败
    {
        color: @black3;
    }

    .tips-booting-main {
        padding-bottom: 10px;
        font-size: 16px;
        color: #5594FF;
    }

    .tips-bootfailed-main {
        padding-bottom: 10px;
        font-size: 16px;
        color: #FF8D18;
    }
}

// 按钮
.button {
    padding: 25px 25px 0px 25px;

    .button-content {
        height: 45px;
        width: 100%;
        line-height: 45px;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        color: #fff;
    }

    // 非空闲 离线
    .button-failure {
        background: #cccccc;
    }

    // 空闲
    .button-start {
        background: #5594FF;
    }

    // 重新启动
    .button-bootfailed {
        background: #5594FF;
    }

    // 点击刷新时
    .button-content-refresh {
        background: #9EC2FF;
    }
}

// 账户余额
.wallet {
    line-height: 70px;
    font-size: 14px;
    text-align: center;
    color: @black3;

    span {
        padding-left: 10px;
        color: #E50012;
    }

    .wallet-WxRefund {
        padding-left: 15px;
        color: #5594FF;
    }
}

// 余额不足模态框
.insufficient-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @insufficient-modal-z-index;

    // 遮罩层
    .insufficient-modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.46);
        z-index: @insufficient-modal-shade-z-index;
    }

    // 主要 框架部分
    .insufficient-modal-main {
        position: relative;
        width: 270px;
        z-index: @insufficient-modal-main-z-index;

        .modal-main-content {
            border-radius: 10px;
            min-height: 110px;
            width: 270px;
            background-color: #fff;
        }

        .modal-main-close {
            padding-top: 15px;
            text-align: center;
        }
    }

    // 顶部头像部分
    .main-content-icon {
        padding-top: 15px;
        text-align: center;
    }

    // 文字
    .main-content-describe {
        padding: 15px 35px 15px 35px;
        font-size: 14px;
        color: @black2;
        text-align: center;
    }

    // 钱包
    .main-content-wallet {
        padding-bottom: 15px;
        font-size: 14px;

        .content-wallet-main {
            padding: 0px 15px;
            height: 35px;
            font-weight: 400;
            line-height: 35px;
            border-radius: 4px;
            color: @black1;
            background: #f0f0f0;
        }
    }

    // 底部按钮
    .main-content-bottom {
        height: 45px;
        font-size: 14px;
        line-height: 45px;
        border-top: 1px solid #ddd;
        text-align: center;
    }
}

</style>
