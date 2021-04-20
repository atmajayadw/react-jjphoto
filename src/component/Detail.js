import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Slide2 } from '../assets/img/img.js'

export default class Detail extends Component {
    render() {
        return (
            <>
                <section id="detail">
                    <div className="container">
                        <h5> {'<'} Back to portfolio </h5>
                        <div className="details">
                            <div className="detail">
                                <img src={Slide2} alt="" className="img-fluid" />
                            </div>

                            <div className="detail">
                                <img src={Slide2} alt="" className="img-fluid" />
                            </div>

                            <div className="detail">
                                <img src={Slide2} alt="" className="img-fluid" />
                            </div>

                            <div className="detail">
                                <img src={Slide2} alt="" className="img-fluid" />
                            </div>
                        </div>


                    </div>
                </section>
            </>
        )
    }
}
