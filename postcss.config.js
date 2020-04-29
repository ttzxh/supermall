module.exports={
	plugins:{
		autoprefixer:{},
		"postcss-px-to-viewport":{
			viewportWidth:375,//视口宽度 设计稿的宽度
			viewportHeight:667,//视口高度 设计稿的高度
			viewportUnit:"vw",//转换的视窗单位
			unitPrecision:5,//指定px转换为视窗单位值的小数位数
			selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
			minPixelValue:1,//小于或等于'1px'不转换为视窗单位
			mediaQuery:false,//允许在媒体查询中转换'px'
			exclude:[/TabBar/,/nav/]//也是指定不被转换的类 里面是正则表达式
		},
	}
}