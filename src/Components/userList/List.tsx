import React,{useState} from 'react'
import { UserServiceFile } from '../Services/UserServiceFile'
import { userinfo } from './userListModel'

interface Istate{
    info :  userinfo []
}
export default function List() {
    let [state, setState]= useState<Istate>({
        info: UserServiceFile.getAllUsers()
    })
  return (<>
  {
    state.info.length > 0 && state.info.map((items)=>
        <ul key={items.age}>
        <li>{items.name}</li>
        <li>{items.age}</li>
        <li>{items.sex}</li>
        </ul>
        
    )
  }
  </>
   
  )
}
//TO INSTALL AXIOS YOU USE npm install axios @types/axios