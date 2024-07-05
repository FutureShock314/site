'use client';

import { useState } from "react"
import styles from "@/styles/home.module.css"

export default function Home() {
  
  const [ in1, setIn1 ] = useState("")

  function onSubmit() {
    console.log('yay')
  }

  return (
    <>
      <h1>&apos;ello there</h1>
      <br />
      <form onSubmit={ () => onSubmit() }>
      <input
        type="number"
        name="in1"
        className={ styles.in1 }
        onChange={
          (e) => setIn1( e.target.value ) 
        }
      />
      <div>{ `${ in1 }` }</div>
      </form>
    </>
  );
}
