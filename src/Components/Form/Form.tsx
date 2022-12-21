import React, { ReactEventHandler, useState } from 'react'
import { Iuser } from './FormModel'

interface Istate{
    userData: Iuser
}



export default function Form() {
    let [state, setState]=useState<Istate>({
        userData:{
            userName: "",
            password: "",
        }
    })

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void =>{
        event.preventDefault()
        setState({
            userData:{
                ...state.userData,
                [event.target.name]  : event.target.value
            }
        })
    }

    const login =(event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault();
        console.log(state.userData)
    }
  return (
    <>
    <h1>{state.userData.userName}</h1>
    <h1>{state.userData.password}</h1>
    <h3>Form Data</h3>
    <form action="" onSubmit={login}>
        <input type="text" placeholder='username' onChange={handleChange} name='userName' value={state.userData.userName} />
        <input type="password" placeholder='password' onChange={handleChange}  name='password' value={state.userData.password} />
        <button >Submit</button>
    </form>
    </>
  )
}
