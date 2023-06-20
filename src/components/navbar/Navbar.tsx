import "./Navbar.css";
import React, { useState } from "react";


const Navbar: React.FC = () => {

    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg header" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tango Jack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#modal">
                                    About
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Socials
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item"
                                        href="https://www.youtube.com/@_tangojack"
                                        target="_blank"
                                    >YouTube</a></li>
                                    <li><a className="dropdown-item"
                                        href="https://www.github.com/tangojack"
                                        target="_blank"
                                    >GitHub</a></li>
                                    <li><a className="dropdown-item"
                                        href="https://www.instagram.com/_tangojack"
                                        target="_blank"
                                    >Instagram</a></li>
                                    <li><a className="dropdown-item"
                                        href="https://wa.me/85256029830"
                                        target="_blank"
                                    >WhatsApp</a></li>
                                    <li><a className="dropdown-item"
                                        href="mailto:me@tangojack.org"
                                        target="_blank"
                                    >Email</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vQPSyfXZbUlb9yRXXGGwbd4wvQnqvU6OIJnqYzj0qnmnyopbb-15HEFJZmHlM1LX4BjImcTMMDi74xq/pub"
                                    target="_blank">
                                    Music Accessibility
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="assets/pdf/Resume.pdf" download>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="modal fade" id="modal" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalLabel">About</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            Vinit Miranda (professionally known as Tango Jack) is an interactive artist who uses technology to create immersive installations and experiences that engage and delight audiences. He continuously pushes the boundaries of what is possible in the world of art, exploring new technologies and their potential to reshape our perception of reality.

                            His work revolves around creating <b>minimal, affordable and engaging</b> <a href="https://www.youtube.com/shorts/y8acwq13Mdg" target="_blank">interactive installations</a>, <a href="https://www.youtube.com/shorts/yIcTwa4pgKc" target="_blank">instruments for special needs</a>, and other <a href="https://www.youtube.com/@_tangojack" target="_blank">art pieces</a>.

                            <br></br> <br></br>Through these projects, Tango strives to bridge the gap between art and accessibility, allowing everyone to participate in the transformative power of artistic expression.

                            <br></br> <br></br>Collaboration lies at the heart of his practice. Tango has had the privilege of partnering with esteemed organizations like <a href="https://www.artbatacademy.com/" target="_blank">Artbat Live</a> and <a href="https://www.facebook.com/PDADMandaluyong/" target="_blank">Filipino Govt. Organizations</a> to create unique experiences.
                            These collaborations have not only broadened his artistic horizons but also enriched his understanding of how art can be a catalyst for change and a platform for community engagement.

                            <br></br> <br></br>Throughout his career, he has had the opportunity to work with special needs organizations, and has also taught at schools such as the Ebenezer School for the Visually Impaired.
                            <br></br> <br></br>
                            In this ever-evolving landscape of educational programs and artistic innovation, Tango remains dedicated to contributing his skills and expertise. He envisions a future where art becomes an integral part of inclusive educational initiatives, empowering individuals from all walks of life to discover their creative potential and fostering a sense of joy and belonging within a vibrant community.



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
