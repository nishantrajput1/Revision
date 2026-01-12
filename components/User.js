import { useState } from "react";
const User = (props)=>{
    const [count,setcount] = useState(0);
    const [anothercount,setanothercount] = useState(2);
    const {name} = props;
    return (
        <div className="user-card"> 
            <button onClick={()=>{setcount(count+1)}}>+</button>
            <button onClick={()=>{setcount(count-1)}}>-</button>
            <h1>{`Count : ${count}`}</h1>
            <h1>{`Another Count : ${anothercount}`}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @nishantrajput1</h4>
        </div>
    )
}
export default User;