import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockDevServerPlugin from "vite-plugin-mock-dev-server"

export default defineConfig(({mode}) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: [
      vue(),
      mockDevServerPlugin({
        build: {
          serverPort:8889
        }
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 7865,
      proxy:{
        '^/api': {
          target: 'http://example.com',
        }
      }
    }
  }
})
