import React, { useMemo, useState } from 'react'

export default function Example_I() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const change=()=>{
        setCount (count+1)
    }
    const change2=()=>{
        setItem(item+10)
    }

     function multicount(){
        console.error("multicount")
        return count*10
    } 

    // bellow code with memo 

    const multicountMemo=useMemo( function multicount(){
        console.error("multicount")
        return count*10
    },[count] )//useMemo(function, when to triggre it )here as count updates this will run
    return (
        <>
        <h1>Use memo different </h1>
        <h2>count:{count}</h2>
        <h2>item:{item}</h2>
        {/* <h2>multicount :{multicount()}</h2> */}
        <h2>multicount :{multicountMemo}</h2>     
        <button onClick={change}>update count</button>
        <button onClick={change2}>update item</button>
        </>
    )
}
// useMemo is used to improve the performance of the application 