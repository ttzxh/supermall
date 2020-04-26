<template>
  <div id="cart">
	<nav-bar class="CartNavBar"><div slot="center">购物车({{length}})</div></nav-bar>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navBar/navBar.vue'
	
	import {mapGetters} from 'vuex'
	
	export default{
		components:{
			NavBar
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
</style>
