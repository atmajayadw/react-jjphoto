import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { About_img } from '../assets/img/img.js'

export default class About extends Component {
    render() {
        return (
            <>
                <section id="about">
                    <div className="container">
                        <div className="row about">
                            <div className="col-md about-left">
                                <img src={About_img} className="img-fluid" alt="about"></img>
                            </div>
                            <div className="col-md about-right">
                                <h1>About Us</h1>
                                <p>JJ.Photo is a team of professional photographer owned by Atmajaya Dega. We offering service in Wedding, Pre-Wedding, Engagement, etc in Jabodetabek.</p>
                                <p>As a team of professional photographers, we are also committed to capture every meaningful moment expressed by our photography results. Believing that every picture tells a story, towards our creativity, team work, and sincerity on customers’ satisfaction, we treasure our relationship with the customers by giving everything we have.</p>
                                <p>In Depok where JJ.Photo established, we have witnessed that happiness on each photograph is boundless. It is keeping us encouraged that our job is to provide the best for our customers, wherever and whenever.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <hr />
                </div>
            </>
        )
    }
}
