import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-masonry';
import Carousel, { Modal, ModalGateway } from "react-images";
import { foodphoto } from "./foodphoto";

export default function Food() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div id="gallery" className="food-gallery-area pd-100" data-scroll-index="3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                   
                    <div className="section-title">
                        <h2>Food Gallery</h2>
                        <span className="section-separator"></span>
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <Gallery photos={foodphoto} onClick={openLightbox}/>
                <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={foodphoto.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
                </ModalGateway>
                </div>
            </div>
        </div>
        </div> 
    )
}
