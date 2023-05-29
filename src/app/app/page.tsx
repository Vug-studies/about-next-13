import Link from 'next/link'
import { Suspense } from 'react'
import { Repo } from '@/components/Repo'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href={'/'}>Home</Link>

      <Suspense fallback={<p>Carregando repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </div>
  )
}
