import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Wedding, PreWedding, Engagement } from '../assets/img/img.js'

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
                                <h3>Engagement</h3>
                            </div>
                            <div className="thumbnail">
                                <img src={PreWedding} className="img-fluid" alt="" />
                                <h3>Pre-Wedding</h3>
                            </div>
                            <div className="thumbnail">
                                <img src={Wedding} className="img-fluid" alt="" />
                                <h3>Wedding</h3>
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
