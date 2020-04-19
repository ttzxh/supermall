<template>
  <div id="home">
	
			<div><nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar></div>
			
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
			<home-swiper :banners="banners"></home-swiper>
			<home-recommend-view :recommends="recommends"></home-recommend-view>
			<feature-view></feature-view>
			<tab-control :titles="['流行','新款','精选']" class="tabControl"
			@tabClick="tabClick"></tab-control>
			<goods-list :goods="showGoods"></goods-list>
			
		</scroll>
		<!--         监听本地的事件 -->
		<back-top @click.native="backClick" class="backtop" v-show="isShowBackTop" ></back-top>
		
		<ul>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
			<li>1加</li>
			<li>2加</li>
			<li>3加</li>
			<li>4加</li>
			<li>5加</li>
		</ul>
	</div>
</template>

<script>
	import NavBar from 'components/common/navBar/navBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import scroll from 'components/common/Scroll/Scroll.vue'
	import BackTop from '../../components/common/back/Back.vue'
	
  import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommendView from './childComps/HomeRecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	// import BScroll from 'better-scroll'
	
	import {getHomeMutidata,getHomeGoods} from 'network/home'
	export default{
		name:"Home",
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			scroll,
			BackTop
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
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
			isShowBackTop:false
		}
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
	mounted() {
		// this.$refs.scroll.scroll.on('scroll',(position)=>{
		// 	console.log(position)
		// 	this.position=position.y
		// 	console.log(this.position)
		// 	position.y<-500?document.querySelector('.backtop').style.opacity=1:document.querySelector('.backtop').style.opacity=0
			
		// })
	},
	methods:{
		//事件监听相关方法
		tabClick(index){
			// console.log(index)
			switch(index){
				case 0:this.currentType='pop'; break;
				case 1:this.currentType='new'; break;
				case 2:this.currentType='sell'; break;
			}
			
		},
		
		//网络请求相关方法
		getHomeMutidata(){
			getHomeMutidata().then(res=>{
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
				})
		},
		getHomeGoods(type){
			const page=this.goods[type].page+1
			getHomeGoods(type,page).then(res=>{
				//res是pop的前30条数据
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page+=1;
			})
		},
		backClick(){
			// 拿到Scroll组件
			this.$refs.scroll.scrollTo(0,0,500)
		},
  contentScroll(position){
		position.y>-1000?this.isShowBackTop=false:this.isShowBackTop=true
	}

	}
	}
</script>

<style scoped="scoped">
	#home{
		/* 视口高度 */
		height: 100vh;
		padding-top: 44px;
	}
	
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999999;
	
	}
	.tabControl{
		position: sticky;
		top: 44px;
	}
	.content{
		height: calc(100% - 49px);	
		overflow: hidden;
	}
</style>
