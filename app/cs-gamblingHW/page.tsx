'use client';

import "@/styles/globals.css";
import { useState } from "react";

const Page = () => {
  let [money, setMoney] = useState(100000)

  function handleClick() {
    let rand = Math.floor( Math.random() * 7 )

    if ( money === 0 ) {
      alert('bro you\'re broke don\'t gamble')
    } else if ( Math.random() === 0.8539243308013628 ) {
      alert('bro what the hell did you do this is literally 1 / 10^16')
      alert('well ig you win')
      alert('your prize is nothing')
      setMoney(0)
      return
    } else if ( rand / rand === 1) {
      alert('lol you lost bozo')
      setMoney(0)
      return
    }
  }

  return (
    <>
      <h1>wow gambling</h1>
      <div>you have { money } money</div>
      <button onClick={ handleClick }>click me</button>
    </>
  )
}

export default Page
