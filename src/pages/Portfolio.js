import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import '../css/Portfolio.css'
import '../css/Nav.css'

export default function Portfolio(){

    function computedClassName({isActive}){
        return isActive ? "link-active" :  "link-normal"
   }
   function secondeNav({isActive}){
       return isActive ? "nav-active" : "nav-normal"
   }

    return(
        <div className='whole'>
             <ul className='nav'>
               <li><NavLink className={computedClassName} to='/home' >Home</NavLink></li>
               <li><NavLink className={computedClassName} to='/portofolio' >Portofolio</NavLink></li>
               <li><NavLink className={computedClassName} to='/about' >About</NavLink></li>
               <li><NavLink className={computedClassName} to='/message' >Message</NavLink></li>
           </ul>

           <h2 className='por-text'>My portofolio</h2>
           <img src= {require('../image/2.png')} className='pro-img' alt='portofolio'/>
          
           <ul className='sec-nav'>
               <li><NavLink className={secondeNav} to='all'>ALL</NavLink></li>
               <li><NavLink className={secondeNav} to='html'>HTML</NavLink></li>
               <li><NavLink className={secondeNav} to='blender'>BLENDER</NavLink></li>
               <li><NavLink className={secondeNav} to='unity'>UNITY</NavLink></li>

           </ul>
           <Outlet />
        </div>
    )
}