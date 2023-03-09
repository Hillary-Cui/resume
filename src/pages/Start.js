import React from 'react'
import '../css/Start.css'
import {useNavigate} from "react-router-dom"
import Background from '../components/Background/Background';




export default function Start(){
    const navigate = useNavigate();
    function startButton(){
        navigate('/loading')
    }
    return(
        <div>
        <Background />
        <h1 id='text'>Welcome to Hillary's website</h1>
        <button className='start_button' onClick={startButton}>Start</button>
        </div>
      
    )
}