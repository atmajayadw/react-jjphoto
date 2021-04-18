import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'

export default class Jumbotron extends Component {
    render() {
        return (
            <>
                <section id="jumbotron">
                    <div className="container">
                        <span className="caption">
                            <h3>Because Words Are Not Enough.</h3>
                        </span>
                    </div>
                </section>
            </>
        )
    }
}
