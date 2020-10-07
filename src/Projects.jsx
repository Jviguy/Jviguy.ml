import React from "react";
import {Link} from "react-router-dom";
import './projectsnav.css'
function Projects(){
    return (
        <div className="contact">
            <div className="container">
                <div className="sidenav">
                    <Link to="/projects">
                        <h5>
                           Project Browser
                        </h5>
                    </Link>
                    <Link className="sidenav-link" to="/projects/mcpechatbot">Go MCPE ChatBot</Link>
                    <Link className="sidenav-link" to="/projects/sharper">Sharper Bot</Link>
                    <Link className="sidenav-link" to="/projects/meme-a-thon">meme-a-thon</Link>
                </div>
            </div>
        </div>
    )
}
export default Projects