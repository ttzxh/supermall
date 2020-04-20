import axios from 'axios'
export function request(config){
	const instance=axios.create({
		baseURL:'http://:8000/api/h8',
		timeout:5000
	})
	
	instance.interceptors.request.use(config=>{
		return config
	},err=>{
		
	})
	
	instance.interceptors.response.use(res=>{
		return res.data
	},err=>{
		console.log(err);
	})
	return instance(config)
}