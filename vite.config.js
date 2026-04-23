import { defineConfig } from 'vite'
import imagemin from 'vite-plugin-imagemin'

export default defineConfig ({
    root: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
    },

    plugins: [
            imagemin({
                gifsicle: { optimizationLevel: 3 },
                mozjpeg: { quality: 80 },
                pngquant: { quality: [0.7, 0.9] },
                webp: { quality: 80 }
            })
        ],
        
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true
            }
        }
    }
})