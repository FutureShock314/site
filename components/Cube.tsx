import styles from '@/styles/components/cube.module.css'
import React from 'react'

interface CubeProps {
  color?: string
  ref?: React.RefObject<null>
}

const Cube: React.FC<CubeProps> = ( color, ref ) => {
  return (
    // <div className={ styles.container }>
      <div className={ styles.cube }>
        <div className={ `${ styles.cubeFace } ${ styles.cubeFaceFront }` }>FRONT</div>
        <div className={ `${ styles.cubeFace } ${ styles.cubeFaceBack }` }>BACK</div>
        <div className={ `${ styles.cubeFace } ${ styles.cubeFaceRight }` }>RIGHT</div>
        <div className={ `${ styles.cubeFace } ${ styles.cubeFaceLeft }` }>LEFT</div>
        <div className={ `${ styles.cubeFace } ${ styles.cubeFaceTop }` }>TOP</div>
        <div className={ `${ styles.cubeFace } ${ styles.cubeFaceBottom }` }>BOTTOM</div>
      </div>
    // </div>
  )
}

export default Cube
