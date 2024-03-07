import "./Footer.css";

const Footer=()=>{

    return(
        <div>

            <div className="footer_container">
                <div className="footer1">
                    <h3 className="footer_heading">About</h3>
                    <ul>
                        <li>Our story</li>
                        <li>Awards</li>
                        <li>Our team</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="footer2">
                    <h3 className="footer_heading">Company</h3>
                    <ul>
                        <li>Our services</li>
                        <li>Clients</li>
                        <li>Contacts</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className="footer3">
                    <h3 className="footer_heading">Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Newsletter</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer4">
                    <h3 className="footer_heading">Subscribe</h3>
                    <input className="footer_subscribe" type="text" placeholder="enter email address"/>
                    <button className="subscribe_button">Subscribe</button>
                    <p>Get digital marketing updates in your  mailbox</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;