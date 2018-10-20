<!-- 充电中 -->
<template>
<div class="pay-select">

</div>
</template>

<script>

export default {
    name: 'pay-select',

    components: {
        RadialProgressBar, // 充电百分比的圈圈
    },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        }
    },

    mounted: function () { },

    methods: {
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.pay-select {
    position: relative;
    width: 100%;
    font-size: 14px;
    min-height: 100%;
    background-color: #f5f5f5;
}


</style>
