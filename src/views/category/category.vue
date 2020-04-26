<template>
  <div>
		<h2>分类</h2>
		<back-top  @click.native="backClick" v-show="isShowBackTop"></back-top>
		<scroll class="content" ref="scroll" @scroll="contentScrol2" :probeType="3">
			
		</scroll>
	</div>
 </template>

<script>
	import Scroll from '../../components/common/Scroll/Scroll.vue'
	import BackTop from '../../components/common/back/Back.vue'
	import {backTopMixin} from '../../common/Mixin.js'
	 
	export default{
		name:'category',
		components:{
			Scroll
		},
		data(){
			return {
			
			}
		},
		mixins:[backTopMixin],
		methods:{
			btn(){
				console.log('1234')
			}
		},
		methods:{
			contentScrol2(){
				
			}
		}
	}
</script>

<style>
	
</style>
