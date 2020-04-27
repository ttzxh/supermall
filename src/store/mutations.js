import {ADD_COUNTER,ADD_TO_CART} from './mutation-types.js'

export default{
	[ADD_COUNTER](state,payload){
		payload.count++
	},
	[ADD_TO_CART](state,payload){
		payload.check=true
		state.cartList.push(payload)
	}
}