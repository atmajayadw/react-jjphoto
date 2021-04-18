import React, { Component } from 'react'
import Navbar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron.js'
import About from '../component/About.js'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron />
                <About />
            </>
        )
    }
}
