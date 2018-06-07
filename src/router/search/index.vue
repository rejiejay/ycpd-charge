<!-- 
  - 搜索页面 
  -->
<template>
    <div class="search">
        <!-- 顶部搜索栏 -->
        <div class="search-bar">
            <div class="search-content flex-start">

                <div class="search-back" @click="$router.push('/index')">
                    <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-back.png"></i>
                </div>
                <div class="search-bar flex-start" @click="$router.push('/search/index')">
                    <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search.png"></i>
                    <!-- <span>输入目的地/电站名</span> -->
                    <div class="search-input">
                        <input type="text" placeholder="输入目的地/电站名">
                    </div>
                </div>
                <div class="search-submit">
                    <span>搜索</span>
                </div>
            </div>
        </div>
        
        <!-- 条件排序栏 -->
        <div class="sort-tab flex-start">
            <div class="tab-item tab-selected">
                <div class="tab-item-content flex-start">
                    <span>距您10km</span>
                    <i class="icon-bule"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-bule.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                    <i class="icon-black"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-black.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                </div>
                <div class="tab-item-line"></div>
            </div>

            <div class="tab-item">
                <div class="tab-item-content flex-start">
                    <span>距您10km</span>
                    <i class="icon-bule"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-bule.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                    <i class="icon-black"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-black.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                </div>
                <div class="tab-item-line"></div>
            </div>

            <div class="tab-item">
                <div class="tab-item-content flex-start">
                    <span style="color: #409EFF;">距您10km</span>
                    <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-bule.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                </div>
            </div>
        </div>
        
        <!-- 条件筛选栏 -->
        <div class="filter">
            <div class="filter-content" ref="filter">
                <div 
                    class="filter-item"  
                    :class="{'filter-selected': item.isSelected}" 
                    v-for="(item, key) in filterList" 
                    :key="key"
                >
                    <div class="item-content">
                        <span>{{item.name}}</span>
                        <i v-if="item.isSelected"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/filter-selected.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100"></i>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 查询结果列表 -->
        <div class="list">
            <div class="list-content">
                <div class="item">
                    <div class="item-main">
                        <div class="item-img">
                            <img src="http://cyygiftsend.szpiccxxjsb.cn/imgs/stores/YC7550102_100x100.jpg">
                        </div>
                        <div class="item-describe">
                            <div class="item-describe-content">
                                
                                <div class="describe-title flex-start">
                                    <div class="title-dep">深圳信青工业一期充电器</div>
                                    <div class="title-sub">龙岗区 | 0.2km</div>
                                </div>

                                <div class="describe-icon flex-start">
                                    <div class="icon-left">
                                        <div class="icon-star icon-left-gray flex-start">
                                            
                                            <img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/square-star-gray.png?v=1&x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100">
                                        </div>
                                        <div class="icon-star icon-left-active flex-start">

                                        </div>
                                    </div>
                                    <div class="icon-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-line"></div>
                    <div class="item-tab"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'search',

    components: {
    },

    data () {
        return {
            width: 0,
            filterList: [
                {
                    name: '精品站',
                    isSelected: false
                }, {
                    name: '公共站',
                    isSelected: true
                }, {
                    name: '自营',
                    isSelected: false
                }, {
                    name: '我的爱车',
                    isSelected: false
                }, {
                    name: '快速充电',
                    isSelected: false
                }, {
                    name: '空闲终端',
                    isSelected: false
                }, {
                    name: '车位空闲',
                    isSelected: false
                }, {
                    name: '停车免费',
                    isSelected: false
                }
            ]
        }
    },

    computed: {
    },

    mounted() {
        this.setFilterWidth();
    },

    methods: {
        setFilterWidth: function () { // 设置 条件筛选栏 宽度
            let filterDomList = this.$refs.filter.getElementsByClassName('filter-item');
            let countWidth = 10;

            for (let i = 0; i < filterDomList.length; i++) {
                countWidth += filterDomList[i].offsetWidth;
            }
            
            this.$refs.filter.setAttribute("style", `width: ${countWidth}px`);
        }
    },
}

</script>

<style scoped lang="less">

.flex-start {
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
    justify-content: flex-start;
}

.search {
    min-height: 100%;
    background: #efefef;
}

// 轮播图
.search .search-bar {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .search-content {
        padding: 10px 0px;

        > div {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
    }

    .search-back,
    .search-logo {
        color: #303133;

        i {
            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
            align-items: center;
            height: 30px;
        }
    }

    .search-back {
        padding-right: 15px;
        padding-left: 15px;

        img {
            width: 24px;
            height: 24px;
        }
    }

    .search-bar {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background: #e5e5e6;
        border-radius: 15px;

        i {
            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
            align-items: center;
            padding-left: 10px;
            padding-right: 5px;
            height: 30px;

            img {
                width: 24px;
                height: 24px;
            }
        }

        span {
            display: block;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            color: #909399;
        }

        .search-input {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }

        input {
            width: 95%;
            padding: 0px 2.5;
            border: none;
            outline: none;
            font-size: 16px;
            color: #909399;
            background-color: transparent;
        }
        input::-webkit-input-placeholder{
            color: #909399;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color: #909399;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color: #909399;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color: #909399;
        }
    }

    .search-submit {
        padding-right: 15px;
        padding-left: 5px;

        span {
            padding-left: 5px;
        }

        i {
            height: 30px;
        }    

        img {
            width: 24px;
            height: 24px;
        }
    }
}

// 条件排序栏
.search .sort-tab {
    height: 50px;
    border-bottom: 1px solid #ddd;
    background: #fff;

    .tab-item {
        position: relative;
        display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;     /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;  /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
        justify-content: center;

        .tab-item-content {
            align-items: center;
        }

        .tab-item-line {
            position: absolute;
            top: 25%;
            right: 0px;
            height: 50%;
            width: 1px;
            background: #ddd;
        }

        width: 33.33%;

        span {
            font-size: 14px;
            color: #303133;
            line-height: 50px;
            padding-right: 5px;
        }

        i {
            position: relative;
            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
            align-items: center;
            height: 50px;

            img {
                display: block;
                width: 16px;
                height: 16px;
            }
        }

        .icon-bule {
            display: none;
        }
    }

    .tab-selected { 
        i {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg);     /* IE 9 */
            -moz-transform: rotate(180deg);    /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg);      /* Opera */
        }

        .icon-bule {
            display: flex;
        }

        .icon-black {
            display: none;
        }
        
        span {
            color: #409EFF;
        }
    }
}

// 条件筛选栏
.search .filter {
    height: 43px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    .filter-content {
        padding: 0px 5px;
        
        .filter-item {
            float: left;
            padding: 7px 5px;

            .item-content {
                position: relative;
                padding: 0px 10px;
                height: 27px;
                border: 1px solid #ddd;
                border-radius: 4px;
                overflow: hidden;

                span {
                    font-size: 14px;
                    line-height: 27px;
                    color: #409EFF;
                }

               i {
                    display: none;
                    position: absolute;
                    right: 0px;
                    bottom: 0px;

                    img {
                        display: block;
                        width: 14px;
                        height: 14px;
                    }
                }
            }
        }

        .filter-selected {
            .item-content {
                border: 1px solid #409EFF;

                i {
                    display: block;
                }
            }
        }
    }
}

// 查询结果列表
.search .list {
    padding-bottom: 15px;

    .list-content {
        background: #fff;
        border-bottom: 1px solid #ddd;
    }

    .item {
        padding: 15px;

        .item-main {
            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
            justify-content: start;

            .item-img {
                border-radius: 4px;
                border: 1px solid #ddd;
                overflow: hidden;

                img {
                    display: block;
                    width: 73px;
                    height: 73px;
                }
            }

            .item-describe {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                padding-left: 15px;

                .item-describe-content {
                }

                .describe-title {
                    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
                    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
                    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
                    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
                    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
                    justify-content: start;

                    .title-dep {
                        padding-right: 5px;
                        font-size: 14px;
                        color: #303133;
                        line-height: 22px;
                    }

                    .title-sub {
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        font-size: 12px;
                        line-height: 22px;
                        text-align: right;
                        color: #909399;
                    }

                }

                .describe-icon {

                    .icon-left {
                        padding-top: 2.5px;

                        .icon-star {
                            img {
                                display: block;
                                width: 14px;
                                height: 14px;
                            }
                        }
                    }

                }
            }
        }
    }

}

</style>
