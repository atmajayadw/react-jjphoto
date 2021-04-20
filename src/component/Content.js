import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Slide1 } from '../assets/img/img.js'

export default class Content extends Component {
    render() {
        return (
            <>
                <section id="content">
                    <div className="container">
                        <h5> {'<'} Back to home </h5>
                        <div className="contents">
                            <div className="content">
                                <img src={Slide1} alt="" className="img-fluid" />
                                <h3>Caption</h3>
                            </div>

                            <div className="content">
                                <img src={Slide1} alt="" className="img-fluid" />
                                <h3>Caption</h3>
                            </div>

                            <div className="content">
                                <img src={Slide1} alt="" className="img-fluid" />
                                <h3>Caption</h3>
                            </div>

                            <div className="content">
                                <img src={Slide1} alt="" className="img-fluid" />
                                <h3>Caption</h3>
                            </div>
                        </div>


                    </div>
                </section>
            </>
        )
    }
}
