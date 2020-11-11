import React from "react";
import {Link, } from "react-router-dom";
import '../projectsnav.css'

function mquery(){
    return (
        <div className="mquery">
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
                    <Link className="sidenav-link" to="/projects/mquery">Minecraft Query<br/>(Current)</Link>
                </div>
                <div className="row align-items-center my-5">

                </div>
            </div>
        </div>
    )
}
export default mquery