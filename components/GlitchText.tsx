'use client';

import React, { useState, useEffect } from "react";

type GlitchTextProps = {
  text: string,
  delay: number,
  lower?: boolean,
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, delay, lower }) => {
  const [ currText, setCurrText ] = useState('')

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
  
  const [iteration, setIteration] = useState(0);

  async function sleep(time: number) {
    await new Promise(resolve => setTimeout(resolve, time));
  }
  
  useEffect( () => {
    setTimeout( () => console.log('waiting'), 1000)
    
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setCurrText( text.split("").map((_letter, index) => {
          if(index + 10 < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)]
          // return 'w'
        }).join("")
      )

      if(iteration >= text.length){ 
        clearInterval(interval);
      }
    
      // if ( iteration < 1) {
        // setIteration( prevIteration => prevIteration += 1 / 25)
      // } else {
        setIteration( prevIteration => prevIteration += 1 / 3 );
      // }
    }, delay);

    return () => {
      clearInterval(interval);
    }

  }, [ currText, iteration, text, delay ])

  return (
    <>
      <span>{ currText }</span>
    </>
  )
}


export default GlitchText
