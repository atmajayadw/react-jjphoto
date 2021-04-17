import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Logo } from '../assets/icon/icons.js'

export default class Navbar extends Component {
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
