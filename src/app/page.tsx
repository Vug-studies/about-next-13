import { Suspense } from 'react'
import { User } from '@/components/User'
import { Repo } from '@/components/Repo'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>

      <Suspense fallback={<p>Carregando usuário...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}
