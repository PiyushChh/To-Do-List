import { useState } from "react";
import Item from "../Item/Item";
import { todolist } from "../data/todos";
import Header from "../Header/Header";

export default function ToDo(){
    const [todos,setTodos]= useState(todolist);
    
    function handleClickRemoveButton(){
        const newTodos=todos.filter(item=> !item.checked)
        setTodos(newTodos);
    }
    function handleCheckBoxClick(id){
        const newToDos=todos.map(item=>
            item.id===id?{...item,checked:!item.checked}:item
        );
        setTodos(newToDos)
    }
    
    return(
        <>
        <div id="todo-container">
        <Header />
        {todos.map((item,index)=>(
            <Item key={index} item={item} handleCheckBoxClick={handleCheckBoxClick}/>
        ))}

        {todos.length>0 ? ( <button id="removebtn" onClick={handleClickRemoveButton}>Remove Completed</button>): "Nothing to do buddy. Sleep!"}
       
        </div>
        </>
    )
}