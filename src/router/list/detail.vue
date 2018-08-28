<!-- 
  - 列表详情 
  -->
<template>
    <div class="detail">

        <!-- 详情预览图 全景地图 -->
        <div class="detail-panoramic-map">
            <img :src="picture" alt="详情预览图" />
            <div class="panoramic-map-btn" 
                @click="jumpToMap"
            >全景地图</div>
        </div>

        <!-- banner 横幅栏 -->
        <div class="detail-banner">
            <div class="detail-banner-content">

                <!-- 横幅栏 — 顶部 -->
                <div class="detail-banner-top flex-start-center">
                    
                    <!-- 顶部 — 左边 -->
                    <div class="detail-banner-left flex-rest">
                        <div class="banner-left-title">深圳信挚工业一期充电站</div>
                        <div class="banner-left-describe">
                            深圳市龙岗区坂田街道坂田街道坂田街道坂田街道中兴路信挚工业园
                            <span class="left-describe-lable">0.39km</span>
                        </div>
                        <div class="banner-left-price flex-start-bottom">
                            <div class="left-price-lable">1.25</div>
                            <div class="left-price-subject">元/度</div>
                        </div>
                    </div>

                    <!-- 顶部 — 右边 -->
                    <div class="detail-banner-right">
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

                <!-- 横幅栏 — 底部 -->
                <div class="detail-banner-bottom">
                    <div class="bottom-list-content">

                        <div class="bottom-list-item">
                            <div class="bottom-item-content">
                                <span
                                    :style="isSpare ? 'border-color: #00B90A; color: #00B90A;' : 'border-color: #E50012; color: #E50012;'"
                                >
                                    {{isSpare ? '有空闲' : '无空闲'}}
                                </span>
                            </div>
                        </div>

                        <div class="bottom-list-item"
                            v-for="(tag, tagkey) in tags" 
                            :key="tagkey"
                        >
                            <div class="bottom-item-content">
                                <span>{{tag}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 计费详情 -->
        <div class="detail-cost-count">
            <div class="cost-count-content">

                <!-- 计费详情 标题 -->
                <div class="cost-count-title flex-start-center">
                    <div class="count-title-icon" style="background-size: 14px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADuklEQVRoQ+2ZT2gcdRTHP2/StAQTL9ZEgoLFUrWCN6HHeFIjRAPuRGkvVo3tbnLQqzStEa8iZmcD8d9FD9kppA20tqfkWPAoLTa0WGgIbdVLEimt6TyZaWadnezO7szsulnJXH+/3/u973vf9+83Qpt/0ub6swOg1R6UkYK+5jjMAE+2WpnQ/cuGwehsVn6K0ksyeb25DZX3dV62x+Sp/zeAtqfQNuN9bHV20mhskzX4wI4H6jVopqi75U9exmFIlYMC/Sr0u+dFWVFYEeEKBvP6GAu2Kffrkd10D2QsfQJhQhwOKzxap1KravAjyqSdk1uRdaAegUn2jJ/XPbd/4xOUjxUeSSJD4C+EL/r28fnUoNyrJKMpHnCtLjCnyqEkiofPiHBJYbiSNxoO4J2CvrjhcK5Ke7IscFYMzrGL687frLjKGp30s8Ez6vC6whvVztLJoP2h/BIE2FAAHt+Vn8MKiBugBiedvXxvm/IgyiuZonYYf/CuOnyqPAzywLeM8FLQEw0DsMn5xQq0me/p4sh378laHDod/VZ71u7yAzBUZnHhUt8+BvyYaBgA09JJVU6ELvvqYJaPTok4cZT3955SNa5YfKkwHpL7WTEnE14KTtDMbenTvaBVroWyzfwLOYarKR+4l6i+3wVx2WIu6Ak3O6mw36VS0nmgrE83LZ1W5ZhvJZfz3V08F0Wb0BwS2fe7dFq/y69lMWEwbWclmxqAV2Hv8HuwSBkGH8xm5ZvIYM2rBtftMYmk80hB33ccvg4YaVV7eTw1hcxpfUUfcKEsU/TydM1sExOAm524w41ghpMOXk0dxKallirZgGWs4piM1QraTEwArjwzr3mFXOkuoZAaQCavC8CAL9QwGKw1iLt7kwDYDPzzAeMspgZg5vWqwoESgN08OzsqS83wwMiMHnDuczXg7aXUADKWrqF0lxQWeuycrMcFgPC2nZPZyMC3tBvl34IorLcSQPlzjuC2GIejQGxW59WAsdZSA0hKIbOgb6pyGqUjoFAkiOZQKGEQe4Fs6Qh4g0tdIJoTxAnTqG/1OCCakkaTFrJgsFYDIcJbxayc8bzVrEKWtJUIZ5uKIKDUI1VtJWqlu3rWMwUt4HA8TjNXSW4FEB6AyGauHgVr7UnSTleT6WUnhyl33W2znz/Oxch2OsE84N9dNhe0bKBJ+X+gxNGWjZSNArCZ1//7ob5RFPJ51dbPKoHi1L4PWz6Itn5aDFXZ9nzc3VJp2/V5vVYRTLueeh5Iq0Da8zsA0low7fl/AETYZ0QvyjTxAAAAAElFTkSuQmCC)"></div>
                    <span>计费详情</span>
                </div>

                <!-- 计费详情 内容 -->
                <div class="cost-count-describe">
                    <div class="count-describe-item flex-start">
                        <div class="describe-item-lable">电费:</div>
                        <div class="describe-item-main flex-rest">1.22元/度</div>
                    </div>
                    <div class="count-describe-item flex-start">
                        <div class="describe-item-lable">服务费:</div>
                        <div class="describe-item-main flex-rest">0.6元/度</div>
                    </div>
                    <div class="count-describe-item flex-start">
                        <div class="describe-item-lable">停车费:</div>
                        <div class="describe-item-main flex-rest">半小时内免费，首小时5元，之后每小时3元，最高20元。</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 车型次数 -->
        <div class="detail-type-count">
            <div class="type-count-content">
                <div class="type-count-car flex-start-center">
                    <div class="type-count-main flex-rest">成功充电车型</div>
                    <div class="type-count-lable flex-start-center"  @click="typeCarModal.isShow = true">
                        <div class="count-car-logo" ><img alt="车牌" :src="typeCarModal.logo[0]" /></div>
                        <div class="count-car-logo" ><img alt="车牌" :src="typeCarModal.logo[1]" /></div>
                        <svg width="18" height="18" t="1535190746466" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2105" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#606266" d="M330.56 247.68a32 32 0 0 1 42.88-47.36l320 288a32 32 0 0 1 0 47.36l-320 288a32 32 0 0 1-42.88-47.36L624.32 512z" p-id="2106"></path>
                        </svg>
                    </div>
                </div>
                <!-- <div class="type-count-charge flex-start-center">
                    <div class="type-count-main flex-rest">近7天成功充电<span>999</span>次</div>
                    <div class="type-count-lable flex-start-center">
                        <span>查看详情</span>
                        <svg width="18" height="18" t="1535190746466" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2105" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#606266" d="M330.56 247.68a32 32 0 0 1 42.88-47.36l320 288a32 32 0 0 1 0 47.36l-320 288a32 32 0 0 1-42.88-47.36L624.32 512z" p-id="2106"></path>
                        </svg>
                    </div>
                </div> -->
            </div>
        </div>

        <!-- 模态框 成功充电车型 -->
        <div class="type-car-modal" v-if="typeCarModal.isShow">
            <div class="car-modal-shade" @click="typeCarModal.isShow = false"></div>
            <div class="car-modal-main">
                <div class="car-modal-title flex-start-center">
                    <div class="flex-rest">成功充电车型</div>
                    <div @click="typeCarModal.isShow = false">
                        <svg width="16" height="16" t="1535340058738" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1926" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#303133" d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z" p-id="1927"></path>
                        </svg>
                    </div>
                </div>
                <div class="car-modal-list">
                    <div class="car-list-content">
                        <div class="modal-list-item"
                            v-for="(item, key) in typeCarModal.list" 
                            :key="key"
                        >
                            <div class="modal-item-content">
                                <div class="modal-item-img"><img alt="车牌" :src="item.pictureUrl" /></div>
                                <div class="modal-item-lable">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 充电枪列表 -->
        <div class="detail-list">
            <!-- 充电枪列表 选项头 -->
            <div class="detail-list-navbar flex-start-center">
                <div class="list-navbar-item flex-center"
                    @click="listSelected = 'fast'"
                >
                    <div class="navbar-item-content flex-start-center navbar-item-fast"
                        v-bind:class="{'list-navbar-selected': listSelected === 'fast'}"
                    >
                        <div>快</div>
                        <span>空闲<label>{{fastSpare}}</label>/共{{fastCount}}</span>
                    </div>
                </div>
                <div class="list-navbar-item flex-center"
                    @click="listSelected = 'slow'"
                >
                    <div class="navbar-item-content flex-start-center navbar-item-slow"
                        v-bind:class="{'list-navbar-selected': listSelected === 'slow'}"
                    >
                        <div>慢</div>
                        <span>空闲<label>{{slowSpare}}</label>/共{{slowCount}}</span>
                    </div>
                </div>
            </div>

            <!-- 充电枪列表 选项列表 -->
            <div class="list-content">
                <!-- 选项列表 快速充电 -->
                <div class="list-content-tab list-tab-fast"
                    v-if="listSelected === 'fast'"
                >
                    <div class="list-tab-item flex-start-center"
                        v-bind:class="[item.isFree ? 'tab-item-free' : '']" 
                        v-for="(item, key) in fastList" 
                        :key="key"
                    >
                        <div class="tab-item-icon flex-center">
                            <svg width="45" height="45" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站详情1" transform="translate(-45.000000, -1372.000000)"><g id="电枪空闲详细" transform="translate(0.000000, 1236.000000)"><g id="1号枪" transform="translate(30.000000, 121.000000)"><g id="Group"><rect id="Rectangle-8" stroke="#DDDDDD" x="0.5" y="0.5" width="119" height="119" rx="8"></rect><path d="M99,48 L99,87 C99,90.3137085 96.3137085,93 93,93 L87.3468526,93 C84.0556513,93 81.3787747,90.3487388 81.34713,87.0576896 L81.043552,55.4855776 C81.0356408,54.6628153 80.3664217,54 79.5436213,54 L72,54 L72,99 L75,99 C76.6568542,99 78,100.343146 78,102 C78,103.656854 76.6568542,105 75,105 L18,105 C16.3431458,105 15,103.656854 15,102 C15,100.343146 16.3431458,99 18,99 L21,99 L21,24 C21,19.0294373 25.0294373,15 30,15 L63,15 C67.9705627,15 72,19.0294373 72,24 L72,48 L81.0281474,48 C84.3193487,48 86.9962253,50.6512612 87.02787,53.9423104 L87.331448,85.5144224 C87.3393592,86.3371847 88.0085783,87 88.8313787,87 L91.5,87 C92.3284271,87 93,86.3284271 93,85.5 L93,48 L90,48 C88.3431458,48 87,46.6568542 87,45 L87,39 C87,37.3431458 88.3431458,36 90,36 L90.0069793,36 C90.0023622,35.9520784 90,35.9034978 90,35.8543654 L90,31.5 C90,30.6715729 90.6715729,30 91.5,30 C92.3284271,30 93,30.6715729 93,31.5 L93,35.8543654 C93,35.9034978 92.9976378,35.9520784 92.9930207,36 L99.0069793,36 C99.0023622,35.9520784 99,35.9034978 99,35.8543654 L99,31.5 C99,30.6715729 99.6715729,30 100.5,30 C101.328427,30 102,30.6715729 102,31.5 L102,35.8543654 C102,35.9034978 101.997638,35.9520784 101.993021,36 L102,36 C103.656854,36 105,37.3431458 105,39 L105,45 C105,46.6568542 103.656854,48 102,48 L99,48 Z M66,99 L66,24 C66,22.3431458 64.6568542,21 63,21 L30,21 C28.3431458,21 27,22.3431458 27,24 L27,99 L66,99 Z M36,30 L57,30 C58.6568542,30 60,31.3431458 60,33 C60,34.6568542 58.6568542,36 57,36 L36,36 C34.3431458,36 33,34.6568542 33,33 C33,31.3431458 34.3431458,30 36,30 Z M55.3813785,49.7393916 C55.6195049,49.5353561 55.9594328,49.5010069 56.2335635,49.6532797 C56.5956637,49.8544172 56.7261497,50.3110117 56.5250121,50.6731118 L49.2407194,63.7867422 C49.2018366,63.8567414 49.1744144,63.9325157 49.1594943,64.0111868 C49.0823141,64.4181464 49.3496531,64.8106192 49.7566127,64.8877995 L57.781111,66.4096521 C57.9484607,66.4413901 58.1000224,66.5291477 58.2108594,66.658486 C58.4803918,66.9730097 58.4439192,67.4464807 58.1293954,67.7160131 L37.6635033,85.2543445 C37.4221572,85.461167 37.0766525,85.4934021 36.8012123,85.3347951 C36.442257,85.1280973 36.3188279,84.6695449 36.5255256,84.3105896 L44.3387096,70.7420625 C44.3894114,70.6540128 44.421694,70.5565792 44.4335981,70.4556747 C44.4821282,70.0443139 44.1879958,69.6714986 43.776635,69.6229685 L35.2796122,68.6205364 C35.092498,68.5984617 34.9205468,68.5067695 34.7979553,68.363695 C34.5284441,68.0491531 34.5649486,67.5756846 34.8794905,67.3061734 L55.3813785,49.7393916 Z" id="Combined-Shape" fill-rule="nonzero"></path></g></g></g></g></g>
                            </svg>
                        </div>

                        <!-- 选项列表 内容 -->
                        <div class="tab-item-describe flex-rest">
                            <div class="item-describe-title">1号枪</div>
                            <div class="item-describe-tag flex-start-center">
                                <div class="tag-item-1">{{item.isFree ? '空闲' : '非空闲'}}</div>
                                <div class="tag-item-2">快充 60kw</div>
                            </div>
                        </div>

                        <!-- 选项列表 立即充电 -->
                        <div class="tab-item-submit">立即充电</div>
                    </div>
                </div>

                <!-- 选项列表 缓慢充电 -->
                <div class="list-content-tab list-tab-slow"
                    v-if="listSelected === 'slow'"
                >
                    <div class="list-tab-item flex-start-center"
                        v-bind:class="[item.isFree ? 'tab-item-free' : '']" 
                        v-for="(item, key) in slowList" 
                        :key="key"
                    >
                        <div class="tab-item-icon flex-center">
                            <svg width="45" height="45" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="快速充电" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电站详情1" transform="translate(-45.000000, -1372.000000)"><g id="电枪空闲详细" transform="translate(0.000000, 1236.000000)"><g id="1号枪" transform="translate(30.000000, 121.000000)"><g id="Group"><rect id="Rectangle-8" stroke="#DDDDDD" x="0.5" y="0.5" width="119" height="119" rx="8"></rect><path d="M99,48 L99,87 C99,90.3137085 96.3137085,93 93,93 L87.3468526,93 C84.0556513,93 81.3787747,90.3487388 81.34713,87.0576896 L81.043552,55.4855776 C81.0356408,54.6628153 80.3664217,54 79.5436213,54 L72,54 L72,99 L75,99 C76.6568542,99 78,100.343146 78,102 C78,103.656854 76.6568542,105 75,105 L18,105 C16.3431458,105 15,103.656854 15,102 C15,100.343146 16.3431458,99 18,99 L21,99 L21,24 C21,19.0294373 25.0294373,15 30,15 L63,15 C67.9705627,15 72,19.0294373 72,24 L72,48 L81.0281474,48 C84.3193487,48 86.9962253,50.6512612 87.02787,53.9423104 L87.331448,85.5144224 C87.3393592,86.3371847 88.0085783,87 88.8313787,87 L91.5,87 C92.3284271,87 93,86.3284271 93,85.5 L93,48 L90,48 C88.3431458,48 87,46.6568542 87,45 L87,39 C87,37.3431458 88.3431458,36 90,36 L90.0069793,36 C90.0023622,35.9520784 90,35.9034978 90,35.8543654 L90,31.5 C90,30.6715729 90.6715729,30 91.5,30 C92.3284271,30 93,30.6715729 93,31.5 L93,35.8543654 C93,35.9034978 92.9976378,35.9520784 92.9930207,36 L99.0069793,36 C99.0023622,35.9520784 99,35.9034978 99,35.8543654 L99,31.5 C99,30.6715729 99.6715729,30 100.5,30 C101.328427,30 102,30.6715729 102,31.5 L102,35.8543654 C102,35.9034978 101.997638,35.9520784 101.993021,36 L102,36 C103.656854,36 105,37.3431458 105,39 L105,45 C105,46.6568542 103.656854,48 102,48 L99,48 Z M66,99 L66,24 C66,22.3431458 64.6568542,21 63,21 L30,21 C28.3431458,21 27,22.3431458 27,24 L27,99 L66,99 Z M36,30 L57,30 C58.6568542,30 60,31.3431458 60,33 C60,34.6568542 58.6568542,36 57,36 L36,36 C34.3431458,36 33,34.6568542 33,33 C33,31.3431458 34.3431458,30 36,30 Z M55.3813785,49.7393916 C55.6195049,49.5353561 55.9594328,49.5010069 56.2335635,49.6532797 C56.5956637,49.8544172 56.7261497,50.3110117 56.5250121,50.6731118 L49.2407194,63.7867422 C49.2018366,63.8567414 49.1744144,63.9325157 49.1594943,64.0111868 C49.0823141,64.4181464 49.3496531,64.8106192 49.7566127,64.8877995 L57.781111,66.4096521 C57.9484607,66.4413901 58.1000224,66.5291477 58.2108594,66.658486 C58.4803918,66.9730097 58.4439192,67.4464807 58.1293954,67.7160131 L37.6635033,85.2543445 C37.4221572,85.461167 37.0766525,85.4934021 36.8012123,85.3347951 C36.442257,85.1280973 36.3188279,84.6695449 36.5255256,84.3105896 L44.3387096,70.7420625 C44.3894114,70.6540128 44.421694,70.5565792 44.4335981,70.4556747 C44.4821282,70.0443139 44.1879958,69.6714986 43.776635,69.6229685 L35.2796122,68.6205364 C35.092498,68.5984617 34.9205468,68.5067695 34.7979553,68.363695 C34.5284441,68.0491531 34.5649486,67.5756846 34.8794905,67.3061734 L55.3813785,49.7393916 Z" id="Combined-Shape" fill-rule="nonzero"></path></g></g></g></g></g>
                            </svg>
                        </div>

                        <!-- 选项列表 内容 -->
                        <div class="tab-item-describe flex-rest">
                            <div class="item-describe-title">1号枪</div>
                            <div class="item-describe-tag flex-start-center">
                                <div class="tag-item-1">{{item.isFree ? '空闲' : '非空闲'}}</div>
                                <div class="tag-item-2">慢充 7kw</div>
                            </div>
                        </div>

                        <!-- 选项列表 立即充电 -->
                        <div class="tab-item-submit">立即充电</div>
                    </div>
                </div>
            </div>

            <!-- 充电枪列表 选项列表 为空 -->
            <div class="list-null" v-if="isEquipmentNull">暂时还没有充电枪</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'listDetail',

    components: {
    },

    data () {
        return {
            // 详情预览图
            picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/picc-charge/detail-test.png',

            isSpare: true, // 充电桩是否空闲
            tags: [ // 标签列表
                '全段时间开放',
                '含快充',
                '免费停车',
            ],

            // 模态框 成功充电车型 
            typeCarModal: {
                isShow: false, // 是否显示
                logo: [ // 列表项上面的两个logo
                    'https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png',
                    'https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png',
                ],
                list: [
                    {
                        name: 'e5',
                        pictureUrl: 'https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png',
                    }, {
                        name: 'e5',
                        pictureUrl: 'https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png',
                    }, {
                        name: 'e5',
                        pictureUrl: 'https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png',
                    },
                ]
            },
            fastSpare: 2, // 快充设备 - 目前空闲
            fastCount: 3, // 快充设备 - 总数
            slowSpare: 2, // 慢充设备 - 目前空闲
            slowCount: 3, // 慢充设备 - 总数

            listSelected: 'fast', // 选中的列表 或者 slow

            fastList: [ // 快充设备列表
                {
                    isFree: true, // 是否空闲
                }, {
                    isFree: false, // 是否空闲
                }
            ], 

            slowList: [ // 慢充设备列表
                {
                    isFree: true, // 是否空闲
                }, {
                    isFree: false, // 是否空闲
                }
            ]
        }
    },
    
    computed: {
        // 设备列表是否为空
        // 用于判断渲染选项列表
        isEquipmentNull: function () {
            // 选中是 快充设备列表 并且列表为空
            if (this.listSelected === 'fast' && this.fastList.length === 0) {
                return true
            }
            // 选中是 慢充设备列表 并且列表为空
            if (this.listSelected === 'slow' && this.slowList.length === 0) {
                return true
            }

            return false
        }
    },

    methods: {
        /**
         * 跳转到百度全景地图
         */
        jumpToMap: function () {
            this.$router.push({ path: '/list/map' });
        },

        /**
         * 跳转到微信导航页面
         */
        jumpToWxMap(latitude, longitude, name, address) {
            window.location.href = `http://kf.szpiccxxjsb.cn/wxapi/map/map.html?lat=${latitude}&lng=${longitude}&type=bd&name=${name}&address=${address}`; 
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 模态框 成功充电车型
@car-modal-z-index: 1;
@car-modal-shade-z-index: 2;
@car-modal-main-z-index: 3;

.detail {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    
}

// 详情预览图 全景地图
.detail .detail-panoramic-map {
    position: relative;
    width: 100%;
    height: 150px;

    > img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .panoramic-map-btn {
        position: absolute;
        right: 15px;
        bottom: 10px;
        padding: 0px 15px;
        height: 25px;
        line-height: 25px;
        border-radius: 25px;
        font-size: 12px;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.6);
        background: rgba(0, 0, 0, 0.4);
    }

    .panoramic-map-content,
    #panorama {
        width: 100%;
        height: 150px;
    }
}

// 横幅栏
.detail .detail-banner {
    padding-bottom: 5px;

    // 横幅栏 - 整体框架
    .detail-banner-content {
        background: #fff;
    }

    // 横幅栏 - 顶部
    .detail-banner-top {
        padding: 15px;

        // 顶部 - 左边
        .detail-banner-left {
            padding-right: 10px;

            .banner-left-title {
                font-size: 16px;
                color: @black1;
                padding-bottom: 10px;
            }

            .banner-left-describe {
                font-size: 14px;
                color: @black3;
                overflow: hidden;
                padding-bottom: 10px;

                .left-describe-lable {
                    float: right;
                }
                
            }

            .banner-left-price {
                .left-price-lable {
                    padding-right: 1.5px;
                    font-size: 18px;
                    color: #5594FF;
                }

                .left-price-subject {
                    font-size: 12px;
                    color: @black2;
                }
            }
        }

        // 顶部 - 右边
        .detail-banner-right {
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            border-radius: 30px;
            border: 1px solid #5594FF;
            color: #5594FF;

            span {
                padding-left: 1.5px;
            }
        }
    }

    // 横幅栏 - 底部
    .detail-banner-bottom {
        border-top: 1px solid #ddd;
        padding: 0px 15px;
        height: 45px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;

        .bottom-list-content {
            padding: 11px 0px;
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
}

// 计费详情
.detail .detail-cost-count {
    padding-bottom: 5px;

    // 计费详情 -> 框架
    .cost-count-content {
        background: #fff;
        padding-left: 15px;
    }

    // 计费详情 -> 标题
    .cost-count-title {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid #ddd;

        .count-title-icon {
            position: relative;
            top: 1px;
            border: none;
            width: 14px;
            height: 14px;
        }

        span {
            color: @black2;
            padding-left: 2.5px;
        }
    }

    // 计费详情 -> 内容
    .cost-count-describe {
        padding: 15px 15px 5px 0px;

        .count-describe-item { 
            font-size: 14px;
            padding-bottom: 10px;
        }

        .describe-item-lable {
            width: 55px;
            color: @black3;
        }

        .describe-item-main {
            color: @black2;
        }
    }
}

// 车型次数
.detail .detail-type-count {
    padding-bottom: 5px;

    // 车型次数 -> 框架
    .type-count-content {
        padding-left: 15px;
        background: #fff;
        color: @black2;

        > div {
            height: 45px;
            line-height: 45px;
            font-size: 14px;
        }

        .type-count-main {

        }

        .type-count-lable {
            padding-right: 15px;
            
        }
    }

    // 车型次数 -> 充电车型
    .type-count-car {
        // border-bottom: 1px solid #ddd;

        // 充电车型 -> 车型的 logo
        .count-car-logo {
            padding-right: 7.5px;
            width: 18px;
            height: 18px;

            img {
                display: block;
                width: 18px;
                height: 18px;
            }
        }
    }

    // 车型次数 -> 充电次数
    .type-count-charge {

    }
}

// 模态框 成功充电车型
.detail .type-car-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @car-modal-z-index;

    // 整体框架
    .car-modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: @car-modal-shade-z-index;
        background: rgba(0, 0, 0, 0.46);
    }

    .car-modal-main {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        background: #fff;
        z-index: @car-modal-main-z-index;
    }

    // 标题
    .car-modal-title {
        height: 40px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
    }

    // 成功充电车型列表
    .car-modal-list {
        padding: 15px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;

        .modal-list-content {
            float: left;
            height: 23px; 
        }

        .modal-list-item {
            display: inline-block;
            height: 23px; 

            .modal-item-content {
                padding-right: 15px;
                
                .modal-item-img {
                    width: 100px;
                    height: 100px;

                    img {
                        display: block;
                        width: 100px;
                        height: 100px;
                    }
                }

                .modal-item-lable {
                    padding-top: 10px;
                    font-size: 16px;
                    color: @black1;
                    text-align: center;
                }
            }
        }
    }
}

// 充电枪列表
.detail .detail-list {
    
    // 充电枪列表 -> 选项头
    .detail-list-navbar {
        height: 45px;
        background: #fff;
        border-bottom: 1px solid #ddd;

        .list-navbar-item {
            width: 50%;
            font-size: 14px;

            .navbar-item-content {
                height: 45px;

                div {
                    padding: 0.5px 1.5px;
                    border-radius: 1.5px;
                    color: #fff;
                }
            }

            span {
                color: @black2;
                padding-left: 5px;
            }
        }

        .list-navbar-selected {
            border-bottom: 2px solid #5594FF;
        }

        .navbar-item-fast {
            label {
                color: #00B90A;
            }

            > div {
                background: #00B90A;
            }
        }

        .navbar-item-slow {
            label {
                color: #FF8D18;
            }
            
            > div {
                background: #FF8D18;
            }
        }
    }

    // 充电枪列表 -> 选项列表
    .list-content {
        background: #fff;

        // 选项列表 ->  整体
        .list-content-tab {
            .list-tab-item {
                padding: 15px;
                border-bottom: 1px solid #ddd;
            }

            .tab-item-icon {
                height: 60px;
                width: 60px;
                border: 1px solid #efefef;
                border-radius: 4px;

                path {
                    fill: #CCCCCC;
                }
            }

            // 选项列表 内容
            .tab-item-describe {
                padding-left: 10px;
                padding-right: 10px;

                .item-describe-title {
                    font-size: 16px;
                    color: #cccccc;
                    padding-bottom: 20px;
                }

                .item-describe-tag {
                    > div {
                        padding: 0px 10px;
                        margin-right: 5px;
                        height: 20px;
                        font-size: 14px;
                        line-height: 20px;
                        border-width: 1px;
                        border-radius: 20px;
                        border-style: solid;
                        border-color: #cccccc;
                        color: #cccccc;
                    }
                }
            }

            .tab-item-submit {
                padding: 0px 15px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                border-width: 1px;
                border-radius: 30px;
                text-align: center;
                border-style: solid;
                color: #cccccc;
                border-color: #cccccc;
                background: #f5f5f5;
            }

            // 空闲状态下的选项
            .tab-item-free {
                .tab-item-icon path {
                    fill: #5594FF;
                }

                .tab-item-describe {
                    .item-describe-title {
                        color: @black1;
                    }
                    .item-describe-tag > div {
                        color: #00B90A;
                        border-color: #00B90A;
                    }
                }

                .tab-item-submit {
                    color: #00B90A;
                    border-color: #00B90A;
                    background: #edffee;
                }
            }
        }

        // 选项列表 ->  快充头
        // .list-tab-fast {
        // }

        // 选项列表 ->  慢充头
        .list-tab-slow .tab-item-free .tab-item-describe .item-describe-tag .tag-item-2 {
            color: #FF8D18;
            border-color: #FF8D18;
        }
    }

    // 选项列表 -> 为空
    .list-null {
        height: 75px;
        line-height: 75px;
        text-align: center;
        font-size: 14px;
        color: @black3;
    }
}

</style>
