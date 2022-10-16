import React from "react";

import "./apoie.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Card from "../components/card";

export default () => {
    return (
        <Layout>
            <section id="section-hero" className="row g-0">
                <div className="col-6 offset-3 my-5 text-center">
                    <h1 className="my-5">Apoie</h1>
                </div>
            </section>
            <section id="section-dados">
                <div className="container">

                    {/* @todo acho que o layout dessa página não faz muito sentido  vamos ver juntos  */}

                    <div className="row my-5">
                        <div className="offset-2 col-4">
                            <Card>
                                <h3>Dados Bancários</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <p className="text-center">
                                    Banco<br />
                                    Agência 0000<br />
                                    Conta 00000<br />
                                    CNPJ 00000
                                </p>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <h3>PIX</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <p className="text-center">
                                    Chave do PIX<br />
                                    000000000000000000
                                </p>
                                <p>
                                  <StaticImage src="../images/pix-qrcode.png" alt="UniFavela" />
                                </p>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                      <div className="offset-2 col-8">
                        <p>
                          A primeira parcela foi um complemento de renda. A segunda parcela, a única
                          fonte de renda, e foi com ela que eu me alimentei e paguei a entrada da casa que
                          eu aluguei. Sem ela eu não teria sequer o básico.
                        </p>
                        <p>Patrícia Silva - Estudante do pré-vestibular UniFavela beneciada pela bolsa Carolina Maria de Jesus</p>
                      </div>
                    </div>
                </div>
            </section>
            <section className="row">
              <div className="col-4 offset-2 my-auto px-4">
                <h1>Quer ser um parceiro regular da Uni?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button>Apoiar</button>
              </div>
              <div className="offset-1 col-5 text-end">
                <StaticImage src="../images/apoie.png" alt="UniFavela" />
              </div>
            </section>
          </Layout>
    )
}
