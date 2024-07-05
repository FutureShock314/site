'use client'

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  // router.push('/~/')

  return (
    <>
      <h1>&apos;ello there!</h1>
      <p>I&apos;m some guy on the internet</p>
      <br />
    </>
  )
}