/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'

import appCss from '../styles.css?url'

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en">
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
  component: RootComponent,
  head: () => ({
    links: [{ href: appCss, rel: 'stylesheet' }],
    meta: [
      { charSet: 'utf-8' },
      // oxlint-disable-next-line sort-keys
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'RICC Predict' },
    ],
  }),
  notFoundComponent: () => (
    <main>
      <h1>404 – Not Found</h1>
    </main>
  ),
})
