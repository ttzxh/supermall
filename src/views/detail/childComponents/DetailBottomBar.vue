<template>
	<div class="bottomBar">
		<div class="bottomBarleft">
			<div class="store"><div class="storeImage"></div>店铺</div>
			<div class="whiter"><div class="whiteImage"></div>客服</div>
			<div class="collection" @click="showCollection">
				<div :class="{collectionImage:!isActive,collectionImageBright:isActive}"></div>
				收藏</div>
		</div>
		<div class="bottomBarright">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buyNow">立即购买</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				isActive:false
			}
		},
		methods:{
			showCollection(){
				return this.isActive=!this.isActive
			},
			addToCart(){
				this.$emit('addCart')
			}
		}
	}
</script>

<style scoped="scoped">
	.bottomBar{
		/* line-height: 49px; */
		text-align: center;
		height: 49px;
		z-index: 1000;
		/* background-color: red; */
		position: relative;
		bottom: 49px;
		left: 0;
		right: 0;
		box-shadow: .3px 0 .5px 0 rgba(0,0,0,.5);
		background-color: white;
		
	}
	
	.storeImage{
		/* margin-left: 5px; */
		height: 60%;
		background-image: url(../../../assets/img/detail/detail_bottom.png);
		background-position: 7px 79%;
		background-size:59%;
		background-repeat: no-repeat;
	}
	.whiteImage{
		height: 60%;
		background-image: url(../../../assets/img/detail/detail_bottom.png);
		background-position: 7px 42%;
		background-size:60%;
		background-repeat: no-repeat;
	}
	.collectionImage{
		height: 60%;
		background-image: url(../../../assets/img/detail/detail_bottom.png);
		background-position: 7px 0;
		background-size:65%;
		background-repeat: no-repeat;
	}
	.collectionImageBright{
		height: 60%;
		background-image: url(../../../assets/img/detail/detail_bottom.png);
		background-position: 7px 22%;
		background-size:65%;
		background-repeat: no-repeat;
	}
	.bottomBarleft {
		
		height: 100%;
		display: inline-flex;
		width: 35%;
		/* background-color: red; */
		font-size: 12px;
	}
	.bottomBarleft div{
		flex: 1;
	}
	.bottomBarright{
		font-size: 14px;
		border-radius: 49px;
		height: 100%;
		display: inline-flex;
		width: 65%;
		vertical-align: top;
		font-weight: 700;
		/* background-color: cyan; */
	}
	.bottomBarright div{
		flex: 1;
		line-height: 39px;
		margin-bottom: 5px;
		margin-top: 5px;
		
	}
	.cart{
		/* background-color: orange; */
		background-image: linear-gradient(to right,rgb(200,0,0),rgb(255,0,0));
	  border-top-left-radius: 49px;
		border-bottom-left-radius: 49px;
		color: white
	}
	.buyNow{
		
		/* background-image: linear-gradient(to right,rgb(255,100,0),rgb(100,100,0)); */
		background-image: linear-gradient(to right,rgb(255,0,0),rgb(200,0,0));
		/* background-color: #FF0000; */
		border-top-right-radius: 49px;
		border-bottom-right-radius: 49px;
		color: white;
	}
	.store,.store~div{
		margin-top: 5px;
	}
</style>
