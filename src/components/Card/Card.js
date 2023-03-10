import React from 'react'
import './Card.css'


export default function Card(props){

    return(
        <div className='box'>
            <div className='img-box'>
                <img src={require(`./${props.converImg}`)} alt='card' />
            </div>
            <div className='text-box'>
                <h2>{props.name}</h2>
                <h4>{props.describe}</h4>
            </div>
        </div>
    )
}
