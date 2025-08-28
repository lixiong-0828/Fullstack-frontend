// 异步请求时，要用【axios】
import router from "@/router";
import { useLoginStore } from "@/stores/loginInfo";
import axios  from "axios";
import { ElMessage } from "element-plus";

const loginInfo = useLoginStore()

const request = axios.create({
    baseURL: '/api',
    timeout:6000000
})

//添加响应拦截器
request.interceptors.response.use(
    (response) =>{
        return response.data
    },

    //Token检查失败
    (error) => {

        if(error.response.status = '401'){

            //console.log('我们检查没有Token！！！！！！！！！！')

            ElMessage("访问异常，重新登录！！！")
            router.push("/login")

        }else{
            ElMessage("访问异常！！！")
            router.push("/login")
        }
        
    }
)

// 添加请求拦截器
request.interceptors.request.use( (config) => {

    const loginInforEmp = loginInfo.getloginInfo()

    if(loginInforEmp && loginInforEmp.token){

        config.headers['token'] = loginInforEmp.token

    }
    // 在发送请求之前做些什么
    return config;
  },  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


export default request
