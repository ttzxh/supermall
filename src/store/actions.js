import {ADD_COUNTER,ADD_TO_CART} from './mutation-types.js'

export default{
	//mutation目的是修改state中的状态
	//mutation中每个方法完成的事件尽可能单一	
		addCart(context,payload){
			return new Promise((resolve,reject)=>{
			// 当添加同一个商品多次的时候，不能继续将商品的全部信息加入cartList 而是数目+1
			for(let i of context.state.cartList){
				if(payload.iid===i.iid){
					context.commit(ADD_COUNTER,i)
					resolve('当前的商品数量加一')
					return ;
			  }
			}
			context.commit(ADD_TO_CART,payload)
			resolve('添加新商品')
		})
	}
}