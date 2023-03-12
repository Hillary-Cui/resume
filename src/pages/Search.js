import React from 'react'
import {useNavigate} from 'react-router-dom'
import Meme from '../components/Search/Meme'
import '../css/Search.css'

export default function Search(){

    const nevigate = useNavigate();

    function back(){
        nevigate(-1);
    };
    
    React.useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    return(
        <div className='search-box'>
             <img src= {require('../image/2.png')} className='.pro-img' alt='search'/>
             <button onClick={back} className='btn_styles'>Back</button>
             <h1 className='search-text'>MeMe Generator</h1>

             {/* Main */}
             <div className='search-main'>
                 <h3 style={{position:'flex', justifyContent:"center", textAlign:"center",paddingBottom:"30px"}}>
                     Firstly, click 'Get a new meme Image' button to choose a image you like. (click 'Get a new meme Image' button can change different images)
                 <br />Then type the text you want into the "top text" and "bottom text" input boxes to create a new meme image.</h3>
                 <Meme />
             </div>
        </div>

    )
}