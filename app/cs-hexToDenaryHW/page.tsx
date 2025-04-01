'use client';

import React, { useRef } from "react"

interface pageProps {
  children?: React.ReactNode
  className?: string
}

const Page: React.FC<pageProps> = ( children, className ) => {
  let hex = useRef(null)
  let denary = useRef(null)
  
  const hexToDenary = () => {
    let hexCurr = hex.current as any
    let denaryCurr = denary.current as any
    
    if ( hexCurr.value !== '' ) {
      let denaryText = parseInt( hexCurr.value, 16 )
      if ( isNaN( denaryText ) ) {
        denaryCurr.value = 'bro give me an actual number'
      } else {
        denaryCurr.value = denaryText
      }
    } else { denaryCurr.value = '' }
  }
  
  const denaryToHex = () => {
    let hexCurr = hex.current as any
    let denaryCurr = denary.current as any

    if ( denaryCurr.value !== '' ) {
      let hexText = parseInt( denaryCurr.value ).toString(16).toUpperCase()
      if ( isNaN( parseInt( hexText, 16 ) ) ) {
        hexCurr.value = 'bro give me an actual number'
      } else {
        hexCurr.value = hexText
      }
    } else { hexCurr.value = '' }
  }

  return (
    <>
      <h1 className={ `text-8xl font-bold` }>
        wow conversions
      </h1>
      <input
        ref={ hex }
        name='hex'
        onChange={ hexToDenary }
        className={ `text-black w-[300px]` }
      /> <label htmlFor="hex">hex goes here</label>
      <br />
      <input
        ref={ denary }
        name='denary'
        onChange={ denaryToHex }
        className={ `text-black w-[300px]` }
      /> <label htmlFor="denary">denary goes here</label>
    </>
  )
}

export default Page
