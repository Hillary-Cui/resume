import React from 'react'
// npm i uuid/nanoid
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

export default function Header(props){

Header.propTypes = {
        addTodo: PropTypes.func.isRequired
      }

const handleKeyUp = (event) => {
    // 如果不是回车 return
    if(event.keyCode !== 13) return
    // todo name不能为空，trim（）去除空格
    if(event.target.value.trim() === ''){
        alert("Must write something");
        return;
    }
    const newTodo = {
        id:nanoid(),
        name:event.target.value,
        done:false
    }
    props.addTodo(newTodo);
    event.target.value = '';
}
    return(
        <div className='todo-header'>
            <input onKeyUp={handleKeyUp} type="text" placeholder='Please type your task here, then Press Enter to save' />

        </div>
    )
}