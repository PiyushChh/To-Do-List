import Item from "../Item/Item";
export default function ToDo(){
    const todos= ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
    return(
        <>
        <div>
        <h1>TO Do App</h1>
        {todos.map((item,index)=>(
            <Item key={index} itemName={item}/>
        ))}
        </div>
        </>
    )
}