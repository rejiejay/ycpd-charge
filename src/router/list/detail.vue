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

        <!-- 计费详情 -->
        <div class="detail-cost-count">
            <div class="cost-count-content">

                <!-- 计费详情 标题 -->
                <div class="cost-count-title flex-start-center">
                    <div class="count-title-icon" style="background-size: 14px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADuklEQVRoQ+2ZT2gcdRTHP2/StAQTL9ZEgoLFUrWCN6HHeFIjRAPuRGkvVo3tbnLQqzStEa8iZmcD8d9FD9kppA20tqfkWPAoLTa0WGgIbdVLEimt6TyZaWadnezO7szsulnJXH+/3/u973vf9+83Qpt/0ub6swOg1R6UkYK+5jjMAE+2WpnQ/cuGwehsVn6K0ksyeb25DZX3dV62x+Sp/zeAtqfQNuN9bHV20mhskzX4wI4H6jVopqi75U9exmFIlYMC/Sr0u+dFWVFYEeEKBvP6GAu2Kffrkd10D2QsfQJhQhwOKzxap1KravAjyqSdk1uRdaAegUn2jJ/XPbd/4xOUjxUeSSJD4C+EL/r28fnUoNyrJKMpHnCtLjCnyqEkiofPiHBJYbiSNxoO4J2CvrjhcK5Ke7IscFYMzrGL687frLjKGp30s8Ez6vC6whvVztLJoP2h/BIE2FAAHt+Vn8MKiBugBiedvXxvm/IgyiuZonYYf/CuOnyqPAzywLeM8FLQEw0DsMn5xQq0me/p4sh378laHDod/VZ71u7yAzBUZnHhUt8+BvyYaBgA09JJVU6ELvvqYJaPTok4cZT3955SNa5YfKkwHpL7WTEnE14KTtDMbenTvaBVroWyzfwLOYarKR+4l6i+3wVx2WIu6Ak3O6mw36VS0nmgrE83LZ1W5ZhvJZfz3V08F0Wb0BwS2fe7dFq/y69lMWEwbWclmxqAV2Hv8HuwSBkGH8xm5ZvIYM2rBtftMYmk80hB33ccvg4YaVV7eTw1hcxpfUUfcKEsU/TydM1sExOAm524w41ghpMOXk0dxKallirZgGWs4piM1QraTEwArjwzr3mFXOkuoZAaQCavC8CAL9QwGKw1iLt7kwDYDPzzAeMspgZg5vWqwoESgN08OzsqS83wwMiMHnDuczXg7aXUADKWrqF0lxQWeuycrMcFgPC2nZPZyMC3tBvl34IorLcSQPlzjuC2GIejQGxW59WAsdZSA0hKIbOgb6pyGqUjoFAkiOZQKGEQe4Fs6Qh4g0tdIJoTxAnTqG/1OCCakkaTFrJgsFYDIcJbxayc8bzVrEKWtJUIZ5uKIKDUI1VtJWqlu3rWMwUt4HA8TjNXSW4FEB6AyGauHgVr7UnSTleT6WUnhyl33W2znz/Oxch2OsE84N9dNhe0bKBJ+X+gxNGWjZSNArCZ1//7ob5RFPJ51dbPKoHi1L4PWz6Itn5aDFXZ9nzc3VJp2/V5vVYRTLueeh5Iq0Da8zsA0low7fl/AETYZ0QvyjTxAAAAAElFTkSuQmCC)"></div>
                    <span>计费详情</span>
                </div>

                <!-- 计费详情 内容 -->
                <div class="cost-count-describe">
                    <div class="count-describe-item flex-start">
                        <div class="describe-item-lable">电费:</div>
                        <div class="describe-item-main flex-rest">1.22元/度</div>
                    </div>
                    <div class="count-describe-item flex-start">
                        <div class="describe-item-lable">服务费:</div>
                        <div class="describe-item-main flex-rest">0.6元/度</div>
                    </div>
                    <div class="count-describe-item flex-start">
                        <div class="describe-item-lable">停车费:</div>
                        <div class="describe-item-main flex-rest">半小时内免费，首小时5元，之后每小时3元，最高20元。</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 车型次数 -->
        <div class="detail-type-count">
            <div class="type-count-content">
                <div class="type-count-car flex-start-center">
                    <div class="type-count-main flex-rest">成功充电车型</div>
                    <div class="type-count-lable flex-start-center">
                        <div class="count-car-logo" ><img alt="车牌" src="https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png" /></div>
                        <div class="count-car-logo" ><img alt="车牌" src="https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png" /></div>
                        <svg width="18" height="18" t="1535190746466" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2105" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#606266" d="M330.56 247.68a32 32 0 0 1 42.88-47.36l320 288a32 32 0 0 1 0 47.36l-320 288a32 32 0 0 1-42.88-47.36L624.32 512z" p-id="2106"></path>
                        </svg>
                    </div>
                </div>
                <!-- <div class="type-count-charge flex-start-center">
                    <div class="type-count-main flex-rest">近7天成功充电<span>999</span>次</div>
                    <div class="type-count-lable flex-start-center">
                        <span>查看详情</span>
                        <svg width="18" height="18" t="1535190746466" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2105" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#606266" d="M330.56 247.68a32 32 0 0 1 42.88-47.36l320 288a32 32 0 0 1 0 47.36l-320 288a32 32 0 0 1-42.88-47.36L624.32 512z" p-id="2106"></path>
                        </svg>
                    </div>
                </div> -->
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

// 车型次数
.detail .detail-type-count {
    padding-bottom: 5px;

    // 车型次数 -> 框架
    .type-count-content {
        padding-left: 15px;
        background: #fff;
        color: @black2;

        > div {
            height: 45px;
            line-height: 45px;
            font-size: 14px;
        }

        .type-count-main {

        }

        .type-count-lable {
            padding-right: 15px;
            
        }
    }

    // 车型次数 -> 充电车型
    .type-count-car {
        // border-bottom: 1px solid #ddd;

        // 充电车型 -> 车型的 logo
        .count-car-logo {
            padding-right: 7.5px;
            width: 18px;
            height: 18px;

            img {
                display: block;
                width: 18px;
                height: 18px;
            }
        }
    }

    // 车型次数 -> 充电次数
    .type-count-charge {

    }
}
</style>
