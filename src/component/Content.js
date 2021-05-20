import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';

const Loader = () => (
    <div className="divLoader">
        <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
            <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#7E8075" transform="rotate(179.719 50 51)">
                <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
                </animateTransform>
            </path>
        </svg>
    </div>
);

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            loading: true
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
                this.setLoaderOff();
            })
            .catch(error => {
                console.log(error);
                this.setLoaderOff();
                alert('Data Not Found!')
            })
    }

    setLoaderOff = () => {
        $('#contentLoader').css(
            "display", "none"
        );
        this.setState({
            loading: false
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
                        <div className="container contentLoader" id="contentLoader">
                            {this.state.loading ? <Loader /> : null}
                            <p><i>loading...</i></p>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
