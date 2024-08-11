import { useEffect, useRef, useState} from 'react';

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef(null)

  const startTimer = () => {
    setIsActive(true)
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
  }

  const resume = () => {
    if(!isActive){
      startTimer()
    }
  }

  const stop = () => {
    setIsActive(false)
    clearInterval(timerRef.current)
  }

  const reset = () => {
    stop()
    setSeconds(0)
    startTimer()
  }

  useEffect(() => {
    startTimer()
  }, [])

  return {seconds, resume, stop, reset}
}
