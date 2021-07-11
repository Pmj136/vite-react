import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "public",
    envDir: "env",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        },
    },
    server: {
        host: "0.0.0.0",
        port: 9979
    },
    resolve: {
        alias: {
            "@": "../src"
        }
    },
    plugins: [reactRefresh()],
})
