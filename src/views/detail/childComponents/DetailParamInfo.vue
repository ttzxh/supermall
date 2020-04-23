<template>
	<div class="param">
		<div class="MoreNum">参数详情</div>
		<table v-if="paramInfo.size">
			<tr v-for="(items1,index1) in paramInfo.size[0]" >
						 <td v-for="(items2,index2) in items1">{{items2}}</td>
				
			</tr>
		</table>
	 <table>
		 <tr v-for="(items,index) in paramInfo.info">
			 <td>{{items.key}}</td>
			<td>{{items.value}}</td>
		 </tr>
	 </table>
	</div>
</template>

<script>
	export default{
		props:{
			paramInfo:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style scoped="scoped">
	.param{
		padding-top: 30px;
		border-top: 10px solid #F2F2F2;
		font-size: 13px
	}
	table{
		margin-top: 20px;
		width: 100%;
	}
	tr{
		text-align: center;
		width: 100%;
		height: 30px;
	  /* border-bottom: 2px solid red; */
	}
	tr:nth-child(1) td{
		border-top: 5px solid #F2F2F2;
	}
	td:nth-child(1){
		width: 30%;
		color: #666666;
	 border-right: 5px solid #F2F2F2;
		border-bottom: 5px solid #F2F2F2;
	
	}
	td{
	  color: red;
		border-bottom: 5px solid #F2F2F2;
		border-radius: 2px;
	}
	td:nth-child(2){
		color: red;
	
	}
	.param{
		margin: 0 auto;
	}
	.MoreNum{
		display: inline-block;
		height: 20px;
		width: 100%;
		text-align: center;
		font-size: 17px
	}
</style>
