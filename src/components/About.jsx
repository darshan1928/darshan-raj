import React from "react";
import "../styles/About.css";
import DPN from "../assets/DPN.png";

function About() {
    return (
        <section id="about">
            <h5>Get To Know </h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={DPN} alt="About me" />
                    </div>
                </div>

                <div className="about__content">
                    <p>
                        Aspiring Full Stack Developer with adequate knowledge in building end-to-end web applictions.
                        Specialised in JavaScript and relevant frameworks including Node.js, MongoDB, React.js.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
