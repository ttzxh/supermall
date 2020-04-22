<template>
	<!-- 在异步数据先显示初始数据，再显示带数据的数据 所以现在的detailInfo还只是{} -->
	<div v-if="detailInfo.detailImage">
		<p>{{detailInfo.detailImage[0].key}}</p>
		<img v-for="(items,index) in detailInfo.detailImage[0].list" :key="index" :src="items" alt="" width="100%"
		@load="imgLoad">
	</div>
</template>

<script>
	export default{
		name:"detailGoodsInfo",
		props:{
			detailInfo:{
				type:Object,
				default:{}
			}
		},
		data(){
			return{
				counter:0,
				imagesLength:0
			}
		},
		methods:{
			// 每加载一张图片都会调用一次imgLoad
			imgLoad(){
				//当所有的图片都加载完了之后，开始向父元素发送消息,图片加载玩之后再让BScroll开始运行这样//
				//图片是异步加载所以在，加载图片的同时BScroll会运行 使得图片无法加载
				//就可以防止在图片还没有加载完成的时候，BScroll就开始运行使得content高度变小，以免调用太多次
				if(++this.counter===this.imagesLength){
					this.$emit('imageLoad')
				}
			}
		},
		watch:{
			detailInfo(){
				this.imagesLength=this.detailInfo.detailImage[0].list.length
			}
		}
	}
</script>

<style>
</style>
