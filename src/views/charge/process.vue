<!-- 充电中 -->
<template>
<div class="process" id="process">
</div>
</template>

<script>

export default {
    name: 'process',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            /**
             * 页面状态
             * @param {string} normal 正常充电
             * @param {string} connectFailed 连接失败
             * @param {string} finishing 结束中
             * @param {string} finished 结束失败
             */
            pageState: 'normal',
        }
    },

    mounted: function () {
        // 初始化页面状态
        this.pageState = this.$route.params.pageState;
    },

    methods: {},
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.process {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

</style>
