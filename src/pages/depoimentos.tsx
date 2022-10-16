import React from "react";

import "./depoimentos.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Carousel from 'react-bootstrap/Carousel';
import YoutubeEmbed from "../components/youtube";

export default () => {
    return (
        <Layout>
            <section id="section-hero" className="row g-0">
                <div className="col-6 offset-1 my-auto px-4">
                    <h1>Depoimentos</h1>
                </div>
            </section>
            <section className="bg-primary px-8 py-6">
                <YoutubeEmbed embedId="y4yhmymlouI" />
            </section>
            <section className="bg-primary px-8 py-6">
                <YoutubeEmbed embedId="y4yhmymlouI" />
            </section>
            <section id="section-depoimentos">

                {/* @todo aqui vamos ter tres depoimentos em texto e tres em video. os em texto pode repetir da index, 
                mas talvez não em carrossel e sim aparecendo um após o outro, intercalando vídeos e textos - vamos pensar juntos */}

                <Carousel>
                    <Carousel.Item>
                        <div className="container">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                electronic typesetting, remaining essentially unchanged. It was popularised in the
                                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>

                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Carina Almeida" />
                                <h3>Carina Almeida <span>aluna</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                electronic typesetting, remaining essentially unchanged.</p>

                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Carina Almeida" />
                                <h3>Carina Almeida <span>aluna</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Carina Almeida" />
                                <h3>Carina Almeida <span>aluna</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
          </Layout>
    )
}
