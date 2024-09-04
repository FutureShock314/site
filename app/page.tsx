// Suggested code may be subject to a license. Learn more: ~LicenseLog:2161914837.
'use client'

import { useRouter } from "next/navigation"
import { useRef, createElement } from "react"
import styles from '@/styles/home.module.css'


export default function Home() {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

  const router = useRouter()

  let iteration = 0;
  let interval = null;

  let p2 = 'This is a test message'

  let original = p2
  let originalLen = p2.length

  for ( let i = 0; i > 3; i++ ) {
    let iteration = 0;

    interval = setInterval(() => {
      p2 = p2
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return original[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
    
      iteration += 1 / 3;
    }, 30);
  }

  // router.push('/~/')

  return (
    <>
      <div className={ styles.titleContainer }>
        <h1>{ `'ello there` }</h1>
        <p>{ `I'm some guy on the internet` }</p>
        <p>{ p2 }</p>
      </div>
    </>
  )
}