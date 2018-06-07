<!-- 
  - 主页 首屏页面 
  -->
<template>
  <div class="home">

    <!-- 轮播图 -->
    <div class="home-swiper">
      <div class="swiper-search-bar">

        <div class="search-content flex-start">
          <div class="swiper-area flex-start">
            <span>深圳</span>
            <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
          </div>
          <div class="search-bar flex-start" @click="$router.push('/search/index')">
            <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i>
            <span>输入目的地/电站名</span>
          </div>
          <div class="swiper-logo">
            <span>登录</span>
            <!-- <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/personal.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i> -->
          </div>
        </div>
      </div>

      <mt-swipe :auto="4000" :style="`height: ${bannerHeight}px; width: 100%`">
        <mt-swipe-item v-for="(value, key) in swiperlist" :key="key">
          <img :src="value.src"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>


    <!-- 入口合集 -->
    <div class="home-entry-list">
      <div class="entry-list-content">

        <div class="entry-item" v-for="(item, key) in entryerList" :key="key">
          <div class="entry-svg-content" :style="`background-color: ${item.color}`">
            <img :style="`width: ${item.size}px; height: ${item.size}px;`" :src="item.picUrl">
          </div>
          <div class="item-name">{{item.name}}</div>
        </div>

      </div>
    </div>
    
    <!-- 底部 TabBar -->
    <tabbar :selectIndex="0" />
  </div>
</template>

<script>

// mint-ui 框架
import Vue from 'vue';
import { 
  Swipe, SwipeItem
} from 'mint-ui';
import 'mint-ui/lib/swipe/style.css';
import 'mint-ui/lib/toast/style.css';
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

// 自己封装的组件
import tabbar from './../../components/TabBar.vue';

import TimeConver from './../../utils/TimeConver';

export default {
  name: 'home',

  components: {
    tabbar
  },

  data () {
    return {
      swiperlist: [{ // 轮播图 
        src: `https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/home/banner01.jpg?${TimeConver.dateToYYYYmmDDhhMM00(new Date())}`, // 每隔一个小时强制刷新一次
      }],

      entryerList: [ // 入口合集
        {
          name: '电站搜索',
          color: '#3eb7fc',
          size: 28,
          picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-site.png',
        }, {
          name: '我的收藏',
          color: '#feb741',
          size: 28,
          picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-site.png',
        }, {
          name: '最近充电',
          color: '#949efb',
          size: 28,
          picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-site.png',
        }, {
          name: '充电地图',
          color: '#f78745',
          size: 28,
          picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-site.png',
        }, {
          name: '一键导航',
          color: '#52caef',
          size: 28,
          picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-site.png',
        },
      ]
    }
  },

  computed: {
    bannerHeight: function () { // 轮播图高度 按照 13: 7 比例
      return ( 
        document.body.offsetWidth || 
        document.documentElement.clientWidth || 
        window.innerWidth
      ) / 13 * 7;
    }
  },

  methods: {
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

.home {
  min-height: 100%;
  background: #efefef;
}

// 轮播图
.home .home-swiper {
  position: relative;

  .mint-swipe-items-wrap {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .swiper-search-bar {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 2;
    .search-content {
      padding: 10px 0px;

      > div {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
      }
    }

    .swiper-area,
    .swiper-logo {
      color: #fff;

      i {
        display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;     /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;  /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
        align-items: center;
      }
    }

    .swiper-area {
      padding-right: 5px;
      padding-left: 15px;

      span {
        max-width: 65px;
        display: block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }

      i {
        padding-left: 5px;
      }      

      img {
        width: 16px;
        height: 16px;
      }
    }

    .search-bar {
      position: relative;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      background: #fff;
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
    }

    .swiper-logo {
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
}

// 入口合集
.home-entry-list {
  border-bottom: 1px solid #ddd;
  background: #fff;

  .entry-list-content {
    padding-top: 15px;
    position: relative;
    overflow: hidden;

    .entry-item {
      padding-bottom: 15px;
      width: 20%;
      float: left;
      text-align: center;

      .entry-svg-content {
        display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;     /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;  /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 44px;
        height: 44px;
        border-radius: 20px;

        img {
          width: 28px;
          height: 28px;
        }
      }

      .item-name {
        padding-top: 10px;
        font-size: 14px;
        line-height: 22px;
        color: #606266;
      }
    }
  }
}

</style>
