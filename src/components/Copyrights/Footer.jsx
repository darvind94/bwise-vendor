import React from 'react';
import './main.css';
// import './images';

const Footer = () => {
    return (
        // <footer style={{padding : 0, margin : 0}}>
        //   <div className='row'>
        //
        //     <footer id='sticky-footer' className='py-3 bg-dark col-md-12 p-0'>
        //
        //       <br/>
        //       <div className='container text-center'>
        //         <span className='text-white footer-sticky-text'>
        //           &copy;Copyright 2020 DWise. All Rights Reserved.
        //         </span>
        //       </div>
        //     </footer>
        //   </div>
        // </footer>
        <div>
            <div className="flex-container footer-color">
                <div className="flex-item">
                    <div className="company-header">
                        B'Wise
                    </div>
                    <div className="company-subhead">General Queries</div>
                    <div>enquiry@wisdom.com</div>
                </div>
                <div className="flex-item">
                    <div className="company-subhead">
                        Vendor Queries
                    </div>
                    <div>vendor queries@widom.com</div>
                    <div>Become a Vendor</div>
                    <div>Vendor Login</div>
                </div>

                <div className="flex-item">
                    <div>
                        <div className="company-subhead">About Us</div>
                    </div>
                    <div>About Wisdom</div>
                    <div className="company-subhead">Newsletter</div>
                    <div className="company-subhead">FAQ</div>
                    <div className="company-subhead">Locations</div>
                </div>
                <div className="flex-item">
                    <div>
                        <div className="company-subhead">Help</div>
                    </div>
                    <div>Account</div>
                    <div className="company-subhead">Feedback</div>
                    <div className="company-subhead">Privacy Policy</div>
                    <div className="company-subhead">Terms & Conditions</div>
                </div>
                <div className="flex-item">
                                        <a href="#"><img src='../assets/twitter.png' width="20" height="20"/></a>
                    <a href="#"><img src='../assets/facebook.png' width="20" height="20"/></a>
                    <a href="#"><img src='../assets/linkedin.png' width="25" height="20"/></a>

                    <a href="#"><img src='../assets/instagram.png' width="20" height="20"/></a>

                </div>

            </div>

            <div className="copyright" style={{backgroundColor: "black", color: "white"}}>
            <p>&copy; Copyright 2020 <strong>Be'Wise</strong>. All Rights Reserved</p>

          </div>
        </div>
    );
};

export default Footer;


