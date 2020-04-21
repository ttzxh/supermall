<template>
  
		<Swiper>
			<swiper-item v-for="item in topImages" class="swiper-item">
				<img :src="item" alt="">
			</swiper-item>
			
		</Swiper>
	
</template>

<script>
	import {Swiper,SwiperItem} from '../../../components/common/swiper'
	export default{
		name:"DetailSwiper",
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper-item{
		width: 100%;
		height: 300px;
		overflow: hidden;
	}
</style>
