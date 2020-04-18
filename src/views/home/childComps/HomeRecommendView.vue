<template>
	<div class="TT">
		<div v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"HomeRecommendView",
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.TT{
		
		display: flex;
		width: 100%;
		/* height: 150px; */
		/* background-color: cyan; */
		text-align: center;
		/* box-shadow: 0px 1px 5px rgba(0,0,0,0.6); */
		font-size: 12px;
		padding-bottom: 20px;
		border-bottom: 20px solid #F2F2F2;
	}
	.TT img{
		
		width: 80%;
	}
	.TT a{
		display: inline-block;
		margin-top: 20px;
	}
	.TT a div{
		text-align: center;
	}
</style>
