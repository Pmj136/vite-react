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
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$primaryColor: orange;`,
            },
        },
    },
    clearScreen: false,
    server: {
        host: '0.0.0.0',
        port: 9979,
    },
    build: {
        brotliSize: false,
        rollupOptions: {
            external: [
                'dayjs',
                'i18next',
                'i18next-browser-languagedetector',
                'react',
                'react-dom',
                'react-router-dom',
                '@material-ui/core',
            ],
            output: {
                format: 'umd',
                globals: {
                    dayjs: 'dayjs',
                    i18next: 'i18next',
                    'i18next-browser-languagedetector':
                        'i18nextBrowserLanguageDetector',
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-router-dom': 'ReactRouterDOM',
                    '@material-ui/core': 'MaterialUI',
                },
            },
        },
    },
})
