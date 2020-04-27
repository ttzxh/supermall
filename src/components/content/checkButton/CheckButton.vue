<template>
	<div :class="{Nocheck:!isCheck,checkButton:isCheck}">
		<img src="../../../assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
	export default{
		props:{
				
			isCheck:{
				type:Boolean,
				default:false
			},
			
		}
	}
</script>

<style>
	
	.checkButton{
		
		background-color: red;
		text-align: center;
		border-radius: 50%;
	  
	}
	.Nocheck{
		border: 2px solid #aaaaaa;
		border-radius: 50%;
	}
</style>
