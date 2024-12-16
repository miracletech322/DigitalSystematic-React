import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable external access
    port: 5173, // Specify port (optional)
    strictPort: true, // Fail if the port is already in use
  },
})
