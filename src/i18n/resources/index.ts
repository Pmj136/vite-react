import { zhHeader, enHeader } from './header'
import { zhLoginForm, enLoginForm } from './loginForm'

const resources = {
    'zh-CN': {
        translation: {
            hello: '你好，世界',
            header: zhHeader,
            loginForm: zhLoginForm,
        },
    },
    en: {
        translation: {
            hello: 'hello world',
            header: enHeader,
            loginForm: enLoginForm,
        },
    },
}
export default resources
