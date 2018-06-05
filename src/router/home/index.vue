<!-- 
  - 主页 首屏页面 
  -->
<template>
  <div class="home">
    
  </div>
</template>

<script>

export default {
  name: 'home',

  data () {
    return {
    }
  },
  
  methods: {
  },
}

</script>

<style scoped lang="less">

.flex-start {
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
  justify-content: flex-start;
}

</style>
