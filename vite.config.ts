import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tanstackStart(), viteReact()],
}

export default config
