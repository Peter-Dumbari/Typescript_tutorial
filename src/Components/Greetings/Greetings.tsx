import React, { useState } from 'react';


interface Istate{
    message: string
}
export default function Greetings() {

    let[state, setState]=useState<Istate>({
        message: "Hello"
    })

    const MessageChanger = (greet: string):void=>{
        setState({message: greet})
    }
  return (
    <>
    <h1>{state.message}</h1>
    <button onClick={()=>MessageChanger('Good Morning')}>Good morning</button>
    <button onClick={()=>MessageChanger('Good Afternoon')}>Good Afternoon</button>
    <button onClick={()=>MessageChanger('Good Evening')}>Good Evening</button>
    </>
  )
}
