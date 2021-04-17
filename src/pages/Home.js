import React, { Component } from 'react'
import Navbar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron'
export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron />
            </>
        )
    }
}
