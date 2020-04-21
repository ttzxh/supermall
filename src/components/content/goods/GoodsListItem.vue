<template>
	<div class="goodsItem" @click="itemCli">
		<img :src="goodsItem.show.img" alt="">
		<div class="limit">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GoodsListItem",
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
			}
		}
	},
	methods:{
		itemCli(){
			// console.log('跳转')
			this.$router.push('/detail/'+this.goodsItem.iid)
			// this.$router.push({
			// 	path:'/detail',
			// 	query:{
					
			// 	}
			// })
		}
	}
	}
</script>

<style>
	.goodsItem img{
		width: 80%;
		border-radius: 15px;
	}
	.goodsItem{
		padding: 5px;
	
	
		display: inline-block;
		width: 50%;
		height: 280px;
		font-size: 12px;
		text-align: center;
		/* background-color: red; */
		vertical-align: text-bottom;
		
	}
	.price{
		color: red;
	}
	.price::after{
		content: '';
		display: inline-block;	
		width: 30px;
		height: 20px;
	}
	.goods .limit{
		display: inline-block;
		width: 80%;
	}
	
	.goodsItem .limit p{
		margin-top: 5px;
		width: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.goodsItem .limit .collect{
		position: relative;
	}
	
	.goodsItem .limit .collect::before{
		content: '';	
		position: absolute;
		left: -15px;
		top: -1px;
		
		width: 14px;
		height: 14px;
		background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
	}
	
</style>
