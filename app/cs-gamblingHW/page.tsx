'use client';

import "@/styles/globals.css";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  let [money, setMoney] = useState(100)
  let [timerCount, setTimerCount] = useState(0)
  let [buttonText, setButtonText] = useState('get more money')
  let [timerRunning, setTimerRunning] = useState(false)
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = () => {
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

  useEffect(() => {
    if ( timerCount < 0 ) {
      onCountdownEnd()
    }
  });


  let countdownIntervalId = useRef(0)

  const doStartCountdown = () => {
    setTimerRunning( true )
    countdownIntervalId.current = window.setInterval(() => {
      setTimerCount( prevTimerCount => {
        return prevTimerCount - 1
      })
    }, 1000)
  }

  const doStopCountdown = () => {
    window.clearInterval( countdownIntervalId.current )
  }

  const onCountdownEnd = () => {
    setMoney( prevMoney => prevMoney + 100 )
    doStopCountdown()
    setTimerCount( 0 )
    setTimerRunning( false )
  }

  async function handleClickGetMoney() {
    if ( ! timerRunning ) {
      setTimerCount( 10 )
      doStartCountdown()
    } else {
      setButtonText( `you're already working you moron` )
      await sleep(1000)
      setButtonText( `get more money` )
    }
  }

  return (
    <>
      <h1>wow gambling</h1>
      <div>you have { money } money</div>
      <button onClick={ handleClick }>click me</button><br />
      <button onClick={ handleClickGetMoney }>{ buttonText }</button>
      {/* <div>{ timerText }</div> */}
      <div>{ timerRunning ? `please wait ${ timerCount } seconds while you work to earn money` : `` }</div>
      {/* <div>{ timerCount }</div> */}
    </>
  )
}

export default Page
