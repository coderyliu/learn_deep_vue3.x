import {
  fileURLToPath
} from 'node:url'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {
  VantResolver
} from 'unplugin-vue-components/resolvers';


// const path=require('path')
// const pathName=(pathName)=>path.join(__dirname,pathName)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  }
})