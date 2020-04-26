import {request} from './request.js'

export function getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

export function getCommend(){
	return request({
		url:'recommend',
		
	})
}

export class Goods{
	constructor(itemInfo,columns,services){
		this.title=itemInfo.title
		this.desc=itemInfo.desc
		this.newPrice=itemInfo.price
		this.LowPrice=itemInfo.lowNowPrice
		this.oldPrice=itemInfo.oldPrice
		this.discount=itemInfo.discountDesc
		this.services=services
		this.columns=columns
		this.realPrice=itemInfo.LowNowPrice
	}
}

export class Shop{
	constructor(shopInfo){
		this.logo=shopInfo.shopLogo;
		this.name=shopInfo.name;
		this.fans=shopInfo.cFans;
		this.sells=shopInfo.cSells;
		this.score=shopInfo.score;
		this.goodsCount=shopInfo.cGoods;
		this.Url=shopInfo.allGoodsUrl;
	}
}


export class GoodsParam{
	constructor(info,rule) {
	    //image可能没有值（某些商品有值 有些商品没有值）
			this.image=info.image?info.images[0]:'';
			this.info=info.set;
			this.size=rule.tables;
	}
}

export class Comment{
	constructor(rate) {
	    this.list=rate.list;
		
	}
}
