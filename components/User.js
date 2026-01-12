import { useState } from "react";
const User = (props)=>{
    const [count,setcount] = useState(0);
    const [anothercount,setanothercount] = useState(2);
    const {name} = props;
    
    return (
        <div className="user-card"> 
            <h1>Hello i am the new way </h1> 
        </div>
    )
}
export default User;