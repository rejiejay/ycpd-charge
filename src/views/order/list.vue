<!-- 充电结束 -->
<template>
<div class="order-list" id="order-list">
    <div class="order-list-main">
        <div class="list-main-item"
            v-for="(item, key) in list" 
            :key="key"
        >
            <div class="main-item-content flex-start-center">
                <div class="item-content-main flex-rest">
                    <div class="content-main-title">{{item.title}}</div>
                    <div class="content-main-time">{{item.time}}</div>
                </div>
                <div class="item-content-icon flex-start-center">
                    
                    <div class="content-icon-left" :class="'icon-left-' + item.state">
                        <div class="icon-left-main">{{rendertagName(item.state)}}</div>
                        <div class="icon-left-price" v-if="item.state === 'accomplish'">￥{{item.price}}</div>
                    </div>
                    
                    <div class="content-icon-right">
                        <svg width="14" height="14" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电记录" transform="translate(-698.000000, -202.000000)" fill="#BBBBBB" fill-rule="nonzero"><g id="充电记录1" transform="translate(0.000000, 148.000000)"><g id="Group" transform="translate(698.000000, 54.000000)">
                            <path d="M10.2928932,1.70710678 C9.90236893,1.31658249 9.90236893,0.683417511 10.2928932,0.292893219 C10.6834175,-0.0976310729 11.3165825,-0.0976310729 11.7071068,0.292893219 L21.7071068,10.2928932 C22.0976311,10.6834175 22.0976311,11.3165825 21.7071068,11.7071068 L11.7071068,21.7071068 C11.3165825,22.0976311 10.6834175,22.0976311 10.2928932,21.7071068 C9.90236893,21.3165825 9.90236893,20.6834175 10.2928932,20.2928932 L19.5857864,11 L10.2928932,1.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>

export default {
    name: 'order-list',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            list: [
                {
                    title: '深圳信挚工业一期充电站 - 1号枪',
                    time: '2018-9-21 11:00:04',
                    /**
                     * 充电状态 默认充电完成
                     * @param {string} charging 充电中
                     * @param {string} accomplish 充电完成
                     * @param {string} cancel 充电取消
                     */
                    state: 'accomplish',
                    price: '99.00',
                }, {
                    title: '深圳信挚工业一期充电站 - 1号枪',
                    time: '2018-9-21 11:00:04',
                    /**
                     * 充电状态 默认充电完成
                     * @param {string} charging 充电中
                     * @param {string} accomplish 充电完成
                     * @param {string} cancel 充电取消
                     */
                    state: 'charging',
                    price: '99.00',
                }, {
                    title: '深圳信挚工业一期充电站 - 1号枪',
                    time: '2018-9-21 11:00:04',
                    /**
                     * 充电状态 默认充电完成
                     * @param {string} charging 充电中
                     * @param {string} accomplish 充电完成
                     * @param {string} cancel 充电取消
                     */
                    state: 'cancel',
                    price: '99.00',
                }
            ]
        }
    },

    mounted: function () {
    },

    methods: {
        /**
         * 渲染 充电状态
         * @param {string} charging 充电中
         * @param {string} accomplish 充电完成
         * @param {string} cancel 充电取消
         */
        rendertagName: function (status) {
            let keyValue = {
                charging: '充电中',
                accomplish: '充电完成',
                cancel: '充电取消',
            }

            return keyValue[status];
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.order-list {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 列表
.order-list .order-list-main {

    // 框架部分
    .list-main-item {
        padding-top: 10px;

        .main-item-content {
            padding: 15px;
            background-color: #fff;
        }
    }
    
    // 主要部分
    .item-content-main {
        font-size: 16px;
        padding-right: 15px;

        .content-main-title {
            padding-bottom: 5px;
            color: @black1;
        }

        .content-main-time {
            font-size: 14px;
            color: @black3;
        }
    }

    // 右边 icon 部分
    .item-content-icon {
        font-size: 14px;

        .icon-left-price {
            padding-top: 2.5px;
        }

        .icon-left-charging .icon-left-main { // 充电中
            color: #FF8D18;
        }

        .icon-left-accomplish .icon-left-main { // 充电完成
            color: #00B90A;
        }

        .icon-left-cancel .icon-left-main { // 充电取消
            color: #CCCCCC;
        }

        // 右边icon部分
        .content-icon-right {
            padding-left: 5px;
        }
    }
}

</style>
