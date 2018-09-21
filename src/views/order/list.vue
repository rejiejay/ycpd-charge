<!-- 充电结束 -->
<template>
<div class="order-list" id="order-list">

</div>
</template>

<script>

export default {
    name: 'order-list',

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

.order-list {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

</style>
