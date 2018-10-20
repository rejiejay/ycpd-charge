<!-- 
  - 列表页面 
  -->
<template>
<div class="list" id="list">

    <!-- 搜索框 -->
    <div class="search-bar flex-center">
        <div class="search-bar-content flex-start-center">
            <div class="search-bar-icon">
                <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="停车服务" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="停车场列表" transform="translate(-158.000000, -355.000000)" fill="#CCCCCC" fill-rule="nonzero"><g id="bar" transform="translate(0.000000, 328.000000)"><g id="search" transform="translate(30.000000, 12.000000)"><g id="icon" transform="translate(62.000000, 15.000000)"><path d="M80,26 C86.627417,26 92,20.627417 92,14 C92,7.372583 86.627417,2 80,2 C73.372583,2 68,7.372583 68,14 C68,20.627417 73.372583,26 80,26 Z M90.5814711,23.1672576 L97.7071068,30.2928932 C98.0976311,30.6834175 98.0976311,31.3165825 97.7071068,31.7071068 C97.3165825,32.0976311 96.6834175,32.0976311 96.2928932,31.7071068 L89.1672576,24.5814711 C86.7111356,26.7111846 83.5060773,28 80,28 C72.2680135,28 66,21.7319865 66,14 C66,6.2680135 72.2680135,0 80,0 C87.7319865,0 94,6.2680135 94,14 C94,17.5060773 92.7111846,20.7111356 90.5814711,23.1672576 Z" id="icon_search"></path></g></g></g></g></g>
                </svg>
            </div>
            <input v-model="searchModel" />
        </div>
    </div>

    <!-- 排序 and 筛选栏 -->
    <div class="filter flex-start">
        <div class="filter-item flex-center"
            v-bind:class="{'filter-activate-item' : (filterSelect === 'distance')}"
            @click="filterHandle('distance')"
        >
            <div class="filter-item-content">
                <span>距离最近</span>
                <svg width="10" height="10" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M6.84542978,14.5264945 L0.288775776,7.69230265 C-0.0935724214,7.29376997 -0.0804523013,6.66074094 0.318080384,6.27839274 C0.50428598,6.09974899 0.752340184,6 1.01038304,6 L14.9896198,6 C15.5419045,6 15.9896198,6.44771525 15.9896198,7 C15.9896198,7.25804285 15.8898708,7.50609706 15.711227,7.69230265 L9.15457301,14.5264945 C8.5428159,15.1641468 7.52996945,15.185139 6.89231715,14.5733819 C6.87636581,14.5580783 6.86073333,14.5424458 6.84542978,14.5264945 Z"></path>
                </svg>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center"
            v-bind:class="{'filter-activate-item' : (filterSelect === 'price')}"
            @click="filterHandle('price')"
        >
            <div class="filter-item-content">
                <span>价格最低</span>
                <svg width="10" height="10" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M6.84542978,14.5264945 L0.288775776,7.69230265 C-0.0935724214,7.29376997 -0.0804523013,6.66074094 0.318080384,6.27839274 C0.50428598,6.09974899 0.752340184,6 1.01038304,6 L14.9896198,6 C15.5419045,6 15.9896198,6.44771525 15.9896198,7 C15.9896198,7.25804285 15.8898708,7.50609706 15.711227,7.69230265 L9.15457301,14.5264945 C8.5428159,15.1641468 7.52996945,15.185139 6.89231715,14.5733819 C6.87636581,14.5580783 6.86073333,14.5424458 6.84542978,14.5264945 Z"></path>
                </svg>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center"  
            v-bind:class="{'filter-activate-item' : (filterSelect === 'filter')}"
            @click="isSidebarShow = true"
        >
            <div class="filter-item-content">
                <span>筛选</span>
                <svg v-if="filterSelect === 'filter'" class="filter-icon" width="14" height="14" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表-筛选后" transform="translate(-646.000000, -158.000000)" fill="#5594FF" fill-rule="nonzero"><g id="bar" transform="translate(0.000000, 128.000000)"><g id="icon" transform="translate(177.000000, 30.000000)"><path d="M477.002731,11.1592214 L469.780331,4.31458533 C468.778163,3.36483537 468.73567,1.78249339 469.68542,0.780325585 C470.157527,0.282162901 470.813674,1.0658141e-14 471.500006,1.0658141e-14 L488.500586,3.55271368e-15 C489.881298,3.55271368e-15 491.000586,1.11928813 491.000586,2.5 C491.000586,3.1863313 490.718423,3.84247877 490.22026,4.31458533 L482.99787,11.1592124 L482.99787,21.1906896 C482.99787,21.466832 482.774012,21.6906896 482.49787,21.6906896 C482.420192,21.6906896 482.343583,21.6725915 482.274118,21.6378307 L477.278979,19.1382361 C477.109667,19.0535113 477.002731,18.8804227 477.002731,18.691095 L477.002731,11.1592214 Z M480.99787,10.299153 L488.844521,2.86291707 C488.944153,2.76849575 489.000586,2.63726626 489.000586,2.5 C489.000586,2.22385763 488.776728,2 488.500586,2 L471.500006,2 C471.362739,2 471.23151,2.05643258 471.137089,2.15606512 C470.947139,2.35649868 470.955637,2.67296707 471.156071,2.86291707 L479.002731,10.299162 L479.002731,17.7643801 L480.99787,18.7627584 L480.99787,10.299153 Z M475.968497,4.87164707 C475.86314,4.77682584 475.802979,4.64174325 475.802979,4.5 C475.802979,4.22385763 476.026837,4 476.302979,4 L483.697021,4 C483.838764,4 483.973847,4.0601607 484.068668,4.16551763 C484.253397,4.37077264 484.236758,4.68691756 484.031503,4.87164707 L480.334482,8.19896587 C480.14433,8.37010311 479.85567,8.37010311 479.665518,8.19896587 L475.968497,4.87164707 Z" id="筛选"></path></g></g></g></g>
                </svg>
                <svg v-else class="filter-icon" width="14" height="14" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表" transform="translate(-646.000000, -158.000000)" fill="#999999" fill-rule="nonzero"><g id="bar" transform="translate(0.000000, 128.000000)"><g id="icon" transform="translate(177.000000, 30.000000)"><path d="M480.99787,10.299153 L488.844521,2.86291707 C488.944153,2.76849575 489.000586,2.63726626 489.000586,2.5 C489.000586,2.22385763 488.776728,2 488.500586,2 L471.500006,2 C471.362739,2 471.23151,2.05643258 471.137089,2.15606512 C470.947139,2.35649868 470.955637,2.67296707 471.156071,2.86291707 L479.002731,10.299162 L479.002731,17.7643801 L480.99787,18.7627584 L480.99787,10.299153 Z M477.002731,11.1592214 L469.780331,4.31458533 C468.778163,3.36483537 468.73567,1.78249339 469.68542,0.780325585 C470.157527,0.282162901 470.813674,7.10542736e-15 471.500006,7.10542736e-15 L488.500586,0 C489.881298,0 491.000586,1.11928813 491.000586,2.5 C491.000586,3.1863313 490.718423,3.84247877 490.22026,4.31458533 L482.99787,11.1592124 L482.99787,21.1906896 C482.99787,21.466832 482.774012,21.6906896 482.49787,21.6906896 C482.420192,21.6906896 482.343583,21.6725915 482.274118,21.6378307 L477.278979,19.1382361 C477.109667,19.0535113 477.002731,18.8804227 477.002731,18.691095 L477.002731,11.1592214 Z" id="筛选"></path></g></g></g></g>
                </svg>
            </div>
        </div>
    </div>

    <!-- 侧边栏 筛选 -->
    <div class="sidebar-shade" v-if="isSidebarShow" @click="isSidebarShow = false"></div>
    <div class="sidebar" v-bind:class="{'sidebar-show' : isSidebarShow}">
        <div class="sidebar-content-main">
            <div class="content-main-content">
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
        </div>

        <!-- 底部按钮 -->
        <div class="sidebar-bottom flex-start">
            <div class="sidebar-bottom-left" @click="sidebarReset">重置</div>
            <div class="sidebar-bottom-right" @click="sidebarAffirm">确定</div>
        </div>
    </div>

    <!-- 列表 -->
    <div class="list-content">
        <!-- 列表下的一个项 -->
        <div class="list-item"
            v-for="(item, key) in list" 
            :key="key"
            @click="jumpToDetail(item)"
        >
            <div class="list-item-content">

                <!-- 顶部 -->
                <div class="list-item-top flex-start">
                    <!-- 顶部 标题 -->
                    <div class="item-top-picture">
                        <img :src="item.picture" alt="充电站图片" />
                    </div>

                    <!-- 顶部 内容 -->
                    <div class="item-top-describe"
                        :style="'width: ' + (clientWidth - 95 ) + 'px;'"
                    >
                        <div class="top-describe-content">
                            <div class="describe-top-row1">{{item.title}}</div>
                            
                            <div class="describe-top-row2 flex-start">
                                <div class="item-top-address flex-rest">{{item.address}}</div>
                                <div class="item-top-distance">{{item.distance}}km</div>
                            </div>

                            <div class="describe-top-row3 flex-start-center">
                                <div class="top-row3-fast">快</div>
                                <span>空闲{{item.fastSpare}}/共{{item.fastCount}}</span>
                                <div class="top-row3-slow">慢</div>
                                <span>空闲{{item.slowSpare}}/共{{item.slowCount}}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 底部 -->
                <div class="list-item-bottom flex-start-center">
                    <div class="item-bottom-list"
                        :style="'width: ' + (clientWidth - 125 ) + 'px;'"
                    >
                        <div class="bottom-list-content">

                            <div class="bottom-list-item">
                                <div class="bottom-item-content">
                                    <span
                                        :style="item.isSpare ? 'border-color: #00B90A; color: #00B90A;' : 'border-color: #E50012; color: #E50012;'"
                                    >
                                        {{item.isSpare ? '有空闲' : '无空闲'}}
                                    </span>
                                </div>
                            </div>

                            <div class="bottom-list-item"
                                v-for="(tag, tagkey) in item.tags" 
                                :key="tagkey"
                            >
                                <div class="bottom-item-content">
                                    <span>{{tag}}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="item-bottom-navigation">
                        <div class="bottom-navigation-content flex-center">
                            <div class="bottom-navigation flex-start-center"
                                @click="jumpToWxMap($event, key)"
                            >
                                <svg width="14" height="14" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表" transform="translate(-599.000000, -495.000000)" stroke="#5594FF" stroke-width="2"><g id="电站1" transform="translate(0.000000, 218.000000)"><g id="导航btn" transform="translate(566.000000, 259.000000)"><rect id="Rectangle-Copy" x="1" y="1" width="152" height="62" rx="31"></rect><path d="M47,20.734838 L37.9369628,43.8043872 L47,38.8609124 L56.0630372,43.8043872 L47,20.734838 Z" id="Triangle-3"></path></g></g></g></g>
                                </svg>
                                <span>导航</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 扫码充电 -->
    <div class="scan flex-center">
        <div class="flex-start-center">
            <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表" transform="translate(-295.000000, -1258.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="扫码充电" transform="translate(215.000000, 1234.000000)"><g id="Group-2" transform="translate(80.000000, 24.000000)">
                <path d="M2,9 L2,4 C2,2.34314575 3.34314575,1 5,1 L10,1 C10.5522847,1 11,1.44771525 11,2 L11,2 C11,2.55228475 10.5522847,3 10,3 L5,3 C4.44771525,3 4,3.44771525 4,4 L4,9 C4,9.55228475 3.55228475,10 3,10 L3,10 C2.44771525,10 2,9.55228475 2,9 Z M3,22 L3,22 C3.55228475,22 4,22.4477153 4,23 L4,28 C4,28.5522847 4.44771525,29 5,29 L10,29 C10.5522847,29 11,29.4477153 11,30 L11,30 C11,30.5522847 10.5522847,31 10,31 L5,31 C3.34314575,31 2,29.6568542 2,28 L2,23 C2,22.4477153 2.44771525,22 3,22 Z M31,10 L31,10 C30.4477153,10 30,9.55228475 30,9 L30,4 C30,3.44771525 29.5522847,3 29,3 L24,3 C23.4477153,3 23,2.55228475 23,2 L23,2 C23,1.44771525 23.4477153,1 24,1 L29,1 C30.6568542,1 32,2.34314575 32,4 L32,9 C32,9.55228475 31.5522847,10 31,10 Z M32,23 L32,28 C32,29.6568542 30.6568542,31 29,31 L24,31 C23.4477153,31 23,30.5522847 23,30 C23,29.4477153 23.4477153,29 24,29 L29,29 C29.5522847,29 30,28.5522847 30,28 L30,23 C30,22.4477153 30.4477153,22 31,22 C31.5522847,22 32,22.4477153 32,23 Z M3,15 L31,15 C31.5522847,15 32,15.4477153 32,16 C32,16.5522847 31.5522847,17 31,17 L3,17 C2.44771525,17 2,16.5522847 2,16 C2,15.4477153 2.44771525,15 3,15 Z" id="Combined-Shape"></path></g></g></g></g>
            </svg>
            <span>扫码充电</span>
        </div>
    </div>

    <!-- 计费详情模态框 -->
    <div class="list-cost-modal flex-center" v-if="costModal.isShow">
        <div class="cost-modal-shade" @click="costModal.isShow = false"></div>

        <div class="cost-modal-main">
            <div class="modal-main-content">
                <!-- 模态框 标题 -->
                <div class="modal-main-title flex-start-center">
                    <div class="flex-rest">计费详情</div>
                    <div class="main-title-close" @click="costModal.isShow = false">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表-计费详情" transform="translate(-591.000000, -519.000000)" fill="#666666" fill-rule="nonzero"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(105.000000, 339.000000)"><g id="icon" transform="translate(30.000000, 52.000000)"><path d="M468,10.5857864 L478.292893,0.292893219 C478.683418,-0.0976310729 479.316582,-0.0976310729 479.707107,0.292893219 C480.097631,0.683417511 480.097631,1.31658249 479.707107,1.70710678 L469.414214,12 L479.707107,22.2928932 C480.097631,22.6834175 480.097631,23.3165825 479.707107,23.7071068 C479.316582,24.0976311 478.683418,24.0976311 478.292893,23.7071068 L468,13.4142136 L457.707107,23.7071068 C457.316582,24.0976311 456.683418,24.0976311 456.292893,23.7071068 C455.902369,23.3165825 455.902369,22.6834175 456.292893,22.2928932 L466.585786,12 L456.292893,1.70710678 C455.902369,1.31658249 455.902369,0.683417511 456.292893,0.292893219 C456.683418,-0.0976310729 457.316582,-0.0976310729 457.707107,0.292893219 L468,10.5857864 Z" id="icon_close"></path></g></g></g></g></g>
                        </svg>
                    </div>
                </div>
                <!-- 模态框 内容 -->
                <div class="modal-main-describe">
                    <div class="main-describe-row1 flex-start">
                        <div class="describe-row-left flex-start-center">
                            <svg width="16" height="16" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表-计费详情" transform="translate(-135.000000, -606.000000)" fill="#979797" fill-rule="nonzero"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(105.000000, 339.000000)"><g id="icon" transform="translate(30.000000, 52.000000)"><path d="M4,87 L24,87 C26.209139,87 28,88.790861 28,91 L28,111 C28,113.209139 26.209139,115 24,115 L4,115 C1.790861,115 0,113.209139 0,111 L0,91 C0,88.790861 1.790861,87 4,87 Z M4,89 C2.8954305,89 2,89.8954305 2,91 L2,111 C2,112.104569 2.8954305,113 4,113 L24,113 C25.1045695,113 26,112.104569 26,111 L26,91 C26,89.8954305 25.1045695,89 24,89 L4,89 Z M9.5527864,100.906233 C8.94228822,100.635121 8.81025202,99.9124676 9.29289322,99.4838006 L16.2928932,93.2666173 C17.0714581,92.5751201 18.3528726,93.3456599 17.919145,94.2445146 L15.2905735,99.6919515 L18.4472136,101.093767 C19.0577118,101.364879 19.189748,102.087532 18.7071068,102.516199 L11.7071068,108.733383 C10.9285419,109.42488 9.64712736,108.65434 10.080855,107.755485 L12.7094265,102.308048 L9.5527864,100.906233 Z" id="icon_Ele"></path></g></g></g></g></g>
                            </svg>
                            <span>电费:</span>
                        </div>
                        <div class="describe-row-right">
                            {{costModal.electricPrice}}
                        </div>
                    </div>
                    <div class="main-describe-row2 flex-start">
                        <div class="describe-row-left flex-start-center">
                            <svg width="16" height="16" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表-计费详情" transform="translate(-135.000000, -664.000000)" fill="#979797" fill-rule="nonzero"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(105.000000, 339.000000)"><g id="icon" transform="translate(30.000000, 52.000000)"><path d="M4,145 L24,145 C26.209139,145 28,146.790861 28,149 L28,169 C28,171.209139 26.209139,173 24,173 L4,173 C1.790861,173 0,171.209139 0,169 L0,149 C0,146.790861 1.790861,145 4,145 Z M4,147 C2.8954305,147 2,147.895431 2,149 L2,169 C2,170.104569 2.8954305,171 4,171 L24,171 C25.1045695,171 26,170.104569 26,169 L26,149 C26,147.895431 25.1045695,147 24,147 L4,147 Z M10,165.929742 C7.60879452,164.546505 6,161.961129 6,159 C6,154.581722 9.581722,151 14,151 C18.418278,151 22,154.581722 22,159 C22,161.961129 20.3912055,164.546505 18,165.929742 L18,167 C18,167.552285 17.5522847,168 17,168 L17,169 C17,169.552285 16.5522847,170 16,170 C16,170.552285 15.5522847,171 15,171 L13,171 C12.4477153,171 12,170.552285 12,170 C11.4477153,170 11,169.552285 11,169 L11,168 C10.4477153,168 10,167.552285 10,167 L10,165.929742 Z M14,165 C17.3137085,165 20,162.313708 20,159 C20,155.686292 17.3137085,153 14,153 C10.6862915,153 8,155.686292 8,159 C8,162.313708 10.6862915,165 14,165 Z M13,167 L13,168 L15,168 L15,167 L13,167 Z" id="icon_Servicefee"></path></g></g></g></g></g>
                            </svg>
                            <span>服务费:</span>
                        </div>
                        <div class="describe-row-right">
                            {{costModal.servicePrice}}
                        </div>
                    </div>
                    <div class="main-describe-row3 flex-start">
                        <div class="describe-row-left flex-start-center">
                            <svg width="16" height="16" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站列表-计费详情" transform="translate(-135.000000, -722.000000)" fill="#979797" fill-rule="nonzero"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(105.000000, 339.000000)"><g id="icon" transform="translate(30.000000, 52.000000)"><path d="M4,203 L24,203 C26.209139,203 28,204.790861 28,207 L28,227 C28,229.209139 26.209139,231 24,231 L4,231 C1.790861,231 0,229.209139 0,227 L0,207 C0,204.790861 1.790861,203 4,203 Z M4,205 C2.8954305,205 2,205.895431 2,207 L2,227 C2,228.104569 2.8954305,229 4,229 L24,229 C25.1045695,229 26,228.104569 26,227 L26,207 C26,205.895431 25.1045695,205 24,205 L4,205 Z M8,209 L15.5,209 C18.5375661,209 21,211.462434 21,214.5 C21,217.537566 18.5375661,220 15.5,220 L10,220 L10,227 L8,227 L8,209 Z M10,218 L15.5,218 C17.4329966,218 19,216.432997 19,214.5 C19,212.567003 17.4329966,211 15.5,211 L10,211 L10,218 Z" id="icon_parking"></path></g></g></g></g></g>
                            </svg>
                            <span>停车费:</span>
                        </div>
                        <div class="describe-row-right">
                            {{costModal.parkPrice}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import ajaxs from '@/api/list/index';
import initLocation from '@/components/initLocation';
import { Indicator, MessageBox } from 'mint-ui';

export default {
    name: 'list',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            isLoding: false, // 页面是否正在请求

            longitude: 114.059560, // 经度
            latitude: 22.542860, // 纬度

            searchModel: '', // 搜索框

            /**
             * 排序筛选栏
             * @param {String} distance 距离最近 默认
             * @param {String} price 价格最低
             * @param {String} filter 筛选
             */
            filterSelect: 'distance', 

            isSidebarShow: false, // 侧边栏 - 是否显示
            sidebardefault: [ // 侧边栏 - 重置的数据 
                {
                    title: '电站筛选',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '有空闲',
                            isSelected: false, // 是否选中
                        }, {
                            name: '全时段开放',
                            isSelected: false, // 是否选中
                        },
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
                            name: '交流慢充',
                            isSelected: false, // 是否选中
                        }
                    ]
                }
            ],
            sidebarGroup: [], // 侧边栏 - 数据

            pageIndex: 1, // 显示的页码 非必填 默认 1
            pageSize: 20, // 每页显示的数量 非必填 默认 20
            pageCount: 1, // 一共多少页
            list: [ // 充电站列表
                // {
                //     title: '深圳信挚工业一期充电站',
                //     picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/list-test.png',
                //     address: '坂田街道中兴路信挚工业园',
                //     distance: 0.39, // 距离 单位km
                //     fastSpare: 2, // 快充设备 - 目前空闲
                //     fastCount: 3, // 快充设备 - 总数
                //     slowSpare: 2, // 慢充设备 - 目前空闲
                //     slowCount: 3, // 慢充设备 - 总数
                //     price: 1.82, // 价格 元/度
                //     longitude: '114.0595600000', // 充电桩所在 - 经度
                //     latitude: '22.5428600000', // 充电桩所在 - 维度
                //     isSpare: true, // 是否空闲
                //     tags: [ // 标签
                //         '全段时间开放',
                //         '含快充',
                //         '免费停车',
                //     ],
                //     // 计费详情的字段
                //     electricPrice: '1.22元/度', // 电费
                //     servicePrice: '0.6元/度', // 服务费
                //     parkPrice: '半小时内免费，首小时10元，之后每小时5元，最高20元。', // 停车费
                // }
            ],

            costModal: { // 计费详情 模态框
                isShow: false, // 是否显示
                electricPrice: '1.22元/度', // 电费
                servicePrice: '0.6元/度', // 服务费
                parkPrice: '半小时内免费，首小时10元，之后每小时5元，最高20元。', // 停车费
            }
        }
    },

    mounted: function () {
        this.sidebarGroup = JSON.parse(JSON.stringify(this.sidebardefault));
        this.getLocation(); // 初始化位置信息

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

    methods: {
        /**
         * 获取位置信息
         */
        getLocation: function () {
            const _this = this;

            Indicator.open('加载位置信息...');
            initLocation()
            .then(
                location => {
                    Indicator.close();
                    _this.longitude = location.longitude; // 设置经度
                    _this.latitude = location.latitude; // 设置纬度
                    _this.getStationList({
                        longitude: location.longitude, 
                        latitude: location.latitude
                    });
                }, error => {
                    Indicator.close();
                    MessageBox.confirm('获取位置信息失败, 是否重新获取?')
                    .then(action => {
                        _this.getLocation();
                    }, error => {
                        // 使用中国广东省深圳市福田区的经纬度
                        _this.getStationList({
                            longitude: 114.059560, 
                            latitude: 22.542860
                        });
                    });
                }
            );
        },

        /**
         * 获取充电桩列表
         * @param {String || Number} longitude 经度
         * @param {String || Number} latitude 纬度
         * @param {Number} namekey 名称关键字筛选 非必填
         * @param {Number} orderType 排序方式 非必填 0 : 是距离排序  1 : 电费价格排序
         * @param {Number} pageIndex 请求的页码 非必填 默认 1
         * @param {Number} pageSize 每页显示的数量 非必填 默认 20
         * @param {Boolean} isPageAdd 页面是否新增
         */
        getStationList: function getStationList(parameter, isPageAdd) {
            const _this = this;
            /**
             * 将服务器的数据转换为列表数据
             */
            let transverter = function (value) {
                // 判断是否存在
                if (value) {
                    return value.map((val, key) => {
                        let tags = [];
                        val.IsOpenAllHours === '1' ? tags.push('全时段开放') : null;
                        val.IsFreeParking === '1' ? tags.push('免费停车') : null;
                        val.IsContainFastCharge === '1' ? tags.push('含快充') : null;

                        return {
                            id: val.ID, // 充电桩的唯一标识
                            title: val.StationName,
                            picture: val.Pictures ? val.Pictures : 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/list-test.png',
                            distance: val.distance,
                            address: val.Address,
                            fastSpare: val.FastChargeCountOff, // 快充设备 - 目前空闲
                            fastCount: val.FastChargeCount, // 快充设备 - 总数
                            slowSpare: val.SlowChargeCountOff, // 慢充设备 - 目前空闲
                            slowCount: val.SlowChargeCount, // 慢充设备 - 总数
                            price: 1.82, // 价格 元/度
                            longitude: val.StationLng, // 充电桩所在 - 经度
                            latitude: val.StationLat, // 充电桩所在 - 维度
                            isSpare: val.IsOff === '1', // 是否空闲
                            tags: tags,

                            // 计费详情的字段
                            electricPrice: val.ElectricityFee, // 电费
                            servicePrice: val.ServiceFee, // 服务费
                            parkPrice: val.ParkFee, // 停车费
                        }
                    });
                } else {
                    return [];
                }
            }
            // 初始化请求参数
            let param = `longitude=${parameter.longitude}&latitude=${parameter.latitude}&pageIndex=${parameter.pageIndex ? parameter.pageIndex : 1}&pageSize=${parameter.pageSize ? parameter.pageSize : 20}`;

            // 关键字搜索 如果传值进来，优先使用传值 如果未传值
            parameter.namekey ? param += `&namekey=${parameter.namekey}` : null;
            /**
             * 排序方式 非必填 0 : 是距离排序  1 : 电费价格排序
             * 注意不能传 0 值, 因为下面的语法会判断不出来
             */
            parameter.orderType ? param += `&orderType=${parameter.orderType}` : null;

            /**
             * 侧边栏 筛选 有空闲 1 表示有空闲 0 表示没有
             */
            if (parameter.IsOff && parameter.IsOpenAllHours && parameter.IsContainFastCharge && parameter.IsContainSlowCharge) {
                parameter.IsOff ? param += `&IsOff=${parameter.IsOff}` : null;
                parameter.IsOpenAllHours ? param += `&IsOpenAllHours=${parameter.IsOpenAllHours}` : null;
                parameter.IsContainFastCharge ? param += `&IsContainFastCharge=${parameter.IsContainFastCharge}` : null;
                parameter.IsContainSlowCharge ? param += `&IsContainSlowCharge=${parameter.IsContainSlowCharge}` : null;
            }

            Indicator.open('获取充电桩列表...');
            ajaxs.GetStationList(param)
            .then(
                val => {
				    _this.isLoding = false; // 页面退出加载状态
                    Indicator.close();
                    // 初始化页数
                    _this.pageCount = val.PageCount; 
                    // 初始化充电站列表
                    
                    if (isPageAdd) { // 判断是否新增
                        _this.list = _this.list.concat(transverter(val.Data));
                    } else {
                        _this.list = transverter(val.Data);
                    }
                }, error => {
				    _this.isLoding = false; // 页面退出加载状态
                    Indicator.close();
                    alert(error);
                }
            )
        },

        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {
			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = document.getElementById('list').clientHeight; // 页面的总高度
			let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离

			if (
				screenHeight + myScrollTop >= clientHeight - 50 && // (屏幕高度 + 滚动的距离) 必须 (大于整个页面的总高度 - 50像素的预留空间)
				this.isLoding === false && // 并且页面不是请求状态
				this.pageIndex < this.pageCount // 并且 目前的页码 必须小于 总页码
			) {
				this.isLoding = true; // 页面进入加载状态，防止重复加载
                this.pageIndex = this.pageIndex + 1; // 请求的页码 加一
                // 请求获取充电桩列表
				this.getStationList(
                    {
                        longitude: this.longitude, // 使用页面初始化缓存的 经度 信息
                        latitude: this.latitude, // 使用页面初始化缓存的 纬度 信息
                        namekey: this.searchModel, // 搜索框的数据
                        orderType: this.filterSelect === 'distance' ? '0' : '1', // 排序方式必须要保持 0 : 是距离排序  1 : 电费价格排序
                        pageIndex: this.pageIndex, // 请求的页码
                    }, true
                ); // 开始请求 并且 该请求 设置为 新增stores列表
			}
		},

        /**
         * 订单检测提醒
         * @param {number} orderCount 订单数量
         */
        orderRemind: function (orderCount) {
            MessageBox({
                message: `您有${orderCount}个正在充电的订单`,
                showCancelButton: true, // 是否显示取消按钮
                confirmButtonText: '查看',  // 确认按钮的文本
                cancelButtonText: '继续预约',  // 取消按钮的文本
            })
            .then(action => {
                if (action === 'confirm') {

                } else {

                }
            });
        },
        
        /**
         * 排序 and 筛选栏
         * @param {String} condition 排序的条件
         */
        filterHandle: function (condition) {
            const _this = this;
            // 距离最近
            if (condition === 'distance') {
                this.getStationList({
                    longitude: this.longitude, // 使用页面初始化缓存的 经度 信息
                    latitude: this.latitude, // 使用页面初始化缓存的 纬度 信息
                    namekey: this.searchModel, // 搜索框的必须要保持
                    orderType: "0", // 排序方式 0 : 是距离排序  1 : 电费价格排序
                });
                this.filterSelect = 'distance';
            }

            // 价格最低
            if (condition === 'price') {
                this.getStationList({
                    longitude: this.longitude, // 使用页面初始化缓存的 经度 信息
                    latitude: this.latitude, // 使用页面初始化缓存的 纬度 信息
                    namekey: this.searchModel, // 搜索框的必须要保持
                    orderType: "1", // 排序方式 0 : 是距离排序  1 : 电费价格排序
                });
                this.filterSelect = 'price';
            }
        },

        /**
         * 侧边栏 - 点击 选中
         * @param {Number} groupKey 分模块的下标
         * @param {Number} listKey 分组的下标
         */
        sidebarHandle: function(groupKey, listKey) {
            let newSidebarGroup = this.sidebarGroup.concat(); // 复制一个新的数组

            // 是否选中 设置为相反
            newSidebarGroup[groupKey].list[listKey].isSelected = !newSidebarGroup[groupKey].list[listKey].isSelected; 
            
            // 设置选中的下标
            if (newSidebarGroup[groupKey].selectedIndex === listKey) {
                // 如果选中的下标就是当前的下标
                newSidebarGroup[groupKey].selectedIndex = false; // 
            } else {
                newSidebarGroup[groupKey].selectedIndex = listKey; 
            }
            
            this.sidebarGroup = newSidebarGroup; // 新数组赋值进去
        },

        /**
         * 侧边栏渲染 - 判断是否 选中
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
                return targetIndex === selectedIndex;
            }
        },

        /**
         * 侧边栏 - 点击重置
         */
        sidebarReset: function() {
            this.sidebarGroup = JSON.parse(JSON.stringify(this.sidebardefault)); // 重置渲染数据
            this.filterSelect = 'distance'; // 排序筛选栏 设置为 距离排序
            this.getStationList({
                longitude: this.longitude, // 使用页面初始化缓存的 经度 信息
                latitude: this.latitude, // 使用页面初始化缓存的 纬度 信息
            });
            this.isSidebarShow = false; // 隐藏侧边栏
        },

        /**
         * 侧边栏 - 点击确认
         */
        sidebarAffirm: function() {
            
            this.filterSelect = 'filter'; // 排序筛选栏 设置为 筛选排序
            this.isSidebarShow = false; // 隐藏侧边栏

            this.getStationList({
                longitude: this.longitude, // 使用页面初始化缓存的 经度 信息
                latitude: this.latitude, // 使用页面初始化缓存的 纬度 信息
                
                IsOff: this.sidebarGroup[0].list[0].isSelected ? '1' : '0' , // 有空闲 1 表示有空闲 0 表示没有
                IsOpenAllHours: this.sidebarGroup[0].list[1].isSelected ? '1' : '0' , // 全时段开放 1 表示有空闲 0 表示没有
                IsContainFastCharge: this.sidebarGroup[1].selectedIndex === 0 ? '1' : '0' , // 全时段开放 1 表示有空闲 0 表示没有
                IsContainSlowCharge: this.sidebarGroup[1].selectedIndex === 1 ? '1' : '0' , // 全时段开放 1 表示有空闲 0 表示没有
            });
        },

        /**
         * 计费详情 - 点击弹出模态框
         * @param {Number} event 事件
         * @param {Number} key 列表下的一个项的下标
         */
        showCostModal: function(event, key) {
            this.costModal = {
                isShow: true,
                electricPrice: this.list[key].electricPrice,
                servicePrice: this.list[key].servicePrice,
                parkPrice: this.list[key].parkPrice,
            }

            // 阻止事件冒泡以及阻止默认行为
            event.stopPropagation();
            event.preventDefault();
            return false 
        },

        /**
         * 跳转到微信导航页面
         * @param {Number} event 事件
         * @param {Number} key 列表下的一个项的下标
         */
        jumpToWxMap(event, key) {
            let longitude = this.list[key].longitude;
            let latitude = this.list[key].latitude;
            let name = this.list[key].title;
            let address = this.list[key].address;
            window.location.href = `http://kf.szpiccxxjsb.cn/wxapi/map/map.html?lat=${latitude}&lng=${longitude}&type=bd&name=${name}&address=${address}`; 
            
            // 阻止事件冒泡以及阻止默认行为
            event.stopPropagation();
            event.preventDefault();
            return false 
        },

        /**
         * 跳转到详情页面
         * @param {Object} item 充电桩的一个列表
         */
        jumpToDetail(item) {
            this.$router.push({ path: `/list/detail/${item.id}`, query: item });
        },
    },

    // 侦听器
    watch: {
        searchModel: function (newSearchModel, oldSearchModel) {
            this.getStationList({
                longitude: this.longitude, // 使用页面初始化缓存的 经度 信息
                latitude: this.latitude, // 使用页面初始化缓存的 纬度 信息
                namekey: newSearchModel, // 搜索框的数据
                orderType: this.filterSelect = 'distance' ? '0' : '1', // 排序方式必须要保持 0 : 是距离排序  1 : 电费价格排序
            });
        },
    }
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
@sidebar-bottom-z-index: 3;
// 计费详情 模态框 主要部分 
@cost-modal-content-z-index: 1;
@cost-modal-shade-z-index: 2;
@cost-modal-main-z-index: 3;
@cost-modal-main-close-z-index: 4;

.list {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 搜索框
.list .search-bar {
    height: 45px;
    padding: 0px 15px;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .search-bar-content {
        height: 30px;
        width: 100%;
        border: 1px solid #efefef;
        border-radius: 2.5px;
        background: #f5f5f5;
    }

    .search-bar-icon {
        padding: 0px 10px;
    }

    input {
        width: 95%;
        padding: 0px 2.5px;
        border: none;
        outline: none;
        font-size: 16px;
        color: #909399;
        background-color: transparent;
    }
    
    input::-webkit-input-placeholder,
    input::-moz-placeholder,   /* Mozilla Firefox 19+ */
    input:-moz-placeholder,  /* Mozilla Firefox 4 to 18 */
    input:-ms-input-placeholder { /* Internet Explorer 10-11 */ 
        color: #909399;
    }
}

// 排序筛选按钮
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

        .content-main-content {
            padding: 15px 15px 65px 15px;
        }

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
        z-index: @sidebar-bottom-z-index;

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

// 列表
.list .list-content {
    // 列表下的一个项
    .list-item {
        padding-top: 5px;

        .list-item-content {
            padding-top: 15px;
            padding-left: 15px;
            background: #fff;
        }

        // 顶部
        .list-item-top {
            padding-bottom: 15px ;

            // 顶部 -> 标题
            .item-top-picture {
                width: 80px;
                height: 60px;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }

            // 顶部 -> 内容
            .item-top-describe {

                .top-describe-content {
                    padding: 0px 15px;
                }

                .describe-top-row1 {
                    padding-bottom: 7.5px;
                    color: @black1;
                    font-size: 16px;
                    font-weight: bold;
                }

                .describe-top-row2 {
                    font-size: 12px;
                    color: @black3;
                    padding-bottom: 5px;

                    .item-top-address {
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }

                .describe-top-row3 {
                    font-size: 13px;
                    color: @black2;
                    padding-bottom: 10px;

                    div {
                        padding: 0px 1.5px;
                        border-radius: 1.5px;
                        color: #fff;
                    }

                    span {
                        padding-left: 2.5px;
                        padding-right: 15px;
                    }
                    
                    .top-row3-fast {
                        font-size: 10px;
                        background: #00B90A;
                    }
                    
                    .top-row3-slow {
                        font-size: 10px;
                        background: #FF8D18;
                    }
                }

                .describe-top-row4 {
                    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
                    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
                    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
                    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
                    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
                    justify-content: flex-start;
                    align-items: flex-end;
                    font-size: 12px;

                    .top-row4-price {
                        font-size: 12px;
                        color: @black3;
                        padding-right: 35px;

                        span {
                            padding-right: 1.5px;
                            font-size: 18px;
                            color: #5594FF;
                        }
                    }

                    .top-row4-details {

                        .row4-details-icon {
                            border: none;
                            width: 14px;
                            height: 14px;
                        }

                        span {
                            color: #5594FF;
                            padding-left: 1.5px;
                        }
                    }
                }
            }
        }

        // 底部
        .list-item-bottom {
            border-top: 1px solid #ddd;
            height: 50px;

            // 底部 -> 列表
            .item-bottom-list {
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;
                height: 23px; 

                .bottom-list-content {
                    float: left;
                    height: 23px; 
                }

                .bottom-list-item {
                    display: inline-block;
                    height: 23px; 

                    .bottom-item-content {
                        font-size: 12px;
                        color: #5594FF;
                        padding-right: 5px;

                        span {
                            padding: 0px 7.5px;
                            height: 20px;
                            border-radius: 20px;
                            border-width: 1px;
                            border-style: solid;
                            border-color: #5594FF;
                            display: block;
                            line-height: 20px;
                        }
                    }
                }
            }

            // 底部 -> 按钮
            .item-bottom-navigation {
                padding-left: 15px;

                .bottom-navigation-content {
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    border-radius: 30px;
                    border: 1px solid #5594FF;
                    color: #5594FF;
                }

                span {
                    padding-left: 1.5px;
                }
            }
        }
    }
}

// 计费详情 模态框
.list .list-cost-modal {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: @cost-modal-content-z-index;

    .cost-modal-shade {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @cost-modal-shade-z-index;
    }

    // 模态框 -> 内容区域
    .cost-modal-main {
        position: relative;
        min-height: 185px;
        width: 80%;
        border-radius: 10px;
        background: #fff;
        z-index: @cost-modal-main-z-index;

        .modal-main-content {
            padding: 15px;
        }

        // 模态框 标题
        .modal-main-title {
            position: relative;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;

            .flex-rest {
                font-size: 14px;
                color: @black1;
                font-weight: bold;
            }

            .main-title-close {
                position: relative;
                z-index: @cost-modal-main-close-z-index;
            }
        }

        // 模态框 内容
        .modal-main-describe {
            font-size: 14px;
            padding-top: 15px;

            > div {
                display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
                display: -moz-box;     /* 老版本语法: Firefox (buggy) */
                display: -ms-flexbox;  /* 混合版本语法: IE 10 */
                display: -webkit-flex; /* 新版本语法: Chrome 21+ */
                display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
                justify-content: flex-start;
                align-items: flex-start;
                padding-bottom: 10px;
            }

            .describe-row-left {
                width: 75px;

                span {
                    padding-left: 5px;
                }
            }

            .describe-row-right {
                float: left;
                width: 65%;
            }
        }
    }
}

// 扫码充电
.list .scan {
    position: fixed;
    bottom: 10px;
    left: 50%;
    margin-left: -80px;
    width: 160px;
    height: 40px;
    border-radius: 40px;
    
    background: -webkit-linear-gradient(top, #61ADFF, #5594FF); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(top, #61ADFF, #5594FF); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(top, #61ADFF, #5594FF); /* Firefox 3.6 - 15 */
    background: linear-gradient(top, #61ADFF, #5594FF); /* 标准的语法 */

    span {
        padding-left: 5px;
        font-size: 14px;
        color: #fff;
    }
}

</style>
