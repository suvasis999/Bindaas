import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
       
        <Carousel showThumbs={false}>
        <div>
            <img src="assets/img/slide-bg.jpg" />
            
        </div>
        
        <div>
            <img src="assets/img/reservation-bg.jpg" />
            
        </div>
    </Carousel>

    )
}
