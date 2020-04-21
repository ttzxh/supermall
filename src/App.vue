<template>
  <div id="app">
		<main-tab-bar></main-tab-bar>
		<!-- 由于每次切换组件时 组件都会被销毁 切回来之后又再次创建 这就会导致组件在不断创建和销毁的过程中消耗性能
		 一方面由于在不断销毁和创建 重新创建的组件无法保留原来组件的状态 keep-alive这个标签会让组件保持存活-->
		<!-- 除了Detail其他的保持存活 -->
		<keep-alive exclude="detail">
		<router-view></router-view>
		</keep-alive>
  
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar.vue'

export default {
  name: 'App',
  components: {	
		MainTabBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
