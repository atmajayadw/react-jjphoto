import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Logo } from '../assets/icon/icons.js'
import $ from 'jquery';

export default class Navbar extends Component {

    componentDidMount() {
        window.addEventListener("scroll", this.stickyNavbar);
    }

    stickyNavbar = () => {
        const fixbar = $('.navbar');

        if (fixbar.length) {
            if ($(document).scrollTop() > 135) {
                fixbar.addClass("fixed");
            } else {
                fixbar.removeClass("fixed");
            }
        }
    }


    render() {
        return (
            <>
                <section id="navbar">
                    <div className="container">
                        <div className="row navbar">
                            <div className="logo">
                                <img src={Logo} alt=""></img>
                            </div>

                            <div className="links">
                                <ul>
                                    <li><a className="link" href="#Home">Home</a></li>
                                    <li><a className="link" href="#about">About</a></li>
                                    <li>
                                        <img id="logo" src={Logo} alt=""></img>
                                    </li>
                                    <li><a className="link" href="#portfolio">Portfolio</a></li>
                                    <li><a className="link" href="#contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className="container sidebar">
                                <div className="hamburger">
                                    <span className="line1"></span>
                                    <span className="line2"></span>
                                    <span className="line3"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}