	import BackTop from 'components/common/back/Back.vue'


export const backTopMixin={
	data(){
		return{
			isShowBackTop:false
		}
	},
	methods:{
		backClick(){
			this.$refs.scroll.scrollTo(0,0,500)
		}

	},
	components:{
		BackTop
	}
}