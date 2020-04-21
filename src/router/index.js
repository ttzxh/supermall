import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =()=>import('../views/home/Home.vue')
const Cart =()=>import('../views/cart/cart.vue')
const Category =()=>import('../views/category/category.vue')
const Profile =()=>import('../views/profile/profile.vue')
const Detail =()=>import('../views/detail/detail.vue')
//安装插件
Vue.use(VueRouter)

//创建router
const routes=[
	{
	 path:'',
	  redirect:'/home'
	  },
	  {
	    path:'/home',
	    component:Home
	  },
	  {
	    path:'/cart',
	    component:Cart
	  },
	  {
	    path:'/category',
	    component:Category
	  },
	  {
	    path:'/profile',
	    component:Profile
	  },
	  {
	    path:'/detail/:iid',
	    component:Detail
	  }
]

export default new VueRouter({
  routes,
  mode:'history'
})