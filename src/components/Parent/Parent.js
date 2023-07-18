import React, { useState } from 'react'
import Child from '../Child/Child'
import "../Parent/Parent.css"



export default function Parent() {
    const name = "Bugsy";
    // let pats = 0;

    // const [state, setState] = useState(inital-Value)
    // usss shortcut to do placeholder
    // const [first, setfirst] = useState(second)
    // the inital value is the valye you want to start with assigned to state
    // state is the current value and can be used inside your components
    // setState is the setter function, it can be used to update the value of state
    // updating the value of state will cause a re-render of any component that uses this tate

    const [pats, setPats] = useState(0)

    function handleBugsyPats(){
        setPats(pats + 1)
    }

  return (
    <div>
        <Child name={name} pats={pats} handleBugsysPats={handleBugsyPats}/>
        {/* <Child name={name} pats={pats}/> */}
    </div>
  )
}
