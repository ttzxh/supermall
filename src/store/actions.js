import {ADD_COUNTER,ADD_TO_CART} from './mutation-types.js'

export default{
	//mutation目的是修改state中的状态
	//mutation中每个方法完成的事件尽可能单一
	addCart(context,payload){
		// 当添加同一个商品多次的时候，不能继续将商品的全部信息加入cartList 而是数目+1
		for(let i of context.state.cartList){
			if(payload.iid===i.iid){
				context.commit(ADD_COUNTER,i)
				return ;
		}
		}
		context.commit(ADD_TO_CART,payload)
	}
}