import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

const pathResolve = (dir: string): string => path.resolve(__dirname, dir)

export default defineConfig({
    plugins: [reactRefresh()],
    publicDir: 'public',
    resolve: {
        alias: {
            '@': pathResolve('./src'),
        },
    },
    clearScreen: false,
    server: {
        host: '0.0.0.0',
        port: 9979,
    },
    build: {
        brotliSize: false,
        // rollupOptions: {
        //     external: [
        //         'axios',
        //         'dayjs',
        //         'i18next',
        //         'i18next-browser-languagedetector',
        //         'mobx',
        //         'mobx-react-lite',
        //         'qs',
        //         'react',
        //         'react-dom',
        //         'react-router-dom',
        //         '@material-ui/core',
        //     ],
        //     output: {
        //         format: 'umd',
        //         globals: {
        //             axios:'axios',
        //             dayjs: 'dayjs',
        //             i18next: 'i18next',
        //             'i18next-browser-languagedetector':
        //                 'i18nextBrowserLanguageDetector',
        //             mobx:'mobx',
        //             'mobx-react-lite':'mobxReactLite',
        //             qs:'Qs',
        //             react: 'React',
        //             'react-dom': 'ReactDOM',
        //             'react-router-dom': 'ReactRouterDOM',
        //             '@material-ui/core': 'MaterialUI',
        //         },
        //     },
        // },
    },
})
