import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [tanstackStart(), viteReact()],
  resolve: {
    tsconfigPaths: true,
  },
}

export default config
