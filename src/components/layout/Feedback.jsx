import React from 'react'
import './feedback.css'


export default props => (
    <div id='feedback' className={props.game}>

        You did it with {props.moves} moves !

    </div>

);