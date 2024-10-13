import { useEffect, useRef } from "react"

interface Props {
  height: number,
  color: string,
  direction?: 'top' | 'bottom',
}

const GradientTransition: React.FC<Props> = ({ height, color, direction }) => {
  let gT = useRef(null)

  useEffect(() => {
    // if ( gT.current !== null ) {
    gT.current.style.position = 'absolute'
    gT.current.style.zIndex   = '10'

    gT.current.style.height = `${ height }vh`
    gT.current.style.width  = '100vw'
    gT.current.style.top    = `-${ height }vh`

    gT.current.style.background = `linear-gradient(
    to ${ direction ? direction : 'top' },
    ${ color }ff 0, 
    ${ color }00 100%
    )`
    // }
  })

  return (
    <>
      <div id="gradientTransition" ref={ gT }></div>

      {/* <style>{`
        #gradientTransition {
          position: absolute;
          z-index: 10;

          height: ${ height }vh;
          width: 100vw;
          top: -${ height }vh;

          background: linear-gradient(
            to ${ direction ? direction : 'top' },
            ${ color }ff 0,
            ${ color }00 100%
          );
        }
      `}</style> */}
    </>
  )
}

export default GradientTransition
