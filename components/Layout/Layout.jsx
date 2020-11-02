import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Service from './components/Service/Service';

import Food from './components/Food/Food';
import Video from './components/Video/Video';
import Menu from './components/Menu/Menu';
import Team from './components/Team/Team';
import Reserve from './components/Reserve/Reserve';
import News from './components/News/News';
import Contact from './components/Contact/Contact';

export default function Layout({children}) {
    return (
        <>
        <div id="preloader">
        <div id="status"></div>
        </div>
        <Header/>
        <Slider/>
        <About/>
        <Service/>
        <Menu/>
        <Food/>
        <Video/>
        <Team/>
        <Reserve/>
        <News/>
        <Contact/>
        
        {children}
        <div id="stop" className="scrollTop">
        <span><a href="#"><i className="fas fa-space-shuttle"></i></a></span>
        </div>
        <Footer />
        </>
    )
} 
