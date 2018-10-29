<!-- 启动充电 -->
<template>
<div class="launch" id="launch">

    <!-- 充电枪的 icon -->
    <div class="central">
        <div class="central-content flex-center" :style="'height: ' + (clientWidth - 60) + 'px;'">
            <div class="central-main">
                <div class="central-icon flex-center">
                    <!-- 非空闲 icon -->
                    <svg v-if="pageState === 'notfree'" width="160px" height="160px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="path-1" cx="160" cy="160" r="160"></circle></defs><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="扫码充电-非空闲" transform="translate(-215.000000, -278.000000)"><g id="充电枪" transform="translate(70.000000, 198.000000)"><g id="充电中" transform="translate(145.000000, 80.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="Mask" fill="#FFEDDA" xlink:href="#path-1"></use>
                        <path d="M231.893456,119.370892 C234.774162,121.484107 237.360012,124.144668 239.475894,127.280544 L276.50383,182.15837 C286.407334,196.836011 282.561408,216.729034 267.910369,226.607981 C260.606587,231.532798 252.021808,233.012267 243.999928,231.482362 L274.268797,276.342808 L252.531351,291 L218.677238,240.825987 C218.677238,240.825987 215.657701,240.897566 214.73223,240.697796 C213.376631,240.376156 205.108211,231.027974 205.108211,231.027974 L201.63022,233.373125 L160.811328,172.876855 L112.541983,172.820627 C111.844766,172.821414 111.175413,172.544257 110.681977,172.050461 C110.188542,171.556665 109.911689,170.886924 109.912657,170.18938 L109.914397,167.051434 C109.807856,167.081027 97.3931686,167.087312 72.6703345,167.07029 C71.973118,167.071076 71.3037647,166.793919 70.8103292,166.300123 C70.3168938,165.806327 70.0400416,165.136587 70.0410096,164.439043 L70.0000128,131.89494 C69.9978377,131.197392 70.2735316,130.528274 70.7661136,130.035589 C71.2586955,129.542904 71.9275706,129.267255 72.6247898,129.269613 L109.367074,129.303937 C109.468919,129.298634 109.637213,127.54812 109.871955,124.052395 L106.850978,122.762508 L106.855676,125.769375 L103.719196,125.761384 L103.720708,121.451262 L102.640651,120.975511 C102.036623,120.970898 101.582332,120.485104 101.578696,119.917233 L101.559077,115.716413 C101.562485,115.112108 102.047146,114.658571 102.614744,114.656064 L110.779696,114.663692 C111.252403,114.245931 111.861593,114.015425 112.49294,114.015434 L168.119317,114.053734 C169.174606,114.070916 170.11015,114.707477 170.516346,115.6376 L200.432765,115.680225 C200.846383,115.496384 201.296431,115.319662 201.724742,115.157597 C202.38247,113.319982 204.11321,111.99455 206.172663,112.000017 L227.152641,112.016579 C229.779692,112.01954 231.903601,114.136096 231.891182,116.742606 L231.893456,119.370892 Z M231.080083,130.886845 C223.906299,127.363614 204.034721,133.035654 197.159412,137.671559 C190.65281,142.05885 192.658173,150.175445 193.891797,152.003758 L234.425178,212.076882 C241.077939,221.93671 254.427446,224.557575 264.252414,217.932765 L265.119961,217.347793 C274.94493,210.722983 277.514907,197.367878 270.862146,187.508051 L242.665012,145.718051 C240.623657,142.692629 234.462732,132.532832 231.080083,130.886845 Z M199.46062,140.94685 C204.452332,137.581023 219.576361,134.471371 225.519395,138.056361 C228.322232,139.757822 234.041738,149.006597 235.897148,151.756435 L261.653736,189.929386 C267.731298,198.93673 266.862636,210.13904 259.722592,214.953451 L259.09073,215.379505 C251.950686,220.193916 241.235206,216.802597 235.157645,207.795252 L198.122505,152.90675 C196.997572,151.239525 194.721653,144.142256 199.46062,140.94685 Z M233.955988,156.017056 C232.188762,153.397911 226.726595,144.664246 224.235117,142.97804 C218.925527,139.349528 206.196679,141.231796 202.136628,143.96942 C198.309184,146.550201 200.677204,153.114853 201.752267,154.708166 L236.831706,206.698192 C242.589918,215.232239 251.97392,218.97151 257.767951,215.064693 L258.275458,214.72249 C264.090635,210.801414 264.116647,200.717129 258.358435,192.183082 L233.955988,156.017056 Z" id="Combined-Shape" fill="#FF8D18" fill-rule="nonzero" mask="url(#mask-2)"></path></g></g></g></g>
                    </svg>

                    <!-- 离线 icon -->
                    <svg v-if="pageState === 'offline'" width="160px" height="160px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="path-1" cx="160" cy="160" r="160"></circle></defs><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="扫码充电-离线" transform="translate(-215.000000, -278.000000)"><g id="充电枪" transform="translate(70.000000, 198.000000)"><g id="离线" transform="translate(145.000000, 80.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="Mask" fill="#EEEEEE" xlink:href="#path-1"></use>
                        <path d="M231.891182,116.742606 L231.893456,119.370892 C234.774162,121.484107 237.360012,124.144668 239.475894,127.280544 L276.50383,182.15837 C286.407334,196.836011 282.561408,216.729034 267.910369,226.607981 C260.606587,231.532798 252.021808,233.012267 243.999928,231.482362 L274.268797,276.342808 L252.531351,291 L218.677238,240.825987 C218.677238,240.825987 215.657701,240.897566 214.73223,240.697796 C213.376631,240.376156 205.108211,231.027974 205.108211,231.027974 L201.63022,233.373125 L160.811328,172.876855 L112.541983,172.820627 C111.844766,172.821414 111.175413,172.544257 110.681977,172.050461 C110.188542,171.556665 109.911689,170.886924 109.912657,170.18938 L109.914397,167.051434 C109.754586,167.095823 109.601817,167.103779 109.412618,167.104614 L72.6703345,167.07029 C71.973118,167.071076 71.3037647,166.793919 70.8103292,166.300123 C70.3168938,165.806327 70.0400416,165.136587 70.0410096,164.439043 L70.0000128,131.89494 C69.9978377,131.197392 70.2735316,130.528274 70.7661136,130.035589 C71.2586955,129.542904 71.9275706,129.267255 72.6247898,129.269613 L109.367074,129.303937 C109.519842,129.295982 109.687304,129.309804 109.869459,129.345402 L109.871955,124.052395 L106.850978,122.762508 L106.855676,125.769375 L103.719196,125.761384 L103.720708,121.451262 L102.640651,120.975511 C102.036623,120.970898 101.582332,120.485104 101.578696,119.917233 L101.559077,115.716413 C101.562485,115.112108 102.047146,114.658571 102.614744,114.656064 L110.779696,114.663692 C111.252403,114.245931 111.861593,114.015425 112.49294,114.015434 L168.119317,114.053734 C169.174606,114.070916 170.11015,114.707477 170.516346,115.6376 L200.432765,115.680225 C200.846383,115.496384 201.296431,115.319662 201.724742,115.157597 C202.38247,113.319982 204.11321,111.99455 206.172663,112.000017 L227.152641,112.016579 C229.779692,112.01954 231.903601,114.136096 231.891182,116.742606 Z M242.665012,145.718051 C240.623657,142.692629 234.462732,132.532832 231.080083,130.886845 C223.906299,127.363614 204.034721,133.035654 197.159412,137.671559 C190.65281,142.05885 192.658173,150.175445 193.891797,152.003758 L234.425178,212.076882 C241.077939,221.93671 254.427446,224.557575 264.252414,217.932765 L265.119961,217.347793 C274.94493,210.722983 277.514907,197.367878 270.862146,187.508051 L242.665012,145.718051 Z M199.46062,140.94685 C204.452332,137.581023 219.576361,134.471371 225.519395,138.056361 C228.322232,139.757822 234.041738,149.006597 235.897148,151.756435 L261.653736,189.929386 C267.731298,198.93673 266.862636,210.13904 259.722592,214.953451 L259.09073,215.379505 C251.950686,220.193916 241.235206,216.802597 235.157645,207.795252 L198.122505,152.90675 C196.997572,151.239525 194.721653,144.142256 199.46062,140.94685 Z M233.955988,156.017056 C232.188762,153.397911 226.726595,144.664246 224.235117,142.97804 C218.925527,139.349528 206.196679,141.231796 202.136628,143.96942 C198.309184,146.550201 200.677204,153.114853 201.752267,154.708166 L236.831706,206.698192 C242.589918,215.232239 251.97392,218.97151 257.767951,215.064693 L258.275458,214.72249 C264.090635,210.801414 264.116647,200.717129 258.358435,192.183082 L233.955988,156.017056 Z" id="充电枪" fill="#999999" fill-rule="nonzero" mask="url(#mask-2)"></path></g></g></g></g>
                    </svg>

                    <!-- 空闲 和 占用 icon -->
                    <svg v-if="pageState === 'leisure' || pageState === 'takeUp' || pageState === 'booting' || pageState === 'bootfailed'" width="160px" height="160px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="path-1" cx="160" cy="160" r="160"></circle></defs><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电" transform="translate(-215.000000, -278.000000)"><g id="充电枪" transform="translate(70.000000, 198.000000)"><g id="Group" transform="translate(145.000000, 80.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="Mask" fill="#E1ECFF" xlink:href="#path-1"></use>
                        <path d="M231.891182,116.742606 L231.893456,119.370892 C234.774162,121.484107 237.360012,124.144668 239.475894,127.280544 L276.50383,182.15837 C286.407334,196.836011 282.561408,216.729034 267.910369,226.607981 C260.606587,231.532798 252.021808,233.012267 243.999928,231.482362 L274.268797,276.342808 L252.531351,291 L218.677238,240.825987 C218.677238,240.825987 215.657701,240.897566 214.73223,240.697796 C213.376631,240.376156 205.108211,231.027974 205.108211,231.027974 L201.63022,233.373125 L160.811328,172.876855 L112.541983,172.820627 C111.844766,172.821414 111.175413,172.544257 110.681977,172.050461 C110.188542,171.556665 109.911689,170.886924 109.912657,170.18938 L109.914397,167.051434 C109.754586,167.095823 109.601817,167.103779 109.412618,167.104614 L72.6703345,167.07029 C71.973118,167.071076 71.3037647,166.793919 70.8103292,166.300123 C70.3168938,165.806327 70.0400416,165.136587 70.0410096,164.439043 L70.0000128,131.89494 C69.9978377,131.197392 70.2735316,130.528274 70.7661136,130.035589 C71.2586955,129.542904 71.9275706,129.267255 72.6247898,129.269613 L109.367074,129.303937 C109.519842,129.295982 109.687304,129.309804 109.869459,129.345402 L109.871955,124.052395 L106.850978,122.762508 L106.855676,125.769375 L103.719196,125.761384 L103.720708,121.451262 L102.640651,120.975511 C102.036623,120.970898 101.582332,120.485104 101.578696,119.917233 L101.559077,115.716413 C101.562485,115.112108 102.047146,114.658571 102.614744,114.656064 L110.779696,114.663692 C111.252403,114.245931 111.861593,114.015425 112.49294,114.015434 L168.119317,114.053734 C169.174606,114.070916 170.11015,114.707477 170.516346,115.6376 L200.432765,115.680225 C200.846383,115.496384 201.296431,115.319662 201.724742,115.157597 C202.38247,113.319982 204.11321,111.99455 206.172663,112.000017 L227.152641,112.016579 C229.779692,112.01954 231.903601,114.136096 231.891182,116.742606 Z M242.665012,145.718051 C240.623657,142.692629 234.462732,132.532832 231.080083,130.886845 C223.906299,127.363614 204.034721,133.035654 197.159412,137.671559 C190.65281,142.05885 192.658173,150.175445 193.891797,152.003758 L234.425178,212.076882 C241.077939,221.93671 254.427446,224.557575 264.252414,217.932765 L265.119961,217.347793 C274.94493,210.722983 277.514907,197.367878 270.862146,187.508051 L242.665012,145.718051 Z M199.46062,140.94685 C204.452332,137.581023 219.576361,134.471371 225.519395,138.056361 C228.322232,139.757822 234.041738,149.006597 235.897148,151.756435 L261.653736,189.929386 C267.731298,198.93673 266.862636,210.13904 259.722592,214.953451 L259.09073,215.379505 C251.950686,220.193916 241.235206,216.802597 235.157645,207.795252 L198.122505,152.90675 C196.997572,151.239525 194.721653,144.142256 199.46062,140.94685 Z M233.955988,156.017056 C232.188762,153.397911 226.726595,144.664246 224.235117,142.97804 C218.925527,139.349528 206.196679,141.231796 202.136628,143.96942 C198.309184,146.550201 200.677204,153.114853 201.752267,154.708166 L236.831706,206.698192 C242.589918,215.232239 251.97392,218.97151 257.767951,215.064693 L258.275458,214.72249 C264.090635,210.801414 264.116647,200.717129 258.358435,192.183082 L233.955988,156.017056 Z" id="充电枪" fill="#5594FF" fill-rule="nonzero" mask="url(#mask-2)"></path></g></g></g></g>
                    </svg>
                </div>

                <div class="central-title flex-center">{{stationName}}</div>

                <div class="central-lable flex-center">
                    {{gunName}}
                    <span v-if="pageState === 'leisure' || pageState === 'takeUp' || pageState === 'notfree' || pageState === 'offline'"  :style="'color: ' + pageStateColor">{{pageStateName}}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- tips -->
    <div class="tips flex-column-center">
        <div v-if="pageState === 'notfree'" class="tips-notfree">该电枪正在充电中，请选择其它空闲充电枪进行充电</div>

        <div v-if="pageState === 'offline'" class="tips-offline">该电枪已离线，请选择其它空闲充电枪进行充电</div>

        <div v-if="pageState === 'leisure' || pageState === 'takeUp'" class="tips-leisure">启动充电后，请在90秒内插枪</div>
        <div v-if="pageState === 'leisure' || pageState === 'takeUp'" class="tips-leisure">请确保车辆已就位后开始充电，避免给您带来不便和损失</div>

        <div v-if="pageState === 'booting'" class="tips-booting-main">充电启动中...</div>
        <div v-if="pageState === 'booting'" class="tips-booting">启动大约需要2分钟，请确保充电枪已插好</div>

        <div v-if="pageState === 'bootfailed'" class="tips-bootfailed-main">充电启动失败...</div>
        <div v-if="pageState === 'bootfailed'" class="tips-bootfailed">充电枪连接失败</div>
        <div v-if="pageState === 'bootfailed'" class="tips-bootfailed">请重新开启充电或联系场站管理员协助处理</div>
    </div>

    <!-- button -->
    <div class="button">
        <div v-if="pageState === 'notfree' || pageState === 'offline'" class="button-content button-failure">启动充电</div>
        
        <div v-if="pageState === 'leisure' || pageState === 'takeUp'" class="button-content button-start" @click="startCharging">启动充电</div>

        <div v-if="pageState === 'booting'" class="button-content button-start" :class="{'button-content-refresh': refreshCount}" @click="refresh">刷新<span style="padding-left: 5px;" v-if="refreshCount">{{refreshCount}}</span></div>

        <div v-if="pageState === 'bootfailed'" class="button-content button-bootfailed" @click="startCharging">重新启动充电</div>
    </div>

    <!-- 账户余额 -->
    <div class="wallet flex-center" v-if="pageState !== 'booting'">
        <div class="flex-start-center">
            <div>账户余额</div>
            <span>￥{{wallet}}</span>
            <div class="wallet-WxRefund" v-if="wallet !== 0" @click="walletWxRefund">退款</div>
        </div>
    </div>

    <!-- 余额不足模态框 -->
    <div class="insufficient-modal flex-center" v-if="isuInsufficientShow">
        <div class="insufficient-modal-shade"></div>
        <div class="insufficient-modal-main">

            <!-- 主要内容 -->
            <div class="modal-main-content">
                <div class="main-content-icon">
                    <svg width="36" height="36" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-余额不足" transform="translate(-340.000000, -528.000000)"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(105.000000, 360.000000)"><g id="face" transform="translate(235.000000, 40.000000)"><circle id="Oval-3" fill="#FFEFDE" cx="36" cy="36" r="35"></circle>
                        <path d="M36,72 C16.117749,72 0,55.882251 0,36 C0,16.117749 16.117749,0 36,0 C55.882251,0 72,16.117749 72,36 C72,55.882251 55.882251,72 36,72 Z M36,70 C54.7776815,70 70,54.7776815 70,36 C70,17.2223185 54.7776815,2 36,2 C17.2223185,2 2,17.2223185 2,36 C2,54.7776815 17.2223185,70 36,70 Z M20.1120126,54.0189837 C20.2860708,53.8610316 20.4422394,53.7240294 20.5805184,53.6079771 C24.751018,50.107834 30.1293535,48 36,48 C41.8805745,48 47.2671716,50.1149693 51.4406298,53.6257466 C51.5296204,53.7006069 51.6268478,53.7848622 51.732312,53.8785125 L51.7323454,53.8784749 C52.5197649,54.577689 52.5912695,55.7828437 51.8920554,56.5702632 C51.8587677,56.6077501 51.8240145,56.6439096 51.7878768,56.6786574 L51.7120598,56.7515545 C50.9621173,57.4726531 49.7845757,57.4983634 49.0038741,56.8106848 C48.8542865,56.6789211 48.7195837,56.5643834 48.5997656,56.4670717 C45.1606167,53.6739271 40.7757916,52 36,52 C31.2418296,52 26.871746,53.6615973 23.4383413,56.4361999 C23.271239,56.5712386 23.0785178,56.7369095 22.8601776,56.9332128 C22.080695,57.6340285 20.8923731,57.6141275 20.1367915,56.8876067 L20.0715216,56.8248473 C19.3071549,56.0898792 19.2833225,54.8744282 20.0182905,54.1100614 C20.0484925,54.0786513 20.0797549,54.0482786 20.1120236,54.0189958 L20.1120126,54.0189837 Z M22,34 C18.6862915,34 16,31.3137085 16,28 C16,24.6862915 18.6862915,22 22,22 C25.3137085,22 28,24.6862915 28,28 C28,31.3137085 25.3137085,34 22,34 Z M50,34 C46.6862915,34 44,31.3137085 44,28 C44,24.6862915 46.6862915,22 50,22 C53.3137085,22 56,24.6862915 56,28 C56,31.3137085 53.3137085,34 50,34 Z" id="Oval" fill="#FF8D18" fill-rule="nonzero"></path></g></g></g></g></g>
                    </svg>
                </div>
                <div class="main-content-describe">账户余额不足5元，无法启动充电，请充值</div>
                <div class="main-content-wallet flex-center">
                    <div class="content-wallet-main">账户余额:<span>￥{{wallet}}</span></div>
                </div>
                <div class="main-content-bottom" @click="jumpToRouter('/pay')">立即充值</div>
            </div>

            <!-- 关闭按钮 -->
            <div class="modal-main-close">
                <svg width="25px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-余额不足" transform="translate(-351.000000, -933.000000)"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="icon_close" transform="translate(351.000000, 805.000000)"><circle id="Oval-4" fill="#000000" opacity="0.25" cx="24" cy="24" r="23"></circle>
                    <path d="M24,22.5857864 L32.2928932,14.2928932 C32.6834175,13.9023689 33.3165825,13.9023689 33.7071068,14.2928932 C34.0976311,14.6834175 34.0976311,15.3165825 33.7071068,15.7071068 L25.4142136,24 L33.7071068,32.2928932 C34.0976311,32.6834175 34.0976311,33.3165825 33.7071068,33.7071068 C33.3165825,34.0976311 32.6834175,34.0976311 32.2928932,33.7071068 L24,25.4142136 L15.7071068,33.7071068 C15.3165825,34.0976311 14.6834175,34.0976311 14.2928932,33.7071068 C13.9023689,33.3165825 13.9023689,32.6834175 14.2928932,32.2928932 L22.5857864,24 L14.2928932,15.7071068 C13.9023689,15.3165825 13.9023689,14.6834175 14.2928932,14.2928932 C14.6834175,13.9023689 15.3165825,13.9023689 15.7071068,14.2928932 L24,22.5857864 Z M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,46 C36.1502645,46 46,36.1502645 46,24 C46,11.8497355 36.1502645,2 24,2 C11.8497355,2 2,11.8497355 2,24 C2,36.1502645 11.8497355,46 24,46 Z" fill="#BBBBBB"></path></g></g></g></g>
                </svg>
            </div>
        </div>
    </div>
</div>
</template>

<script>

// 请求类
import ajaxs from "@/api/charge/launch";
import ajaxsQueryChargeRecord from "@/api/common/checkOrderStatus";

export default {
    name: 'launch',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            /**
             * 页面状态 0：离网 1：空闲 2：占用(未充电) 3：占用(充电中) 4: 占用(预约锁定) 255: 故障
             * @param {string} leisure 空闲 
             * @param {string} takeUp 占用中
             * @param {string} notfree 充电中
             * @param {string} offline 离线
             * @param {string} booting 启动中
             * @param {string} bootfailed 启动失败
             */
            pageState: 'leisure',

            stationName: '正在加载...', // 充电站名称
            
            gunName: '正在加载...', // 充电枪名

            wallet: '正在加载...', // 账户余额

            isuInsufficientShow: false, // 余额不足模态框

            isLaunchSuccessful: false, // 是否启动成功
            StartChargeSeq: '', // 订单启动成功 缓存的号码

            checkMoneyCount: 0, // 请求 账户余额 的次数 5秒请求一次

            refreshCount: 0, // 页面刷新倒计时
        }
    },

    computed: {
        /**
         * 页面状态转换为中文
         */
        pageStateName: function () {
            let keyValueName = {
                leisure: '空闲',
                takeUp: '占用中',
                notfree: '充电中',
                offline: '离线',
                booting: '启动中',
                bootfailed: '启动失败',
            }

            return keyValueName[this.pageState];
        },

        /**
         * 页面状态转换为颜色
         */
        pageStateColor: function () {
            let keyValueColor = {
                leisure: '#00B90A',
                notfree: '#FF8D18',
                offline: '#999999',
                booting: '#5594FF',
                bootfailed: '#FF8D18',
            }

            return keyValueColor[this.pageState];
        },
    },

    mounted: function () {
        // // 初始化页面状态
        this.pageState = this.$route.params.pageState;
        window.localStorage.setItem('ycpd_charge_returnurl', window.location.href); // 缓存支付成功返回的页面

        this.initPageData(); // 初始化页面数据
    },

    methods: {
        /**
         * 初始化页面数据
         */
        initPageData: function initPageData() {
            let query = this.$route.query;
            
            this.stationName = query.stationName; // 充电桩名称

            this.gunName = query.gunName; // 充电枪名

            this.getCheckMoney(); // 请求 账户余额
        },

        /**
         * 请求 账户余额
         */
        getCheckMoney: function getCheckMoney() {
            const _this = this;

            if (this.checkMoneyCount >= 3) {
                return false; // 如果请求的次数 大于3次 则不再进行请求
            }

            this.checkMoneyCount++; // 请求的次数设置+1

            ajaxs.checkMoney()
            .then(  
                res => {
                    if (res.code === 200 && res.data.out_trade_no !== null) {
                        // 必须先判断是否数据相同, 下面再进行判断就无意义了
                        if (window.localStorage.ycpd_charge_total_fee && parseInt(window.localStorage.ycpd_charge_total_fee) == res.data.out_trade_no) {
                            // 如果数据相同说明 可能未更新数据
                            window.setTimeout(() => {
                                _this.getCheckMoney();
                            }, 2500); // 2.5秒请求一次
                        }
                        _this.wallet = res.data.total_fee; // 账户余额
                        window.localStorage.setItem('ycpd_charge_total_fee', res.data.total_fee); // 缓存一下 账户余额 用于判断是否更新
                        window.localStorage.setItem('ycpd_charge_out_trade_no', res.data.out_trade_no); // 全局缓存订单号
                        window.localStorage.setItem('ycpd_charge_refund_fee', res.data.total_fee); // 付款金额
                        window.localStorage.setItem('ycpd_charge_project', res.data.project); // 项目名称

                    } else {
                        console.error(res);
                    }
                }, error => {
                    alert(error);
                }
            );

        },

        /**
         * 启动充电
         */
        startCharging: function startCharging() {
            const _this = this;

            ajaxs.startCharging()
            .then(
                res => {
                    if (res.code === 200) {
                        /**
                         * 请求成功，跳到到启动中的页面
                         * 此页面不继续进行任何处理
                         */
                        _this.jumpToRouter('/charge/launching', { StartChargeSeq: res.data.StartChargeSeq }); // 跳转到启动中
                        // _this.pageState = 'booting';
                        // _this.StartChargeSeq = res.data.StartChargeSeq;
                        // _this.checkOrderLaunch(); // 轮询 判断是否启动成功
                    } else if (res.code === 666) {
                        _this.jumpToRouter('/pay'); // 跳转到付款页面
                        // _this.isuInsufficientShow = true;
                    } else {
                        _this.pageState = 'bootfailed';
                        alert(`启动充电失败, 原因: ${res.msg}`);
                    }
                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 页面刷新5秒倒计时
         */
        refresh: function refresh() {
            const _this = this;

            // 如果存在倒计时 是不允许点击的
            if (this.refreshCount) {
                return false;
            }

            // 定时器倒计时 5 秒
            this.refreshCount = 6;
            for(var i = 0; i < 5; i++ ) {
                (function (i) { // 匿名函数自执行创建闭包
                    setTimeout(function() {
                        _this.refreshCount--;
                        if (i === 4) {
                            _this.refreshCount = 0;
                        }
                    }, i * 1000);
                })(i);
            }
            
            // 轮询
            this.checkOrderLaunch('isrefresh');
        },

        /**
         * 轮询 判断是否启动成功
         */
        checkOrderLaunch: function checkOrderLaunch(isrefresh) {
            const _this = this;

            // 如果是启动成功了，则不再进行判断
            if (this.isLaunchSuccessful) {
                return false;
            }

            ajaxsQueryChargeRecord(this.StartChargeSeq)
            .then(
                res => {
                    if (res.code === 200 && res.data) {
                        // 启动成功跳转
                        _this.isLaunchSuccessful = true; // 设置为成功
                        _this.jumpToRouter('/process/normal', { StartChargeSeq: _this.StartChargeSeq }); 
                    } else {
                        /**
                         * 若未启动成功
                         * 先判断是不是手动刷新
                         * 手动刷新 - 不用循环执行
                         * 自动刷新 - 5秒循环调用
                         */
                        if (isrefresh !== 'isrefresh') {
                            window.setTimeout(() => {
                                _this.checkOrderLaunch();
                            }, 5000);
                        }
                    }
                }, error => {} // 失败不作处理
            )
        },

        /**
         * 退款
         */
        walletWxRefund: function walletWxRefund() {
            const _this = this;

            if (confirm('您是否确认退款?')) {
                ajaxs.outTradeMoney()
                .then(
                    res => {
                        alert('退款申请成功，稍后请注意查看微信退款通知。');
                        _this.initPageData();
                    }, error => {
                        alert(error);
                    }
                );
            }
        },

        /**
         * 跳转到路由
         * @param {object} query 携带的参数 非必填
         */
        jumpToRouter: function jumpToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.push(routerConfig);
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 余额不足模态框
@insufficient-modal-z-index: 2;
@insufficient-modal-shade-z-index: 3;
@insufficient-modal-main-z-index: 4;

.launch {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 充电枪的 icon 中心部分
.central {
    padding: 30px;

    .central-content {
        border-radius: 10px;
        background: #fff;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);

        .central-title {
            padding-top: 15px;
            font-size: 16px;
        }

        .central-lable {
            padding-top: 10px;
            font-size: 14px;

            span {
                padding-left: 5px;
            }
        }
    }
}

// 提示
.tips {
    font-size: 12px;

   
    .tips-notfree, // 非空闲/充电中
    .tips-offline, // 离线
    .tips-leisure, // 空闲
    .tips-booting, // 启动
    .tips-bootfailed, // 启动失败
    {
        color: @black3;
    }

    .tips-booting-main {
        padding-bottom: 10px;
        font-size: 16px;
        color: #5594FF;
    }

    .tips-bootfailed-main {
        padding-bottom: 10px;
        font-size: 16px;
        color: #FF8D18;
    }
}

// 按钮
.button {
    padding: 25px 25px 0px 25px;

    .button-content {
        height: 45px;
        width: 100%;
        line-height: 45px;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        color: #fff;
    }

    // 非空闲 离线
    .button-failure {
        background: #cccccc;
    }

    // 空闲
    .button-start {
        background: #5594FF;
    }

    // 重新启动
    .button-bootfailed {
        background: #5594FF;
    }

    // 点击刷新时
    .button-content-refresh {
        background: #9EC2FF;
    }
}

// 账户余额
.wallet {
    line-height: 70px;
    font-size: 14px;
    text-align: center;
    color: @black3;

    span {
        padding-left: 10px;
        color: #E50012;
    }

    .wallet-WxRefund {
        padding-left: 15px;
        color: #5594FF;
    }
}

// 余额不足模态框
.insufficient-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @insufficient-modal-z-index;

    // 遮罩层
    .insufficient-modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.46);
        z-index: @insufficient-modal-shade-z-index;
    }

    // 主要 框架部分
    .insufficient-modal-main {
        position: relative;
        width: 270px;
        z-index: @insufficient-modal-main-z-index;

        .modal-main-content {
            border-radius: 10px;
            min-height: 110px;
            width: 270px;
            background-color: #fff;
        }

        .modal-main-close {
            padding-top: 15px;
            text-align: center;
        }
    }

    // 顶部头像部分
    .main-content-icon {
        padding-top: 15px;
        text-align: center;
    }

    // 文字
    .main-content-describe {
        padding: 15px 35px 15px 35px;
        font-size: 14px;
        color: @black2;
        text-align: center;
    }

    // 钱包
    .main-content-wallet {
        padding-bottom: 15px;
        font-size: 14px;

        .content-wallet-main {
            padding: 0px 15px;
            height: 35px;
            font-weight: 400;
            line-height: 35px;
            border-radius: 4px;
            color: @black1;
            background: #f0f0f0;
        }
    }

    // 底部按钮
    .main-content-bottom {
        height: 45px;
        font-size: 14px;
        line-height: 45px;
        border-top: 1px solid #ddd;
        text-align: center;
    }
}

</style>
