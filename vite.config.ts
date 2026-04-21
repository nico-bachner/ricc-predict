import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [tanstackStart(), nitro(), react()],
  resolve: {
    tsconfigPaths: true,
  },
}

export default config
