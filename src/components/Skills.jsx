import React from "react";
import "../styles/Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
    return (
        <section id="skills">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">
                <div className="experience__front-end">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                           
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                           <div>
                           <h4>JAVASCRIPT</h4>
                            <small className="text-light">Intermediate</small>
                           </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                           <div>
                           <h4>BOOTSTRAP</h4>
                            <small className="text-light">Intermediate</small>
                           </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>REACT JS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="container__backend">
                <div className="experience__front-end">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                           <div>
                           <h4>NODE JS</h4>
                            <small className="text-light">Intermediate</small>
                           </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                           <div>
                           <h4>MONGO DB</h4>
                            <small className="text-light">Intermediate</small>
                           </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                           <div>
                           <h4>EXPRESS JS</h4>
                            <small className="text-light">Intermediate</small>
                           </div>
                        </article>
                       
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
