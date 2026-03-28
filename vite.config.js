import { defineConfig } from 'vite'

export default defineConfig ({
    root: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true
            }
        }
    }
})