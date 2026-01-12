import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <div>
            <h1>
                I am the About us page
            </h1>
            <User name={"Nishant from the functional user"}/>
            <UserClass name = {"Nishant from the Class user"} location= {"Dehradun from the class"}/>
        </div>
    )
};
export default About;