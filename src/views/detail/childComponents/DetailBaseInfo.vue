<template>
	<div>
		<div class="info-title">{{goods.title}}</div>
		<div class="price">
			<span class="newprice">{{goods.newPrice}}</span>
			<span class="oldprice">{{goods.oldPrice}}</span>
			<!-- <span>{{goods.discount}}</span> -->
		</div>
		<div class="decride">
			<div v-for="(i,num) in goods.columns" class="decrideItem">{{goods.columns[num]}}</div>
			<!-- <span>{{goods.columns[1]}}</span>
			<span>{{goods.columns[2]}}</span> -->
		</div>
		<div class="boundent">
			<span v-for="(items,index) in goods.services">
				<img :src="goods.services[index].icon" alt="">
				<span class="goodstrs">{{goods.services[index].name}}</span>
			</span>
			
		</div>
	</div>
</template>

<script>
	// import {getDetail,Goods} from '../../network/detail.js'
	
	export default{
		name:'DetailBaseInfo',
		data(){
			return{
			
			}
		},
		props:{
			goods:{
				type:Object,
				default:{}
			}
		},
		created() {
			
		},
		
	}
</script>

<style scoped="scoped">
	.info-title{
		font-size: 20px;
	}
	.price{
		margin: 10px;
	}
	.newprice{
		color: red;
		font-size: 22px;
	}
	.oldprice{
		color: #666666;
		text-decoration: line-through;
	}
	.decride{
		display: flex;
		justify-content: space-between;
		color: #666666;
		font-size: 14px;
	}
	.boundent{
		display: flex;
		margin-top: 20px;
		padding-bottom: 20px;
		justify-content:space-around;
		border-bottom: 5px solid #e6e6e6;
		font-size: 11px
	}
	.boundent img{
		width: 15px;
	}
	.goodstrs{
		flex: 1;
	}
	
	
</style>
