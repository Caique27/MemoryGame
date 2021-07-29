import './App.css'
import React from 'react'
import Card from './layout/Card';
import Data from './layout/Data'



const App = () => {

    const logar = (par) => {
        console.log(`You clicked in card ${par}`)
    }


    return <>
        <Data points='4' />
        <div className='Cards' >
            <Card id='1' handleClick={() => logar(1)} />
            <Card id='2' handleClick={() => logar(2)} />
            <Card id='3' handleClick={() => logar(3)} />
            <Card id='4' handleClick={() => logar(4)} />
            <Card id='5' handleClick={() => logar(5)} />
            <Card id='6' handleClick={() => logar(6)} />
            <Card id='7' handleClick={() => logar(7)} />
            <Card id='8' handleClick={() => logar(8)} />
            <Card id='9' handleClick={() => logar(9)} />
            <Card id='10' handleClick={() => logar(10)} />
            <Card id='11' handleClick={() => logar(11)} />
            <Card id='12' handleClick={() => logar(12)} />



        </div>
    </>
}
    ;
export default App;