import React from'react'
import { useState } from 'react'
import './Todo.css'
import ShowTodo from './Showtodo'


function Todo(){
    const [task,setTask]=useState('');
    const [data,setData]=useState([]);

    const onChangeHandeler=(e)=>{
        setTask(e.target.value)
    }
    const onSubmitHandeler=(e)=>{
         e.preventDefault();
         const newData=task;
         setData([...data,newData]);
         setTask('');
    }
    const deleteItem=(a)=>{
        const finalData=data.filter((curr,index)=>{
            return index!=a;
        })
        setData(finalData)
    }

    return(
         <div className='container'>
            <div className='row justify-content-center align-item-center main-row'>
                <div className='col shadow main-col bg-white'>
                    <div className='row bg-primary text-white'>
                        <div className='col p-2'>
                            <h4 className='text-center'>Todo App</h4>
                        </div>
                    </div>
                    <form onSubmit={onSubmitHandeler}>
                        <div className='row justify-content-between text-while p-2'>
                            <div className='form-group flex-fil mb-2 col-9'>
                                <input id='todo-input' type='text' className="form-control" value={task} onChange={onChangeHandeler}></input>
                            </div>
                            <button type='submit' className='btn btn-primary mb-2 ml-2 col-3'>Add todo</button>
                        </div>
                    </form>
                        {data.map((value,index)=>{
                             return <ShowTodo
                              key={index}
                              id={index}
                              task={value}
                              onSelect={deleteItem} />
                        
                        })}
                </div>
            </div>
         </div>
    )
}

export default Todo