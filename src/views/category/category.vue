<template>
  <div>
		<nav-bar class="categoryLeftNavBar"><div slot="center">分类</div></nav-bar>
		<category-left-nav></category-left-nav>
     <category-right-nav></category-right-nav>
	</div>
 </template>

<script>
	import categoryLeftNav from './childcategoryComp/categoryLeftNav.vue'
	import NavBar from '../../components/common/navBar/navBar.vue'
	import categoryRightNav from './childcategoryComp/categoryRightNav.vue'
	 
	export default{ 
		name:'category',
		components:{
			categoryLeftNav,
			NavBar,
			categoryRightNav
		},
		data(){
			return {
			
			}
		}
	}
</script>

<style scoped="scoped">
	.categoryLeftNavBar{
		background-color: #ff5700;
		color: white;
		font-weight: 700;
	}
</style>
