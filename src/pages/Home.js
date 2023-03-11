import React from 'react'
import{NavLink,useNavigate} from 'react-router-dom'
import "../css/Home.css"
import "../css/Nav.css"
import Card from  "../components/Card/Card"
import Data from '../image/data_first'

export default function Home(){
    const navigate = useNavigate();
    
    const text_styles = {
        position:'absolute',
        top:'140px',
        left:'350px',
        color: '#fcf8fb',
        fontSize: '60px',
        fontFamily:'EB Garamond'
    }

    const img_styles ={
        position:'absolute',
        height:'100%',
        width:'100%',
        borderRadius:'50%'

    }
    function computedClassName({isActive}){
        return isActive ? "link-active" :  "link-normal"
   }
   
   const cards = Data.map((item)=>{
       return(
             <Card 
             key={item.id}
             {...item}
             />
             
       )
   })


  
    return(
        <div className='whole'>
               {/* <img src= {require('../image/2.png')} className='pro-img'/> */}
            {/* nav bar */}
           <ul className='nav'>
               <li><NavLink className={computedClassName} to='/home' >Home</NavLink></li>
               <li><NavLink className={computedClassName} to='/portofolio' >Portofolio</NavLink></li>
               <li><NavLink className={computedClassName} to='/about' >About</NavLink></li>
               <li><NavLink className={computedClassName} to='/message' >Message</NavLink></li>
           </ul>
           
           {/* profile */}
           <div className='profile'>
               <div className='cirle'>
                    <img src={require('../image/my.jpg')} style={img_styles} alt='profile'/>
                </div>
                <div className='profile_text'>
                    <h1 style={text_styles}>I'm Yaxuan Cui</h1>
                    <h3 style={{position:"absolute",top:'230px',left:'300px',fontSize:'23px',color: '#fcf8fb',lineHeight:'35px',fontWeight:'500'}}>
                        I am a Master of IT graduate from the University of Sydney.
                        <br/>I am looking forward to make my career in front-end.</h3>
                        <p style={{position:"absolute",top:'340px',left:'300px',fontSize:'23px',color: '#fcf8fb',lineHeight:'40px',fontWeight:'500'}}>
                            Phone: (+61)403880863 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Email: xhinhinx@gmail.com </p>
                    <button className='profile_btn' onClick={()=>navigate('/about')}>Learn More</button>
                    <h2 style={{position:"absolute",top:'650px',left:'620px',fontSize:'40px',color: '#fcf8fb',lineHeight:'35px',fontFamily:'Times New Roman'}}>SOME OF MY PORTOFOLIO....</h2>
                </div>
                
           </div>
          

           {/* image */}
           <div className='big-box'>
                {cards}
           </div>
              
          
        </div>
    )
   
}