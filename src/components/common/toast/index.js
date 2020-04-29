import Toast from './Toast'
const obj={}
obj.install=function(Vue){
	// Vue.extend()
	// document.body.appendChild(Toast.$el)
	
	//创建组件构造器
	const toastContrustor=Vue.extend(Toast)
	//new 的方式 根据组件构造器 创建一个新的组件对象
	const toast =new toastContrustor();
	//将组件对象手动挂载的某一元素上
	toast.$mount(document.createElement('div'))
	//toast.$el对应的就是div
	document.body.appendChild(toast.$el)
	Vue.prototype.$toast=toast;
}
export default obj