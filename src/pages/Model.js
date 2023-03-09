import React from 'react'
import {useNavigate} from 'react-router-dom'
// import ReactPlayer from 'react-player'
import '../css/Model.css'


export default function Model(){
  const navigate = useNavigate();
//     function computedClassName({isActive}){
//     return isActive ? "link-active" :  "link-normal"
// }
  function back(){
    navigate(-1);
  }

    return(
        <div className='model-whole'>
           {/* <ul className='nav'>
               <li><NavLink className={computedClassName} to='/home' >Home</NavLink></li>
               <li><NavLink className={computedClassName} to='/portofolio' >Portofolio</NavLink></li>
               <li><NavLink className={computedClassName} to='/about' >About</NavLink></li>
               <li><NavLink className={computedClassName} to='/message' >Message</NavLink></li>
           </ul> */}
           <img src= {require('../image/2.png')} />
          <button onClick={back} className='btn_styles'>Back</button>
          <h1 className='h1-styles'>3D modeling - The Forbidden City</h1>
          <h4 className='h4-styles'> 
               This is a video I made to show the Forbidden City in China. 
               I used <b>Blender</b> to create 3D models and animations of palaces and scenes.
               3D modeling I mainly built the Hall of Supreme Harmony of Forbidden City.
               Also I added the animation of the trees in different seasons. Spring is green trees, summer is the lanterns moving with the wind. 
               The autumn is the golden ginkgo trees and the winter is the snow scene. 
               There is also an animation of an unfolding scroll with Along the River During the Qingming Festival as a feature of Chinese culture.

               <br/> <br/>
               The idea for this video is that I want to make a website about virtual travel.
              Nowadays, there are many travel websites but they are just single country attractions, or pictures or videos showing country attractions. 
              The more advanced point is to use VR to see the pictures, but these applications need special hardware like a VR headset.
              So, first of all, in the website I will not only provide photos and videos of different countries' attractions, to increase user engagement.
              For some particularly famous attractions, such as the Forbidden City in China. I will add 3D views and animations so that users can experience a more realistic Forbidden City.
              This is better than seeing the Forbidden City in pictures through VR technology as users can continue to access the website on a regular computer or smartphone. 
              
               </h4>
          <video width="1500" height="700" className='video_styles' controls>
          <source src={require("../video/Building.mp4")} type="video/mp4" />
          </video>
          {/* <ReactPlayer 
          className='video_styles'
          url={require("../video/Building.mp4")}
          width="1500"
          height="700"
          controls={true}
          /> */}
      </div>
    )
}