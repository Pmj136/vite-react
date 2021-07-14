import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp';
import path from "path";

const pathResolve = (dir: string): string => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name) => `antd/es/${name}/style/index.css`,
                },
            ],
        }),
    ],
    publicDir: "public",
    resolve: {
        alias: {
            "@": pathResolve("./src")
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        },
    },
    clearScreen:false,
    server: {
        host: "0.0.0.0",
        port: 9979
    },
    build: {
        brotliSize: false
    }
})
