import React from "react";
import './App.css'
function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <a href="https://github.com/Jviguy">
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="https://i2.wp.com/thequickblog.com/wp-content/uploads/2019/11/github.png?resize=900%2C400&ssl=1"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Home</h1>
                        <p>
                            Hey this is the home of Jviguys Website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;