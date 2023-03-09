import React from 'react'

export default function Footer(props){
    const {todo,clearAll,checkAll} = props;
    
    const handleCheckAll = (event) =>{
        checkAll(event.target.checked);
    }

    const handleClearAll = () =>{
        clearAll();
    }

    const doneCount = todo.reduce((pre,todo) => {return pre + (todo.done ? 1:0)},0)
    const total = todo.length;
    return(
        <div className='footer-box'>
            <label>
                <input type="checkbox" onChange={handleCheckAll} checked={doneCount === total && total !== 0 ? true:false} />
            </label>
            <span>
                <span>Done {doneCount}</span> / All {total}
            </span>
            <button onClick={handleClearAll} className='btn btn-danger' >Delete Completed Tasks</button>
        </div>
    )
}