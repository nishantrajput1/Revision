import React from "react";
class UserClass extends React.Component
{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default-location",
                avatar_url : "I am the dummy avatar"
            }
        }
        console.log("Child Constructor is Called");
        
         // best place to create state variables 
    }

    async componentDidMount(){
        console.log("Component mounted successfully");
        const data = await fetch("https://api.github.com/users/nishantrajput1");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    render(){
        const {name , bio,avatar_url} = this.state.userInfo
        console.log("Component is rendered")
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name : {name}</h2>
                <h3>bio : {bio}</h3>
                <h4>Contact : @nishantrajput1</h4>
            </div>
        )
    }
}
export default UserClass;

//  Constructor is called
//  Render (dummy)
//  <HTML Dummy>
//  Component Did Mount
//  < API Call >
//  < this.setState> state variable i update
// (It triggers the reconciliation process and the update cycle )
// --- Mounting cycle finished
// ------ Update cycle starst
//  ---- render(API Data)
// <HTML (new API data)>
// componentDidUpdate
// 
// 
// 
// 
// 
