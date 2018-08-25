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

    <!-- 列表 -->
    <div class="list-content">
        <!-- 列表下的一个项 -->
        <div class="list-item"
            v-for="(item, key) in list" 
            :key="key"
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
                            <div class="describe-top-row4">
                                <div class="top-row4-price"><span>{{item.price}}</span>元/度</div>
                                <div class="top-row4-details flex-start-center"  @click="showCostModal">
                                    <div class="row4-details-icon" style="background-size: 14px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADuklEQVRoQ+2ZT2gcdRTHP2/StAQTL9ZEgoLFUrWCN6HHeFIjRAPuRGkvVo3tbnLQqzStEa8iZmcD8d9FD9kppA20tqfkWPAoLTa0WGgIbdVLEimt6TyZaWadnezO7szsulnJXH+/3/u973vf9+83Qpt/0ub6swOg1R6UkYK+5jjMAE+2WpnQ/cuGwehsVn6K0ksyeb25DZX3dV62x+Sp/zeAtqfQNuN9bHV20mhskzX4wI4H6jVopqi75U9exmFIlYMC/Sr0u+dFWVFYEeEKBvP6GAu2Kffrkd10D2QsfQJhQhwOKzxap1KravAjyqSdk1uRdaAegUn2jJ/XPbd/4xOUjxUeSSJD4C+EL/r28fnUoNyrJKMpHnCtLjCnyqEkiofPiHBJYbiSNxoO4J2CvrjhcK5Ke7IscFYMzrGL687frLjKGp30s8Ez6vC6whvVztLJoP2h/BIE2FAAHt+Vn8MKiBugBiedvXxvm/IgyiuZonYYf/CuOnyqPAzywLeM8FLQEw0DsMn5xQq0me/p4sh378laHDod/VZ71u7yAzBUZnHhUt8+BvyYaBgA09JJVU6ELvvqYJaPTok4cZT3955SNa5YfKkwHpL7WTEnE14KTtDMbenTvaBVroWyzfwLOYarKR+4l6i+3wVx2WIu6Ak3O6mw36VS0nmgrE83LZ1W5ZhvJZfz3V08F0Wb0BwS2fe7dFq/y69lMWEwbWclmxqAV2Hv8HuwSBkGH8xm5ZvIYM2rBtftMYmk80hB33ccvg4YaVV7eTw1hcxpfUUfcKEsU/TydM1sExOAm524w41ghpMOXk0dxKallirZgGWs4piM1QraTEwArjwzr3mFXOkuoZAaQCavC8CAL9QwGKw1iLt7kwDYDPzzAeMspgZg5vWqwoESgN08OzsqS83wwMiMHnDuczXg7aXUADKWrqF0lxQWeuycrMcFgPC2nZPZyMC3tBvl34IorLcSQPlzjuC2GIejQGxW59WAsdZSA0hKIbOgb6pyGqUjoFAkiOZQKGEQe4Fs6Qh4g0tdIJoTxAnTqG/1OCCakkaTFrJgsFYDIcJbxayc8bzVrEKWtJUIZ5uKIKDUI1VtJWqlu3rWMwUt4HA8TjNXSW4FEB6AyGauHgVr7UnSTleT6WUnhyl33W2znz/Oxch2OsE84N9dNhe0bKBJ+X+gxNGWjZSNArCZ1//7ob5RFPJ51dbPKoHi1L4PWz6Itn5aDFXZ9nzc3VJp2/V5vVYRTLueeh5Iq0Da8zsA0low7fl/AETYZ0QvyjTxAAAAAElFTkSuQmCC)"></div>
                                    <span>计费详情</span>
                                </div>
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
                                        :style="item.isSpare ? 'border-color: #5594FF; color: #5594FF;' : 'border-color: #E50012; color: #E50012;'"
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
                            <div class="bottom-navigation flex-start-center">
                                <svg width="18" height="18" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

    <!-- 计费详情模态框 -->
    <div class="list-cost-modal flex-center" v-if="costModal.isShow">
        <div class="cost-modal-shade" @click="costModal.isShow = false"></div>

        <div class="cost-modal-main">
            <div class="modal-main-content">
                <!-- 模态框 标题 -->
                <div class="modal-main-title flex-start-center">
                    <div class="flex-rest">计费详情</div>
                    <div @click="costModal.isShow = false">
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

export default {
    name: 'list',

    components: {
    },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            isSidebarShow: false, // 侧边栏 - 是否显示
            sidebardefault: [ // 侧边栏 - 重置的数据 
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
            ],
            sidebarGroup: [], // 侧边栏 - 数据

            list: [ // 充电站列表
                {
                    title: '深圳信挚工业一期充电站',
                    picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/list-test.png',
                    address: '坂田街道中兴路信挚工业园',
                    distance: 0.39, // 距离 单位km
                    fastSpare: 2, // 快充设备 - 目前空闲
                    fastCount: 3, // 快充设备 - 总数
                    slowSpare: 2, // 慢充设备 - 目前空闲
                    slowCount: 3, // 慢充设备 - 总数
                    price: 1.82, // 价格 元/度
                    longitude: '114.0595600000', // 充电桩所在 - 经度
                    latitude: '22.5428600000', // 充电桩所在 - 维度
                    isSpare: true, // 是否空闲
                    tags: [ // 标签
                        '全段时间开放',
                        '含快充',
                        '免费停车',
                    ],
                }
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
        const _this = this;

        // 将侧边的数据初始化进去
        let initSidebar = () => {
            _this.sidebarGroup = _this.sidebardefault.concat();
        }

        initSidebar();
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

        /**
         * 计费详情 - 点击弹出模态框
         * @param {Number} groupKey 分模块的下标
         */
        showCostModal: function(groupKey) {
            this.costModal.isShow = true;
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
// 计费详情 模态框 主要部分 
@cost-modal-content-z-index: 1;
@cost-modal-shade-z-index: 2;
@cost-modal-main-z-index: 3;

.list {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
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
                    font-size: 12px;
                    color: @black2;
                    padding-bottom: 10px;

                    div {
                        padding: 0.5px 1.5px;
                        border-radius: 1.5px;
                        color: #fff;
                    }

                    span {
                        padding-left: 5px;
                        padding-right: 15px;
                    }
                    
                    .top-row3-fast {
                        background: #00B90A;
                    }
                    
                    .top-row3-slow {
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

                        span {
                            padding-right: 1.5px;
                            font-size: 18px;
                            color: #5594FF;
                        }
                    }

                    .top-row4-details {
                        padding-left: 35px;

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
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;

            .flex-rest {
                font-size: 14px;
                color: @black1;
                font-weight: bold;
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

</style>
