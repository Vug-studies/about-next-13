import { Suspense } from 'react'
import { User } from '@/components/User'
import Link from 'next/link'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/app">Dashboard</Link>

      <Suspense fallback={<p>Carregando usuário...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}
