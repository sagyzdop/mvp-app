// main.tsx

import { createFileRoute } from '@tanstack/react-router'
import { Page } from '@/components/routes/main'

export const Route = createFileRoute('/_authenticated/main')({
  component: MainPage,
})

function MainPage() {
  return <Page />
}
