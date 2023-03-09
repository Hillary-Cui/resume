import React from 'react'

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#c2d4f5" :"white"
        
    }
    return(
        <div className='dice_face' style={styles} onClick={props.holdDice}>
            <h2 className='dice_value'>{props.value}</h2>
        </div>
    )
}