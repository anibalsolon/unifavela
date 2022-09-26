import React from "react";

import "./index.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import YoutubeEmbed from "../components/youtube";
import Card from "../components/card";

import Carousel from 'react-bootstrap/Carousel';

import HatIcon from "../images/icon-hat.svg";
import BookIcon from "../images/icon-book.svg";
import CertificateIcon from "../images/icon-certificate.svg";
import NarrativeIcon from "../images/icon-narrative.svg";

import FreundeLogo from "../images/parceiros/freunde-brasillianischer-strassenkinder.png";
import InvernoLogo from "../images/parceiros/inverno.png";
import UFRJLogo from "../images/parceiros/ufrj.png";

const IndexPage = () => {
    return (
        <Layout>
            <section className="row g-0">
                <div className="col-6 offset-1 my-auto px-4">
                    <h1>UniFavela</h1>
                    <p className="text-muted">
                        A UniFavela é um projeto socioeducativo com foco em <strong>favelizar</strong> espaços
                        de construção de conhecimento acadêmico e não-acadêmico.
                        O projeto se constitui por meio da construção de comunidades de
                        ensino-aprendizagem, potencializando direitos sociais e direitos
                        humanos em território favelizado visando a educação como <strong>prática da liberdade</strong>.
                    </p>
                    <button className="btn btn-more btn-outline-primary mt-5">Mais sobre a Uni</button>
                </div>
                <div className="col-5">
                    <StaticImage src="../images/hero.png" alt="UniFavela" />
                </div>
            </section>
            <section className="bg-primary px-8 py-6">
                <YoutubeEmbed embedId="y4yhmymlouI" />
            </section>
            <section id="section-objetivos" className="pt-5 px-lg-8">
                <h2 className="text-center mb-5">Objetivos</h2>
                <div className="grid card-grid">
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Construir comunidades de ensino-aprendizagem para a prática da
                            liberdade;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Potencializar direitos sociais e direitos humanos em território
                            favelizado;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Promover o exercício do pensamento crítico, da autonomia, da
                            solidariedade e da cidadania;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Favelizar espaços de construção de conhecimento acadêmico e não
                            acadêmico;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Atuar em prol do empoderamento e afirmação da favela, das
                            faveladas e dos favelados por meio do ensino-aprendizagem
                            libertário, horizontal e empático;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Contribuir para a emancipação da população favelada;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                            Ouvir e agir coletivamente com as/os moradores a partir de suas
                            demandas, sonhos e propostas para o território em que vivem.
                        </Card>
                    </div>
                </div>
            </section>
            <section id="section-metricas">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <HatIcon />
                            <h3>32.3 <span>Lorem ipsum dolor</span></h3>
                        </div>
                        <div className="col-3">
                            <CertificateIcon />
                            <h3>156 <span>Lorem ipsum dolor</span></h3>
                        </div>
                        <div className="col-3">
                            <BookIcon />
                            <h3>2000 <span>Lorem ipsum dolor</span></h3>
                        </div>
                        <div className="col-3">
                            <NarrativeIcon />
                            <h3>1500 <span>Lorem ipsum dolor</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-ods">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>ODS da ONU que contribuímos</h2>
                        </div>
                    </div>
                    <div className="row ods">
                        <div className="offset-3 col-2">
                            <StaticImage src="../images/ods-4.png" alt="ODS 4: Educação de qualidade" />
                        </div>
                        <div className="col-2">
                            <StaticImage src="../images/ods-8.png" alt="ODS 8: Trabalho decente e crescimento econômico" />
                        </div>
                        <div className="col-2">
                            <StaticImage src="../images/ods-10.png" alt="ODS 10: Redução das desigualdades" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-depoimentos">
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
            <section id="section-parceiros">
                <h2 className="text-center mb-5">Parceiros</h2>
                <div className="container">
                    <div className="row">
                        <div className="offset-3 col-2 text-center my-auto">
                            <img className="img-fluid" src={FreundeLogo} />
                        </div>
                        <div className="col-2 text-center my-auto">
                            <img className="img-fluid" src={InvernoLogo} />
                        </div>
                        <div className="col-2 text-center my-auto">
                            <img className="img-fluid" src={UFRJLogo} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-novidades">
                <h2 className="text-center mb-5">Fique por dentro das novidades</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-2 offset-3 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/Cd_sA7UJbPi/media?size=l" />
                        </div>
                        <div className="col-2 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/Cd9hhTxLHYg/media?size=l" />
                        </div>
                        <div className="col-2 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/Cd6VYVBJCJM/media?size=l" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
