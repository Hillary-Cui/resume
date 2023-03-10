import React from 'react'
import {useNavigate} from 'react-router-dom'
import Die from '../components/Game/Die'
import '../css/Game.css'
import { nanoid } from 'nanoid'
// npm install react-confetti
import Confetti from "react-confetti"
import Background from '../components/Background/Background';
import formateTime  from '../pages/Formattime'

export default function Game(){
    
    const [dice,SetDice] = React.useState(allNewDice());
    const [tenzies,setTenzies] = React.useState(false);
    const [times,setNewTime] = React.useState({
        allTime:0
    });
    
    let now = formateTime(times.allTime);

    const [bestScore,setBestScore] = React.useState(0) ;
    let bestOne = formateTime(bestScore);
    // ()=>JSON.parse(localStorage.getItem("bestScore"))||


    const nevigate = useNavigate();
    function back(){
        nevigate(-1);
    };

    // localStorage
    // React.useEffect(()=>{
    //      localStorage.getItem("bestScore",JSON.stringify(bestScore));
    // },[bestScore])

    // check win
    React.useEffect(()=>{
        const allHeld = dice.every(die=>die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die =>die.value === firstValue);
        if(allHeld && allSameValue){
            // if( times.allTime < bestScore){
            //             console.log("after" + times.allTime);
            //             setBestScore(times.allTime);
            //             // const bestOne = formateTime(bestScore);
            //             // console.log("aftera" + bestOne);
            //         }else{
            //             console.log("afterb" + times.allTime);
            //             setBestScore(bestScore);
            //         }
            setTenzies(true);
            alert(`Congraduation! You Win! This times you used `+ now + " to win!" + "Your best score is " + bestOne);
        }
    },[dice])

    // Timer
    React.useEffect(()=>{
        console.log("start" + times.allTime);
        console.log("now" + now);
        const timer =setInterval(() => {
            setNewTime({allTime:(++times.allTime)})
        }, 10);
            return()=>{
                clearInterval(timer);
                console.log('clear');
            }
    },[dice])


// 整个dice
    function allNewDice(){
        const newDice = [];
        for(let i = 0;i<2;i++){
            newDice.push(generationNewDice());
        }
        return newDice;
    }

    // 单个dice
    function generationNewDice(){
        return{
            value: Math.ceil(Math.random()*6),
            isHeld:false,
            id:nanoid()
        }
    }


    function rollDice(){
        if(!tenzies){
            SetDice(oldDice => oldDice.map(die=>{
                return die.isHeld ? die:generationNewDice()
            }));

        }else{
            if(!bestScore || now < bestScore){
            }
            setTenzies(false);
            SetDice(allNewDice());
            setNewTime({allTime:0}); 
        }
    }

    function holdDice(id){
        SetDice(oldDice => oldDice.map(die=>{
            return die.id === id ? {...die,isHeld: !die.isHeld} :die
        }))
    }


    const diceElement = dice.map((die)=>
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>
    )

    return(
        <div className='game-box'>
            {tenzies && <Confetti />}
             {/* <img src= {require('../image/2.png')} className='.pro-img' alt='search'/> */}
             <Background />
             <button onClick={back} className='btn_styles'>Back</button>
             <h1 className='game-text'>Tenzies</h1>

             <main className='dice-box'>
                <h3 className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
                <div className='dice-container'>
                    {diceElement}
                </div>
                <button className='dice-button' onClick={rollDice}>{tenzies ? "New Game" : "Roll" }</button>
            </main>
        </div>

    )
}