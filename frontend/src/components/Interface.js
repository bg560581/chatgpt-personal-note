import React from 'react'

// INPUTS
import Age from './Age'
import Gender from './Gender'
import Occasion from './Occasion'
import Relationship from './Relationship'
import Style from './Style'
import Tone from './Tone'
import ChatBox from './ChatBox'


function Interface() {
  return (
    <div>
        <div> 
            <h1>Create your own personal note</h1>
        <ChatBox/>
        </div>
    <Age/>
    <Gender/>
    <Occasion/>
    <Relationship/>
    <Style/>
    <Tone/>
    </div>
  )
}

export default Interface