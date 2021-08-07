import axios from 'axios'
import { toast } from 'react-hot-toast'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    timeout: 5000,
    withCredentials: true,
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            const { code, msg } = response.data
            if (code > 400) {
                // if (code === 403) {
                //     store.dispatch(clearUser())
                // }
                return Promise.reject(response.data)
            }
            return response.data
        }
        toast.error('服务异常')
        return Promise.reject('服务异常')
    },
    error => {
        toast.error('网络请求错误')
        return Promise.reject(error)
    }
)

export default service
