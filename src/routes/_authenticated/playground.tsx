// playground.tsx

import { createFileRoute } from '@tanstack/react-router'
import { Page } from '@/components/routes/playground'

export const Route = createFileRoute('/_authenticated/playground')({
  component: PlaygroundPage,
})

function PlaygroundPage() {
  return <Page />
}