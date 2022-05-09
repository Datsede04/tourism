import React from 'react'
import CountUp from 'react-countup'

const Counter = (props) => {
  return (
    <CountUp 
    start={0} 
    end={props.end}
    duration={2.75}
    separator=" "
    decimal=","
    prefix="+"
    suffix=""
    onEnd={() => console.log('Ended! 👏')}
    onStart={() => console.log('Started! 💨')}/>
  )
}

export default Counter