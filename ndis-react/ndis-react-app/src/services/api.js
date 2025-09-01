import axios from "axios";

const api = axios.create(
    {
        baseURL : 'http://localhost:8084'
    }
)

api.interceptors.request.use(
    (config) => {
        debugger
        const token = localStorage.getItem('token')
        if(token && token !== 'undefined')
        {
            //config.headers.Authorization = `Bearer ${token}`
            config.headers['token'] = `Bearer test1234567`
            //config.headers['Authorization'] = localStorage.getItem('token')
        }
        debugger
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)

export default api