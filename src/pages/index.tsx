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
                    Somos uma Instituição Socioeducativa localizada no Complexo de Favelas da Maré no Rio de Janeiro. 
                    Oferecemos formação educacional e desenvolvimento sociocultural a todos os moradores do território, 
                    com foco em <strong>favelizar</strong> espaços de construção de conhecimento acadêmico e não-acadêmico, potencializando direitos sociais 
                    e direitos humanos em território favelizado, proporcionando desenvolvimento e ascensão pessoal e profissional, 
                    tudo isso por meio da educação como <strong>prática da liberdade</strong>.
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
                        Favelizar espaços de construção de conhecimento acadêmico e não acadêmico;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                        Construir comunidades de ensino-aprendizagem para a prática da liberdade;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                        Potencializar direitos sociais e direitos humanos em território favelizado;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                        Promover o exercício do pensamento crítico, da autonomia, da solidariedade e da cidadania;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                        Atuar em prol do empoderamento e afirmação da favela, das faveladas e dos favelados 
                        por meio do ensino-aprendizagem libertário, horizontal e empático;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                        Contribuir para a emancipação da população favelada;
                        </Card>
                    </div>
                    <div className="g-col-12 g-col-lg-4">
                        <Card>
                        Ouvir e agir coletivamente com as/os moradores a partir de suas demandas, 
                        sonhos e propostas para o território em que vivem.
                        </Card>
                    </div>
                </div>
            </section>
            <section id="section-metricas">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <HatIcon />
                            <h3>+100<span> estudantes já passaram pela Uni</span></h3>
                        </div>
                        <div className="col-3">
                            <CertificateIcon />
                            <h3>+25<span> foram aprovados em universidades</span></h3>
                        </div>
                        <div className="col-3">
                            <BookIcon />
                            <h3>+700<span> crianças presenteadas com livros e brinquedos</span></h3>
                        </div>
                        <div className="col-3">
                            <NarrativeIcon />
                            <h3>+1<span> tonelada de alimentos doados para famílias da Maré</span></h3>
                        </div>
                        {/* @todo trocar icone abaixo para pessoinhas */}
                        <div className="col-3">
                            <NarrativeIcon />
                            <h3>+60<span> voluntários em nossa história</span></h3>
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
                     {/* @todo falta um lugar pra colocar um paragrafo aqui antes das coisas */}
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
                            <p>A importância da UniFavela para o território Maré(ense) é uma das possibilidades de mostrar 
                                para as pessoas que de fato tem instituições que se importam com a vida dos moradores, 
                                que valoriza os saberes populares; ter alguém para contar sabe? Creio que a maioria que compõe a instituição, 
                                tem esse sentimento de reciprocidade, pois as mesmas, os mesmos e os mesmes receberam em algum momento da vida. 
                                UniFavela é Maré e Maré é a UniFavela também. Debatermos questões étnicas raciais, promovermos discussões sobre 
                                racismo ambiental, e territórios; são vieses de possibilidade que podem ser fortalecidos pela UniFavela ao povo 
                                mareense. Para a sociedade como um todo, é derrubar os estereótipos negativos que são construídos ao longo da 
                                história sobre as favelas e os territórios favelados como um todo. Mostrar como os saberes populares são 
                                relevantes e que a favela fala e deve falar pela favela (quem é cria fala pelos crias).</p>
                            <div>
                                {/* @todo descobrir nome da prof */}
                                <StaticImage src="../images/dani-prof.png" alt="Daniele" />
                                <h3>Daniele <span>professora de História do pré-vestibular</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <p>A Unifavela mudou minha percepção sobre educação, me fez perceber a importância de projetos sociais baseados 
                                na promoção do pensamento crítico e a cordialidade. Foi nesse espaço de construção cidadã que percebi a 
                                grandeza e o potencial do lugar que morava, a favela. O projeto continua, ainda hoje, mas desde outra perspectiva, 
                                me transformando, cultivando em mim gratidão e admiração por educadores e por todos aqueles que concentram seus 
                                esforços na construção de lugares inspiradores. Graças a Uni consegui ter acesso a educação pública de qualidade e 
                                é por meio dela que pretendo contribuir na extensão desse direito primordial.</p>
                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Jessika Canchón" />
                                <h3>Jessika Canchón <span>Ex-estudante e atual professora de Espanhol do pré-vestibular</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                     {/* @todo pedi para Agatha o resto dos depoimentos - aguardando */}
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
                    {/* @todo essas logos devem estar linkadas para os sites dos parceiros */}
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
                         {/* @todo colocar logo da Lis, ver se funcionou */}
                        <div className="col-2 text-center my-auto">
                            <img className="img-fluid" src={lisLogo} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-novidades">
                <h2 className="text-center mb-5">Fique por dentro das novidades</h2>
                <div className="container">
                    {/* @todo eventualmente trocar por plugin */}
                    <div className="row">
                        <div className="col-2 offset-3 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/CeHluXDJ7X4/media?size1" />
                        </div>
                        <div className="col-2 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/CePBe3UJ3Ot/media?size=l" />
                        </div>
                        <div className="col-2 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/Cd6VYVBJCJM/media?size=l" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 offset-3 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/CbvRSmUuanR/media?size=l" />
                        </div>
                        <div className="col-2 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/CeFET7vp85x/media?size=l" />
                        </div>
                        <div className="col-2 my-auto">
                            <StaticImage alt="Novidades" src="https://www.instagram.com/p/CT0Xe_uJ2-8/media?size=l" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
