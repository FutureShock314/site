import React, { useEffect, useRef } from "react"
import styles from "@/styles/components/layout/page.module.css"
import GradientTransition from '@/components/layout/GradientTransition'

interface PageProps {
  children?: React.ReactNode,
  color?: string,
  gradientTransition?: boolean,
  gTHeight?: number,
  gTDirection?: 'top' | 'bottom',
  flexCenter?: boolean,
  className?: string
}

const Page: React.FC<PageProps> = ({ children, color, gradientTransition, gTHeight, className }) => {

  color = color ? color : '#000'

  const pageRef = useRef(null)

  useEffect(() => {
    pageRef.current.style.background = color
  })

  return (
    <>
      <main className={ styles.page } ref={ pageRef }>
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
