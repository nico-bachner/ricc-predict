/// <reference types="vite/client" />
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html>
    <head>
      <HeadContent />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
)

const RootComponent = () => (
  <RootDocument>
    <Outlet />
  </RootDocument>
)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'RICC Predict',
      },
    ],
  }),
  component: RootComponent,
})
