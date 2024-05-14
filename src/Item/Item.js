export default function Item({item,handleCheckBoxClick}){
    return(
        <div id="item-container">
                
                <li 
                className="item"
                style={{ textDecoration: item.checked? 'line-through': 'none',
                backgroundColor: item.checked? 'lightgray':'white'
                }} 
                onClick={()=>handleCheckBoxClick(item.id)}
                >
                {item.name}
                </li>
         
            
        </div>
    )
}