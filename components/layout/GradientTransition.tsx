import { useEffect, useRef } from "react"

interface Props {
  height: number,
  color: string,
}

const GradientTransition: React.FC<Props> = ({ height, color }) => {
  let gT = useRef(null)

  useEffect(() => {
    let el = gT.current as any

    el.style.position = 'absolute'
    el.style.zIndex   = '10'

    el.style.height = `${ height }vh`
    el.style.width  = '100vw'
    el.style.top    = `-${ height - 0.1 }vh`

    el.style.background = `linear-gradient(
      to top,
      ${ color }ff 0, 
      ${ color }00 100%
    )`
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
