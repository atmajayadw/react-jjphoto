import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import { Logo } from '../assets/icon/icons.js'
import $ from 'jquery';
import '../lib/jqueryeasing/jquery.easing.1.3.js'

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
        $('.link').on('click', function (e) {

            const href = $(this).attr('href');
            if (href === "#Home") {
                $("html, body").animate({ scrollTop: '0px' }, 1000, 'easeInOutExpo');
                e.preventDefault();
            } else {
                const elementhref = $(href);

                $('.link').removeClass("active");
                $(this).addClass("active");

                $("html, body").animate({
                    scrollTop: elementhref.offset().top - 40
                }, 1000, 'easeInOutExpo');
                e.preventDefault();
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

        if ($(window).scrollTop() + $(window).height() === $(document).height()) {
            $(".link").removeClass("active");
            $(".link.contact").addClass("active");
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
                                    <li><a className="link home" href="#Home">Home</a></li>
                                    <li><a className="link about" href="#about">About</a></li>
                                    <li>
                                        <img id="logo" src={Logo} alt=""></img>
                                    </li>
                                    <li><a className="link portfolio" href="#portfolio">Portfolio</a></li>
                                    <li><a className="link contact" href="#contact">Contact</a></li>
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
                                        <li><a className="link" href="#Home">Home</a></li>
                                        <li><a className="link" href="#about">About</a></li>
                                        <li><a className="link" href="#portfolio">Portfolio</a></li>
                                        <li><a className="link" href="#contact">Contact</a></li>
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
