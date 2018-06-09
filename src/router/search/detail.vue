<!-- 
  - 列表详情 
  -->
<template>
    <div class="search-detail">
        <!-- 顶部栏 -->
        <div class="top-bar">
            <div class="top-bar-content flex-start">

                <div class="top-bar-back" @click="$router.push('/search/index')">
                    <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-back.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i>
                </div>

                <div class="top-bar-title flex-rest">电站详情</div>
                <div class="top-bar-icon flex-start-center">
                    <div class="bar-icon-item">
                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/feedback.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i>
                        <span>反馈</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- banner栏 -->
        <div class="banner">
            <div class="banner-main flex-start-center">
                <div class="banner-main-img">
                    <img src="http://cyygiftsend.szpiccxxjsb.cn/imgs/stores/YC7550102_100x100.jpg" />
                </div>
                <div class="banner-main-describe flex-rest">
                    <div class="main-describe-title">深圳信青工业一期充电器</div>
                    <div class="main-describe-icon flex-start-center">
                        <iconstar width="60" />
                        <div class="icon-label">评分:3.7 | 公共站</div>
                    </div>
                    <div class="main-describe-tabs">
                        <div class="describe-tabs-content">
                            <div class="tabs-item" style="color: #00a6ca; border-color: #00a6ca;">自营</div>
                            <div class="tabs-item" style="color: #46bb00; border-color: #46bb00;">公共站</div>
                            <div class="tabs-item" style="color: #283593; border-color: #283593;">露天1F</div>
                            <div class="tabs-item" style="color: #fbc02d; border-color: #fbc02d;">自营</div>
                            <div class="tabs-item" style="color: #1ccfc9; border-color: #1ccfc9;">芝麻信用·免充值</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-label flex-start">
                <div class="banner-label-item banner-label-left">
                    <div class="label-left-content">
                        <div class="label-item"><span>快</span> 空闲4/共6</div>
                    </div>
                </div>
                <div class="banner-label-item banner-label-right">
                    <div class="label-item"><span>慢</span> 空闲4/共6</div>
                </div>
            </div>
        </div>
        
        <!-- 选项卡栏 -->
        <div class="navbar">
            <mt-navbar v-model="navbarSelected">
                <mt-tab-item id="particu">详情</mt-tab-item>
                <div class="mt-tab-line"></div>
                <mt-tab-item id="termina">终端</mt-tab-item>
                <div class="mt-tab-line"></div>
                <mt-tab-item id="comment">评论</mt-tab-item>
            </mt-navbar>
        </div>
        
        <!-- 显示面板 -->
        <mt-tab-container v-model="navbarSelected">

            <!-- 详情 -->
            <mt-tab-container-item id="particu">
                <div class="particu">
                    <div class="particu-navigator">
                        <div class="particu-navigator-main flex-start-center">
                            <div class="navigator-main-descrip flex-rest">
                                <div class="main-descrip-title">广东省深圳市龙岗区坂田街道中兴路信擎科技园</div>
                                <div class="main-descrip-link">查看具体位置示意图</div>
                                <div class="main-descrip-label">距离我0.2km<span>露天1F</span></div>
                            </div>
                            <div class="navigator-main-icon">导航 <span>></span></div>
                        </div>
                        <div class="particu-navigator-lable">
                            <div class="navigator-lable-content">
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/cate.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>美食</span>
                                    </div>
                                    <div class="lable-item-line"></div>
                                </div>
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/car-1.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>汽车</span>
                                    </div>
                                    <div class="lable-item-line"></div>
                                </div>
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/wc.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>洗手间</span>
                                    </div>
                                    <div class="lable-item-line"></div>
                                </div>
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/hotel.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>酒店</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>

            <!-- 终端 -->
            <mt-tab-container-item id="termina">
            </mt-tab-container-item>

            <!-- 评论 -->
            <mt-tab-container-item id="comment">
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
// mint-ui 框架
import Vue from 'vue';
import { 
  Navbar, TabItem, TabContainer, TabContainerItem,
} from 'mint-ui';
import 'mint-ui/lib/font/style.css';
import 'mint-ui/lib/header/style.css';
import 'mint-ui/lib/button/style.css';
import 'mint-ui/lib/navbar/style.css';
import 'mint-ui/lib/tab-item/style.css';
import 'mint-ui/lib/tab-container/style.css';
import 'mint-ui/lib/tab-container-item/style.css';

Vue.component('mt-navbar', Navbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-tab-container', TabContainer);
Vue.component('mt-tab-container-item', TabContainerItem);

import iconstar from './../../components/icon-star';

export default {
    name: 'searchDetail',

    components: {
        iconstar
    },

    data () {
        return {
            // 选项卡栏
            navbarSelected: "particu", // 详情:particu 终端:termina 评论:comment
        }
    },

    computed: {
    },

    methods: {
    },
}

</script>

<style scoped lang="less">

.search-detail {
    min-height: 100%;
    background: #efefef;
}

// 顶部搜索栏
.search-detail .top-bar {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ddd;
    z-index: 3;

    .top-bar-back {
        padding: 10px 0px;
        padding-right: 15px;
        padding-left: 15px;

        i {
            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
            align-items: center;
            height: 30px;
        }

        img {
            width: 24px;
            height: 24px;
        }
    }

    .top-bar-title {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        color: #303133;
    }

    .top-bar-icon {
        height: 50px;
        padding-right: 10px;

        .bar-icon-item {
            padding: 0px 5px;

            i {
                display: block;
                width: 24px;
                height: 24px;
                text-align: center;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            span {
                display: block;
                font-size: 12px;
                color: #606266;
            }
        }
    }
}

// banner栏
.search-detail .banner {
    background: #fff;
    border-bottom: 1px solid #ddd;

    .banner-main {
        padding: 15px;
        border-bottom: 1px solid #ddd;

        .banner-main-img {
            width: 70px;
            height: 70px;
            border-radius: 5px;
            overflow: hidden;

            img {
                display: block;
                width: 70px;
                height: 70px;
            }
        }

        .banner-main-describe {
            padding-left: 15px;
            overflow: hidden;

            .main-describe-title {
                font-size: 16px;
            }

            .main-describe-icon {
                padding-top: 10px;

                .icon-label {
                    padding-left: 5px;
                    font-size: 12px;
                    color: #909399;
                }
            }
        
            .main-describe-tabs {
                padding-top: 10px;
                height: 24px;
                width: 100%;
                line-height: 21px;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;

                .describe-tabs-content {
                    float: left;
                    height: 21px;
                }

                .tabs-item {
                    display: inline-block;
                    margin-right: 5px;
                    padding: 0px 8px;
                    border-radius: 5px;
                    border: 1px solid #E4E7ED;
                    font-size: 12px;
                    color: #606266;
                }
            }
        }
    }

    .banner-label {
        height: 45px;

        .banner-label-item {
            width: 50%;
            height: 45px;

            .label-item {
                line-height: 45px;
                text-align: center;
                font-size: 14px;

                span {
                    color: #fff;
                    border-radius: 5px;
                    padding: 0px 3px;
                }
            }
        }

        .label-left-content {
            width: 100%;
            height: 45px;
            border-right: 1px solid #ddd;

            .label-item span {
                background: #ff2c2c;
            }
        }

        .banner-label-right .label-item span {
            background: #43ba00;
        }
    }
}

// 选项卡栏
.search-detail .navbar {
    padding-top: 15px;

    .mint-navbar {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;

        .mt-tab-line {
            position: relative;
            top: 15px;
            height: 20px;
            width: 1px;
            background: #ddd;
            z-index: 2;
        }
    }
}

// 显示面板
.search-detail .mint-tab-container-item {
    position: relative;

    // 详情
    .particu {
        
        .particu-navigator {
            background: #fff;
            border-bottom: 1px solid #ddd;

            .particu-navigator-main {
                border-bottom: 1px solid #ddd;

                .navigator-main-descrip {
                    padding: 15px;

                    .main-descrip-title {
                        padding-bottom: 7.5px;
                        font-size: 14px;
                        color: #303133;
                    }

                    .main-descrip-link {
                        padding-bottom: 7.5px;
                        font-size: 14px;
                        color: #606266;
                    }

                    .main-descrip-label {
                        font-size: 12px;
                        color: #909399;
                        padding-right: 5px;

                        span {
                            margin-left: 5px;
                            display: inline-block;
                            padding: 0px 8px;
                            border-radius: 5px;
                            border: 1px solid #E4E7ED;
                            font-size: 12px;
                            color: #606266;
                        }
                    }
                }

                .navigator-main-icon {
                    padding-right: 15px;
                    font-size: 16px;
                    color: #909399;

                    span {
                        padding-left: 2px;
                    }
                }
            }

            .particu-navigator-lable {
                height: 43px;
                width: 100%;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;

                .navigator-lable-content {
                    float: left;
                    height: 43px;
                }

                .lable-item {
                    position: relative;
                    display: inline-block;
                    height: 43px;
                    width: 90px;

                    .flex-center {
                        height: 43px;
                    }

                    i {
                        display: block;
                        width: 24px;
                        height: 24px;

                        img {
                            display: block;
                            width: 24px;
                            height: 24px;
                        }
                    }

                    span {
                        display: block;
                        padding-left: 5px;
                    }

                    .lable-item-line {
                        position: absolute;
                        right: 0px;
                        top: 0px;
                        height: 100%;
                        width: 1px;
                        background: #ddd;
                    }
                }
            }
        }
    }

}

</style>
