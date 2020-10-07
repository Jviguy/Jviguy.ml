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
                <div className="align-items-center">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-7">
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTry0zp5onCm5L0ylSwx_P-ekq2UN5aFC0lWg&usqp=CAU"
                                alt=""
                            />
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="data:image/png;base64,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"
                                alt=""
                            />
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src=""
                                alt=""
                                />
                        </div>
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">Languages I Know</h1>
                            <p>
                                PHP Java C#(dotnet) Golang node.js Python3 C++(i am noob at this one) and Rust
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;