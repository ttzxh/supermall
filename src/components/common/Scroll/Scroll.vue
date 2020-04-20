<template>
	<div class="wrapper" ref="wrapper">
		<div class="content"><slot></slot></div>
		<!-- <position :position="position" ></position> -->
		<!-- <back-top></back-top> -->
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	// import BackTop from '../back/Back.vue'
	export default{
		name:"scroll",
		props:{
			probeType:{
		  Type:Number,
			default(){
				return 0
			}
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				scroll:null,
				// position:null
			}
		},
		components:{
			// BackTop
		},
		mounted() {
			this.scroll=new BScroll(this.$refs.wrapper,{
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad,
				// button这种东西无论是false还是true都可以店家但是div这些东西就需要click：true
				click:true
			}),
			this.scroll.on('scroll',(position)=>{
				// console.log(position)
         //把position信息发送出去 那个父组件看上了就用自定义事件获取这个position
				this.$emit('scroll',position)
			}),
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		},
		methods:{
			scrollTo(x,y,time=300){
				this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			}
		}
	}
</script>

<style>
	
</style>
