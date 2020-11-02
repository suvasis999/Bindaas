import React from 'react';

export default function About() {
    return (
        <div id="about" className="about-us pd-100 color1" data-scroll-index="0">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="about-bg">
                        <img src="assets/img/about-bg.jpg" alt="about-bg" />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-12">
                    <div className="about-content">
                        <h2>Testy food always can make your <br /> moment really happy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac augue ac massa sollicitudin auctor ac ac lacus. Donec id dolor vitae nibh finibus aliquet. Curabitur magna sapien, dapibus et consectetur quis, tempor nec sem. Curabitur interdum blandit urna, quis porta odio viverra a. Nulla tristique suscipit turpis, sed lacinia tortor.</p>
                    </div>
                    <img src="assets/img/signature.png" alt="" />
                    
                    <h4>Master Chef <span>Bekham food center, USA</span></h4>
                </div>
            </div>
        </div>
    </div>
    )
}
