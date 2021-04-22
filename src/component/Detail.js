import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import $ from 'jquery'

export default class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
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
                this.setState({ result: result.data, res: this.props.category },
                );
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
                                search: "?category=" + this.props.category,
                                state: "wedding"
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
                    </div>
                </section>
            </>
        )
    }
}
