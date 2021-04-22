import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Wedding, PreWedding, Engagement } from '../assets/img/img.js'
import { Link } from "react-router-dom";

export default class Portfolio extends Component {
    render() {
        return (
            <>
                <section id="portfolio">
                    <div className="container">
                        <h1>Portfolio</h1>
                        <div className="thumbnails">
                            <div className="thumbnail">
                                <img src={Engagement} className="img-fluid" alt="" />
                                <Link to={{
                                    pathname: "/portfolio/",
                                    search: "?category=engagement",
                                    state: "engagement"
                                }} rel="noopenner noreferrer" className="btn-porto">
                                    <h3>Engagement</h3>
                                </Link>
                            </div>
                            <div className="thumbnail">
                                <img src={PreWedding} className="img-fluid" alt="" />
                                <Link to={{
                                    pathname: "/portfolio/",
                                    search: "?category=pre-wedding",
                                    state: "pre-wedding"
                                }} rel="noopenner noreferrer" className="btn-porto">
                                    <h3>Pre-Wedding</h3>
                                </Link>
                            </div>
                            <div className="thumbnail">
                                <img src={Wedding} className="img-fluid" alt="" />
                                <Link to={{
                                    pathname: "/portfolio/",
                                    search: "?category=wedding",
                                    state: "wedding"
                                }} rel="noopenner noreferrer" className="btn-porto">
                                    <h3>Wedding</h3>
                                </Link>
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
