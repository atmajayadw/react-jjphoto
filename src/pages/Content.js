import React, { Component } from 'react'
import Navbar from '../component/Navbar.js'
import Detail from '../component/Detail.js'

export default class Content extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Detail />
            </>
        )
    }
}
