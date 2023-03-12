import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Message.css'

export default function Message(){

    const [formData,setFormData] = React.useState({
        name:"",
        gender:"",
        message:"",
    });

    function handleChange(event){
        const {name,value} = event.target;
        setFormData(preData => ({
            ...preData,
            [name]:value
        }))
    }

    function computedClassName({isActive}){
        return isActive ? "link-active" :  "link-normal"
   }


   function handleSubmit(event){
    event.preventDefault();
    alert("Successfully sumbit!");
    // setFormData(preData=>({
    //     name:"",
    //     gender:"",
    //     message:"",
    // }))
    event.target.reset();
   }

  
    return(
        <div className='whole message'>
             <ul className='nav nav_mess'>
               <li><NavLink className={computedClassName} to='/home' >Home</NavLink></li>
               <li><NavLink className={computedClassName} to='/portofolio' >Portofolio</NavLink></li>
               <li><NavLink className={computedClassName} to='/about' >About</NavLink></li>
               <li><NavLink className={computedClassName} to='/message' >Message</NavLink></li>
           </ul>


           <div className='message-box'>
           <div className='text_box'>
                <h1>Message Board</h1>
                <h3>Feel free to send me any messages or suggestions. Thank you!</h3>
                {/* emoji create by Unicode */}
                <h4 style={{position:'absolute',top:'118px',left:'75%',fontSize:'27px',display:"inline"}}>&#128522;</h4>
           </div>

           
               <form className = 'form-box' onSubmit={handleSubmit}>
               <legend>Name:</legend>
                    <input
                   type = "text"
                   placeholder="Please type your name"
                   className='form-input'
                   name='name'
                   onChange={handleChange}
                   value={formData.name}
                  />
                  <br />

                  <fieldset>
                      <legend>Gender:</legend>
                     <input
                        type="radio"
                        className='radio-input'
                        name='gender'
                        onChange={handleChange}
                        value={formData.gender === 'Female'}
                        id='Female'
                    />
                    <label htmlFor='Female' style={{fontSize:'22px'}}>Female</label>

                    <input 
                    type='radio'
                    className='radio-input'
                    name='gender'
                    onChange={handleChange}
                    value={formData.gender === 'Male'}
                    id='Male'
                    />
                    <label htmlFor='Male' style={{fontSize:'22px'}}>Male</label>
                   </fieldset>
                   <br />

                   
                   <legend>Message:</legend>
                    <textarea 
                   className='form-input'
                   name='message'
                   value={formData.message}
                   placeholder ='Comments'
                   onChange={handleChange}
                   rows = '5'
                   cols = '25'
                   />
                   <br />

                   <button className='form-btn'>Submit</button>
               </form>
           </div>
           

        </div>
    )
}