<template>
	<div class="categoryLeft">
		
		<scroll class="content" :probe-type="3">
			<div class="LeftNav">
				<div v-for="(item,index) in data1" class="LeftNavItem" @click="CheckClic(index)">
					<div><span :class="{CliChange:CurrentIndex===index}">{{item.title}}</span></div></div>
			</div>
		</scroll>
	</div>
</template>

<script>
	import {getCategory,getCategoryGoods} from '../../../network/category.js'
	
	import scroll from '../../../components/common/Scroll/Scroll.vue'
	import {Bus} from '../../../common/Bus.js'
	
	export default{
		components:{
			
			scroll
		},
		data(){
			return{
				data1:[],
				CurrentIndex:0,
				categoryGoods:[]
			}
		},
		created() {
			getCategory().then(res=>{
				console.log(res.data.category.list)
				this.data1=res.data.category.list
				getCategoryGoods(this.data1[0].maitKey).then(res=>{
					console.log(res.data.list)
					Bus.$emit('data1Clic',res.data.list)
				})
				
			})
		},
		mounted() {
		
		},
		activated() {
			
		},
		methods:{
			CheckClic(index){
				this.CurrentIndex=index;
				
				getCategoryGoods(this.data1[index].maitKey).then(res=>{
					this.categoryGoods=res.data.list
					Bus.$emit('data1Clic',this.categoryGoods)
				})
			},
		
		}
	}
</script>

<style scoped="scoped">
	*{
		/* 取消浏览器默认事件 */
		touch-action: pan-y;
	}
	.categoryLeft{
		width: 28%;
	  display: inline-block;
		border-right: 1px solid #000000;
	}
	.LeftNav{
		display: inline-block;
		width: 100%;
	}
	.LeftNavItem{
		padding: 12px 15px;
		/* background-color: cyan; */
		text-align: center;
	}
	.content{
		height: calc(100vh - 93px);
		overflow: hidden;
	}
	.CliChange{
		color: #FF0000;
		padding-left: 5px;
		border-left: 3px solid red;
	}
</style>
