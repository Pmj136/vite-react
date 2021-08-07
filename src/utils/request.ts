import axios from 'axios'
import { toast } from 'react-hot-toast'
import { CodeMsg } from '@/utils/constants'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    timeout: 5000,
    withCredentials: true,
})

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            const { code } = response.data
            if (code !== 0) {
                toast.dismiss()
                toast(CodeMsg[code], {
                    icon: '🙄',
                })
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
