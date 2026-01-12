import React from "react";
class UserClass extends React.Component
{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            count : 0,
            anothercount : 2,
        };
        console.log("Child Constructor is Called");
        
        // this.setState(n){
        //     count : n;
        // };
        // best place to create state variables 
    }
    componentDidMount(){
        console.log("Component mounted successfully");
        
    }
    // state variable tab initialize hota tha jab instance of Userclass 
    // banta tha 
    // old way of creating state
    render(){
        console.log("Render Function Called");
        
        const {name,location} = this.props;
        return (
            <div className="user-card">
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1,
                    })
                    }}>
                        +
                </button>
                <button onClick={()=>{this.setState({count : this.state.count-1})}}>-</button>
            
                <h1>Count : {this.state.count}</h1>
                <h2>Name : {this.props.name}</h2>
                <h3>Location : {this.props.location}</h3>
                <h4>Contact : @nishantrajput1</h4>
            </div>
        )
    }
}
export default UserClass;