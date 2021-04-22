import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const authResult = new URLSearchParams(window.location.search);
        const code = authResult.get('category');

        const URL = "http://localhost/jjphoto-rest-server/api/client/";
        axios.get(URL, { params: { category: code } })
            .then(res => {
                const categories = res.data;
                this.setState({ categories: categories.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { categories } = this.state
        return (
            <>
                <section id="content">
                    <div className="container">
                        <Link rel="noopenner noreferrer"
                            to={{
                                pathname: "/"
                            }} className="back" >
                            <h5> {"< "}back to home</h5>
                        </Link>
                        <div className="contents">
                            {categories.map((category, index) => (
                                <div className="content" key={index}>
                                    <img src={"http://localhost/jjphoto-rest-server/uploads/thumbnail/" + category.thumbnail} alt={category.thumbnail} className="img-fluid" />
                                    <Link to={{
                                        pathname: "/portfolio/content/",
                                        search: "?id=" + category.client_id,
                                        state: category.category
                                    }} rel="noopenner noreferrer" className="btn-detail">
                                        <h3>{category.client}</h3>
                                    </Link>
                                </div>
                            ))}

                        </div>


                    </div>
                </section>
            </>
        )
    }
}
