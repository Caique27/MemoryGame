import './App.css'
import React, { useState } from 'react'
import Card from './layout/Card';
import Data from './layout/Data'
import i1 from './data/images/cardback.jpg'
import i2 from './data/images/answers/orion-image.jpg'
var im = [i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1]
var FlippedCards = 0
const App = () => {


    const [image, setImage] = useState([i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1]);
    const clicar = (par) => {
        if (im[par] == i1) {
            im[par] = i2
            FlippedCards += 1
        } else {
            im[par] = i1
            FlippedCards -= 1
        }
        setImage([im[0], im[1], im[2], im[3], im[4], im[5]
            , im[6], im[7], im[8], im[9], im[10], im[11]])

        console.log(FlippedCards)
    }
    return <>
        <Data points='4' />
        <div className='Cards' >
            <Card id='1' handleClick={() => clicar(0)} image={image[0]} />
            <Card id='2' handleClick={() => clicar(1)} image={image[1]} />
            <Card id='3' handleClick={() => clicar(2)} image={image[2]} />
            <Card id='4' handleClick={() => clicar(3)} image={image[3]} />
            <Card id='5' handleClick={() => clicar(4)} image={image[4]} />
            <Card id='6' handleClick={() => clicar(5)} image={image[5]} />
            <Card id='7' handleClick={() => clicar(6)} image={image[6]} />
            <Card id='8' handleClick={() => clicar(7)} image={image[7]} />
            <Card id='9' handleClick={() => clicar(8)} image={image[8]} />
            <Card id='10' handleClick={() => clicar(9)} image={image[9]} />
            <Card id='11' handleClick={() => clicar(10)} image={image[10]} />
            <Card id='12' handleClick={() => clicar(11)} image={image[11]} />



        </div>
    </>
}
    ;
export default App;