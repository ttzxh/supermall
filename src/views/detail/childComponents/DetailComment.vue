<template>
	<div class="comment" v-if="comment.list||comment.list!='undefined'">
		<span>宝贝评价({{index}})</span> 
		<div class="seeTotal">查看全部</div>
		<div v-if="comment.list!=undefined">
			<div v-for="(items,index) in comment.list" class="userAttr">
					<img :src="items.user.avatar" alt="" class="userImg">
					<div style="display: inline-block;">
						<p class="userName">{{items.user.uname}}</p>
						<p class="clotheStyle">{{comment.list[0].created | showDate}}  {{comment.list[0].style}}</p>
					</div>
				</div>
			<div v-for="(items1,index1) in comment.list" class="userComment">
				<span class="TotalComment">整体评价:</span><span class="describe">{{items1.content}}</span>
			</div>
			<div class="info-images" v-if="comment.list">
				<img :src="items2" alt="" v-for="(items2,index2) in comment.list[0].images" :key="index2">
			</div>
		</div>
		<div v-else class="noComment">
			<span>暂时没有评价哦!!</span>
		</div>
	
	</div>
</template>

<script>
	import {formatDate} from '../../../common/utils.js'
	export default{
		props:{
			comment:{
				type:Object,
				default:{}
			}
		},
		data(){
			return{
				index:0
			}
		},
		beforeUpdate() {
			console.log(this.comment.list)
			if(this.comment.list){
				this.index=this.comment.list.length
			}
			
		},
		filters:{
			showDate(value){
				//将时间戳转换成date对象
				const date =new Date(value)
				//将date进行格式化
				return formatDate(date,"yyyy-MM-dd hh:mm:ss")
			}
		}
		
	}
</script>

<style scoped="scoped">
	.comment{
		padding-left: 5px;
		padding-right: 5px;
		margin-top: 20px;
		padding-top: 20px;
		padding-bottom: 9px;
		/* border-top: 10px solid #F2F2F2; */
		position: relative;
		box-shadow: 0px -2px 20px 2px rgb(0,0,0,0.3);
	}
	.seeTotal{
		position: absolute;
		right: 7px;
		top: 23px;
	}
	.userImg{
		width: 40px;
	}
	.userAttr{
		margin-top: 15px;
	}
	.userName{
		/* vertical-align: top; */
		font-size: 14px;
		color: black;
		transform: translateY(-7px);
		
	}
	.clotheStyle{
		vertical-align: bottom;
		font-size: 13px;
		color: #888888;
	}
	.TotalComment{
		display: inline-block;
		padding-left: 5px;
		padding-right: 10px;
		color:#888888 ;
		font-size: 13px
	}
	.userComment{
		padding-top: 5px;
	}
	.describe{
		font-size: 14px;
		color: #111111;
	}
	.info-images{
		/* text-align: center; */
		margin-top: 20px;
	}
	.info-images img{
		width: 60%;
		/* text-align: center; */
	}
	.noComment{
		margin-top: 20px;
	}
</style>
