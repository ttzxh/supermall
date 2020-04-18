<template>
  <div id="home">
	
			<div><nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar></div>
			
		
		<home-swiper :banners="banners" style="margin-top: 44px;"></home-swiper>
		<home-recommend-view :recommends="recommends"></home-recommend-view>
		<feature-view></feature-view>
		<tab-control :titles="['流行','新款','精选']" class="tabControl"></tab-control>
		
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
	
  import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommendView from './childComps/HomeRecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	
	import {getHomeMutidata,getHomeGoods} from 'network/home'
	export default{
		name:"Home",
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			FeatureView,
			TabControl
		},
	data(){
		return{
			banners:[],
			recommends:[],
			goods:{
				'pop':{page:0,list:[]},
				'news':{page:0,list:[]},
				'sell':{page:0,list:[]}
			}
		}
	},
	created() {
		//请求多个数据              这个不是闭包 只是将res的引用给了data的result 使得result指向了返回的大量数据
		//这个res该删还是要删的
		getHomeMutidata().then(res=>{
			this.banners=res.data.banner.list
			this.recommends=res.data.recommend.list
			}),
			//请求商品数据
			getHomeGoods('pop',1).then(res=>{
				console.log(res);
			})
	}
	}
</script>

<style>
	
	
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
</style>
