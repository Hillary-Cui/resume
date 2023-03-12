import React from 'react'
import {useNavigate} from 'react-router-dom'
import Die from '../components/Game/Die'
import '../css/Game.css'
import { nanoid } from 'nanoid'
// npm install react-confetti
import Confetti from "react-confetti"
import formateTime  from '../pages/Formattime'

export default function Game(){
    
    const [dice,SetDice] = React.useState(allNewDice());
    const [tenzies,setTenzies] = React.useState(false);
    const [times,setNewTime] = React.useState({
        allTime:0
    });

    let [click,setClick] = React.useState(0);
    
    let now = formateTime(times.allTime);

    const [bestScore,setBestScore] = React.useState({
        score:[],
        bestOne:now,
    }) ;
    // ()=>JSON.parse(localStorage.getItem("bestScore"))||


    const nevigate = useNavigate();
    function back(){
        nevigate(-1);
    };

    // localStorage
    // React.useEffect(()=>{
    //      localStorage.getItem("bestScore",JSON.stringify(bestScore));
    //      setBestScore(bestScore);
    //      console.log('nowtime: '+ now +'score: '+ bestScore);
    // },[bestScore])

    // check win
    React.useEffect(()=>{
        const allHeld = dice.every(die=>die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die =>die.value === firstValue);
        console.log('time: '+ times.allTime +'score: '+ bestScore.score);
        if(allHeld && allSameValue){
            if(bestScore.score.length > 0){
                console.log("check");
             let newOne = mySore(bestScore.score);
            //  setBestScore({...bestScore,bestOne:formateTime(newOne)});
            bestScore.bestOne = formateTime(newOne);
             console.log('newscore: '+ bestScore.bestOne);
            }
            if( now < bestScore.bestOne){
                bestScore.bestOne = now;
                console.log('updatesocre: '+ bestScore.bestOne);
            }
            setTenzies(true);
            click = 0 ;
            alert(`Congraduation! You Win! This times you used `+ now + " to win!" + "Your best score is " + bestScore.bestOne);
        }
    },[dice])

    // Timer
    React.useEffect(()=>{
        // console.log("start" + times.allTime);
        // console.log("now" + now);
        console.log('clickOrinial' + click);
        const timer =setInterval(() => {
            if(click === 1){
                setNewTime({allTime:(++times.allTime)});
                setBestScore({...bestScore,bestOne:formateTime(times.allTime)});
            }
        }, 10);
        
            return()=>{
                clearInterval(timer);
                console.log('clear');
            }
           
    },[dice])


    function mySore(arr){
        for(let i = 0;i<arr.length;i++){
            for(let j = 0; j<arr.length-1-i;j++){
                let temp = arr[j];
                if(arr[j]>arr[j+1]){
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        console.log(arr);
        return arr[0];
    }

// 整个dice
    function allNewDice(){
        const newDice = [];
        for(let i = 0;i<15;i++){
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
            setClick(1);
            console.log('clickB' + click);
            SetDice(oldDice => oldDice.map(die=>{
                return die.isHeld ? die:generationNewDice()
            }));

        }else{
            // if(!bestScore || now < bestScore.bestOne){
                
            // }
            setTenzies(false);
            SetDice(allNewDice());
            setBestScore((prev)=>({
                score:[...prev.score,times.allTime],

            }));
            setNewTime({allTime:0}); 
            setClick(0);
        }
    }

    function holdDice(id){
        setClick(1);
        console.log('click' + click);
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
             <img src= {require('../components/Background/background.jpeg')} className='.pro-img' alt='search'/>
             <button onClick={back} className='btn_styles'>Back</button>
             <h1 className='game-text'>Tenzies</h1>
             <h3 className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>

             <main className='dice-box'>
                <div className='dice-container'>
                    {diceElement}
                </div>
                <button className='dice-button' onClick={rollDice}>{tenzies ? "New Game" : "Roll" }</button>
            </main>
        </div>

    )
}