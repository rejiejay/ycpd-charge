<!-- 
  - 列表页面 
  -->
<template>
<div class="list">

    <!-- 排序 and 筛选栏 -->
    <div class="filter flex-start">
        <div class="filter-item flex-center filter-activate-item">
            <div class="filter-item-content">
                <span>距离最近</span>
                <svg width="10" height="10" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M6.84542978,14.5264945 L0.288775776,7.69230265 C-0.0935724214,7.29376997 -0.0804523013,6.66074094 0.318080384,6.27839274 C0.50428598,6.09974899 0.752340184,6 1.01038304,6 L14.9896198,6 C15.5419045,6 15.9896198,6.44771525 15.9896198,7 C15.9896198,7.25804285 15.8898708,7.50609706 15.711227,7.69230265 L9.15457301,14.5264945 C8.5428159,15.1641468 7.52996945,15.185139 6.89231715,14.5733819 C6.87636581,14.5580783 6.86073333,14.5424458 6.84542978,14.5264945 Z"></path>
                </svg>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center">
            <div class="filter-item-content">
                <span>价格最低</span>
                <svg width="10" height="10" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M6.84542978,14.5264945 L0.288775776,7.69230265 C-0.0935724214,7.29376997 -0.0804523013,6.66074094 0.318080384,6.27839274 C0.50428598,6.09974899 0.752340184,6 1.01038304,6 L14.9896198,6 C15.5419045,6 15.9896198,6.44771525 15.9896198,7 C15.9896198,7.25804285 15.8898708,7.50609706 15.711227,7.69230265 L9.15457301,14.5264945 C8.5428159,15.1641468 7.52996945,15.185139 6.89231715,14.5733819 C6.87636581,14.5580783 6.86073333,14.5424458 6.84542978,14.5264945 Z"></path>
                </svg>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center"  @click="isSidebarShow = true">
            <div class="filter-item-content">
                <span>筛选</span>
                <svg t="1535012083571" class="filter-icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2135" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14">
                    <path d="M576 940.8c-17.6 0-35.2-4.8-51.2-14.4l-128-80c-28.8-17.6-44.8-48-44.8-81.6V491.2L156.8 252.8A95.68 95.68 0 0 1 144 150.4c16-33.6 49.6-54.4 86.4-54.4H792c38.4 0 72 20.8 88 54.4 16 33.6 11.2 73.6-12.8 102.4L672 491.2v353.6c0 35.2-19.2 67.2-49.6 83.2-14.4 8-30.4 12.8-46.4 12.8zM230.4 160c-19.2 0-27.2 14.4-28.8 17.6s-8 19.2 4.8 33.6l203.2 248c4.8 6.4 8 12.8 8 20.8v284.8c0 11.2 6.4 20.8 14.4 27.2l128 80c14.4 9.6 27.2 3.2 32 1.6 4.8-3.2 16-11.2 16-27.2V480c0-8 3.2-14.4 8-20.8l203.2-248c11.2-14.4 6.4-30.4 4.8-33.6-1.6-4.8-9.6-17.6-28.8-17.6H230.4z" p-id="2136"></path>
                </svg>
            </div>
        </div>
    </div>

    <!-- 侧边栏 筛选 -->
    <div class="sidebar-shade" v-if="isSidebarShow" @click="isSidebarShow = false"></div>
    <div class="sidebar" v-bind:class="[isSidebarShow ? 'sidebar-show' : '']" >
        <div class="sidebar-content">
            <div class="sidebar-content-main">
                <!-- 一个块部分 -->
                <div 
                    class="sidebar-main-block"
                    v-for="(group, groupKey) in sidebarGroup" 
                    :key="groupKey"
                >
                    <div class="sidebar-block-title">{{group.title}}</div>
                    <!-- 模块下的列表 -->
                    <div class="sidebar-block-list">
                        <div 
                            class="sidebar-block-item"
                            :class="{'sidebar-item-selected': verifySidebarSelected(item.isSelected, listKey, group.isMultiple, group.selectedIndex)}"
                            v-for="(item, listKey) in group.list" 
                            :key="listKey"
                            @click="sidebarHandle(groupKey, listKey)"
                        >{{item.name}}</div>
                    </div>
                </div>
            </div>

            <!-- 底部按钮 -->
            <div class="sidebar-bottom flex-start">
                <div class="sidebar-bottom-left" @click="sidebarGroup = sidebardefault">重置</div>
                <div class="sidebar-bottom-right" @click="sidebarAffirm">确定</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'list',

    components: {
    },

    data () {
        return {
            isSidebarShow: false, // 侧边栏 - 是否显示
            sidebardefault: [{title:'电站筛选',isMultiple:true,selectedIndex:null,list:[{name:'有空闲',isSelected:true,},{name:'全时段开放',isSelected:false,},{name:'免费停车',isSelected:false,},{name:'地锁',isSelected:false,}]},{title:'充电方式',isMultiple:false,selectedIndex:null,list:[{name:'直流快充',isSelected:false,},{name:'交流快充',isSelected:false,},{name:'交流慢充',isSelected:false,}]}], // 侧边栏 - 重置的数据 
            sidebarGroup: [ // 侧边栏 - 数据
                {
                    title: '电站筛选',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '有空闲',
                            isSelected: true, // 是否选中
                        }, {
                            name: '全时段开放',
                            isSelected: false, // 是否选中
                        }, {
                            name: '免费停车',
                            isSelected: false, // 是否选中
                        }, {
                            name: '地锁',
                            isSelected: false, // 是否选中
                        }
                    ]
                }, {
                    title: '充电方式',
                    isMultiple: false, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '直流快充',
                            isSelected: false, // 是否选中
                        }, {
                            name: '交流快充',
                            isSelected: false, // 是否选中
                        }, {
                            name: '交流慢充',
                            isSelected: false, // 是否选中
                        }
                    ]
                }
            ]
        }
    },

    computed: {
    },

    methods: {
        /**
         * 侧边栏 - 点击 选中
         * @param {Number} groupKey 分模块的下标
         * @param {Number} listKey 分组的下标
         */
        sidebarHandle: function(groupKey, listKey) {
            let newSidebarGroup = this.sidebarGroup.concat(); // 复制一个新的数组
            newSidebarGroup[groupKey].selectedIndex = listKey; // 设置选中的下标
            newSidebarGroup[groupKey].list[listKey].isSelected = !newSidebarGroup[groupKey].list[listKey].isSelected; // 是否选中 设置为相反
            this.sidebarGroup = newSidebarGroup; // 新数组赋值进去
        },

        /**
         * 侧边栏 - 判断是否 选中
         * @param {Boolean} isSelected 当前 - 是否选中
         * @param {Number} targetIndex 当前 - 下标
         * @param {Boolean} isMultiple 模块 - 是否多选
         * @param {Number} selectedIndex 模块 - 选中的下标
         * @return {Boolean} 是否选中
         */
        verifySidebarSelected: function(isSelected, targetIndex, isMultiple, selectedIndex) {
            if (isMultiple) { // 多选
                // 当前选中就返回选中， 未选中就返回未选中
                return isSelected;
            } else { // 单选
                // 当前的下标 和 模块的下标相等则 表示选中, 不相等就返回未选中
                return targetIndex === selectedIndex
            }
        },

        /**
         * 侧边栏 - 点击确认
         */
        sidebarAffirm: function() {
            this.isSidebarShow = false; // 隐藏侧边栏
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 筛选 侧边栏 遮罩层 
@sidebar-shade-z-index: 1;
// 筛选 侧边栏 主要部分 
@sidebar-main-z-index: 2;

.list {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 排序 and 筛选栏
.list .filter {
    height: 40px;
    width: 100%;
    line-height: 40px;
    background: #fff;

    .filter-item {
        position: relative;
        font-size: 14px;
        color: @black2;
        width: 33.33%;

        // 筛选的SVG
        .filter-icon {
            position: relative;
            top: 2.5px;
        }
    }

    // 激活的模块
    .filter-activate-item {
        color: #5695ff;

        path {
            fill: #488cff;
        }
    }

    // 分割线
    .filter-item-line {
        position: absolute;
        right: 0px;
        width: 1px;
        height: 40px;

        span {
            display: block;
            height: 18px;
            width: 1px;
            background: #dddddd;
        }
    }
}

// 侧边栏 筛选
.list {
    // 整体框架部分
    .sidebar {
        position: fixed;
        top: 0px;
        right: -80%;
        height: 100%;
        width: 80%;
        transition: right 0.2s;
        -moz-transition: right 0.2s;	/* Firefox 4 */
        -webkit-transition: right 0.2s;	/* Safari 和 Chrome */
        -o-transition: right 0.2s;	/* Opera */
        background: #fff;
        z-index: @sidebar-main-z-index;

        .sidebar-content {
            min-height: 100%;
            position: relative;
        }
    }

    // 显示动画
    .sidebar-show {
        right: 0px;
    }

    // 遮罩
    .sidebar-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @sidebar-shade-z-index;
    }

    // 主要内容区域
    .sidebar .sidebar-content-main {
        padding: 15px 15px 65px 15px;

        // 一个块部分
        .sidebar-main-block {
            // 标题 
            .sidebar-block-title {
                font-size: 14px;
                color: @black3;
                padding-bottom: 10px;
            }

            // 列表
            .sidebar-block-list {
                overflow: hidden;

                > div {
                    float: left;
                }
            }

            // 项目 
            .sidebar-block-item {
                padding: 0px 5px;
                margin-bottom: 15px;
                margin-right: 15px;
                height: 35px;
                min-width: 100px;
                line-height: 35px;
                text-align: center;
                border: 1px solid #ddd;
                border-radius: 2.5px;
            }

            // 选中的项目
            .sidebar-item-selected {
                color: #a9c9ff;
                border: 1px solid #a9c9ff;
                background: #eef5ff;
            }
        }
    }

    // 底部按钮
    .sidebar .sidebar-bottom {
        position: absolute;
        bottom: 0px;
        height: 45px;
        width: 100%;

        > div {
            font-size: 14px;
            width: 50%;
            line-height: 45px;
            text-align: center;
        }

        .sidebar-bottom-left {
            border-top: 1px solid #ddd;
        }

        .sidebar-bottom-right {
            color: #fff;
            background: #5594ff;
        }
    }
}
</style>
