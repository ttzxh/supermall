<template>
	<div>
		<div class="Logo">
			<img :src="shop.logo" alt="" style="width: 30%;">
			<span class="ShopTitle">{{shop.name}}</span>
		</div>
		<div class="NumDescribe">
			<!-- <div class="ItemNum">{{shopSells}}</div> -->
			<div class="ItemNum">{{shop.sells}} <div>总销量</div></div>
			<div class="TotalNum">{{shop.goodsCount}}<div>全部宝贝</div></div>
		</div>
		<div class="goodsDescribe">
			<div v-for="(items,index) in shop.score">
				<span>{{items.name}}</span>
				<span :class="{Colorchange:!changesty(index),Colorchange1:changesty(index)}" >{{items.score}} </span>
				<span v-show="!changesty(index)" :class="{BGchange:!changesty(index),BGchange1:changesty(index)}">{{height[1]}}</span>
				<span v-show="changesty(index)" :class="{BGchange:!changesty(index),BGchange1:changesty(index)}">{{height[0]}}</span>
			</div>
			
		</div>
		<div class="joinShop">
			<a :href="shop.Url">
				<button>进店逛逛</button>
			</a>
		</div>
		
	</div>
	

</template>

<script>
	export default{
		name:"DetailShopInfo",
		props:{
			shop:{
				type:Object,
				default:{}
			}
		},
		data(){
			return{
				
				height:["高","低"]
			}
		},
		computed:{
		changeformation(){
			return this.shop.sells=(this.shop.sells/10000).toFixed(1)+'万'
		  }
		},
		methods:{
			changesty(index){
				if(this.shop.score[index].isBetter){
					// this.height="高"
					
					return true
				}else{
					// this.height="低"
					
						return false
				}
				
       
				 
			 }
			
		},
		mounted() {
		
		},
		beforeUpdate() {
			// console.log(this.shop.score[1].isBetter)
		
			
		
		}
		
	
	}
</script>

<style scoped="scoped">
	.ShopTitle{
	padding-left: 30px;
		display: inline-block;
		font-size: 20px;
	vertical-align: 20px;

		
	}
	.NumDescribe,.goodsDescribe{
		margin-top: 20px;
	}
	.NumDescribe{
		height: 100px;
		/* line-height: 100px; */
	}
	.NumDescribe{
		
		display: inline-flex;
		width: 45%;
	}
	
	.ItemNum,.TotalNum{
		flex: 1;
		font-size: 20px;
		text-align: center;
		margin-top: 20px;
	}
	.ItemNum>div,.TotalNum>div{
		font-size: 12px;
		padding-top: 10px;
		}
		.goodsDescribe{
			width: 45%;
			display: inline-block;
			margin-left: 20px;
			vertical-align: top;
			position: relative;
		}
	.goodsDescribe span{
		display: inline-block;
		margin: 5px;
	}
	.goodsDescribe span:nth-child(3),span:nth-child(4){
		/* margin-right: 5px; */
		position: absolute;
		right: 5px;
		}
		.Colorchange{
			color: greenyellow;
			/* background-color: #ADFF2F; */
		}
		.Colorchange1{
			color: red;
			/* background-color: #ADFF2F; */
		}
		.BGchange{
			background-color: #ADFF2F;
			color: #FFFFFF;
		}
		.BGchange1{
			background-color: red;
			color: #FFFFFF;
		}
		.Logo{
			padding-top:20px;
		}
		.joinShop{
			padding-bottom: 20px;
			text-align: center;
		}
		.joinShop button{
			margin: 0 auto;
			border: none;
			width: 200px;
			height: 30px;
			outline: none;
			border-radius: 5px;
			
			
		}
	
</style>
