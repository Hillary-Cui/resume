import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/List.css'
import Header from '../components/Todo/Header'
import Wlist from '../components/Todo/Wlist'
import Footer from '../components/Todo/Footer'

export default function List(){

    const navigate = useNavigate();
    function back(){
        navigate(-1);
      }


const [todos,setTodo] = React.useState([
    {id:'001',name:'Practice Code', done:false},
    {id:'002',name:'Sleeping', done:false},
    {id:'003',name:'Eating', done:false},
])
   
const addTodo = (newTodo) => {
    const newTodos = [newTodo,...todos]
        setTodo(newTodos);
   }

const updateTodo = (id,done) => {

    const newTodos = todos.map((todoObj) =>{
        if(todoObj.id === id) return {...todoObj,done:done}
        else return todoObj
    })
    setTodo(newTodos);
}

const deleteTodo = (id) =>{
    const newTodos = todos.filter((todoObj)=>{
        // 如果符合（不等于）的条件就create a array返回去，否则就过滤掉filter （过滤掉 todoObj.id == id的条件）
        return todoObj.id !== id
    })
    setTodo(newTodos);
}
const checkAll = (done)=>{
    const newTodos = todos.map((todoObj)=>{
        return {...todoObj,done:done}
    })
    setTodo(newTodos);
}

const clearAll = () =>{
    const newTodos = todos.filter((todoObj)=>{
        return todoObj.done === false;
    })
    setTodo(newTodos);
}

React.useEffect(()=>{
    window.scrollTo(0,0);
  },[])


    return(
        <div className='list-box'>
            <img src= {require('../image/2.png')} className='.pro-img' alt='list'/>
            <button onClick={back} className='btn_styles'>Back</button>
            <h1 className='list-text'>To-do List</h1>
            {/* header */}
            <Header addTodo={addTodo} />
            <div className='wrap'>
                <Wlist todo={todos} updateTodo ={updateTodo} deleteTodo ={deleteTodo}/>
                <Footer todo={todos} checkAll={checkAll} clearAll={clearAll}/>
            </div>
          
        </div>
    )
}