<template>
	<div>
		<nav-bar class="change3D">
			<div slot="left" class="DetailNavBarBack" @click="BackCli">
				
					<img src="../../../assets/img/common/back.svg" alt="">
				
			</div>
			<div slot="center" class="DetailNavBar">
				<div v-for="(items,index) in titles" class="DetailNavBarTitles" 
				:class="{active1:index===currentIndex}"
				@click="DetailNavBarCli(index)">{{items}}</div>
			</div>
			</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navBar/navBar.vue'
	export default{
		name:"DetailNavBar",
		
		components:{
			NavBar
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			DetailNavBarCli(index){
				this.currentIndex=index;
				this.$emit('titleClick',index)
				  
				
			},
			
			BackCli(){
				// this.$router.push('/home');
				this.$router.back()
				// console.log(this.$router)
				
				
			}
		}
	}
</script>

<style>
	.change3D{
		/* position: fixed;
		z-index: 99;
		background-color: honeydew;
		left: 0;
		right: 0;
		top: 0; */
		perspective: 500px;
	}
	.DetailNavBar{
		display: flex;
	}
	.DetailNavBarTitles{
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.active1{
		color: #FF0000;
		background-color: cyan;
	  opacity: 1;
		animation: name .5s 1;
		border-radius: 10px;
		transform-style: preserve-3d;
		/* transform: rotateY(180deg); */
		/* transition: all ease-in-out 1s ; */
	}
	@keyframes name{
	
	0% {
	opacity: 0; /*初始状态 透明度为0*/
	transform: rotateY(0);
	}
	50% {
	opacity: 0.5; /*中间状态 透明度为0.5*/
	transform: rotateY(180deg);
	}
	100% {
	opacity: 1; /*结尾状态 透明度为1*/
	transform: rotateY(360deg);
	}
	}
	
	
	.DetailNavBarBack{
		text-align: center;
		line-height: 44px;
	}
	.DetailNavBarBack img{
		display: inline-block;
		/* line-height: 44px; */
		vertical-align: middle;
	}
	
</style>
