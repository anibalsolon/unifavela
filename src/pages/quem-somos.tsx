import React from "react";

import "./quem-somos.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import Card from "../components/card";
import Carousel from 'react-bootstrap/Carousel';

import { faBullseye, faEye, faHandsHolding } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Layout>
            <section id="section-hero" className="row g-0">
                <div className="col-5">
                    <StaticImage src="../images/quem-somos.png" alt="UniFavela" />
                </div>
                <div className="col-6 offset-1 my-auto px-4">
                    <h1>Um pouco mais sobre a Uni</h1>
                    <p className="text-muted">
                    Somos uma instituição socioeducativa localizada no Complexo da Maré, com a missão de impulsionar jovens e adultos favelados 
                    para que tenham acesso ao ensino superior. Através de uma educação libertária, oferecemos ferramentas para nossos estudantes
                    ocuparem espaços de produção de conhecimento. 
                    </p>
                </div>
            </section>
            <section id="section-missao">
                <h2>Missão, Visão e Valores</h2>
                <div className="container">
                    <div className="row">
                        {/* @todo inventar conteudo pros paragrafos ou deletar aqui, o que ficar melhor visualmente */}
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
                            <Card icon={faBullseye}>
                                <h3>Missão</h3>
                                <p>
                                Oportunizar a educação como prática de liberdade e resistência, 
                                buscando a ação emancipatória e democrática dentro dos territórios favelados. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card icon={faEye}>
                                <h3>Visão</h3>
                                <p>
                                Promover a transformação social por meio da educação popular libertária, mediante o exercício 
                                do pensamento crítico, da autonomia, da solidariedade e da cidadania em prol do empoderamento e 
                                da afirmação de comunidades faveladas e marginalizadas. 
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card icon={faHandsHolding}>
                                <h3>Valores</h3>
                                <p>
                                Acreditamos na educação como um direito humano essencial para o exercício da cidadania, atuando 
                                diretamente na transformação social. Nos pautamos no princípio político pedagógico antirracista, 
                                valorizando epistemologias colocadas à margem e saberes ancestrais. 
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-historia">

                {/* @todo pedi para a agaha as imagens e os conteudos para termos tudo certinho */}
                {/* @todo aqui é para ir de 2018 até 2022, ta só de 2020 pra frente */}

                <h2>História</h2>
                <Carousel indicatorLabels={['2020', '2021', '2022']} interval={null}>
                    <Carousel.Item>
                        <div className="container">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                electronic typesetting, remaining essentially unchanged. It was popularised in the
                                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>

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

            {/* @todo essa seção tem que começar com um parágrafo e depois a imagem do organograma, 
            que vai ser clicável para abrir um modal explicando cada setor */}
            <section id="section-equipe">
                <h2>Equipe</h2>
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-10">
                    <div className="row">
                        {/* @todo precisa dos pop-ups com a bio de cada um - as fotos do figma estão certas, baixar elas please*/}
                        <div className="col-4 text-center">
                            <StaticImage src="../images/laerte-presidente.png" alt="Laerte Breno" />
                            <h3>Laerte Breno</h3>
                            <p>Fundador e Presidente</p>
                        </div>
                        <div className="col-4 text-center">
                            <StaticImage src="../images/equipe-1.png" alt="Bruna Damiana" />
                            <h3>Bruna Heinsfeld</h3>
                            <p>Desenvolvimento Institucional</p>
                        </div>
                        <div className="col-4 text-center">
                            <StaticImage src="../images/agatha-comunicacao.png" alt="Agatha Puche" />
                            <h3>Agatha Puche</h3>
                            <p>Comunicação Institucional</p>
                        </div>
                        <div className="col-4 text-center">
                            <StaticImage src="../images/gisele-patrimonio.png" alt="Gisele Lima" />
                            <h3>Gisele Lima</h3>
                            <p>Gestão de Patrimônio</p>
                        </div>
                        <div className="col-4 text-center">
                            <StaticImage src="../images/suelen-pedagogico.png" alt="Suelen Martins" />
                            <h3>Suelen Martins</h3>
                            <p>Coordenação Pedagógica</p>
                        </div>
                        <div className="col-4 text-center">
                            <StaticImage src="../images/leonardo-financeiro.png" alt="Leonardo Gomes" />
                            <h3>Leonardo Gomes</h3>
                            <p>Gestão Financeira</p>
                        </div>
                        {/* @todo acrescentei um extra precisa jogar o larter pra cima */}
                        <div className="col-4 text-center">
                            <StaticImage src="../images/adrielle-juridico.png" alt="Adrielle Carvalho" />
                            <h3>Adrielle Carvalho</h3>
                            <p>Jurídico</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-reconhecimento">
                <h2>Reconhecimento</h2>
                {/* @todo aqui dentro de cada parte de paragrafo tem que ter um titulo, que vai ser o ano. O resto é bullet.  */}
                <Carousel>
                    <Carousel.Item>
                        <div className="container">
                            <p>2022
                                Prêmio Íbero-Americano em Educação e Direitos Humanos, OEI: finalistas na categoria B no Brasil.
                                Prêmio Sim à Igualdade Racial, ID-BR: vencedores da categoria Educação e Oportunidades.</p>
                        
                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Carina Almeida" />
                                <h3>Carina Almeida <span>aluna</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <p>2020
                            Edital 4G para Estudar: forneceu tablets e chips de internet para nossos estudantes.
                            </p>

                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Carina Almeida" />
                                <h3>Carina Almeida <span>aluna</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <p>2019
                                Edital RUA: possibilitou que nos tornássemos um Projeto de Extensão da UFRJ. 
                                Hoje, nossos voluntários estudantes da UFRJ recebem certificação e horas complementares.  
                                SIAC 2019: ganhamos uma menção honrosa na 10º Semana de Integração Acadêmica da UFRJ, com um projeto de pesquisa sobre o nosso trabalho. 
                                Prêmio Paulo Freire: prêmio de direitos humanos concedido pela ALERJ.</p>

                            <div>
                                <StaticImage src="../images/carina-almeida.png" alt="Carina Almeida" />
                                <h3>Carina Almeida <span>aluna</span></h3>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section id="section-transparencia">
                <h2>Transparência</h2>
                <div className="container">
                    {/* @todo conteudo do paragrafo faltando. pedi pra agatha */}
                    <div className="row">
                        <div className="offset-3 col-6 mt-5 mb-0 main-card">
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

                    {/* @todo refazer isso aqui embaixo todo. eh uma lista de documentos em pdf que vao poder ser acessados */}
                    <div className="row my-5">
                        <div className="col-4">
                            <Card>
                                <h3>Missão</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <a href="https://www.google.com.br">Acessar</a>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Visão</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <a href="https://www.google.com.br">Acessar</a>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Valores</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <a href="https://www.google.com.br">Acessar</a>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Missão</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <a href="https://www.google.com.br">Acessar</a>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Visão</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <a href="https://www.google.com.br">Acessar</a>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>Valores</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <a href="https://www.google.com.br">Acessar</a>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
