import React, { Component } from 'react'
import Navbar from '../component/Navbar.js'
import Detail from '../component/Detail.js'

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: ''
        }
    }

    componentDidMount() {
        const cat = this.props.location.state;
        this.setState({
            category: cat
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <Detail {...this.state} />
            </>
        )
    }
}
