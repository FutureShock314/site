import React from "react"
import styles from "@/styles/components/layout/page.module.css"
import GradientTransition from '@/components/layout/GradientTransition'

interface pageProps {
  children?: React.ReactNode,
  color?: string,
  gradientTransition?: boolean,
  gTHeight?: number,
  gTDirection?: 'top' | 'bottom',
  flexCenter?: boolean,
}

const Page: React.FC<pageProps> = ({ children, color, gradientTransition, gTHeight }) => {

  color = color ? color : '#000'

  return (
    <>
      <main className={ styles.page } id="page">
        { gradientTransition ?
          <GradientTransition 
            height={ gTHeight ? gTHeight : 10 }
            color={ color }
          /> :
          null }
        { children }
      </main>

      <style>{`

        #page {
          background-color: ${ color }
        }

      `}</style>
    </>
  )
}

export default Page
