<template>
	<div id="detail">
		<detail-nav-bar class="detailBar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
		<scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
			<detail-swiper :topImages="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
			<detail-params-info ref="params" :param-info="goodsParamInfo"></detail-params-info>
			<detail-comment ref="comment" :comment="comment"></detail-comment>
			<div class="commend"><div class="WyCommend">我的推荐>></div></div>
			<goods-list :goods="commend" @DetailGoodsImageLoad="imageLoad"></goods-list>
		</scroll>
		<back-top class="DetailBackTop"  v-show="isShowBackTop" @click.native="backClick"></back-top>
		<detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
		
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
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	import DetailBottomBar from './childComponents/DetailBottomBar.vue'
	import BackTop from '../../components/common/back/Back.vue'
	
	import {getDetail,Goods,Shop,GoodsParam,Comment,getCommend} from '../../network/detail.js'
	
	import {debounce,debounce1} from '../../common/utils.js'
	import {backTopMixin} from '../../common/Mixin.js'

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
			DetailComment,
			GoodsList,
			DetailBottomBar
		
		},
		mixins:[backTopMixin],
		data(){
			return{
				iid:null,
				res:null,
				topImages:[],
				goods:{},
				shop:{},
				detailInfo:{},
				goodsParamInfo:{},
				comment:{},
				commend:[],
				themetTopsY:[],//里面是商品 评论 推荐 参数对应的offsetTop
				getThemeTopY:null,
				ScrollIndex:0,
				currentIndex:0,
			detailLoad:false
			
			}
		},
		created() {
			this.iid=this.$route.params.iid
			getDetail(this.iid).then(res=>{
				// console.log(res)
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
	     getCommend().then(res=>{
				 console.log(res)
				 this.commend=res.data.list
				 
			 })
			 
			 // 由于在异步请求处理完之后，Vue还需要对组件进行渲染 导致在渲染的时候仍然拿不到组件中的元素
			 //	this.$nextTick(()=>{})在组件渲染完成后的下一帧执行函数中的内容
			 this.$nextTick(()=>{
			 	//根据最新的数据对应的DOM渲染完了（但是不包含 图片）
			 	//但是图片没有加载玩 所以在进入一个新的商品界面的时候就会出错
			 	// this.themetTopsY.push(0);
			 	// this.themetTopsY.push(this.$refs.params.$el.offsetTop-44)
			 	// this.themetTopsY.push(this.$refs.comment.$el.offsetTop-44)
			 	// this.themetTopsY.push(document.querySelector('.commend').offsetTop-44)
			 	// console.log(this.themetTopsY)
			 })
			 // 在组件刚刚创建的时候进行防抖操作，此时还并没有使用 在图片加载玩之后再使用
			 this.getThemeTopY=debounce(()=>{
				 this.themetTopsY.push(0);
				 this.themetTopsY.push(this.$refs.params.$el.offsetTop-44)
				 this.themetTopsY.push(this.$refs.comment.$el.offsetTop-44)
				 this.themetTopsY.push(document.querySelector('.commend').offsetTop-44)
				 console.log(this.themetTopsY)
				 
			 },100)
	
		},
	
		mounted() {
			//在created里面请求了异步网络请求，在mounted里面还不一定一部网络请求完成了
			// 由于在组件中加了v-if
			// 也就是说如果没有请求到数据 组件根本不会渲染
			// this.themetTopsY.push('0');
			// this.themetTopsY.push(this.$refs.params.$el.offsetTop)
			// this.themetTopsY.push(this.$refs.comment.$el.offsetTop)
			// this.themetTopsY.push(this.$refs.commend.$el.offsetTop)
			// console.log(this.themetTopsY)
		},
		updated() {
			// this.themetTopsY=[]
			// this.themetTopsY.push(0);
			// this.themetTopsY.push(this.$refs.params.$el.offsetTop-44)
			// this.themetTopsY.push(this.$refs.comment.$el.offsetTop-44)
			// this.themetTopsY.push(document.querySelector('.commend').offsetTop-44)
			// console.log(this.themetTopsY)
		},
		computed:{
			// detailLoad(){
			// 	if(this.themetTopsY.length==4){
			// 	       return	true
			// 	}else{
			// 		return false
			// 	}
			// }
		},
		methods:{
			imageLoad(){
				this.getThemeTopY()
				this.$refs.scroll.scroll.refresh();
			},
			titleClick(index){
				
				this.$refs.scroll.scrollTo(0,-this.themetTopsY[index],300)
			},
			addToCart(){
				//获取商品信息
				const product={}
				product.image=this.topImages[0];
			  product.title=this.goods.title;
				product.desc=this.goods.desc;
			  product.price=this.goods.LowPrice;
				product.iid=this.iid;
				product.count=1;
				//将商品添加到购物车中
				this.$store.dispatch('addCart',product)
			},
			contentScroll(position){
				
				// switch(position.y){
				// 	case -this.themetTopsY[0]:this.ScrollIndex=0;break;
				// 	case -this.themetTopsY[1]:this.ScrollIndex=1;break;
				// 	case -this.themetTopsY[2]:this.ScrollIndex=2;break;
				// 	case -this.themetTopsY[3]:this.ScrollIndex=3;break;
				// }
			//屏幕滚动到指定位置时改变顶部导航的样式
				const positionY=-position.y
				let length=this.themetTopsY.length
				for(let i =0;i<length;i++){
					
					if(this.currentIndex!=i&&((i<length-1&&positionY>=this.themetTopsY[i]&&positionY<this.themetTopsY[i+1])
					||(i===length-1&&positionY>=this.themetTopsY[i]))){
						this.currentIndex=i;
						
						this.$refs.nav.currentIndex=this.currentIndex
					}
					
				}
				
				//回到顶部
					position.y>-1000?this.isShowBackTop=false:this.isShowBackTop=true;
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
	.commend{
		margin: 0 auto;
		margin-top: 40px;
		margin-bottom: 10px;
	}
	.WyCommend{
		display: inline-block;
		width: 100px;
		height: 20px;
		background-color: #00FFFF;
		text-align: center;
		line-height: 20px;
		box-shadow: 2px 3px 2px 0 rgba(0,0,0,.3);
	}
	.DetailBackTop{
		margin-bottom: 50px;
		margin-left: 10px;
	}
</style>
