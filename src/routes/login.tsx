// login.tsx

import { createFileRoute, redirect } from '@tanstack/react-router'
import { Page } from '@/components/routes/login'
import { getUserFn } from '@/lib/user'

export const Route = createFileRoute('/login')({
  beforeLoad: async () => {
    const user = await getUserFn()

    if (user) {
      throw redirect({ to: '/main' })
    }
  },
  component: LoginPage,
})

function LoginPage() {
  return <Page />
}