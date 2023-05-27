import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Olá vug</h1>
      <Link href={'/app'}>Dashboard</Link>
    </div>
  )
}
