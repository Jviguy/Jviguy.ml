import React from "react";
import '../projectsnav.css'
import {Link} from "react-router-dom";
import '../App.css'
function Mcpechatbot(){
    return (
        <div className="Mcpechatbot">
            <div className="container">
                <div className="sidenav">
                    <Link to="/projects">
                        <h5>
                            Project Browser
                        </h5>
                    </Link>
                    <Link className="sidenav-link sidenav-selected" to="/projects/mcpechatbot">Go MCPE ChatBot
                        (Current)</Link>
                    <Link className="sidenav-link" to="/projects/sharper">Sharper Bot</Link>
                    <Link className="sidenav-link" to="/projects/meme-a-thon">meme-a-thon</Link>
                </div>

            </div>
        </div>
    )
}

export default Mcpechatbot