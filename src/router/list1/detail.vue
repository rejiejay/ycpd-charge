<!-- 
  - 列表详情 
  -->
<template>
    <div class="list-detail">
        <!-- 顶部栏 -->
        <div class="top-bar">
            <div class="top-bar-content flex-start">

                <div class="top-bar-back" @click="$router.push('/index')">
                    <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search-back.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i>
                </div>

                <div class="top-bar-title flex-rest">电站详情</div>
                <div class="top-bar-icon flex-start-center">
                    <div class="bar-icon-item">
                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/feedback.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i>
                        <span>反馈</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- banner栏 -->
        <div class="banner">
            <div class="banner-main flex-start-center">
                <div class="banner-main-img">
                    <img src="http://cyygiftsend.szpiccxxjsb.cn/imgs/stores/YC7550102_100x100.jpg" />
                </div>
                <div class="banner-main-describe flex-rest">
                    <div class="main-describe-title">深圳信青工业一期充电器</div>
                    <div class="main-describe-icon flex-start-center">
                        <iconstar width="60" />
                        <div class="icon-label">评分:3.7 | 公共站</div>
                    </div>
                    <div class="main-describe-tabs">
                        <div class="describe-tabs-content">
                            <div class="tabs-item" style="color: #00a6ca; border-color: #00a6ca;">自营</div>
                            <div class="tabs-item" style="color: #46bb00; border-color: #46bb00;">公共站</div>
                            <div class="tabs-item" style="color: #283593; border-color: #283593;">露天1F</div>
                            <div class="tabs-item" style="color: #fbc02d; border-color: #fbc02d;">自营</div>
                            <div class="tabs-item" style="color: #1ccfc9; border-color: #1ccfc9;">芝麻信用·免充值</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-label flex-start">
                <div class="banner-label-item banner-label-left">
                    <div class="label-left-content">
                        <div class="label-item"><span>快</span> 空闲4/共6</div>
                    </div>
                </div>
                <div class="banner-label-item banner-label-right">
                    <div class="label-item"><span>慢</span> 空闲4/共6</div>
                </div>
            </div>
        </div>
        
        <!-- 选项卡栏 -->
        <div class="navbar">
            <mt-navbar v-model="navbarSelected">
                <mt-tab-item id="particu">详情</mt-tab-item>
                <div class="mt-tab-line"></div>
                <mt-tab-item id="termina">终端</mt-tab-item>
                <div class="mt-tab-line"></div>
                <mt-tab-item id="comment">评论</mt-tab-item>
            </mt-navbar>
        </div>
        
        <!-- 显示面板 -->
        <mt-tab-container v-model="navbarSelected">

            <!-- 详情 -->
            <mt-tab-container-item id="particu">
                <div class="particu">
                    <div class="particu-navigator">
                        <div class="particu-navigator-main flex-start-center">
                            <div class="navigator-main-descrip flex-rest">
                                <div class="main-descrip-title">广东省深圳市龙岗区坂田街道中兴路信擎科技园</div>
                                <div class="main-descrip-link">查看具体位置示意图</div>
                                <div class="main-descrip-label">距离我0.2km<span>露天1F</span></div>
                            </div>
                            <div class="navigator-main-icon">导航 <span>></span></div>
                        </div>
                        <div class="particu-navigator-lable">
                            <div class="navigator-lable-content">
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/cate.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>美食</span>
                                    </div>
                                    <div class="lable-item-line"></div>
                                </div>
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/car-1.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>汽车</span>
                                    </div>
                                    <div class="lable-item-line"></div>
                                </div>
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/wc.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>洗手间</span>
                                    </div>
                                    <div class="lable-item-line"></div>
                                </div>
                                <div class="lable-item">
                                    <div class="flex-center">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/hotel.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100" alt=""></i>
                                        <span>酒店</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="particu-describe">
                        <div class="particu-describe-list">
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">支付方式</div>
                                <div class="particu-describe-lable flex-rest">
                                    <div class="describe-lable-main">本APP,养车频道微信公众号</div>
                                </div>
                            </div>
                        </div>

                        <div class="particu-describe-list">
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">当前时段</div>
                                <div class="particu-describe-lable flex-rest flex-start">
                                    <div class="describe-lable-left">14:00-16:30</div>
                                    <div class="describe-lable-right flex-rest">其他时段 ></div>
                                </div>
                            </div>
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">充电单价</div>
                                <div class="particu-describe-lable">
                                    <div class="describe-lable-main">1.6777元/度</div>
                                    <div class="describe-lable-sub1">电费1.1177元/度 | 服务费 0.5600元/度</div>
                                    <span class="describe-lable-sub2">16:30开始 1.3252元/度</span>
                                </div>
                            </div>
                        </div>

                        <div class="particu-describe-list">
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">充电单价</div>
                                <div class="particu-describe-lable flex-rest">
                                    <div class="describe-lable-main">(半小时内免费停车)超过半小时5元起, 每半小时加2元, 每天最高收费30元</div>
                                </div>
                            </div>
                        </div>

                        <div class="particu-describe-list">
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">超站所有方</div>
                                <div class="particu-describe-lable">
                                    <div class="describe-lable-main">养车频道</div>
                                </div>
                            </div>
                        </div>

                        <div class="particu-describe-list">
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">营业时间</div>
                                <div class="particu-describe-lable">
                                    <div class="describe-lable-main">周一至周日00:00-24:00</div>
                                </div>
                            </div>
                        </div>

                        <div class="particu-describe-list">
                            <div class="particu-describe-item flex-start">
                                <div class="particu-describe-title">服务电话</div>
                                <div class="particu-describe-lable flex-rest flex-start">
                                    <div class="describe-lable-left">4000-123-321</div>
                                    <div class="describe-lable-right flex-rest">></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="particu-succeed particu-succeed-car">
                        <div class="succeed-title flex-start">
                            <div class="car-title-left">用户成功充电车型</div>
                            <div class="car-title-right flex-rest">查看全部 ></div>
                        </div>
                        <div class="succeed-car-list">
                            <div class="car-list-content">
                                <div class="succeed-car-item"  v-for="carItem in new Array(10)" :key="carItem" >
                                    <i><img src="http://cyygiftsend.szpiccxxjsb.cn/imgs/stores/YC7550102_100x100.jpg"></i>
                                    <span>泰众E200</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="particu-succeed particu-succeed-time">
                        <div class="succeed-title flex-start">
                            <div class="car-title-left">七天成功充电<span>213</span>次</div>
                            <div class="car-title-right flex-rest">最近充电35分钟前 ></div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>

            <!-- 终端 -->
            <mt-tab-container-item id="termina">
                <div class="termina">
                    <div class="termina-filter flex-start">
                        <div class="termina-filter-left flex-rest flex-start">
                            <div class="termina-filter-item">
                                <span>空闲优先</span>
                                <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/filter-selected.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100"></i>
                            </div>
                            <div class="termina-filter-item">
                                <span>已插枪</span>
                                <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/filter-selected.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100"></i>
                            </div>
                            <div class="termina-filter-item">
                                <span>直流快充</span>
                                <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/filter-selected.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0/auto-orient,0/quality,q_100"></i>
                            </div>
                        </div>
                        <div class="termina-filter-right flex-start-center" @click="terminaFilter.popupVisible = true">
                            <span>筛选</span>
                            <i class="flex-center"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-bule.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                            <div class="filter-right-hint">2</div>
                        </div>
                        <mt-popup
                            v-model="terminaFilter.popupVisible"
                            position="bottom"
                        >
                            <div class="popup-title">
                                <div class="popup-title-main">终端筛选</div>
                                <div class="popup-title-sub"
                                    @click="terminaFilter.popupVisible = false"
                                >取消</div>
                            </div>
                            <div class="popup-main">
                                <div class="popup-main-title">终端名称/编号/车位号</div>
                                
                                <div class="popup-main-search">
                                    <div class="main-search-content flex-start">
                                        <i><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/search.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0/auto-orient,0/quality,q_100"></i>
                                        <!-- <span>输入目的地/电站名</span> -->
                                        <div class="search-input">
                                            <input type="text" placeholder="输入目的地/电站名">
                                        </div>
                                    </div>
                                </div>

                                <div class="popup-main-content"
                                    v-for="(group, groupkey) in terminaFilter.popupGroup" 
                                    :key="groupkey"
                                >
                                    <div class="popup-main-title">{{group.title}}</div>
                                    <div class="popup-button-group">
                                        <el-button 
                                            v-for="(item, listkey) in group.list" 
                                            :key="listkey"
                                            :type="item.isSelected ? 'primary' : null"
                                            size="mini"
                                            @click="item.fun(); terminaFilter.popupGroup[groupkey].list[listkey].isSelected = !terminaFilter.popupGroup[groupkey].list[listkey].isSelected;"
                                        >{{item.name}}</el-button>
                                    </div>
                                </div>
                                <div class="popup-main-title">查看最低功率15kW-360kW的充电站(适用于直流快充)</div>
                                <div class="popup-main-rage">
                                    <div class="popup-rage-main">
                                        <el-slider
                                            v-model="terminaFilter.popupRange.value"
                                            :step="Math.floor( 100 / (terminaFilter.popupRange.step.length - 1))"
                                            show-stops
                                            range
                                            :show-tooltip="false"
                                        ></el-slider>
                                    </div>
                                    <div class="popup-rage-number flex-start">
                                        <div 
                                            class="popup-rage-item" 
                                            v-bind:class="[key === (terminaFilter.popupRange.step.length - 1) ? 'item-last' : '',]" 
                                            v-for="(val, key) in terminaFilter.popupRange.step" 
                                            :key="key"
                                            :style="`width: ${1 / terminaFilter.popupRange.step.length * 100}%`"
                                        >
                                            {{val}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup-submit flex-start">
                                <div class="popup-submit-sub">清空</div>
                                <div class="popup-submit-btn flex-rest">确定</div>
                            </div>
                        </mt-popup>
                    </div>
                    
                    <div class="termina-list">
                        <div class="termina-item flex-start">
                            <div class="termina-item-icon">
                                <div class="item-icon-main">
                                    <div class="icon-main-title">101号</div>
                                    <div class="icon-main-label">直流</div>
                                </div>
                                <div class="item-icon-sub">芝麻信用</div>
                            </div>
                            <div class="termina-item-main flex-rest">
                                <div class="item-main-top">
                                    <div class="item-main-title flex-start">
                                        <div class="main-title-left flex-rest">44030700039101</div>
                                        <div class="main-title-right flex-start">
                                            <div class="title-right-item" style="background: #46bb00;">空闲</div>
                                            <div class="title-right-item" style="background: #ff3939;">快</div>
                                        </div>
                                    </div>
                                    <div class="item-main-sub">车位号 无</div>
                                </div>
                                <div class="item-main-line"><div class="line-block-dotted"></div></div>
                                <div class="item-main-bottom">
                                    <div class="main-bottom-item flex-start">
                                        <div class="bottom-item-title">终端类型</div>
                                        <div class="bottom-item-label flex-rest">快充</div>
                                    </div>
                                    <div class="main-bottom-item flex-start">
                                        <div class="bottom-item-title">充电接口</div>
                                        <div class="bottom-item-label flex-rest">国标2015 国标2011</div>
                                    </div>
                                    <div class="main-bottom-item flex-start">
                                        <div class="bottom-item-title">功率</div>
                                        <div class="bottom-item-label flex-rest">15kW-150kW</div>
                                    </div>
                                    <div class="main-bottom-item flex-start">
                                        <div class="bottom-item-title">电压</div>
                                        <div class="bottom-item-label flex-rest">250V-750V</div>
                                    </div>
                                    <div class="main-bottom-item flex-start">
                                        <div class="bottom-item-title">辅源类型</div>
                                        <div class="bottom-item-label flex-rest">12V</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>

            <!-- 评论 -->
            <mt-tab-container-item id="comment">
                <div class="comment">
                    <div class="comment-filter">
                        <div class="comment-filter-content"
                            v-bind:class="[comment.filter.isShowMore ? 'filter-content-showmore' : '']" 
                        >
                            <el-button 
                                v-for="(item, listkey) in comment.filter.list" 
                                :key="listkey"
                                :type="listkey === comment.filter.index ? 'primary' : null"
                                size="mini"
                                round
                                @click="comment.filter.index = listkey"
                            >{{item.name}}{{listkey === 0 ? '' : `(${item.count})`}}</el-button>
                        </div>

                        <div class="comment-filter-showmore flex-center"
                            @click="comment.filter.isShowMore = !comment.filter.isShowMore;"
                        >
                            <i class="icon-black"
                                v-bind:class="[comment.filter.isShowMore ? 'icon-black-reverse' : '']" 
                            ><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dowm-black.png?x-oss-process=image/resize,m_fill,w_32,h_32,limit_0/auto-orient,0/quality,q_100"></i>
                        </div>
                    </div>

                    <div class="comment-list">
                        <div class="comment-item">
                            <div class="comment-item-content flex-start">
                                <div class="comment-item-img">
                                    <img src="http://p6ygud9kn.bkt.clouddn.com/myweb/rejiejay.png" />
                                </div>
                                <div class="comment-item-main flex-rest">
                                    <div class="item-main-title flex-start">
                                        <div class="item-title-name flex-rest">
                                            曾杰杰
                                        </div>
                                        <div class="item-title-lable">
                                            6-12 10:37:07
                                        </div>
                                    </div>
                                    <div class="item-main-grade flex-start">
                                        <span>打分</span>
                                        <iconstar width='80' />
                                    </div>
                                    <div class="item-main-description">
                                        位置挺好，环境不错，还是可以的。
                                    </div>
                                    <div class="item-main-operation">
                                        <div class="item-operation-content flex-start">
                                            <div class="item-main-lable">
                                                <svg t="1528771475040" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4325" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    width="16" height="16"
                                                >
                                                    <path d="M510.340709 900.892171c-23.173792 0-247.254314-180.180685-332.157006-289.301965-58.338686-53.264111-105.562221-152.650679-105.562221-222.732827 0-148.765185 108.952434-269.77626 242.874563-269.77626 81.781608 0 151.191444 67.679425 194.013739 137.605008 42.822294-69.925582 112.207571-137.605008 194.013739-137.605008 133.922129 0 242.874563 121.011074 242.874563 269.77626 0 70.239737-47.445592 169.805384-106.055454 223.182059C754.630505 722.553437 534.862195 900.892171 510.340709 900.892171zM315.497069 165.0685c-108.570741 0-196.887182 100.397594-196.887182 223.788879 0 58.382689 42.059931 145.353482 91.864244 189.903118 1.033539 0.943488 2.022053 1.977028 2.874467 3.098571 83.937714 109.042485 251.138784 234.421031 297.17119 267.923052 48.054459-34.715663 213.05542-161.193239 294.611901-267.451308 0.899486-1.12359 1.888-2.178619 2.964518-3.142573 50.03251-44.663222 92.312452-131.813095 92.312452-190.33086 0-123.391285-88.316441-223.788879-196.885136-223.788879-70.487378 0-137.808646 75.135234-173.241646 149.597133-7.634888 16.033162-33.908274 16.033162-41.543162 0C453.303668 240.203734 385.983423 165.0685 315.497069 165.0685z" p-id="4326" 
                                                        fill="#909399"
                                                    ></path>
                                                </svg>
                                                <span>赞</span>
                                            </div>
                                            <div class="item-main-lable">
                                                <svg t="1528771462959" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3584" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    width="16" height="16"
                                                >
                                                    <path d="M816 808h-144c-4.8 0-8 1.6-11.2 4.8l-80 80c-36.8 36.8-97.6 36.8-136 0l-80-80c-3.2-3.2-6.4-4.8-11.2-4.8h-144c-70.4 0-128-57.6-128-128v-448c0-70.4 57.6-128 128-128h608c70.4 0 128 57.6 128 128v448c-1.6 70.4-59.2 128-129.6 128z m0-64c35.2 0 64-28.8 64-64v-448c0-35.2-28.8-64-64-64H208c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h144c20.8 0 41.6 8 56 24l80 80c12.8 12.8 32 12.8 44.8 0l80-80c14.4-14.4 35.2-24 56-24H816z m-496-336c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z m192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z m192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z" p-id="3585" 
                                                        fill="#909399">
                                                    </path>
                                                </svg>
                                                <span>评论 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-reply-list">
                                        <div class="item-reply-item flex-start">
                                            <div class="reply-item-icon flex-start">
                                                <svg t="1528771462959" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3584" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    width="16" height="16"
                                                >
                                                    <path d="M816 808h-144c-4.8 0-8 1.6-11.2 4.8l-80 80c-36.8 36.8-97.6 36.8-136 0l-80-80c-3.2-3.2-6.4-4.8-11.2-4.8h-144c-70.4 0-128-57.6-128-128v-448c0-70.4 57.6-128 128-128h608c70.4 0 128 57.6 128 128v448c-1.6 70.4-59.2 128-129.6 128z m0-64c35.2 0 64-28.8 64-64v-448c0-35.2-28.8-64-64-64H208c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h144c20.8 0 41.6 8 56 24l80 80c12.8 12.8 32 12.8 44.8 0l80-80c14.4-14.4 35.2-24 56-24H816z m-496-336c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z m192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z m192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z" p-id="3585" 
                                                        fill="#909399">
                                                    </path>
                                                </svg>
                                                <span>135****3790: </span>
                                            </div>
                                            <div class="reply-item-description">
                                                外来车辆可以让进的吗?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comment-item">
                            <div class="comment-item-content flex-start">
                                <div class="comment-item-img">
                                    <img src="http://p6ygud9kn.bkt.clouddn.com/myweb/rejiejay.png" />
                                </div>
                                <div class="comment-item-main flex-rest">
                                    <div class="item-main-title flex-start">
                                        <div class="item-title-name flex-rest">
                                            许多多
                                        </div>
                                        <div class="item-title-lable">
                                            6-22 21:36:07
                                        </div>
                                    </div>
                                    <div class="item-main-grade flex-start">
                                        <span>打分</span>
                                        <iconstar width='80' />
                                    </div>
                                    <div class="item-main-description">
                                        非常好、充电快又方便。
                                    </div>
                                    <div class="item-main-operation">
                                        <div class="item-operation-content flex-start">
                                            <div class="item-main-lable">
                                                <svg t="1528771475040" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4325" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    width="16" height="16"
                                                >
                                                    <path d="M510.340709 900.892171c-23.173792 0-247.254314-180.180685-332.157006-289.301965-58.338686-53.264111-105.562221-152.650679-105.562221-222.732827 0-148.765185 108.952434-269.77626 242.874563-269.77626 81.781608 0 151.191444 67.679425 194.013739 137.605008 42.822294-69.925582 112.207571-137.605008 194.013739-137.605008 133.922129 0 242.874563 121.011074 242.874563 269.77626 0 70.239737-47.445592 169.805384-106.055454 223.182059C754.630505 722.553437 534.862195 900.892171 510.340709 900.892171zM315.497069 165.0685c-108.570741 0-196.887182 100.397594-196.887182 223.788879 0 58.382689 42.059931 145.353482 91.864244 189.903118 1.033539 0.943488 2.022053 1.977028 2.874467 3.098571 83.937714 109.042485 251.138784 234.421031 297.17119 267.923052 48.054459-34.715663 213.05542-161.193239 294.611901-267.451308 0.899486-1.12359 1.888-2.178619 2.964518-3.142573 50.03251-44.663222 92.312452-131.813095 92.312452-190.33086 0-123.391285-88.316441-223.788879-196.885136-223.788879-70.487378 0-137.808646 75.135234-173.241646 149.597133-7.634888 16.033162-33.908274 16.033162-41.543162 0C453.303668 240.203734 385.983423 165.0685 315.497069 165.0685z" p-id="4326" 
                                                        fill="#909399"
                                                    ></path>
                                                </svg>
                                                <span>赞</span>
                                            </div>
                                            <div class="item-main-lable">
                                                <svg t="1528771462959" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3584" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    width="16" height="16"
                                                >
                                                    <path d="M816 808h-144c-4.8 0-8 1.6-11.2 4.8l-80 80c-36.8 36.8-97.6 36.8-136 0l-80-80c-3.2-3.2-6.4-4.8-11.2-4.8h-144c-70.4 0-128-57.6-128-128v-448c0-70.4 57.6-128 128-128h608c70.4 0 128 57.6 128 128v448c-1.6 70.4-59.2 128-129.6 128z m0-64c35.2 0 64-28.8 64-64v-448c0-35.2-28.8-64-64-64H208c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h144c20.8 0 41.6 8 56 24l80 80c12.8 12.8 32 12.8 44.8 0l80-80c14.4-14.4 35.2-24 56-24H816z m-496-336c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z m192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z m192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z" p-id="3585" 
                                                        fill="#909399">
                                                    </path>
                                                </svg>
                                                <span>评论 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
// mint-ui 框架
import Vue from 'vue';
import { 
  Navbar, TabItem, TabContainer, 
  TabContainerItem, Popup 
} from 'mint-ui';
import 'mint-ui/lib/font/style.css';
import 'mint-ui/lib/tab-container/style.css';
import 'mint-ui/lib/tab-container-item/style.css';
import 'mint-ui/lib/popup/style.css';

Vue.component('mt-navbar', Navbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-tab-container', TabContainer);
Vue.component('mt-tab-container-item', TabContainerItem);
Vue.component('mt-popup', Popup);

// element-ui 框架
import { Slider, Button } from 'element-ui';
Vue.use(Slider);
Vue.use(Button);

import iconstar from './../../components/icon-star';

export default {
    name: 'listDetail1',

    components: {
        iconstar
    },

    data () {
        return {
            // 选项卡栏
            navbarSelected: "particu", // 详情:particu 终端:termina 评论:comment

            // 终端 筛选
            terminaFilter: {
                popupVisible: false, // 下拉弹出框
                popupGroup: [
                    {
                        title: '充电方式',
                        list: [
                            {
                                name: '直流快充',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '交流快充',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '漫流漫充',
                                isSelected: false,
                                fun: () => {}
                            }
                        ]
                    }, {
                        title: '终端状态',
                        list: [
                            {
                                name: '空闲',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '充电中',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '离网',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '已充满',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '已插枪',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '暂停中',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '故障',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '未知',
                                isSelected: false,
                                fun: () => {}
                            }
                        ]
                    }, {
                        title: '充电接口',
                        list: [
                            {
                                name: '国标2011',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '国标2015',
                                isSelected: false,
                                fun: () => {}
                            }
                        ]
                    }, {
                        title: '辅源类型(仅适用于直流快充)',
                        list: [
                            {
                                name: '12V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '24V',
                                isSelected: false,
                                fun: () => {}
                            }
                        ]
                    }, {
                        title: '电压(仅适用于直流快充)',
                        list: [
                            {
                                name: '220V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '250V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '280V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '300V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '350V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '450V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '500V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '700V',
                                isSelected: false,
                                fun: () => {}
                            }, {
                                name: '750V',
                                isSelected: false,
                                fun: () => {}
                            }
                        ]
                    }
                ],
                popupRange: { // 功率选择
                    value: [10, 50], // 百分比
                    step: [15, 30,  45, 60, 90, 120, 150, 180, 360],
                },
            },

            comment: {
                filter: {
                    index: 0,
                    isShowMore: false,
                    list: [
                        {
                            name: '全部',
                            count: 10,
                        }, {
                            name: '顺利充电',
                            count: 10,
                        }, {
                            name: '周边环境好',
                            count: 11,
                        }, {
                            name: '充电很快',
                            count: 11,
                        }, {
                            name: '不用排队',
                            count: 7,
                        }, {
                            name: '价格便宜',
                            count: 7,
                        }, {
                            name: '不能充满',
                            count: 3,
                        }, {
                            name: '停车费用高',
                            count: 2,
                        }, {
                            name: '充电太慢',
                            count: 1,
                        }
                    ]
                },
                
            }
        }
    },

    computed: {
    },

    methods: {
    },
}

</script>

<style scoped lang="less">

.list-detail {
    min-height: 100%;
    background: #efefef;
}

// 顶部搜索栏
.list-detail .top-bar {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ddd;
    z-index: 3;

    .top-bar-back {
        padding: 10px 0px;
        padding-right: 15px;
        padding-left: 15px;

        i {
            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
            align-items: center;
            height: 30px;
        }

        img {
            width: 24px;
            height: 24px;
        }
    }

    .top-bar-title {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        color: #303133;
    }

    .top-bar-icon {
        height: 50px;
        padding-right: 10px;

        .bar-icon-item {
            padding: 0px 5px;

            i {
                display: block;
                width: 24px;
                height: 24px;
                text-align: center;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            span {
                display: block;
                font-size: 12px;
                color: #606266;
            }
        }
    }
}

// banner栏
.list-detail .banner {
    background: #fff;
    border-bottom: 1px solid #ddd;

    .banner-main {
        padding: 15px;
        border-bottom: 1px solid #ddd;

        .banner-main-img {
            width: 70px;
            height: 70px;
            border-radius: 5px;
            overflow: hidden;

            img {
                display: block;
                width: 70px;
                height: 70px;
            }
        }

        .banner-main-describe {
            padding-left: 15px;
            overflow: hidden;

            .main-describe-title {
                font-size: 16px;
            }

            .main-describe-icon {
                padding-top: 10px;

                .icon-label {
                    padding-left: 5px;
                    font-size: 12px;
                    color: #909399;
                }
            }
        
            .main-describe-tabs {
                padding-top: 10px;
                height: 24px;
                width: 100%;
                line-height: 21px;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;

                .describe-tabs-content {
                    float: left;
                    height: 21px;
                }

                .tabs-item {
                    display: inline-block;
                    margin-right: 5px;
                    padding: 0px 8px;
                    border-radius: 5px;
                    border: 1px solid #E4E7ED;
                    font-size: 12px;
                    color: #606266;
                }
            }
        }
    }

    .banner-label {
        height: 45px;

        .banner-label-item {
            width: 50%;
            height: 45px;

            .label-item {
                line-height: 45px;
                text-align: center;
                font-size: 14px;

                span {
                    color: #fff;
                    border-radius: 5px;
                    padding: 0px 3px;
                }
            }
        }

        .label-left-content {
            width: 100%;
            height: 45px;
            border-right: 1px solid #ddd;

            .label-item span {
                background: #ff2c2c;
            }
        }

        .banner-label-right .label-item span {
            background: #43ba00;
        }
    }
}

// 选项卡栏
.list-detail .navbar {
    padding-top: 15px;

    .mint-navbar {
        background-color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;

        .mint-tab-item {
            display: block;
            padding: 7px 0;
            -webkit-box-flex: 1;
                -ms-flex: 1;
                    flex: 1;
            text-decoration: none;
            padding: 17px 0;
            font-size: 16px;

            .mint-tab-item-label {
                font-size: 16px;
            }
        }

        .mint-tab-item:last-child {
            border-right: 0;
        }

        .is-selected {
            position: relative;
            border-bottom: 3px solid #26a2ff;
            color: #26a2ff;
            margin-bottom: -3px;
            z-index: 2;
        }

        .is-fixed {
            top: 0;
            right: 0;
            left: 0;
            position: fixed;
            z-index: 1;
        }

        .mt-tab-line {
            position: relative;
            top: 15px;
            height: 20px;
            width: 1px;
            background: #ddd;
            z-index: 2;
        }
    }
}

// 显示面板
.list-detail .mint-tab-container-item {
    position: relative;

    // 详情
    .particu {
        
        .particu-navigator {
            margin-bottom: 15px;
            background: #fff;
            border-bottom: 1px solid #ddd;

            .particu-navigator-main {
                border-bottom: 1px solid #ddd;

                .navigator-main-descrip {
                    padding: 15px;

                    .main-descrip-title {
                        padding-bottom: 7.5px;
                        font-size: 14px;
                        color: #303133;
                    }

                    .main-descrip-link {
                        padding-bottom: 7.5px;
                        font-size: 14px;
                        color: #606266;
                    }

                    .main-descrip-label {
                        font-size: 12px;
                        color: #909399;
                        padding-right: 5px;

                        span {
                            margin-left: 5px;
                            display: inline-block;
                            padding: 0px 8px;
                            border-radius: 5px;
                            border: 1px solid #E4E7ED;
                            font-size: 12px;
                            color: #606266;
                        }
                    }
                }

                .navigator-main-icon {
                    padding-right: 15px;
                    font-size: 16px;
                    color: #909399;

                    span {
                        padding-left: 2px;
                    }
                }
            }

            .particu-navigator-lable {
                height: 43px;
                width: 100%;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;

                .navigator-lable-content {
                    float: left;
                    height: 43px;
                }

                .lable-item {
                    position: relative;
                    display: inline-block;
                    height: 43px;
                    width: 90px;

                    .flex-center {
                        height: 43px;
                    }

                    i {
                        display: block;
                        width: 24px;
                        height: 24px;

                        img {
                            display: block;
                            width: 24px;
                            height: 24px;
                        }
                    }

                    span {
                        display: block;
                        padding-left: 5px;
                    }

                    .lable-item-line {
                        position: absolute;
                        right: 0px;
                        top: 0px;
                        height: 100%;
                        width: 1px;
                        background: #ddd;
                    }
                }
            }
        }

        .particu-describe {
            margin-bottom: 15px;
            background: #fff;
            border-top: 1px solid #ddd;

            .particu-describe-list {
                border-bottom: 1px solid #ddd;
                padding: 15px 15px 0px 15px;

                .particu-describe-item {
                    padding-bottom: 15px;

                    .particu-describe-title {
                        width: 90px;
                        font-size: 16px;
                        color: #606266;
                    }

                    .particu-describe-lable {
                        .describe-lable-main {
                            font-size: 16px;
                            color: #303133;
                        }

                        .describe-lable-sub1 {
                            padding: 5px 0px;
                            font-size: 14px;
                            color: #909399;
                        }

                        .describe-lable-sub2 {
                            font-size: 12px;
                            color: #bc9663;
                            background: #f8f5e5;
                        }

                        .describe-lable-left {
                            font-size: 16px;
                            color: #303133;
                        }

                        .describe-lable-right {
                            text-align: right;
                            font-size: 14px;
                            color: #909399;
                        }
                    }
                }
            }
        }

        .particu-succeed {
            background: #fff;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            margin-bottom: 15px;

            .succeed-title {
                padding: 0px 15px;
                line-height: 40px;
                border-bottom: 1px solid #ddd;

                .car-title-left {
                    font-size: 16px;
                    color: #303133;

                    span {
                        color: #26a2ff;
                    }
                }

                .car-title-right {
                    text-align: right;
                    font-size: 14px;
                    color: #606266;
                }
            }
        }
        
        .particu-succeed-car {
            position: relative;

            .succeed-car-list {
                padding: 15px;
                width: 100%;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;

                .car-list-content {
                    float: left;
                }

                .succeed-car-item {
                    display: inline-block;
                    margin-right: 15px;

                    i {
                        display: block;
                        width: 70px;
                        height: 70px;
                        border-radius: 5px;
                        overflow: hidden;

                        img {
                            display: block;
                            width: 70px;
                            height: 70px;
                        }
                    }

                    span {
                        padding-top: 10px;
                        font-size: 14px;
                        text-align: center;
                        display: block;
                        color: #909399;
                    }
                }
            }
        }
    }

    // 终端
    .termina {
        background: #fff;
        margin-bottom: 15px;

        .termina-filter {
            padding: 8px 15px;
            border-bottom: 1px solid #ddd;

            .termina-filter-left {

                .termina-filter-item {
                    position: relative;
                    margin-right: 10px;
                    padding: 0 10px;
                    height: 28px;
                    border-radius: 5px;
                    border: 1px solid #ddd;

                    span {
                        font-size: 14px;
                        line-height: 28px;
                        color: #409EFF;
                    }

                    i {
                        position: absolute;
                        right: 0px;
                        bottom: 0px;

                        img {
                            display: block;
                            width: 14px;
                            height: 14px;
                        }
                    }
                }
            }

            .termina-filter-right {
                position: relative;
                padding-left: 8px;
                padding-right: 4px;
                border-radius: 5px;
                border: 1px solid #26a2ff;

                span {
                    display: block;
                    padding-right: 2px;
                    font-size: 14px;
                    color: #26a2ff;
                }

                i {
                    position: relative;
                    height: 28px;

                    img {
                        display: block;
                        width: 16px;
                        height: 16px;
                    }
                }

                .filter-right-hint {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    height: 16px;
                    width: 16px;
                    font-size: 12px;
                    text-align: center;
                    border-radius: 8px;
                    line-height: 16px;
                    color: #fff;
                    background: #ff2c2c;
                }
            }

            .mint-popup {
                width: 100%;

                .popup-title {
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #303133;
                    border-bottom: 1px solid #ddd;

                    .popup-title-sub {
                        position: absolute;
                        top: 0px;
                        right: 0px;
                        padding: 0px 15px;
                        color: #909399;
                    }
                }

                .popup-main {
                    padding: 15px;
                    height: 450px;
                    overflow-y: auto;

                    .popup-main-title { // 弹出框 标题
                        padding-top: 5px;
                        padding-bottom: 15px;
                        font-size: 14px;
                        color: #909399;
                    }

                    .popup-main-search { // 弹出框 搜索
                        padding-bottom: 10px;

                        .main-search-content {
                            position: relative;
                            background: #fff;
                            border: 1px solid #e5e5e6;
                            border-radius: 15px;
                        }

                        i {
                            display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
                            display: -moz-box;     /* 老版本语法: Firefox (buggy) */
                            display: -ms-flexbox;  /* 混合版本语法: IE 10 */
                            display: -webkit-flex; /* 新版本语法: Chrome 21+ */
                            display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
                            align-items: center;
                            padding-left: 10px;
                            padding-right: 5px;
                            height: 30px;

                            img {
                                width: 24px;
                                height: 24px;
                            }
                        }

                        span {
                            display: block;
                            -webkit-box-flex: 1;
                            -ms-flex: 1;
                            flex: 1;
                            color: #909399;
                        }

                        .search-input {
                            -webkit-box-flex: 1;
                            -ms-flex: 1;
                            flex: 1;
                        }

                        input {
                            line-height: 30px;
                            width: 95%;
                            padding: 0px 2.5px;
                            border: none;
                            outline: none;
                            font-size: 14px;
                            color: #909399;
                            background-color: transparent;
                        }
                        input::-webkit-input-placeholder{
                            color: #909399;
                        }
                        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                            color: #909399;
                        }
                        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                            color: #909399;
                        }
                        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
                            color: #909399;
                        }
                    }

                    .popup-button-group { // 弹出框 按钮组

                        .el-button {
                            margin-left: 0px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                        }
                    }

                    .popup-main-rage { // 弹出框 电压

                        .popup-rage-main {
                            position: relative;
                            padding: 0px 15px;
                        }
                            
                        .popup-rage-number {
                            padding: 5px 15px 5px 15px;
                            font-size: 12px;

                            .item-last {
                                text-align: center;
                            }
                        }
                    }
                }

                .popup-submit {
                    border-top: 1px solid #ddd;
                    padding: 10px 15px;

                    .popup-submit-sub,
                    .popup-submit-btn {
                        line-height: 40px;
                        text-align: center;
                    }

                    .popup-submit-sub {
                        width: 70px;
                        padding-right: 15px;
                        color: #F56C6C;
                    }

                    .popup-submit-btn {
                        border-radius: 5px;
                        color: #fff;
                        background: #409eff;
                    }
                }
            }
        }

        .termina-item {
            padding-top: 10px;
            border-bottom: 1px solid #ddd;

            .termina-item-icon {
                padding: 0 15px;

                .item-icon-main {
                    margin: 0 auto;
                    padding: 10px 0px;
                    width: 60px;
                    color: #fff;
                    border-radius: 5px;
                    background: #fd6339;
                    text-align: center;

                    .icon-main-title {
                        font-size: 16px;
                        padding-bottom: 5px;
                    }
                }

                .item-icon-sub {
                    margin: 10px auto 15px;
                    padding: 2px 10px;
                    font-size: 14px;
                    border-radius: 5px;
                    color: #49d9d4;
                    border: 1px solid #49d9d4;
                }
            }
            
            .termina-item-main {
                padding-right: 15px;

                .item-main-top {
                    .item-main-title {
                        .main-title-left {
                            font-size: 16px;
                            color: #303133;
                        }

                        .title-right-item {
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 2px 5px;
                            margin-left: 10px;
                            color: #fff;
                        }
                    }

                    .item-main-sub {
                        padding-top: 5px;
                        font-size: 14px;
                        color: #606266;
                    }
                }

                .item-main-line {
                    position: relative;
                    padding-top: 15px;
                    padding-bottom: 10px;

                    .line-block-dotted {
                        width: 100%;
                        height: 1px;
                        background-image: url(https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/icon/dotted-repeat.png);
                        background-repeat: repeat-x;
                    }

                }     
                
                .item-main-bottom {
                    font-size: 14px; 
                    padding-bottom: 10px;

                    .main-bottom-item {
                        padding-bottom: 5px;

                        .bottom-item-title {
                            width: 70px;
                            color: #606266;
                        }

                        .bottom-item-label {
                            color: #303133;
                        }
                    }
                }
            }
        }
    }

    // 评论
    .comment {
        padding-bottom: 15px;

        .comment-filter {
            background: #fff;
            border-bottom: 1px solid #ddd;

            .comment-filter-content {
                padding: 15px 15px 0px 15px;
                max-height: 72px;
                overflow: hidden;

                .el-button {
                    margin-left: 0px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                }
            }

            .filter-content-showmore {
                max-height: none;
            }

            .comment-filter-showmore {
                height: 32px;

                i, img {
                    display: block;
                    width: 16px;
                    height: 16px;
                }

                i {
                    margin: 0 auto;
                }

                .icon-black-reverse {
                    transform: rotate(180deg);
                    -ms-transform: rotate(180deg);     /* IE 9 */
                    -moz-transform: rotate(180deg);    /* Firefox */
                    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
                    -o-transform: rotate(180deg);      /* Opera */
                }
            }

        }

        .comment-list {
            background: #fff;

            .comment-item {
                border-bottom: 1px solid #ddd;

                .comment-item-content {
                    padding: 15px 15px 0px 15px;
                }
            }

            .comment-item-img {
                width: 48px;
                height: 48px;
                border-radius: 24px;
                overflow: hidden;

                img {
                    display: block;
                    width: 48px;
                    height: 48px;
                }
            }

            .comment-item-main {
                padding-left: 15px;

                .item-main-title {
                    padding-bottom: 10px;

                    .item-title-name {
                        font-size: 16px;
                        color: #303133;
                    }
                    .item-title-lable {
                        font-size: 14px;
                        color: #909399;
                    }
                }

                .item-main-grade {
                    padding-bottom: 10px;

                    span {
                        padding-right: 5px;
                        font-size: 14px;
                        color: #909399;
                    }
                }

                .item-main-description {
                    padding-bottom: 10px;
                    font-size: 16px;
                    line-height: 24px;
                    color: #606266;
                }

                .item-main-operation {
                    overflow: hidden;
                    padding-bottom: 10px;

                    .item-operation-content {
                        float: right;
                    }

                    .item-main-lable {
                        padding-left: 10px;

                        svg {
                            position: relative;
                            top: 2px;
                        }

                        span {
                            font-size: 14px;
                            color: #909399;
                        }
                    }
                }

                .item-reply-list {
                    border-top: 1px solid #ddd;

                    .item-reply-item {
                        padding: 10px 0px;

                        .reply-item-icon {
                            padding-right: 10px;
                            svg {
                                position: relative;
                                top: 4px;
                            }

                            span {
                                line-height: 22px;
                                padding-left: 5px;
                                font-size: 14px;
                                color: #909399;
                            }
                        }
                        
                        .reply-item-description {
                            font-size: 14px;
                            color: #606266;
                            line-height: 22px;
                        }
                    }
                }
            }
        }
    }
}

</style>
