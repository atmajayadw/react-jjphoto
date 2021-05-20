import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import $ from 'jquery'

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

export default class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getData();

    }

    componentDidUpdate() {
        this.showModal();
    }

    getData = () => {

        const authResult = new URLSearchParams(window.location.search);
        const code = authResult.get('id');

        const URL = "http://localhost/jjphoto-rest-server/api/portfolio/";
        axios.get(URL, { params: { client_id: code } })
            .then(res => {
                const result = res.data;
                this.setState({ result: result.data, res: this.props.category });
                this.setLoaderOff();
            })
            .catch(error => {
                console.log(error);
            })
    }

    showModal = () => {
        const modal = document.getElementById("modal");
        const thumbs = document.querySelectorAll('.detail img');
        const modal_img = document.getElementById("modal-img");
        const closemodal = document.getElementById("close-modal");
        // const fixbar = document.querySelector('.navbar-full2');

        for (let i = 0; i < thumbs.length; i++) {
            thumbs[i].addEventListener('click', function () {
                document.body.style.overflow = "hidden";
                // fixbar.style.display = "none";
                modal.style.display = "block";
                modal_img.src = "http://localhost/jjphoto-rest-server/uploads/" + this.alt
                if ($('#modal-img').height() > 500) {
                    $('#modal-img').css({
                        'max-width': '400px'
                    });
                }
            });

            closemodal.onclick = function () {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                // fixbar.style.display = "block";
                modal.classList.remove('wow', 'animate__animated', 'animate__fadeIn');
            }
        }
    }

    setLoaderOff = () => {
        $('#detailLoader').css(
            "display", "none"
        );
        this.setState({
            loading: false
        })
    }

    render() {
        const { result } = this.state
        return (
            <>
                <div id="modal" className="modal">
                    <span id="close-modal">x</span>
                    <img className="modal-content" id="modal-img" alt="" />
                    <div id="modal-caption"></div>
                </div>

                <section id="detail">
                    <div className="container">
                        <Link rel="noopenner noreferrer"
                            to={{
                                pathname: "/portfolio",
                                search: "?category=" + this.props.category
                            }} className="back" >
                            <h5> {"< "}back to portfolio</h5>
                        </Link>
                        <div className="details">
                            {result.map((res, index) => (
                                <div className="detail" key={index}>
                                    <img src={"http://localhost/jjphoto-rest-server/uploads/" + res.photo} alt={res.photo} className="img-fluid" />
                                </div>
                            ))}
                        </div>

                        <div className="container detailLoader" id="detailLoader">
                            {this.state.loading ? <Loader /> : null}
                            <p><i>loading...</i></p>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
