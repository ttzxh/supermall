<template>
	<div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
</script>

<style>
	.nav-bar{
		display: flex;
		line-height: 44px;
		height: 44px;
			box-shadow: 0px 1px 1px rgba(0,0,0,.1);
			
			
	}
	
	.left, .right{
		width: 60px;
		/* background-color: red; */
	}
	.center{
		flex: 1;
		/* background-color: cyan; */
		text-align: center;
	
	}
	
</style>
