import React from "react";

import "./parceiros.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Card from "../components/card";

export default () => {
    return (
        <Layout>
            <section id="section-hero" className="row g-0">
                <div className="col-5">
                    <StaticImage src="../images/quem-somos.png" alt="UniFavela" />
                </div>
                <div className="col-6 offset-1 my-auto px-4">

                    {/* @todo não é pra ser o mesmo layout dos projetos e ações não, é um tantinho diferente */}
                    {/* @todo Meninos, Inverno, UFRJ, Lis Consulting, Banana, Instituto Phi, O3, FGV */}
                    <h1>Projetos e Ações</h1>
                </div>
            </section>
            <section id="section-missao">
                <h2>Missão, Visão e Valores</h2>
                <div className="container">
                    <div className="row">
                        <div className="offset-3 col-6 mt-5 mb-0">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-4">
                            <Card>
                                <h3>Projeto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Projeto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Projeto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Projeto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Projeto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Projeto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* @todo no final desta página é para ter um parágrafo convidando as pessoas para serem parceiras PJ - aguardando conteúdo da Agatha  */}

            </section>
          </Layout>
    )
}
