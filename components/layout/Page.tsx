import React, { useEffect, useRef } from "react"
import GradientTransition from '@/components/layout/GradientTransition'

interface PageProps {
  children?: React.ReactNode,
  color?: string,
  gradientTransition?: boolean,
  gTHeight?: number,
  gTDirection?: 'top' | 'bottom',
  // flexCenter?: boolean,
  className?: string
}

const Page: React.FC<PageProps> = ({ children, color, gradientTransition, gTHeight, className }) => {

  color = color ? color : '#000'

  const pageRef = useRef(null)

  useEffect(() => {
    let el = pageRef.current as any
    
    el.style.background = color
    el.style.height = '100vh'
    el.style.width  = '100vw'
  })

  return (
    <>
      <main className={ className } ref={ pageRef }>
        { gradientTransition ?
          <GradientTransition 
            height={ gTHeight ? gTHeight : 10 }
            color={ color }
          /> :
          null }
        { children }
      </main>

      {/* <style>{`

        #page${ num } {
          background-color: ${ color }
        }

      `}</style> */}
    </>
  )
}

export default Page
