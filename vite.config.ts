import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [nitro(), tanstackStart(), react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
}

export default config
