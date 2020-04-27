<template>
	<div class="cartListItem" v-if="isCartListItemShow">
		<div class="CheckButton" >
			<check-button @click.native="checkClick" :isCheck="product.check"></check-button>
			</div>
		
		<div class="cartListItemLeft"><img :src="product.image" alt="" class="cartListImage"></div>
		<div class="cartListItemRight">
			<p>{{product.title}}</p>
			<p>{{product.desc}}</p>
			
			<div>
				<p>${{product.price}}</p>
				<p><button @click="cartGoodsIncream">↑</button><button @click="cartGoodsDeincream">↓</button> x{{product.count}}</p>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkButton/CheckButton.vue'
	export default{
		props:{
			product:{
				Type:Object,
				default:{}
			},
			cartItemGoods:{
				Type:Object,
				default:0
			}
		},
		data(){
			return{
				isCartListItemShow:true
			}
		},
	methods:{
		checkClick(){
			this.product.check=!this.product.check;
		},
		cartGoodsIncream(){
		 this.$store.state.cartList[this.cartItemGoods].count++;
		},
		cartGoodsDeincream(){
			
		 this.$store.state.cartList[this.cartItemGoods].count--;
		 if(this.$store.state.cartList[this.cartItemGoods].count<=0){
			let boundent= confirm("确定放弃此产品吗")
			if(boundent==false) return  this.$store.state.cartList[this.cartItemGoods].count++;
			 this.isCartListItemShow=false;
			 this.$store.state.cartList.splice(this.cartItemGoods,1)
		 }
		}
	},
	
		components:{
			CheckButton
		}
	}
</script>

<style scoped="scoped">
	.cartListItem{
		border: 1px solid #eeeeee;
		border-radius: 5px;
		width: 100%;
		height: 25vh;
		padding-top: 5px;
	}
	.cartListImage{
		width: 100%;
		height: 95%;
		border-radius: 5px;
		vertical-align: top;
		
	}
	.cartListItemLeft{
		display: inline-block;
		width: 30%;
		height: 100%;
		vertical-align: top;
		padding-left: 5px;
	}
	.cartListItemRight{
		padding:0 5px;
		display: inline-block;
		width: 60%;
		height: 100%;
		/* overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap; */
	}
	.cartListItemRight p:nth-child(1){
		font-size: 19px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		padding-top: 5px;
	}
	.cartListItemRight p:nth-child(2){
		padding-top: 10px;
		font-size: 13px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		}
	.cartListItemRight div{
		display: flex;
			padding-top: 20px;
			justify-content: space-between;
			}
		.cartListItemRight div p:nth-child(2){
			font-size: 16px;
			font-weight: 500;
			
			}
			.cartListItemRight div p:nth-child(1){
				color: #FF5777;
				}
				.CheckButton{
					display: inline-block;
					height: 100%;
					vertical-align: 50%;
					width: 10%;
					
				}
				.cartListItemRight div p:nth-child(2) button{
					border: none;
					outline: none;
					width: 20px;
					height: 40px;
					vertical-align: middle;
					}
</style>
