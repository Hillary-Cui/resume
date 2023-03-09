import React from 'react';
import '../css/Loading.css'
import {useNavigate} from "react-router-dom"



export default function Loading(){
    const navigate = useNavigate()
    function timer(){
        const timer = setTimeout(() => {
            navigate("/home")
        }, 2500);
        return () => {
            clearInterval(timer);
          }
    }
return(
    <div>
        <div className='container'>
            <div className='bubble'></div>
            <div className='shadow'></div>
        </div>
         
         {/* loading */}
        <div className='loading-box' >
            <div className='loading'></div>
            <p className='loading-text'  >Loading......</p>
            {timer()}
        </div>
    </div>
    
)
    
    
}