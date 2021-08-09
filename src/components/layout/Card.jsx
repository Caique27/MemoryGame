import React from 'react'
import './card.css'


export default props => (




    <div id='Card' onClick={props.handleClick} className={props.status} >
        <div id='white'></div>
        <img src={props.image} alt="back" className='cardback' />

    </div>

);