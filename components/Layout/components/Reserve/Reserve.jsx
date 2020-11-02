import React from 'react'

export default function Reserve() {
    return (
        <div className="reservation-area pd-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                   
                    <div className="section-title">
                        <h2>Make A Reservation</h2>
                        <span className="section-separator"></span>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                   
                    <div className="reservation-form">
                        <form action="https://formspree.io/smartitbd17@gmail.com" method="POST">
                           <div className="row">
                               <div className="col-lg-6">
                                   <input type="text" name="name" id="name" placeholder="Name"/>
                                   <span><i className="fas fa-user-tie"></i></span>
                               </div>
                               <div className="col-lg-6">
                                   <input type="tel" name="phone" id="phone" placeholder="Phone"/>
                                   <span><i className="fas fa-phone-volume"></i></span>
                               </div>
                               <div className="col-lg-6">
                                   <input type="text" id="datepicker" placeholder="Date"/>
                                   <span><i className="far fa-calendar-alt"></i></span>
                               </div>
                               <div className="col-lg-6">
                                   <input type="text" className="timepicker" placeholder="Time"/>
                                   <span><i className="far fa-clock"></i></span>
                               </div>
                           </div>
                           <a href="#" className="book-btn">book my table</a>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    )
}
