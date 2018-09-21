<!-- 充电订单详情 -->
<template>
<div class="order-result" id="order-result">

</div>
</template>

<script>

export default {
    name: 'order-result',

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

.order-result {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

</style>
