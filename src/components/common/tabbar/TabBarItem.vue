<template>
<div class="tab-bar-item" @click="itemClick">
  <!-- 一般将插槽里面的一些 v-xx这样的东西放在div里面 防止插槽被替换的时候 v-xx也被替换 导致失效 -->
  <div v-if="!isActive"> <slot name='item-icon'></slot></div>
 <div  v-else ><slot name='item-icon-active'></slot></div>

  <div :style="activeStyle"> <slot name='item-text'></slot></div>


 <!-- <img src="../../assets/img/tabbar/Lesson.png" alt="">
  首页</div> -->
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    //添加一个属性为path 字符串类型
    props:{
      path:String,
      activeColor:{
        Type:String,
        default:'cyan'
      }
    },
  data(){
    return {
      // isActive:false
       // isActive:this.$route.path.includes(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){

      // this.isActive=!this.isActive;
      this.$router.replace(this.path).catch(err=>{})
    }
  }

  }
</script>

<style>
  .tab-bar-item{
   flex:1;
   text-align: center;
    height: 49px;
    /* line-height: 49px; */

  }
  .tab-bar-item img{
margin-top: 3px;
   width: 24px;
   height: 24px;
   vertical-align: middle;
  }
 /* .Active{
    color: red;
  } */

</style>
