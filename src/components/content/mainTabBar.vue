<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- @是webpack.base.con.js中 resolve起的别名 @相当于将文件路径自动定位到scr路径之下 -->
    <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
    <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
    <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item  path="/category" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="green">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'

  export default{
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
   @import url("../../assets/css/base.css");
</style>
