import {request} from './request.js'

export function getCategory(){
	return request({
		url:'/category',
		
	})
}

export function getCategoryGoods(maitKey){
	return request({
		url:'/subcategory',
		params:{
			maitKey
		}
	})
}