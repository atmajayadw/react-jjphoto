import React, { Component } from 'react'
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/main.css'
import { Call, Mail, Location, Instagram } from '../assets/icon/icons.js'

export default class Contact extends Component {
    render() {
        return (
            <>
                <section id="contact">
                    <div className="container">
                        <div className="contact">
                            <img src={Call} alt="" />
                            <h4>+628561669961</h4>
                        </div>
                        <div className="contact">
                            <img src={Mail} alt="" />
                            <h4>jj.photo1920@gmail.com</h4>
                        </div>
                        <div className="contact">
                            <img src={Location} alt="" />
                            <h4>Depok, Jawa Barat</h4>
                        </div>
                        <div className="contact">
                            <img src={Instagram} alt="" />
                            <h4>@jj.photo1920</h4>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
