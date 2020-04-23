<template>
	<div id="detail">
		<detail-nav-bar class="detailBar"></detail-nav-bar>
		<scroll class="content" ref="scroll">
			<detail-swiper :topImages="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
			<detail-params-info :param-info="goodsParamInfo"></detail-params-info>
			<detail-comment :comment="comment"></detail-comment>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from './childComponents/DetailNavBar.vue'
	import DetailSwiper from './childComponents/DetailSwiper.vue'
	import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
	import DetailShopInfo from './childComponents/DetailShopInfo.vue'
	import Scroll from '../../components/common/Scroll/Scroll.vue'
	import detailGoodsInfo from './childComponents/detailGoodsInfo.vue'
	import DetailParamsInfo from './childComponents/DetailParamInfo.vue'
	import DetailComment from './childComponents/DetailComment.vue'
	
	import {getDetail,Goods,Shop,GoodsParam,Comment} from '../../network/detail.js'

	export default{
		name:"detail",
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			detailGoodsInfo,
			DetailParamsInfo,
			DetailComment
		},
		data(){
			return{
				iid:null,
				res:null,
				topImages:[],
				goods:{},
				shop:{},
				detailInfo:{},
				goodsParamInfo:{},
				comment:{}
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
				//创建店铺信息
				this.shop=new Shop(res.result.shopInfo)
				//保存商品的详细数据
				this.detailInfo=res.result.detailInfo;
				//获取参数信息
				this.goodsParamInfo=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
				//获取评论
				this.comment=new Comment(res.result.rate)
			})
		},
		methods:{
			imageLoad(){
				this.$refs.scroll.scroll.refresh();
			}
		}
	}
</script>

<style scoped="scoped">
	#detail{
		position: relative;
		z-index: 999;
		background-color: #fff;
		
	}
	.detailBar{
		position: relative;
		z-index: 999;
		background-color: #FFFFFF;
	}
	.content{
		height: calc(100vh - 44px);
	}
</style>
