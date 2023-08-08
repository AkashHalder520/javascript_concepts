import React, { useReducer } from 'react'

export default function UserReducer() {

    const initialstate=0
    const reducer =(state,action)=>{
        if(action.type=="increment")
        return state+1
        if(action.type=="decrement")
        return state-1

        return state // we have to return something
    }

    const [state,dispatch]=useReducer(reducer,initialstate); // state gets the current state and usereducer it returns 2 element of an array state and dispacth
  return (
    <>
    <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:"increment"})}>+++</button> 
        <button onClick={()=>dispatch({type:"decrement"})}>---</button>
    </div>
    </>
  )
}
/*dispathch is used to trigger the action methords*/

