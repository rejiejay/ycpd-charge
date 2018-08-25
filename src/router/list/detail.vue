<!-- 
  - 列表详情 
  -->
<template>
    <div class="detail">

        <!-- 详情预览图 全景地图 -->
        <div class="detail-panoramic-map">
            <img v-if="isPanoramicShow === false" :src="picture" alt="详情预览图" />
            <div class="panoramic-map-btn" 
                v-if="isPanoramicShow === false"
                @click="isPanoramicShow = true"
            >全景地图</div>
            <div class="panoramic-map-content" 
                :style="isPanoramicShow ? '' : 'display: none;'"
            >
                <div id="panorama"></div>
            </div>
        </div>

        <!-- banner 横幅栏 -->
        <div class="detail-banner">
            <div class="detail-banner-content">

                <!-- 横幅栏 — 顶部 -->
                <div class="detail-banner-top flex-start-center">
                    
                    <!-- 顶部 — 左边 -->
                    <div class="detail-banner-left flex-rest">
                        <div class="banner-left-title">深圳信挚工业一期充电站</div>
                        <div class="banner-left-describe">
                            深圳市龙岗区坂田街道坂田街道坂田街道坂田街道中兴路信挚工业园
                            <span class="left-describe-lable">0.39km</span>
                        </div>
                        <div class="banner-left-price flex-start-bottom">
                            <div class="left-price-lable">1.25</div>
                            <div class="left-price-subject">元/度</div>
                        </div>
                    </div>

                    <!-- 顶部 — 右边 -->
                    <div class="detail-banner-right">
                        <div class="bottom-navigation-content flex-center">
                            <div class="bottom-navigation flex-start-center">
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
    </div>
</template>

<script>

export default {
    name: 'listDetail',

    components: {
    },

    data () {
        return {
            // 详情预览图
            picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/detail-test.png',
            isPanoramicShow: false, // 是否显示全景地图

            isSpare: true, // 充电桩是否空闲
            tags: [ // 标签列表
                '全段时间开放',
                '含快充',
                '免费停车',
            ],
        }
    },

    mounted() {
        this.initBaiduPanorama();
    },

    methods: {
        /**
         * 初始化百度全景地图
         * 文档: http://lbsyun.baidu.com/jsdemo.htm#j1_0
         */
        initBaiduPanorama: function () {
            let panorama = new BMap.Panorama('panorama'); 
            panorama.setPov({heading: -40, pitch: 6});
            panorama.setPosition(new BMap.Point(120.320032, 31.589666)); // 根据经纬度坐标展示全景图
        }
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

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

    > img {
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
.detail-banner {
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
</style>
