<template>
    <div class="icon-star-list">
        <div class="icon-star icon-gray flex-start">
            <div class="icon-star-black" :style="`width: ${width}%`"></div>
            <img v-for="star in new Array(5)" :key="star" src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/square-star-gray.png?v=1&x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100">
        </div>
        <div class="icon-star icon-active" :style="`width: ${width}%`">
            <div class="icon-active-content flex-start">
                <img v-for="star in new Array(5)" :key="star" src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/square-star-active.png?v=1&x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'iconstar',

    props: [
        'width', // 选中的下标
    ],

    methods: {
    },
}

</script>

<style scoped lang="less">

.main-flex-start {
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
    justify-content: flex-start;
}

.icon-star-list {
    position: relative;

    .icon-star {
        position: relative;

        .icon-star-black {
            position: absolute;
            top: -1px;
            left: 0px;
            width: 100%;
            height: 100%;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            background: #fff;
        }

        img {
            padding-right: 2.5px;
            display: block;
            width: 14px;
            height: 14px;
        }
    }

    .icon-gray {
        width: 82.5px;
    }

    .icon-active {
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: hidden;
        z-index: 2;

        .icon-active-content {
            width: 82.5px;
        }
    }
}

</style>
