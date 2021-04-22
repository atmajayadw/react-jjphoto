import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Logo } from '../assets/icon/icons.js'
import $ from 'jquery';
import '../lib/jqueryeasing/jquery.easing.1.3.js'
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {

    componentDidMount() {
        this.hamburger();
        window.addEventListener("scroll", this.stickyNavbar);
        window.addEventListener("scroll", this.activePage);
        this.scrollMenu();
    }

    stickyNavbar = () => {
        const fixbar = $('.navbar');

        if (fixbar.length) {
            if ($(document).scrollTop() > 135) {
                fixbar.addClass("fixed");
            } else {
                fixbar.removeClass("fixed");
            }
        }
    }

    hamburger = () => {
        const hamburger = document.querySelector('.hamburger');
        const span = document.querySelectorAll('.hamburger span');
        const sidebar = document.querySelector('.sidebar .links');

        hamburger.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            span[0].classList.toggle('show1');
            span[1].classList.toggle('show2');
            span[2].classList.toggle('show3');
            if (sidebar.classList.contains('active')) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    }

    scrollMenu = () => {
        $('.link').on('click', function () {

            const href = this.dataset.section
            const split = href.split('#')[1];
            const targetDiv = $('#' + split);

            if (href === "#home") {
                $("html, body").animate({ scrollTop: '0px' }, 1000, 'easeInOutExpo');
            } else if (targetDiv.length) {

                $('.link').removeClass("active");
                $(this).addClass("active");

                $("html, body").animate({
                    scrollTop: targetDiv.offset().top - 40
                }, 1000, 'easeInOutExpo');
            }
        });
    }

    activePage = () => {
        const wScroll = $(window).scrollTop();
        if (wScroll >= 0) {
            $(".link").removeClass("active");
        }

        if ($('#about').length) {
            if (wScroll > $('#about').offset().top - 100) {
                $(".link").removeClass("active");
                $(".link.about").addClass("active");
            }
        }

        if ($('#portfolio').length) {
            if (wScroll > $('#portfolio').offset().top - 100) {
                $(".link").removeClass("active");
                $(".link.portfolio").addClass("active");
            }
        }

        if ($('#contact').length) {
            if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                $(".link").removeClass("active");
                $(".link.contact").addClass("active");
            }
        }

    }

    render() {
        return (
            <>
                <section id="navbar">
                    <div className="container">
                        <div className="row navbar">
                            <div className="logo">
                                <img src={Logo} alt=""></img>
                            </div>

                            <div className="links">
                                <ul>
                                    <li>
                                        <Link className="link home" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#home"
                                            }} data-section="#home"> <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link about" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#about"
                                            }} data-section="#about"> <span>About</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <img id="logo" src={Logo} alt=""></img>
                                    </li>
                                    <li>
                                        <Link className="link portfolio" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#portfolio"
                                            }} data-section="#portfolio"> <span>Portfolio</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link contact" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#contact"
                                            }} data-section="#contact"> <span>Contact</span>
                                        </Link>                                    </li>
                                </ul>
                            </div>

                            <div className="container sidebar">

                                <div className="hamburger">
                                    <span className="line1"></span>
                                    <span className="line2"></span>
                                    <span className="line3"></span>
                                </div>

                                <div className="links">
                                    <ul>
                                        <li>
                                            <Link className="link home" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#home"
                                                }} data-section="#home"> <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="link about" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#about"
                                                }} data-section="#about"> <span>About</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="link portfolio" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#portfolio"
                                                }} data-section="#portfolio"> <span>Portfolio</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="link contact" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#contact"
                                                }} data-section="#contact"> <span>Contact</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
