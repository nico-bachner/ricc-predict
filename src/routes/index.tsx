import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <h1>RICC Predict</h1>
    </main>
  ),
})
