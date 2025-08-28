import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
 import vue from '@vitejs/plugin-vue'
 import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    //vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server:{
    proxy:{
      '/api': {
        target:'http://localhost:8080',
        // 是否安全的访问，http不是，所以【false】
        secure:false,
        changeOrigin:true,
        rewrite: (path) => path.replace( /\api/,''),
      }
    }
  }

})
