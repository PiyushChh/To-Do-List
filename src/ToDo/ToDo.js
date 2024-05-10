import { useState } from "react";
import Item from "../Item/Item";
export default function ToDo(){
    const [todos,setTodos]= useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);

    function handleClick(){
        setTodos([]);
    }

    return(
        <>
        <div>
        <h1>TO Do App</h1>
        {todos.map((item,index)=>(
            <Item key={index} itemName={item}/>
        ))}

        {todos.length>0 ? ( <button onClick={handleClick}>Empty</button>): "Nothing to do buddy. Sleep!"}
       
        </div>
        </>
    )
}