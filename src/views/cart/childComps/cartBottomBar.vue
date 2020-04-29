<template>
	<div class="cartBottomBar">
		<div class="cartBottomBarLeft">
				<check-buttom class="cartcheckButton" @click.native="TotalCheck" :isCheck="isTotalChange">
					
				</check-buttom>
				<span>全选</span>
		</div>
		<div class="Totle">
			<span>合计:</span><span>{{TotalPrice}}</span>
		</div>
		<div class="cartBottomBarRight">
			<span @click="calcClic">立即结算({{checkLength}})</span>
		</div>
	</div>
	
</template>

<script>
	import checkButtom from '../../../components/content/checkButton/CheckButton.vue'
	export default{
		components:{
			checkButtom
		},
		data(){
			return{
				isTotalChange:true
			}
		},
		methods:{
			TotalCheck(){
			 let IfAllcheck=this.$store.state.cartList.every(function(item){
				return item.check==true;
			 })
			 if(IfAllcheck){
				 for(let s of this.$store.state.cartList){
					 s.check=false;
				 }
				 this.isTotalChange=false
			 }else{
				 for(let s of this.$store.state.cartList){
				 	s.check=true;
				 }
				 this.isTotalChange=true
			 }
				
			},
			calcClic(){
				let IfAllcheck=this.$store.state.cartList.every(function(item){
								return item.check==false;
				})
				if(IfAllcheck){
					this.$toast.show('请选择要购买的商品',2000)
				}
			}
		},
		
		watch:{
		'$store.state.cartList':{
			handler(newValue, oldValue) {
				if(newValue.length===0) return this.isTotalChange=false;
			     for (let s of newValue) {
						
			     	if(s.check!==true||s=='undefined') return this.isTotalChange=false;
			     }
					 return this.isTotalChange=true
			    },
			    immediate: true,
			    deep: true
		}
		},
		computed:{
			TotalPrice(){
				return '￥'+ this.$store.state.cartList.filter(item=>{
					return item.check;
				}).reduce((preValue,item)=>{
					return item.price*item.count+preValue
				},0).toFixed(2)
			},
			checkLength(){
				return this.$store.state.cartList.filter(item=>{
					return item.check
				}).length
			},
			
		}
	}
</script>

<style scoped="scoped">
	.cartBottomBar{
		height: 40px;
		background-color: #FFFFFF;
		line-height: 28px;
		box-shadow: 0 1px 2px 0px rgba(0,0,0,.9);
	}
	.cartBottomBarLeft{
		display: inline-flex;
		height: 100%;
		width: 20%; 
		justify-content: center;
		align-items: center;
	}
	.cartcheckButton{
		margin-right: 5px;
		display: inline-block;
		width:40%;
		height: 70%;
			border: 1px solid #666666;
			/* margin-top: 5px; */
			border-radius: 50%;
			
	}
	.cartcheckButton img{
		line-height: 40px;
	
	}
	.Totle{
		display: inline-block;
		line-height: 40px;
		margin-left: 30px;
	}
	.cartBottomBarRight{
		padding: 0 15px;
		position: absolute;
		right: 0;
		display: inline-block;
		background-color: orange;
		height: 30px;
		vertical-align: top;
		line-height: 30px;
		border-radius: 20px;
		margin: 5px 10px;
	}
</style>
