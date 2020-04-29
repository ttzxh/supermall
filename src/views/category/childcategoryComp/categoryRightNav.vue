<template>
	<div class="categoryRight">
		<scroll class="content" :probe-type="3">
			<div v-for="(item,index) in maitKeyRight" @click="GoodsClic(index)" class="categoryRightItem">
			<a :href="item.link">
				<img :src="item.image" alt="" class="categoryRightImage">
				</a>
			</div>
			
		</scroll>
	</div>
</template>

<script>
	import scroll from '../../../components/common/Scroll/Scroll.vue'
	import {Bus} from '../../../common/Bus.js'
	
	import {getCategoryGoods} from '../../../network/category.js'
	export default{
		components:{
			scroll,
			
		},
		data(){
			return{
				maitKeyRight:[]
			}
		},
		created() {
			// getCategoryGoods().then(res=>{
			// 	console.log(res)
			// })
		},
		mounted() {
			Bus.$on('data1Clic',Value=>{
				console.log(Value)
				this.maitKeyRight=Value
			})
		},
		methods:{
			GoodsClic(index){
				console.log(index)
				
			}
		}
	
	}
</script>

<style scoped="scoped">
	.categoryRight{
		width: 72%;
		display: inline-block;
		/* background-color: red; */
	text-align: center;
		vertical-align: top;
	}
	.content{
		height: calc(100vh - 93px);
		overflow: hidden;
	}
	.categoryRightItem{
		padding: 10px 0;
		width: 100%;
		height: 40vh;
		box-shadow: 2px 0 1px 1px rgba(0,0,0,.3);
		
	}
	.categoryRightImage{
		width: 80%;
		height: 80%;
	}
</style>
