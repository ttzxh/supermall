<template>

  <div id="tab-bar">
  <slot></slot>
  </div>

</template>

<script>

</script>


<style>
  /* 在style里面引用资源 用  @import url（.xx/xx/xx）*/
  @import url("~assets/css/base.css");
  #tab-bar{
    /* width: 100%; */
    display:flex;
    background-color: #f2f2f2;
    position: fixed;
    bottom: 0;
   right: 0;
    left: 0;
    box-shadow: 0px -2px  10px 0 rgba(0,0,0,.3);
		z-index: 999999999;
  }

</style>
