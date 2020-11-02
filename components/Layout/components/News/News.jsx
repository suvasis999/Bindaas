import React from 'react'

export default function News() {
    return (
        <div id="blog" className="latest-news-area pd-100" data-scroll-index="5">
        <div className="container">
           
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <div className="section-title">
                        <h2>Latest News</h2>
                        <span className="section-separator"></span>
                    </div>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-news-item">
                        <div className="news-bg news-bg-1">
                            <span className="date">25 June</span>
                        </div>
                        <div className="news-content">
                            <h3>Our World Wide Restua 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lorem dapibus, lacinia ipsum consequat, porttitor lectus.</p>
                            
                            <a href="#" className="inline-btn">Read More <i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-news-item">
                        <div className="news-bg news-bg-2">
                            <span className="date">24 June</span>
                        </div>
                        <div className="news-content">
                            <h3>Our World Wide Restua 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lorem dapibus, lacinia ipsum consequat, porttitor lectus.</p>
                            
                            <a href="#" className="inline-btn">Read More <i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-news-item">
                        <div className="news-bg news-bg-3">
                            <span className="date">23 June</span>
                        </div>
                        <div className="news-content">
                            <h3>Our World Wide Restua 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lorem dapibus, lacinia ipsum consequat, porttitor lectus.</p>
                            
                            <a href="#" className="inline-btn">Read More <i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
