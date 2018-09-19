<!-- 启动充电 -->
<template>
<div class="launch" id="launch">
    <div class="launch" id="launch">

    </div>
</div>
</template>

<script>

export default {
    name: 'launch',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            /**
             * 页面状态
             * @param {string} leisure 空闲
             * @param {string} notfree 非空闲
             * @param {string} offline 离线
             * @param {string} booting 启动中
             * @param {string} bootfailed 启动失败
             */
            pageState: 'leisure',
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

</style>
