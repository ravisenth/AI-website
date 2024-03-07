import "./Signup.css";

const Signup=()=>{

    return(
        <div>
            <div className="form_container">
                <div className="form_subcontainer1">
                    <h2>SIGNUP WITH US</h2>
                </div>
            <div className="form_subcontainer2">
                <form>
                    <table>
                        <tbody>
                        <tr><td><label>First Name</label></td><td><input type="text" placeholder="Enter Your First Name"/><br/></td></tr>
                        <tr><td><label>Last Name</label></td><td><input type="text" placeholder="Enter Your Last Name"/><br/></td></tr>
                        <tr><td><label>Email</label></td><td><input type="email" placeholder="Enter Your Email"/><br/></td></tr>
                        <tr><td><label>Mobile</label></td><td><input type="phone" placeholder="Enter Your Mobile"/><br/></td></tr>
                        <tr><td><label>Password</label></td><td><input type="password" placeholder="Enter Your Password"/><br/></td></tr>
                        </tbody>
                        <tfoot>
                        <tr><td colSpan={2}><div className="signup_button">
                        <button className="signup_buttons">Signup</button>
                     </div></td></tr>
                     </tfoot>
                    </table>                        
                </form>
            </div>
            
            </div>
        </div>
    )
}
export default Signup;