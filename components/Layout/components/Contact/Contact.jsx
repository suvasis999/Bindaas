import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact-area pd-100 color1" data-scroll-index="6">
        <div className="container">
         
           <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <span className="section-separator"></span>
                    </div>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-6">
                  
                    <div className="contact-form">
                        <form action="https://formspree.io/smartitbd17@gmail.com" method="POST">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="tel" placeholder="Phone" />
                                </div>
                            </div>
                            <textarea placeholder="Message"></textarea>
                            
                            <a href="#" className="box-btn">Send Message</a>
                        </form>
                    </div> 
                </div>
                <div className="col-lg-6">
                  
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4021561829286!2d90.38249531462414!3d23.733034395357205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57dd8b19%3A0xd66f294182e721e8!2sDhaka+New+Market!5e0!3m2!1sen!2sbd!4v1547549818455" width="600" height="450" frameBorder="0" className={{border:"0"}} allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
    )
}
