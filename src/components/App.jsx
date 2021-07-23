import './App.css'
import React from 'react'
import Card from './layout/Card';
import Data from './layout/Data'
function logar() {
    console.log('rage')
}

export default (props) => (
    <>
        <Data points='4' />
        <div className='Cards'>
            <Card id='1' />
            <Card id='2' />
            <Card id='3' />
            <Card id='4' />
            <Card id='5' />
            <Card id='6' />
            <Card id='7' />
            <Card id='8' />
            <Card id='9' />
            <Card id='10' />
            <Card id='11' />
            <Card id='12' />



        </div>
    </>
);