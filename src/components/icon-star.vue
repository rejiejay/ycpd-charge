<template>
    <div class="icon-star-list">
        <div class="icon-star icon-left-gray flex-start">
            <div class="icon-star-black" style="width: 70%"></div>
            <img v-for="star in new Array(5)" :key="star" src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/square-star-gray.png?v=1&x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100">
        </div>
        <div class="icon-star icon-left-active" style="width: 70%">
            <div class="icon-left-active-content flex-start">
                <img v-for="star in new Array(5)" :key="star" src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/square-star-active.png?v=1&x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'iconstar',

    props: [
        'selectIndex', // 选中的下标
    ],

    methods: {
        tabbarClick(selectIndex) { // 底部 tabbar
            if (selectIndex === 'my') { // 如果 标识为 my 则跳转到个人中心
                this.$router.push('/user');
            }
        },
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
    
}

</style>
