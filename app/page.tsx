// Suggested code may be subject to a license. Learn more: ~LicenseLog:2161914837.
"use client";

import { useRouter } from "next/navigation"
import { useRef, useEffect, createElement } from "react"
import styles from '@/styles/home.module.css'

// import Typewriter from 'typewriter-effect'
import Typewriter from '@/components/Typewriter'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Canvas from "@/components/Canvas"



export default function Home() {

  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const parallax1 = useRef(),
        parallax2 = useRef()

  const parallaxDistance = -500

  let p2El = useRef('')

  useGSAP(
    () => {


      let p2tl = gsap.timeline()


      // page1 parallax movement
      p2tl.to(
        // Target
        parallax1.current,
        // To
        {
          scrollTrigger: {
            trigger: parallax1.current,
            start: "top bottom",
            end: `top 50%`,
            scrub: true,
            // markers: true,
          },
          y: `-=25%`
        }
      ).to(
        parallax2.current,

        {
          scrollTrigger: {
            trigger: parallax2.current,
            start: `-50% bottom`,
            end: `-50% 50%`,
            scrub: true,
            // markers: true,
          },
          y: `-=50%`,
          // position: 'sticky',
        }
      )
        // .to(
        // parallax2.current,
        // {
        //   scrollTrigger: {
        //     trigger: parallax2.current,
        //     start: `-50% center`,
        //     end: 'top top',
        //     scrub: true,
        //     markers: true,
        //   },
        //   y: 0
        // }
      // )
      
      
      // gsap.to(
      //   parallax2.current,

      //   {
      //     scrollTrigger: {
      //       trigger: parallax2.current,
      //       start: `-50% 50%`,
      //       end: `+=100%`,
      //       scrub: true,
      //       markers: true,
      //     },
      //     y: `+=100%`,
      //     position: 'sticky',
      //   }
      // )

    }
  )


  

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

  const router = useRouter()

  let iteration = 0;
  let interval = null;

  let p2 = 'This is a test message'
  let p2New = '';

  useEffect(() => {
    for ( let i = 0; i > p2.length; i++ ) {
      // p2New = p2New + p2[i]
      setTimeout(() => {
        p2El.current.concat(p2[i])
      }, 1000)
    }
  })


  // router.push('/~/')

  return (
    <>
      <Canvas colors='#00f #3a3aff #00fff0 #50f0f0' />
      <div className={ styles.titleContainer }>
        <div className={ styles.title }>
          <h1>{ `'ello there` }</h1>
          <div className={ styles.leftPad }>
            <p>{ `I'm some guy on the internet` }</p>
            <p ref={ p2El }></p>
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('This is a test message')
                  .start()
              }}
            /> */}
            <Typewriter
              text="This is a test message"
              delay={ 100 }
              // cursorChar={ `>` }
              loop
            />
          </div>
        </div>
      </div>

      <div ref={ parallax1 }>

        <div className={ styles.gradientTransition }></div>

        <div className={ styles.page1 }>
          wow
        </div>
        {/* --- */}
        <div ref={ parallax2 }>

          <div className={ styles.page2 }>
            wow
          </div>

          <div className={ styles.placeholderDiv }>
            wow some more text
          </div>

        </div>
        {/* --- */}
      </div>

      <div className={ styles.page1 }>
        wow yet more text
      </div>

    </>
  )
}