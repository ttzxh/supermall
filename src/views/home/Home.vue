<template>
  <div id="home">
	
			<div><nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar></div>
			<tab-control :titles="['流行','新款','精选']"
			@tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabShow"></tab-control>
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
		@pullingUp="exePullAndRefresh">
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
			<home-recommend-view :recommends="recommends"></home-recommend-view>
			<feature-view></feature-view>
			<tab-control :titles="['流行','新款','精选']"
			@tabClick="tabClick" ref="tabControl"></tab-control>
			<goods-list :goods="showGoods" @HomeGoodsImageLoad="GoodsImageLoad"></goods-list>
			
		</scroll>
		<!--         监听本地的事件 -->
		<back-top @click.native="backClick" class="backtop" v-show="isShowBackTop" ></back-top>
		
	
	</div>
</template>

<script>
	import scroll from 'components/common/Scroll/Scroll.vue'
	
	import NavBar from 'components/common/navBar/navBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import BackTop from '../../components/common/back/Back.vue'
	
  import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommendView from './childComps/HomeRecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	// import BScroll from 'better-scroll'
	
	import {getHomeMutidata,getHomeGoods} from 'network/home'
	import {debounce} from 'common/utils.js'
	import {backTopMixin} from '../../common/Mixin.js'
	export default{
		name:"Home",
		components:{
			scroll,
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		mixins:[backTopMixin],
	data(){
		return{
			banners:[],
			recommends:[],
			goods:{
				'pop':{page:0,list:[]},
				'new':{page:0,list:[]},
				'sell':{page:0,list:[]}
			},
			currentType:'pop',
			
			tabOffsetTop:0,
			isTabFix:false,
			isTabShow:false,
			SaveY:0
		}
	},
	mounted() {
		
	},
	created() {
		//请求多个数据              这个不是闭包 只是将res的引用给了data的result 使得result指向了返回的大量数据
		//这个res该删还是要删的
	     this.getHomeMutidata()
			//请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
	},
	beforeMount() {
		
		// this.$refs.scroll.scroll.on('scroll',(position)=>{
		// 	console.log(position)
		// 	this.position=position.y
		// 	console.log(this.position)
		// 	position.y<-500?document.querySelector('.backtop').style.opacity=1:document.querySelector('.backtop').style.opacity=0
			
		// })
		//获取tabControl的offsetTop
		//所有的组件都有一个组件$el 用于获取组件的元素的 
		// this.tabOffsetTop=this.$refs.TabControl
		// setInterval(()=>{
		// 	// console.log(this.$refs.tabControl.$el.offsetTop)
		// },500)
        
	},
	
	//在页面存活的时候进入这个页面
	activated() {
		this.$refs.scroll.scroll.refresh()
		this.$refs.scroll.scrollTo(0,this.SaveY,0)
		
	},
	//在页面存活的时候离开这个页面
	deactivated() {
		
		this.SaveY=this.$refs.scroll.scroll.y;
		
	},
	
	methods:{
		//事件监听相关方法
		tabClick(index){
			
			switch(index){
				case 0:this.currentType='pop'; break;
				case 1:this.currentType='new'; break;
				case 2:this.currentType='sell'; break;
			}
			this.$refs.tabControl1.currentindex=index;
			this.$refs.tabControl.currentindex=index;
		},
		swiperImageLoad(){
this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop;
		},
	

		//网络请求相关方法
		getHomeMutidata(){
			getHomeMutidata().then(res=>{
				console.log(res)
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
				})
		},
		getHomeGoods(type){
			const page=this.goods[type].page+1
			getHomeGoods(type,page).then(res=>{
				console.log(res)
				//res是pop的前30条数据
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page+=1;
				
				this.$refs.scroll.finishPullUp()
			})
		},
		
  contentScroll(position){
		
		//判断 回到顶部 是否显示
		position.y>-1000?this.isShowBackTop=false:this.isShowBackTop=true;
		
		//决定tabControl是否吸顶（position fix）
		this.isTabFix=(-position.y)>this.tabOffsetTop-44
		this.isTabShow=(-position.y)>this.tabOffsetTop-44
	},
	contentPull(){
		this.getHomeGoods(this.currentType)
		// setTimeout(()=>{
			this.$refs.scroll.scroll.refresh();
		// },300)
		
	},
	GoodsImageLoad(){
		console.log('mmm')
		this.$refs.scroll.scroll.refresh();
	},
	exePullAndRefresh(){
		debounce(this.contentPull,200)()
	}

	}
	}
</script>

<style scoped="scoped">
	#home{
		/* 视口高度 */
		height: 100vh;
		/* padding-top: 44px; */
		/* margin-top: 44px; */
	}
	
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
		height: 44px;
	/* 	position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999999; */
	
	}
	/* .tabControl{
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
	} */
	.content{
		height: calc(100% - 93px);	
		overflow: hidden;
	}
	/* .wrapper{
		position: absolute;
		top: 44px;
		left: 0;
		right: 0;
		
	} */
	.tab-control{
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
	}
</style>
