import React, { Component } from 'react'
import Navbar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron.js'
import About from '../component/About.js'
import Portfolio from '../component/Portfolio.js'
import Slideshow from '../component/Slideshow.js'
import Contact from '../component/Contact'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron />
                <About />
                <Portfolio />
                <Slideshow />
                <Contact />
            </>
        )
    }
}
