import React from 'react'
import {useNavigate} from 'react-router-dom'
// npm install react-player
// import ReactPlayer from 'react-player'
import '../css/VR.css'



export default function VR(){
  const navigate = useNavigate();
//     function computedClassName({isActive}){
//     return isActive ? "link-active" :  "link-normal"
// }
  function back(){
    navigate(-1);
  }

  // const video_style = {
  //   position: "relative",
  //   top:"350px",

  // }

  React.useEffect(()=>{
    window.scrollTo(0,0);
  },[])

    return(
        <div className='model'>
           <img src= {require('../image/2.png')} alt='VR' />
          <button onClick={back} className='btn_styles'>Back</button>
          <h1 className='text1-styles'>Youth Justice center VR application</h1>
          <h4 className='text4-styles'> 
               This is a video I made to show the Youth Justice Centre Officer daily work processes. 
               I used <b>Unity</b> offers users with a real-time development platform, which includes 3D models, animations, and base API to operate interactions. 
               <br/> <br/>
               The Youth Justice NSW is an organization that helps and treats traumatized young people. 
               Due to privacy and security reasons, the working environment of the Youth Justice Centre cannot be revealed to the outside world. 
               Therefore, new employees without comprehensive training cannot treat these teenagers properly. The objective of our project is to simulate a day of the youth justice officer through a VR game. 
               By imitating real work processes, 
               employees will better understand their roles and get familiar with skills required for this job. 
               <br/> <br/>
               (This is a real game can play. The video is showing the player perspective)
               <br/><br/>
              if the video could not open, please click the link below. <br/><br/>
              <a
                href="https://youtu.be/SuD24xUSn7A"
                target='_blank'
                rel="noreferrer"
              >
                 https://youtu.be/SuD24xUSn7A
              </a>
               </h4>

          {/* <ReactPlayer 
          className='video_styles'
          style={video_style}
          // url={require('../video/CP17.mp4')}
          width="1200"
          height="50"
          controls={true}
          /> */}
      </div>
    )
}