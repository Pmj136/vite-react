import {defineConfig} from 'vite'
import path from "path";

import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp';

const pathResolve = (dir: string): string => path.resolve(__dirname, dir);

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
    clearScreen: false,
    server: {
        host: "0.0.0.0",
        port: 9979
    },
    build: {
        brotliSize: false,
    },
})
