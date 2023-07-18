import React from 'react'
import "../Child/Child.css"
import Bugsy from '../../images/Bugsy.jpg'

export default function Child({name, pats, handleBugsysPats}) {
  return (
    <div>
        <h2>{name}</h2>
        {/* <img src={require("../../images/Bugsy.jpg")} alt='Bugsy the cat'></img> */}
        <img src={Bugsy} alt='Bugsy the cat' onClick={handleBugsysPats}></img>
        <span>Number of Pats on Bugsy's head: {pats}</span>
    </div>
  )
}
