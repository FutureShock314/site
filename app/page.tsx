// Suggested code may be subject to a license. Learn more: ~LicenseLog:2161914837.
'use client'

import { useRouter } from "next/navigation"
import { useRef, createElement } from "react"
import styles from '@/styles/home.module.css'
import Typewriter from 'typewriter-effect'


export default function Home() {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

  const router = useRouter()

  let iteration = 0;
  let interval = null;

  let p2 = 'This is a test message'
  let p2New = '';

  async function typeWriter() {
    for ( let i = 0; i > p2.length; i++ ) {
      p2New = p2New + p2[i]
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  typeWriter()

  // router.push('/~/')

  return (
    <>
      <div className={ styles.titleContainer }>
        <h1>{ `'ello there` }</h1>
        <p>{ `I'm some guy on the internet` }</p>
        <p>{ p2New }</p>
        <div className={ styles.leftPad }>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('This is a test message')
                .start()
            }}
          />
        </div>
      </div>
    </>
  )
}