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
                <div class="banner-main-describe">
                    <div class="main-describe-title">深圳信青工业一期充电器</div>
                    <div class="main-describe-icon flex-start-center">
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'searchDetail',

    components: {
    },

    data () {
        return {
            
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

// 顶部搜索栏
.search-detail .banner {
    background: #fff;
    border-bottom: 1px solid #ddd;

    .banner-main {
        padding: 15px;

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

            .main-describe-title {
                font-size: 16px;
            }
        }
    }
}

</style>
