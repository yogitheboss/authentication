import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  // adding this to proxy api requests to backend
  // and change the port to 3000
  server:{
    port:3000,
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        changeOrigin:true,
      }
    }
  },
})
