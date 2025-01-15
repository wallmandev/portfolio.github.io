import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/wallmandev.github.io/', // Byt "portfolio" till namnet på ditt repository
})