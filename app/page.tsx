"use client";

import { useRouter } from "next/navigation"
import { useRef, useEffect, createElement } from "react"
import styles from '@/styles/home.module.css'

import Canvas from "@/components/Canvas"
import GlitchText from "@/components/GlitchText";
import Page from '@/components/layout/Page';

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default function Home() {

  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const parallax1 = useRef(null),
        parallax2 = useRef(null)


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
        }
      )
    }
  )


  const router = useRouter()
  // router.push('/~/')

  return (
    <>
      <Canvas colors='#00f #3a3aff #00fff0 #50f0f0' />
      <div className={ styles.titleContainer }>
        <div className={ styles.title }>
          <h1 className={ `text-8xl font-bold` }>{ `'ello there` }</h1>
          <div className={ styles.leftPad }>
            <p>{ `I'm some guy on the internet` }</p>
            <GlitchText 
              text={ `This is another test message` }
              delay={ 10 }
            />
          </div>
        </div>
      </div>

      <div ref={ parallax1 } className={ styles.parallax }>

        <Page color={ '#ff0000' } gradientTransition gTHeight={ 10 } className={ `flex items-center justify-center` }>
          { `wow it's some text` }
        </Page>

        {/* --- */}

        <div ref={ parallax2 } className={ styles.parallax }>

          <Page color={ '#00ff00' } gradientTransition gTHeight={ 20 }>
            wow
          </Page>

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