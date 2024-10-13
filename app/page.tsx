// Suggested code may be subject to a license. Learn more: ~LicenseLog:2161914837.
"use client";

import { useRouter } from "next/navigation"
import { useRef, useEffect, createElement } from "react"
import styles from '@/styles/home.module.css'

import Canvas from "@/components/Canvas"
import Typewriter from '@/components/Typewriter'
import GlitchText from "@/components/GlitchText";
import Page from '@/components/layout/Page';
import GradientTransition from "@/components/layout/GradientTransition";

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"




export default function Home() {

  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const parallax1 = useRef(null),
        parallax2 = useRef(null)

  let p2El = useRef(null)

  useGSAP(
    () => {

      let ptl = gsap.timeline()

      // page1 parallax movement
      ptl.to(
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


  const router = useRouter()

  // router.push('/~/')

  return (
    <>
      <Canvas colors='#00f #3a3aff #00fff0 #50f0f0' />
      <div className={ styles.titleContainer }>
        <div className={ styles.title }>
          <h1>{ `'ello there` }</h1>
          <div className={ styles.leftPad }>
            <p>{ `I'm some guy on the internet` }</p>
            {/* <Typewriter
              text="This is a test message"
              delay={ 100 }
              // cursorChar={ `>` }
              // loop
            />
            <br /> */}
            <GlitchText 
              text={ `This is another test message` }
              delay={ 10 }
            />
          </div>
        </div>
      </div>

      <div ref={ parallax1 } className={ styles.parallax }>

        {/* <div className={ styles.gradientTransition }></div> */}

        {/* <div className={ styles.page1 }>
          wow
        </div> */}
        <Page color={ '#ff0000' } gradientTransition gTHeight={ 10 } className={ styles.fish } />

        {/* --- */}

        <div ref={ parallax2 } className={ styles.parallax }>

          <Page color={ '#00ff00' } gradientTransition gTHeight={ 20 }>
            wow
          </Page>

          {/* <div className={ styles.page2 }>wow text</div> */}

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