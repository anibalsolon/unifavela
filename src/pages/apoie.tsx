import React from "react";

import "./apoie.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout scope="apoie">
      <section id="section-hero" className="row">
        <div className="col-6 offset-3 my-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section id="section-dados">
        <div className="container">
          <div className="row my-3">
            <div className="offset-2 col-4 dados-box">
              <h3>Dados Bancários</h3>
              <p>
                Banco<br />
                Agência 0000<br />
                Conta 00000<br />
                CNPJ 00000
              </p>
            </div>
            <div className="col-4 dados-box">
              <h3>PIX</h3>
              <p>
                Chave do PIX<br />
                <strong>000000000000000000</strong>
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="offset-3 col-6 offset-md-5 col-md-2 text-center">
              <h3>PIX QR code</h3>
              <StaticImage src="../images/pix-qrcode.png" alt="UniFavela" />
            </div>
          </div>
          <div className="row">
            <div className="offset-2 col-8 my-4 quote">
              <p>
                A primeira parcela foi um complemento de renda. A segunda parcela, a única
                fonte de renda, e foi com ela que eu me alimentei e paguei a entrada da casa que
                eu aluguei. Sem ela eu não teria sequer o básico.
              </p>
              <p>
                Patrícia Silva
                <span>
                  Estudante do pré-vestibular UniFavela beneciada pela bolsa Carolina Maria de Jesus
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
