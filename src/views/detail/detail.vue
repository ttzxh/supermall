<template>
	<div id="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :topImages="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
	</div>
</template>

<script>
	import DetailNavBar from './childComponents/DetailNavBar.vue'
	import DetailSwiper from './childComponents/DetailSwiper.vue'
	import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
	
	import {getDetail,Goods} from '../../network/detail.js'
	export default{
		name:"detail",
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo
		},
		data(){
			return{
				iid:null,
				res:null,
				topImages:[],
				goods:{}
			}
		},
		created() {
			this.iid=this.$route.params.iid
			getDetail(this.iid).then(res=>{
				console.log(res)
				//获取顶部轮播数据
				this.topImages=res.result.itemInfo.topImages
				//获取商品信息
				this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
				console.log(this.goods)
			})
		}
	}
</script>

<style>
</style>
