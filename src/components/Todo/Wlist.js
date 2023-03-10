import React from 'react'
import '../../css/List.css'

export default function Wlist(props){

    const{todo,updateTodo,deleteTodo} = props

    // const[mouse,setMouse] = React.useState(false);

    // const handleMouseOver = ()=>setMouse(true);
    // const handleMouseLeave = () =>setMouse(false);

    const handleDelete = (id) =>{
            if(!window.confirm('Are you sure to delete')) return 
                deleteTodo(id);
    }

    const handleCheck = (id)=>{
        return (event)=>{
            const done = event.target.checked
            updateTodo(id,done);
        }
    }

    return(
        <ul className='todo-main'>
            {
                todo.map((todoObj)=>{
                    return(
                        <li key={todoObj.id} className='item-li'>
                        <label className='item-label'>
                            <input type="checkbox" value={todoObj.name} checked={todoObj.done} onChange={handleCheck(todoObj.id)}/>
                            <span className='item-span'>{todoObj.name}</span>
                        </label>
                        <button onClick={()=>handleDelete(todoObj.id)} className='item-btn btn-danger'>Delete</button>
                    </li>
                    )
                })
            }
        </ul>
    )

}