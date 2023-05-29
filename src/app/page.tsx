import Link from 'next/link'

// revalidate
export const revalidate = 30

export default async function Home() {
  const response = await fetch('https://api.github.com/users/namevug', {
    next: {
      revalidate: 30,
    },
  })

  const user = await response.json()

  return (
    <div>
      <h1>Olá vug</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href={'/app'}>Dashboard</Link>
    </div>
  )
}

// revalidate
// SSG
