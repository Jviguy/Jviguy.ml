import React from "react";

function About(){
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <a href="https://github.com/Jviguy">
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="https://avatars1.githubusercontent.com/u/62412449?s=460&u=8e44718b07eaf4a3e73df312fcd9f0027b5a7207&v=4"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">About Me</h1>
                        <p>
                            Hey Im Jviguy other wise known as Jeremy. Im a 14 year old developer with around 5 months of experience. I mainly do Discord bot and PMMP plugin development!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;