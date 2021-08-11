import './App.css'
import React, { useState } from 'react'
import Card from './layout/Card';
import Data from './layout/Data'
import i1 from './data/images/cardback.jpg'
import imgs from './images'



/* Variable config */
const answers = imgs
var images = [imgs[3], imgs[1], imgs[11], imgs[4], imgs[6], imgs[2], imgs[5], imgs[10], imgs[0], imgs[7], imgs[8], imgs[9]]
var im = [i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1]
var GameState = 'waiting'
var FlippedCards = []
var hid = ['un', 'un', 'un', 'un', 'un', 'un', 'un', 'un', 'un', 'un', 'un', 'un']
var matched = false

function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Used like so

shuffle(images);
console.log(images);

console.log(imgs)
console.log(images)


/* end of variable config*/



const App = () => {

    const [image, setImage] = useState([i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1]);
    const [hiddens, setHiddens] = useState([])
    const [points, setPoints] = useState(0)


    const clicar = (par) => {
        if (GameState == 'waiting') {
            if (im[par] == i1) {
                im[par] = images[par]
                FlippedCards.push(par)
            }
            setImage([im[0], im[1], im[2], im[3], im[4], im[5],
            im[6], im[7], im[8], im[9], im[10], im[11]])


            if (FlippedCards.length > 1) {
                Unflip(par)
                GameState = 'processing'
            }
        }
    }
    function CheckMatch() {
        // console.log(FlippedCards)
        //.log('the card images are:', images)
        // console.log('the answers are:', answers)
        if (answers.indexOf(images[FlippedCards[0]]) + 6 == answers.indexOf(images[FlippedCards[1]]) ||
            answers.indexOf(images[FlippedCards[0]]) - 6 == answers.indexOf(images[FlippedCards[1]])) {
            return true
        } else {
            return false
        }


    }



    function Unflip(par) {
        if (CheckMatch() == false) {
            setTimeout(function () {

                im = [i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1]
                setImage([im[0], im[1], im[2], im[3], im[4], im[5]
                    , im[6], im[7], im[8], im[9], im[10], im[11]])
                FlippedCards = []
                GameState = 'waiting'
            }, 800);
        } else {
            setTimeout(function () {


                for (var c = 0; c < FlippedCards.length; c += 1) {
                    hid[FlippedCards[c]] = 'hid'
                }
                setHiddens([hid[0], hid[1], hid[2], hid[3], hid[4], hid[5], hid[6], hid[7], hid[8], hid[9], hid[10], hid[11]])
                im = [i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1, i1]
                setImage([im[0], im[1], im[2], im[3], im[4], im[5]
                    , im[6], im[7], im[8], im[9], im[10], im[11]])
                FlippedCards = []
                setPoints(points + 1)
                GameState = 'waiting'



            }, 500);

        }
    }
    return <>
        <Data points={points} />
        <div className='Cards' >
            <Card id='0' handleClick={() => clicar(0)} image={image[0]} status={hiddens[0]} />
            <Card id='1' handleClick={() => clicar(1)} image={image[1]} status={hiddens[1]} />
            <Card id='2' handleClick={() => clicar(2)} image={image[2]} status={hiddens[2]} />
            <Card id='3' handleClick={() => clicar(3)} image={image[3]} status={hiddens[3]} />
            <Card id='4' handleClick={() => clicar(4)} image={image[4]} status={hiddens[4]} />
            <Card id='5' handleClick={() => clicar(5)} image={image[5]} status={hiddens[5]} />
            <Card id='6' handleClick={() => clicar(6)} image={image[6]} status={hiddens[6]} />
            <Card id='7' handleClick={() => clicar(7)} image={image[7]} status={hiddens[7]} />
            <Card id='8' handleClick={() => clicar(8)} image={image[8]} status={hiddens[8]} />
            <Card id='9' handleClick={() => clicar(9)} image={image[9]} status={hiddens[9]} />
            <Card id='10' handleClick={() => clicar(10)} image={image[10]} status={hiddens[10]} />
            <Card id='11' handleClick={() => clicar(11)} image={image[11]} status={hiddens[11]} />



        </div>
    </>
}
    ;
export default App;