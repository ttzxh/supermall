<template>
	<div class="cartList">
		<scroll class="content" ref="scroll">
		
		<cart-list-item v-for="(item,index) in cartList" :product="item" :key="index" :cartItemGoods="index"></cart-list-item>
		</scroll>
	</div>
</template>

<script>
	import scroll from '../../../components/common/Scroll/Scroll.vue'
	import cartListItem from './cartListItem.vue'
	
	import {mapGetters} from 'vuex'
	export default{
		components:{
			scroll,
			cartListItem
		},
		computed:{
			...mapGetters(['cartList'])
		},
		activated() {
			
				this.$refs.scroll.scroll.refresh()
		}
	
	}
</script>

<style scoped="scoped">
	.cartList{
		height: calc(100% - 49px - 44px - 40px);
	}
	.content{
		height: 100%;
	overflow: hidden;
	}
	
	
</style>
