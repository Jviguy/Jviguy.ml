import React from "react";
import { Link, withRouter } from "react-router-dom";
import './App.css'

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="rainbow_text_animated" to="/">
                        Jeremys Personal Website!
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/projects" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/contact" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);