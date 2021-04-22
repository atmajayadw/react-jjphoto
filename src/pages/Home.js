import React, { Component } from 'react'
import Navbar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron.js'
import About from '../component/About.js'
import Portfolio from '../component/Portfolio.js'
import Slideshow from '../component/Slideshow.js'
import Contact from '../component/Contact'
import $ from 'jquery'
export default class Home extends Component {
    componentDidMount() {
        this.getParams();
    }

    getParams = () => {
        const params = this.props.location.params
        if (params === "") {
            window.scrollTo(0, 0);
        } else if (params) {
            const split = params.split('#')[1];
            const targetDiv = $('#' + split);
            if (targetDiv.length) {
                $("html, body").animate({
                    scrollTop: targetDiv.offset().top - 40
                }, 1000, 'easeInOutExpo');
            }
        }
    }

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
