import React, { useState } from 'react'
import Child from './Child'

export default function Parents() {
  const [initial,setFinal]=useState(0)
  const incerement=()=>{
    setFinal(initial+1)
  }
  const number="akash"
  return (
    <>
    <h1>{initial}</h1>
    <button onClick={incerement}>click me</button>
    <Child value={number} />
    </>
  )
}
