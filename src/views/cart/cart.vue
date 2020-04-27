<template>
  <div id="cart">
	<nav-bar class="CartNavBar"><div slot="center">购物车({{length}})</div></nav-bar>
	<cart-list></cart-list>
	<!-- 底部汇总 -->
	<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navBar/navBar.vue'
	import cartList from './childComps/cartList.vue'
	import cartBottomBar from './childComps/cartBottomBar.vue'
	
	import {mapGetters} from 'vuex'
	
	export default{
		
		components:{
			NavBar,
			cartList,
			cartBottomBar
		},
		computed:{
			// ...mapGetters(['cartList','cartLength'])
			...mapGetters({
				length:'cartLength',
				
			})
		}
	}
</script>

<style>
	.CartNavBar{
		background-color: #FF5777;
		color: #FFFFFF;
		font-weight: 700;
	}
	#cart{
		height: 100vh;
	}
</style>
