<!-- 启动充电 -->
<template>
<div class="finished" id="finished">

</div>
</template>

<script>

export default {
    name: 'finished',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
        }
    },

    mounted: function () {
    },

    methods: {},
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.finished {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

</style>
