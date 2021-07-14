import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import path from "path";

const pathResolve = (dir: string): string => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        legacy({
            targets: ['defaults', 'not IE 11']
        })
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
