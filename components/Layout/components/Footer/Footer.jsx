import React from 'react';

export default function Footer() {
    return (
        <div className="footer-area pd-100 overlay">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="footer-content">
                        <h2><img src="assets/img/Logo.png" /></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus commodo enim pulvinar venenatis. Proin euismod nunc quis rhoncus mattis.</p>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-6"> 
                   <div className="copyright">
                        &amp; 2018 Copyright by <a href="index.html">BINDAAS</a>. All rights reserved by us
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#">Helpline</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
    
    
    )
}
