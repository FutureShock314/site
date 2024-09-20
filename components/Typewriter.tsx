import React, { useEffect, useState } from 'react';

type TypewriterProps = {
  text: String,
  delay: number,
  cursorChar?: String,
  loop?: boolean,
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, cursorChar, loop }) => {
  const [currText, setCurrText] = useState('')
  const [currIndex, setCurrIndex] = useState(0)
  const [looping, setLooping] = useState(false)

  // let looping: boolean = false;

  useEffect(() => {
    let timeout;
    let wait;
    console.log( looping )

    if ( currIndex < text.length && !looping ) {
      console.log('going forward -> ', looping, currIndex, text.length)
      timeout = setTimeout(() => {
        setCurrText( prevText => prevText + text[currIndex] )
        setCurrIndex( prevIndex => prevIndex + 1)
      }, delay)
    } else if ( loop && currIndex > 0 ) {
      setLooping(true)
      
      console.log('going back    -> ', looping, currIndex, text.length)

      timeout = setTimeout(() => {
        setCurrText( prevText => prevText.substring(0, prevText.length - 1) )
        setCurrIndex( prevIndex => prevIndex - 1 )
      }, delay)
    } 

    if ( currIndex === 0 ) { setLooping(false) }

    if ( currIndex === 0 || currIndex === ( text.length - 1 ) ) {
      wait = setTimeout( () => { console.log(`waiting`) }, 10000 )
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(wait);
    }
  }, [currIndex, delay, text, loop, looping]);

  return <><span>{ currText }</span><span>{ cursorChar ? cursorChar : `|` }</span></>

}

export default Typewriter
