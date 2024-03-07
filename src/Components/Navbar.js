import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

const Navbar=()=>{

    return(
        <div>
            <div className="navbar_container">
                <div className="navbar_logo"><img src="https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png" className="img"/></div>
                <div className="navbar_menu">
                    <a href="#"><h3 className="navbar_menus">Home</h3></a>
                </div>
                <div className="navbar_menu">
                    <a href="#"><h3 className="navbar_menus">About Us</h3></a>
                </div>
                <div className="navbar_menu">
                   <a href="#"> <h3 className="navbar_menus">Services</h3></a>
                </div>
                <div className="navbar_menu">
                <a href="#"><h3 className="navbar_menus">Contact Us</h3></a>
                </div>
                <div className="signup">
                    <a href="#"><h3 className="signup_menu">SIGN UP</h3></a>
                </div>
                <a className="hamburger" href="#"><FaBars/></a>
            </div>
        </div>
    )
}
export default Navbar;