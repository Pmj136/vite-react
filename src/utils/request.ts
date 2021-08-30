import axios from 'axios'
import { toast } from 'react-hot-toast'

const toastId = 'request-toast-id'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    timeout: 5000,
    withCredentials: true,
})

service.interceptors.response.use(
    response => {
        const { error, msg } = response.data
        if (error !== 0) {
            if (error % 1000 === 0) {
                toast(msg, {
                    id: toastId,
                    duration: 2500,
                    icon: '😐',
                })
            }
            return Promise.reject(response.data)
        }
        return response.data
    },
    error => {
        toast.error(error.message, {
            id: toastId,
        })
        return Promise.reject(error)
    }
)

export default service
