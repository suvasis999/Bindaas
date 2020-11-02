import React from 'react';

export default function Header() {
    return (
        
        <div className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                  
                    <ul id="ourmenu">
                        <li><a href="#home" data-scroll-nav="7">Home</a></li>
                        <li><a href="#about" data-scroll-nav="0">About us</a></li>
                        <li><a href="#services" data-scroll-nav="1">services</a></li>
                        <li><a href="#menu" data-scroll-nav="2">menu</a></li>
                        <li className="logo"><a href="index-2.html"><img src="assets/img/Logo.png" /></a></li> 
                        <li><a href="#gallery" data-scroll-nav="3">gallery</a></li>
                        <li><a href="#team" data-scroll-nav="4">team</a></li>
                        <li><a href="#blog" data-scroll-nav="5">blog</a></li>
                        <li><a href="#contact" data-scroll-nav="6">contact</a></li>
                    </ul> 
                </div>
            </div>
        </div>
    </div> 
    )
}
