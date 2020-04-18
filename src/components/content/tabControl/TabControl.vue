<template>
	<div class="tabControl">
		<div v-for="(item,index) in titles" class="tab-control-item" @click="changeColor(index)"
		:class="{active:index===currentindex}">
			<span>{{item}}</span>
		</div>
		<!-- <div class="move"></div> -->
	</div>
</template>

<script>
	export default{
		name:"TabControl",
		props:{
			titles:{
				type:Array,
				default(){
					return []
			}
		}
	},
	methods:{
		changeColor(index){
			// this.flag=!this.flag
			this.currentindex=index
		}
	},
	data(){
		return {
			color:"red",
			flag:false,
			currentindex:0
		}
		
	}
	}
</script>

<style>
	.tabControl{
		display: flex;
		font-size: 16px;
		background-color: #FFFFFF;
	}
	.tab-control-item{
	  flex: 1;
		
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
	.active{
		color:cyan;
		
	}
	.active span{
		padding: 5px;
	border-bottom: 3px solid var(--color-tint);
	border-radius: 2px;
	}

</style>
