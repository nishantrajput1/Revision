import { Link } from "react-router";
const Header = ()=>{
    // Search bar
    // About us
    // Logo
    return (
        <div className="Header">
           <div className="logo-container">
            <img className="logo" src="https://i.pinimg.com/originals/a8/c0/9a/a8c09ae229e8ce7fdbf815282e68c893.jpg" alt="Img" />
           </div>
           <div className="navbar">
            <ul className="nav-items">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">AboutUs</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
}
export default Header;