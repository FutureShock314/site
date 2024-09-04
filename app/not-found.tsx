import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <>
      <h1>oopsie youve appeared somewhere you shouldnt</h1>
      <h2>plz leave</h2>
      <Link href='/'>please :)</Link>
    </>
  )
}