import React from 'react'
import {useNavigate} from 'react-router-dom'
import Pic from '../image/data_u'
import '../css/All.css'

export default function Unity(){
    const [message] = React.useState(Pic);
    const navigate = useNavigate();

    return(
        <div className='whole-box'>
                        {
                            message.map((m) => {
                                return(
                                    <div key={m.id} className='small-box'>
                                               <div className='img-small-box'>
                                                    <img src={m.converImg} alt='unity'/>
                                               </div>
                                                <div className='text-small-box'>
                                                    <h2>{m.title}</h2>
                                                    <button className="all-btn" onClick={()=>navigate(m.url)}>More</button>
                                                </div>
                                    </div>
                                )
                            
                            })
                        }
          
      </div>
    )
}