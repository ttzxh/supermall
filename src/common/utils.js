export function debounce(func,delay=100){
	//防抖函数 如果函数在delay时间内调用很多次 也只会执行一次
			let timer=null
			return function(...args){
				if(timer) clearTimeout(timer)
				timer=setTimeout(()=>{
					func()
				},delay)
			}
		}
		
export function debounce1(func,delay=5000){
			
					let timer=null
					return function(...args){
						if(timer) return;
						timer=setTimeout(()=>{
							func(this,args)
							timer=null;
						},delay)
						
					}
		}
		
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
 
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}