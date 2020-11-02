import React from 'react';

export default function Service() {
    return (
        <div id="services" className="our-services pd-100" data-scroll-index="1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                   
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <span className="section-separator"></span>
                    </div> 
                </div>
            </div>
            
            <div className="row text-center">
               
                <div className="col-lg-3 col-md-6">
                    <div className="singl-service">
                        <div className="service-icon">
                            <i className="fas fa-truck"></i>
                        </div>
                        <h4>Home Delivery</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac augue ac massa sollicitudin.</p>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                    <div className="singl-service">
                        <div className="service-icon">
                            <i className="fas fa-glass-cheers"></i>
                        </div>
                        <h4>Event Party</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac augue ac massa sollicitudin.</p>
                    </div>
                </div> 
                
                <div className="col-lg-3 col-md-6">
                    <div className="singl-service">
                        <div className="service-icon">
                            <i className="fas fa-birthday-cake"></i>
                        </div>
                        <h4>Birthday Party</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac augue ac massa sollicitudin.</p>
                    </div>
                </div> 
                
                <div className="col-lg-3 col-md-6">
                    <div className="singl-service">
                        <div className="service-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h4>Wedding Party</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac augue ac massa sollicitudin.</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    )
}
