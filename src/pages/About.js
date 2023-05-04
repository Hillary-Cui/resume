import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/About.css'
import '../css/Nav.css'

export default function About(){

    function computedClassName({isActive}){
        return isActive ? "link-active" :  "link-normal"
   }
   
    return(
        <div className='whole about'>
               {/* <img src= {require('../image/2.png')} className='pro-img'/> */}
             <ul className='nav nav_mess'>
               <li><NavLink className={computedClassName} to='/home' >Home</NavLink></li>
               <li><NavLink className={computedClassName} to='/portofolio' >Portofolio</NavLink></li>
               <li><NavLink className={computedClassName} to='/about' >About</NavLink></li>
               <li><NavLink className={computedClassName} to='/message' >Message</NavLink></li>
           </ul>
           <div className='left-bar'>
             <img src={require('../image/my.jpg')} alt='profile'/>
             <h2>Genernal Information</h2>
             <h3>Address: Sydney, NSW, 2000 <br/>
             Phone: 403 880 863 <br/>
             Email: xhinhinx@gmail.com </h3>
           </div>

           <div className='name-bar'>
           <h1>Yaxuan Cui</h1>
           <h2>Description</h2>
           <p>-Familiar with using HTML, CSS, Javascript and React Framework to build webiste.<br/>
           -Familiar with different UI design software.<br/>
           -Responsible, diligent and detail-oriented. <br/>
           -Knowledge of data analysis and data visualisation with different programming skills or software. <br/>
           -Good communication skills. Ability to understand customer requirements and translate into actionable project plans.</p>
           </div>
           
           <div className='skill'>
                <h2>Skills</h2>
                <div className='skill-circle' >
                    <h1 style={{top:'35%',left:'15%',fontSize:'25px'}}>Programming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills</h1>
                </div>
                
                <div className='skill-circle'>
                    <h1>Software </h1>
                </div>
                <div className='skill-circle' >
                    <h3>Javascript</h3>
                </div>
                <div className='skill-circle' >
                    <h3>C, Python</h3>
                </div>
                <div className='skill-circle' >
                    <h3 style={{top:'40%',left:'30%'}}> SQL, R</h3>
                </div>
                <div className='skill-circle' >
                    <h3>Blender</h3>
                </div>
                <div className='skill-circle' >
                    <h3>Unity</h3>
                </div>
                <div className='skill-circle' >
                    <h3>Tableau</h3>
                </div>
                <div className='skill-circle' >
                    <h3>Figma</h3>
                </div>
                <div className='skill-circle'>
                    <h1>Language </h1>
                </div>
                <div className='skill-circle' >
                    <h3>English</h3>
                </div>
                <div className='skill-circle' >
                    <h3>Cantonese</h3>
                </div>
                <div className='skill-circle' >
                    <h3>Mandarin</h3>
                </div>
                
           </div>
            
            <div className='experiences'>
                <h2>Experiences</h2>
                <h3>
                    Full Stack Engineer Internship - GroupTag,Melbourne
                    <h4>Using flutter to build the cross-platform mobile application. <b/>
                        Modifying the existing page by flutter to improve the app design.</h4>
                </h3>
                <h3 style={{top:"200px"}}>
                    Project: To-do List
                    <h4>Using HTML, CSS, Javascript and React Framework to build a to-do list. </h4>
                </h3>
                <h3 style={{top:"300px"}}>
                    Project: Child game
                    <h4>Using HTML, CSS, Javascript and React Framework to build the small child game. <br/>
                    This game is suitable for early childhood. They can use the game to identify numbers.  </h4>
                </h3>
                <h3 style={{top:"430px"}}>
                    Project: Image search and production
                    <h4>Using HTML, CSS, Javascript and React Framework to build tge Image search and production.<br/>
                    The users can search for images by typing in text. In addition, they can create a new image with the text they want </h4>
                </h3>
                <h3 style={{top:"540px"}}>
                    Project: Small calculator 
                    <h4>Using HTML, CSS, Javascript React Framework with redux to build a small calculator. The calculator can....</h4>
                </h3>
                <h3 style={{top:"630px"}}>
                    Project:  3D modelling and animation
                    <h4> Builiding 3D modelling and animation by Blender.
                    In this project, I created some of palaces of the Forbidden City by Blender. And also created an animation to show the four seasons of the Forbidden City. </h4>
                </h3>
                <h3 style={{top:"750px"}}>
                    Project:  Youth Justice center VR application -- Youth Justice NSW, Uni Sydney Tech Lab, Sydney
                    <h4>
                        • The project is to build a VR application through Unity and Blender to show people who want to apply for a job as a youth justice officer a full day's work process to consider whether the job is right for them.
                        <br />• In this project, I build parts of the scene and characters in the game using Unity, Blender and photoshop according to client requirements.
                        <br />• This product is for the job applicants to know about the Youth Justice center, so I inquired a lot of information and constantly modified the design according to the requirements of clients, and trying to design according to the actual scene. A simple and immersive design showcases a day's work for a Youth Justice officer. </h4>
                </h3>
                <h3 style={{top:"1010px"}}>
                    Intern: The People's Bank Of China, Guangzhou, China
                    <h4>• The people's bank of China is a central bank of China. 
                        <br />• For 2-month internship, major responsibility was doing analysis and creating work electronic information preparation and input based on the requirement ofthe director.
                        <br />• Conducted research on customer credit investigation by compiling data, making Excel spreadsheet, data visualization and generating reports.
                        <br />• Improve Microsoft office skill and data analysis capability. </h4>
                </h3>
                <h3 style={{top:"1230px"}}>
                    Intern: ACIC, Sydney, NSW
                    <h4>• ACIC is Australian college information center. It is world-class education consulting firm. For 1 month internship, plan an activity as a group.
                        <br/>•  The group through analysis the company background, doing marketing research, define goals of the activity, planning, testing and so on to presented to managers how to make the activity better and finally develop a good project plan.
                        <br/>• Enhanced teamwork ability and communication skills by preparing meeting materials and taking clear notes.
                        <br/>• Winning ACIC the Most Inspirational Team for 2017 ACIC Intern Training </h4>
                </h3>
            </div>
            
            <div className='education'>
                <h2>Education</h2>
                    <ul>
                        <li style={{width:'350px',float:'left',paddingTop:"0px"}}>08/2020 —— 03/2022</li>
                        <li style={{marginLeft:"400px"}}>Master of Information Technology: Information Technology (Data Management And Analytics)</li>
                        <li style={{marginLeft:"400px"}}>University Of Sydney - Sydney</li>
                    </ul>
                    
                    <ul>
                        <li style={{width:'350px',float:'left',paddingTop:"5px"}}>03/2017 —— 06/2020 </li>
                        <li style={{marginLeft:"400px"}}>Bachelor of Computer Science: Information System</li>
                        <li style={{marginLeft:"400px"}}>University Of Sydney - Sydney</li>
                    </ul>
            </div>
            
        </div>
    )
}