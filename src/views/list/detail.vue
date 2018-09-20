<!-- 
  - 列表详情 
  -->
<template>
<div class="detail">

    <!-- 详情预览图 全景地图 -->
    <div class="detail-panoramic-map">
        <mt-swipe :auto="4000">
            <mt-swipe-item 
                v-for="(item, key) in swiperList" 
                :key="key"
            ><img :src="item" alt="详情预览图" /></mt-swipe-item>
        </mt-swipe>
        <div class="panoramic-map-btn" 
            @click="jumpToMap"
        >全景地图</div>
    </div>

    <!-- banner 横幅栏 -->
    <div class="detail-banner">
        <div class="detail-banner-content">

            <!-- 横幅栏 — 顶部 -->
            <div class="detail-banner-top flex-start-center">
                
                <!-- 顶部 — 左边 -->
                <div class="detail-banner-left flex-rest">
                    <div class="banner-left-title">{{stationName}}</div>
                    <div class="banner-left-describe">
                        {{address}}
                        <span class="left-describe-lable">{{distance}}km</span>
                    </div>
                    <!-- <div class="banner-left-price flex-start-bottom">
                        <div class="left-price-lable">{{price}}</div>
                        <div class="left-price-subject">元/度</div>
                    </div> -->
                </div>

                <!-- 顶部 — 右边 -->
                <div class="detail-banner-right">
                    <div class="bottom-navigation-content flex-center">
                        <div class="bottom-navigation flex-start-center"
                            @click="jumpToWxMap"
                        >
                            <svg width="18" height="18" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表" transform="translate(-599.000000, -495.000000)" stroke="#5594FF" stroke-width="2"><g id="电站1" transform="translate(0.000000, 218.000000)"><g id="导航btn" transform="translate(566.000000, 259.000000)"><rect id="Rectangle-Copy" x="1" y="1" width="152" height="62" rx="31"></rect><path d="M47,20.734838 L37.9369628,43.8043872 L47,38.8609124 L56.0630372,43.8043872 L47,20.734838 Z" id="Triangle-3"></path></g></g></g></g>
                            </svg>
                            <span>导航</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 横幅栏 — 底部 -->
            <div class="detail-banner-bottom">
                <div class="bottom-list-content">

                    <div class="bottom-list-item">
                        <div class="bottom-item-content">
                            <span
                                :style="isSpare ? 'border-color: #00B90A; color: #00B90A;' : 'border-color: #E50012; color: #E50012;'"
                            >
                                {{isSpare ? '有空闲' : '无空闲'}}
                            </span>
                        </div>
                    </div>

                    <div class="bottom-list-item"
                        v-for="(tag, tagkey) in tags" 
                        :key="tagkey"
                    >
                        <div class="bottom-item-content">
                            <span>{{tag}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 充电枪列表 -->
    <div class="detail-list">
        <!-- 选项头 -->
        <div class="detail-list-navbar flex-start-center">
            <div class="list-navbar-item flex-center"
                @click="listSelected = 'charging'"
            >
                <div class="navbar-item-content flex-start-center"
                    v-bind:class="{'list-navbar-selected': (listSelected  === 'charging')}"
                >充电桩</div>
            </div>
            <div class="list-navbar-item flex-center"
                @click="listSelected = 'details'"
            >
                <div class="navbar-item-content flex-start-center"
                    v-bind:class="{'list-navbar-selected': (listSelected  === 'details')}"
                >计费详情</div>
            </div>
        </div>

        <!-- 选项列表 -->
        <div class="list-content">

            <!-- 充电桩 -->
            <div class="list-tab-charging" v-if="listSelected  === 'charging'">
                <div class="list-item-content">

                    <!-- 一个项 -->
                    <div class="charging-item-float"
                        v-for="(item, key) in chargingList" 
                        :key="key"
                    >
                        <div class="charging-item-content">
                            <div class="list-charging-item charging-item-leisure flex-start-center"
                                v-bind:class="{ 'charging-item-leisure': (item.state === 'leisure'), 'charging-item-offline': (item.state === 'offline'), 'charging-item-insert': (item.state === 'insert'), 'charging-item-pull': (item.state === 'pull') }"
                            >

                                <!-- ICON -->
                                <div class="charging-item-icon">
                                    <div class="item-icon-content flex-center">
                                        <svg width="24" height="24" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站详情-充电桩" transform="translate(-66.000000, -895.000000)" fill="#00B90A" fill-rule="nonzero"><g id="电枪空闲详细" transform="translate(0.000000, 738.000000)"><g id="1号枪" transform="translate(30.000000, 121.000000)"><g id="Group-4" transform="translate(36.000000, 36.000000)">
                                            <path d="M42,18 L41,18 C39.8954305,18 39,17.1045695 39,16 L39,14 C39,12.8954305 39.8954305,12 41,12 L41,9.5 C41,9.22385763 41.2238576,9 41.5,9 C41.7761424,9 42,9.22385763 42,9.5 L42,12 L45,12 L45,9.5 C45,9.22385763 45.2238576,9 45.5,9 C45.7761424,9 46,9.22385763 46,9.5 L46,12 C47.1045695,12 48,12.8954305 48,14 L48,16 C48,17.1045695 47.1045695,18 46,18 L45,18 L45,38 C45,39.6568542 43.6568542,41 42,41 L39,41 C37.3431458,41 36,39.6568542 36,38 L36,22.75 C36,22.3357864 35.6642136,22 35.25,22 L32,22 L32,44 L33.5,44 C34.3284271,44 35,44.6715729 35,45.5 C35,46.3284271 34.3284271,47 33.5,47 L4.5,47 C3.67157288,47 3,46.3284271 3,45.5 C3,44.6715729 3.67157288,44 4.5,44 L6,44 L6,6 C6,3.790861 7.790861,2 10,2 L28,2 C30.209139,2 32,3.790861 32,6 L32,19.0008523 L36,19.0008523 C37.6568542,19.0008523 39,20.343998 39,22.0008523 L39,37.25 C39,37.6642136 39.3357864,38 39.75,38 L41.25,38 C41.6642136,38 42,37.6642136 42,37.25 L42,18 Z M29,44 L29,6 C29,5.44771525 28.5522847,5 28,5 L10,5 C9.44771525,5 9,5.44771525 9,6 L9,44 L29,44 Z M13.5,11 L24.5,11 C25.3284271,11 26,11.6715729 26,12.5 C26,13.3284271 25.3284271,14 24.5,14 L13.5,14 C12.6715729,14 12,13.3284271 12,12.5 C12,11.6715729 12.6715729,11 13.5,11 Z M22.1508672,19.0172358 C22.2913732,18.8639565 22.5120779,18.813635 22.7051396,18.8908597 C22.9615314,18.9934164 23.0862393,19.2844017 22.9836826,19.5407934 L20.2742781,26.3143047 C20.2506541,26.3733648 20.2385165,26.4363903 20.2385165,26.5 C20.2385165,26.7761424 20.4623741,27 20.7385165,27 L24.0343146,27 C24.1404012,27 24.2421427,27.0421427 24.3171573,27.1171573 C24.473367,27.273367 24.473367,27.526633 24.3171573,27.6828427 L15.1786942,36.8213058 C15.026514,36.973486 14.7940283,37.0112132 14.601534,36.914966 C14.3545447,36.7914714 14.2544326,36.4911349 14.3779272,36.2441457 L17.6381966,29.7236068 C17.6729105,29.6541791 17.690983,29.5776225 17.690983,29.5 C17.690983,29.2238576 17.4671254,29 17.190983,29 L13.909294,29 C13.8092174,29 13.7127761,28.9624859 13.6390042,28.8948617 C13.4761566,28.7455847 13.4651554,28.4925577 13.6144324,28.3297101 L22.1508672,19.0172358 Z" id="icon_Chargingpile01"></path></g></g></g></g></g>
                                        </svg>
                                    </div>
                                </div>

                                <!-- 标题 标签 -->
                                <div class="charging-item-other flex-rest">
                                    <div class="item-other-title">{{item.gunName}}枪</div>
                                    <div class="item-other-tag flex-start-center">
                                        <div class="tag-item-left">{{rendertagName(item.state)}}</div>
                                        <div>{{item.isDirectCurrent ? '直流' : '交流'}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <!-- 充电桩为空 -->
                <div class="list-null" v-if="chargingList.length === 0">暂时还没有充电枪</div>
            </div>
            
            <!-- 计费详情 -->
            <div class="list-tab-details" v-if="listSelected  === 'details'">
                <div class="tab-details-content">
                    
                    <div class="tab-details-describe">
                        <div class="tab-details-row details-row-title flex-start-center">
                            <div class="details-row-1">时间段</div>
                            <div class="details-row-2">充电费</div>
                            <div class="details-row-3">服务费</div>
                        </div>

                        <div class="tab-details-row details-row-describe flex-start-center"
                            v-for="(item, key) in chargingDetails" 
                            :key="key"
                        >
                            <div class="details-row-1">{{item.time}}</div>
                            <div class="details-row-2">{{item.fees}}元/度</div>
                            <div class="details-row-3">{{item.service}}元/分钟</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>

import Vue from 'vue';
import ajaxs from '@/api/list/index';
import config from '@/config/index';
import { Indicator, MessageBox, Swipe, SwipeItem } from 'mint-ui';

Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

export default {
    name: 'list-detail',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            longitude: 114.059560, // 经度
            latitude: 22.542860, // 纬度

            stationName: '正在加载...', // 充电桩的名称
            address: '正在加载...', // 充电桩的地址
            distance: '', // 距离 单位km
            price: '', // 价格

            // 轮播图
            swiperList: [
            ],

            isSpare: true, // 充电桩是否空闲
            tags: [ // 标签列表
                '全段时间开放',
                '含快充',
                '免费停车',
            ],
            
            // 计费详情的字段
            electricPrice: '1.22元/度', // 电费
            servicePrice: '0.6元/度', // 服务费
            parkPrice: '半小时内免费，首小时10元，之后每小时5元，最高20元。', // 停车费

            listSelected: 'charging', // 选中的列表充电桩 charging 或者 计费详情 details
            
            chargingList: [
                // {
                //     gunName: '快充5号-P1', // 枪名称
                //     isDirectCurrent: true, // 是否直流设备
                //     state: 'leisure', // leisure 空闲 offline 离线 insert 待插枪 pull 待拨枪
                // }, {
                //     gunName: '快充5号-P1', // 枪名称
                //     isDirectCurrent: true, // 是否直流设备
                //     state: 'offline', // leisure 空闲 offline 离线 insert 待插枪 pull 待拨枪
                // }, {
                //     gunName: '快充5号-P1', // 枪名称
                //     isDirectCurrent: false, // 是否直流设备
                //     state: 'insert', // leisure 空闲 offline 离线 insert 待插枪 pull 待拨枪
                // }, {
                //     gunName: '快充5号-P1', // 枪名称
                //     isDirectCurrent: false, // 是否直流设备
                //     state: 'pull', // leisure 空闲 offline 离线 insert 待插枪 pull 待拨枪
                // }, 
            ],
            
            // 计费详情
            chargingDetails: [
                {
                    time: '', // 时间段
                    fees: '', // 充电费
                    service: '', // 服务费
                },
            ]
        }
    },

    mounted: function () {
        this.getStationById();
    },

    methods: {
        /**
         * 渲染 充电桩 设备状态 标签 status
         * @param {string} leisure 空闲
         * @param {string} offline 离线
         * @param {string} insert 待插枪
         * @param {string} pull 待拨枪
         */
        rendertagName: function (status) {
            if (status === 'leisure') {
                return '空闲'
            } else if (status === 'offline') {
                return '离线'
            } else if (status === 'insert') {
                return '待插枪'
            } else if (status === 'pull') {
                return '待拨枪'
            }
        },
        
        /**
         * 根据id获取充电桩详情
         */
        getStationById: function () {
            const _this = this;
            let loadPageId = this.$route.params.id; // 上个页面传值过来的id

            Indicator.open('获取充电桩详情...');
            ajaxs.GetStationById(loadPageId)
            .then(
                val => {
                    Indicator.close();
                    let query = this.$route.query;

                    _this.longitude = val.StationLng; // 经度
                    _this.latitude = val.StationLat; // 经度
                    _this.stationName = val.StationName; // 门店名称
                    _this.address = val.Address; // 门店地址
                    _this.distance = query.distance; // 上个页面传值过来的距离
                    _this.tags = query.tags; // 上个页面传值过来的 tags 标签
                   
                    // 充电桩是否空闲
                    _this.isSpare = query.isSpare;
                    // 轮播图
                    if (val.StationPicArr && val.StationPicArr instanceof Array && val.StationPicArr.length > 0) {
                        _this.swiperList = val.StationPicArr.map(value => `${config.url.picture}${value}`);
                    } else { // 使用默认图
                        _this.swiperList = [ 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/detail-test.png' ];
                    }

                    // 计费详情的字段
                    _this.electricPrice = val.ElectricityFee; // 电费
                    _this.servicePrice = val.ServiceFee; // 服务费
                    _this.parkPrice = val.ParkFee; // 停车费

                    // 设备列表
                    if (val.ConnectorInfos && val.ConnectorInfos instanceof Array && val.ConnectorInfos.length > 0) {
                        _this.chargingList = val.ConnectorInfos.map(value => {
                            let isDirectCurrent = true; // 是否直流设备
                            /**
                             * 设备状态 status
                             * @param {string} leisure 空闲
                             * @param {string} offline 离线
                             * @param {string} insert 待插枪
                             * @param {string} pull 待拨枪
                             */
                            let state = 'offline'; // 默认离线

                            if (value.Power == 60) { // 快充
                                isDirectCurrent = true; // 快充设备 - 直流设备
                                
                            } else { // 表示慢充
                                isDirectCurrent = false; // 慢充设备 - 交流设备
                            }

                            // 0：离网 1：空闲 2：占用(未充电) 3：占用(充电中) 4: 占用(预约锁定) 255: 故障
                            if (value.Status === 1) {
                                state = 'leisure';
                            } else if (value.Status === 2) {
                                state = 'insert';
                            } else if (value.Status === 3) {
                                state = 'insert';
                            } else if (value.Status === 4) {
                                state = 'pull';
                            } else {
                                state = 'offline';
                            }

                            return {
                                gunName: value.Name,
                                isDirectCurrent: isDirectCurrent,
                                state: state,
                            }
                        });
                    }

                    // 计费详情
                    if (val.policyinfo_data && val.policyinfo_data.length > 0) {
                        let myChargingDetails = [];
                        for (let i = 0; i < val.policyinfo_data.length; i++) {
                            // 最后一个的情况下
                            if (i === (val.policyinfo_data.length - 1)) {
                                myChargingDetails.push({
                                    time: `${val.policyinfo_data[i].StartTime} - 24:00`, // 时间段
                                    fees: val.policyinfo_data[i].ElecPrice, // 充电费
                                    service: val.policyinfo_data[i].SevicePrice, // 服务费
                                });
                            } else {
                                myChargingDetails.push({
                                    time: `${val.policyinfo_data[i].StartTime} - ${val.policyinfo_data[(i + 1)].StartTime}`, // 时间段
                                    fees: val.policyinfo_data[i].ElecPrice, // 充电费
                                    service: val.policyinfo_data[i].SevicePrice, // 服务费
                                });
                            }
                        }
                        
                        _this.chargingDetails = myChargingDetails;

                    }
                }, error => {
                    Indicator.close();
                    MessageBox.confirm('获取充电桩详情, 是否重新获取?')
                    .then(action => {
                        _this.getStationById();
                    });
                }
            )

        },

        /**
         * 跳转到百度全景地图
         */
        jumpToMap: function () {
            let query = {
                longitude: this.longitude, // 经度
                latitude: this.latitude, // 纬度
            }
            this.$router.push({ path: `/map/fullview`, query: query });
        },

        /**
         * 跳转到微信导航页面
         */
        jumpToWxMap() {
            let longitude = this.longitude; // 经度
            let latitude = this.latitude; // 纬度
            let name = this.stationName; // 门店名称
            let address = this.address; // 门店地址
            window.location.href = `http://kf.szpiccxxjsb.cn/wxapi/map/map.html?lat=${latitude}&lng=${longitude}&type=bd&name=${name}&address=${address}`; 
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 模态框 成功充电车型
@car-modal-z-index: 1;
@car-modal-shade-z-index: 2;
@car-modal-main-z-index: 3;

.detail {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 详情预览图 全景地图
.detail .detail-panoramic-map {
    position: relative;
    width: 100%;
    height: 150px;

    .mint-swipe-item img {
        display: block;
        width: 100%;
        height: 100%;
    }


    .panoramic-map-btn {
        position: absolute;
        right: 15px;
        bottom: 10px;
        padding: 0px 15px;
        height: 25px;
        line-height: 25px;
        border-radius: 25px;
        font-size: 12px;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.6);
        background: rgba(0, 0, 0, 0.4);
    }

    .panoramic-map-content,
    #panorama {
        width: 100%;
        height: 150px;
    }
}

// 横幅栏
.detail .detail-banner {
    padding-bottom: 5px;

    // 横幅栏 - 整体框架
    .detail-banner-content {
        background: #fff;
    }

    // 横幅栏 - 顶部
    .detail-banner-top {
        padding: 15px;

        // 顶部 - 左边
        .detail-banner-left {
            padding-right: 10px;

            .banner-left-title {
                font-size: 16px;
                color: @black1;
                padding-bottom: 10px;
            }

            .banner-left-describe {
                font-size: 14px;
                color: @black3;
                overflow: hidden;
                padding-bottom: 10px;

                .left-describe-lable {
                    float: right;
                }
                
            }

            .banner-left-price {
                .left-price-lable {
                    padding-right: 1.5px;
                    font-size: 18px;
                    color: #5594FF;
                }

                .left-price-subject {
                    font-size: 12px;
                    color: @black2;
                }
            }
        }

        // 顶部 - 右边
        .detail-banner-right {
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            border-radius: 30px;
            border: 1px solid #5594FF;
            color: #5594FF;

            span {
                padding-left: 1.5px;
            }
        }
    }

    // 横幅栏 - 底部
    .detail-banner-bottom {
        border-top: 1px solid #ddd;
        padding: 0px 15px;
        height: 45px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;

        .bottom-list-content {
            padding: 11px 0px;
            float: left;
            height: 23px; 
        }

        .bottom-list-item {
            display: inline-block;
            height: 23px; 

            .bottom-item-content {
                font-size: 12px;
                color: #5594FF;
                padding-right: 5px;

                span {
                    padding: 0px 7.5px;
                    height: 20px;
                    border-radius: 20px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: #5594FF;
                    display: block;
                    line-height: 20px;
                }
            }
        }
    }
}

// 计费详情
.detail .detail-cost-count {
    padding-bottom: 5px;

    // 计费详情 -> 框架
    .cost-count-content {
        background: #fff;
        padding-left: 15px;
    }

    // 计费详情 -> 标题
    .cost-count-title {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid #ddd;

        .count-title-icon {
            position: relative;
            top: 1px;
            border: none;
            width: 14px;
            height: 14px;
        }

        span {
            color: @black2;
            padding-left: 2.5px;
        }
    }

    // 计费详情 -> 内容
    .cost-count-describe {
        padding: 15px 15px 5px 0px;

        .count-describe-item { 
            font-size: 14px;
            padding-bottom: 10px;
        }

        .describe-item-lable {
            width: 55px;
            color: @black3;
        }

        .describe-item-main {
            color: @black2;
        }
    }
}

// 充电枪列表
.detail .detail-list {
    
    // 充电枪列表 -> 选项头
    .detail-list-navbar {
        height: 45px;
        background: #fff;
        border-bottom: 1px solid #ddd;

        .list-navbar-item {
            width: 50%;
            font-size: 14px;

            .navbar-item-content {
                padding: 0px 15px;
                color: @black3;
                height: 45px;
            }

            .list-navbar-selected {
                color: #5594FF;
                border-bottom: 2px solid #5594FF;
            }
        }
    }

    // 充电枪列表 -> 选项列表
    .list-content {
        padding-bottom: 15px;

        // 选项列表 ->  充电桩
        .list-tab-charging {
            
            // 整体框架
            .list-item-content {
                padding-top: 15px;
                padding-left: 7.5px;
                padding-right: 7.5px;
                overflow: hidden;
                background: #fff;

                .charging-item-float {
                    float: left;
                    width: 50%;

                    .charging-item-content {
                        padding-left: 7.5px;
                        padding-right: 7.5px;
                        padding-bottom: 15px;
                    }
                }
            }

            // 一个项 主要内容
            .charging-item-content {

                .list-charging-item {
                    padding-top: 10px;
                    padding-bottom: 10px;
                    width: 100%;
                    border: 1px solid #ddd;
                    border-radius: 5px;

                    // icon 部分
                    .charging-item-icon {
                        padding-left: 10px;

                        // 整体
                        .item-icon-content {
                            width: 36px;
                            height: 36px;
                            border-radius: 36px;
                        }
                    }

                    // 右边 内容部分
                    .charging-item-other {
                        padding-left: 15px;
                        
                        // 标题部分
                        .item-other-title {
                            color: @black1;
                            font-size: 14px;
                            padding-bottom: 7.5px;
                            overflow: hidden;  
                            text-overflow: ellipsis;  
                            white-space: nowrap; 
                        }

                        // 标签页
                        .item-other-tag {
                            font-size: 12px;

                            .tag-item-left {
                                margin-right: 2.5px;
                            }

                            > div {
                                padding: 0px 7.5px;
                                height: 18px;
                                border-radius: 18px;
                                border-width: 1px;
                                border-style: solid;
                                display: block;
                                line-height: 18px;
                            }
                        }
                    }
                }

                // 空闲部分
                .charging-item-leisure {
                    .item-icon-content {
                        background-color: #e4ffe5;
                        path {
                            fill: #00B90A;
                        }
                    }

                    .item-other-tag > div {
                        color: #00B90A;
                        border-color: #00B90A;
                    }
                }

                // 离线部分
                .charging-item-offline {
                    .item-icon-content {
                        background-color: #eeeeee;
                        path {
                            fill: #999999;
                        }
                    }

                    // 右边 内容部分 标题部分
                    .charging-item-other .item-other-title {
                        color: @black3;
                    }

                    .item-other-tag > div {
                        color: #999999;
                        border-color: #999999;
                    }
                } 

                // 待插枪
                .charging-item-insert {
                    .item-icon-content {
                        background-color: #e1ecff;
                        path {
                            fill: #5594FF;
                        }
                    }

                    // 右边 内容部分 标题部分
                    .charging-item-other .item-other-title {
                        color: @black3;
                    }

                    .item-other-tag > div {
                        color: #5594FF;
                        border-color: #5594FF;
                    }
                } 

                // 待拨枪
                .charging-item-pull {
                    .item-icon-content {
                        background-color: #fff2e3;
                        path {
                            fill: #FF8D18;
                        }
                    }

                    .item-other-tag > div {
                        color: #FF8D18;
                        border-color: #FF8D18;
                    }
                } 
            }

            // 充电桩 -> 为空
            .list-null {
                height: 75px;
                line-height: 75px;
                text-align: center;
                font-size: 14px;
                color: @black3;
            }
        }

        // 选项列表 ->  计费详情
        .list-tab-details {
            font-size: 14px;
            padding-bottom: 15px;

            .tab-details-content {
                padding: 15px;
                background: #fff;
            }

            .tab-details-title {
                color: @black2;
                font-size: 14px;
                padding-bottom: 12px;

                .details-title-icon {
                    padding-right: 10px;
                    
                }
            }

            .tab-details-describe {
                font-size: 12px;
                padding-bottom: 15px;
            }

            // 复用部分
            .tab-details-row {

                > div {
                    width: 33.33%;
                }

                .details-row-2 {
                    text-align: center;
                }

                .details-row-3 {
                    text-align: right;
                }
            }

            .details-row-title {
                color: @black3;
                padding-bottom: 10px;
            }

            .details-row-describe {
                color: @black2;
                padding-bottom: 5px;
            }
        }
    }
}

</style>
