<template>
	<div id="Toast"  v-show="isShow">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default{
		// props:{
		// 	message:{
		// 		type:String,
		// 		default:''
		// 	},
		// 	show:{
		// 		type:Boolean,
		// 		default:false
		// 	}
		// },
		data(){
			return{
				LH:0,
				message:'',
				isShow:false
			}
		},
	
		methods:{
			show(message,duration=1500){
				
				this.isShow=true;
				this.message=message
				setTimeout(()=>{
					this.isShow=false;
					this.message='';
				},duration)
		}
	},
	}
</script>

<style>
	#Toast{
	
		padding: 20px 30px;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%) scale(1,1);
		color: white;
		text-align: center;
		font-size: 13px;
		font-weight: 600;
		background-color: rgba(0,0,0,.75);
		border-radius: 10px;
			z-index: 99999;
		}
		@keyframes name{
			from{}
			to{}
		}
</style>
