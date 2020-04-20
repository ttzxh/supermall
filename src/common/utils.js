export function debounce(func,delay){
	//防抖函数 如果函数在delay时间内调用很多次 也只会执行一次
			let timer=null
			return function(...args){
				if(timer) clearTimeout(timer)
				timer=setTimeout(()=>{
					func()
				},delay)
			}
		}