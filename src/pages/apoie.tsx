import React from "react";

import "./apoie.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout scope="apoie">
      <section id="section-hero" className="">
        <div className="container">
          <p>
          A UniFavela acredita no poder da formação educacional e desenvolvimento sociocultural. Para isso, precisamos da sua ajuda! O seu apoio é fundamental para que haja perspectiva de futuro nos territórios periféricos. 
          </p>
        </div>
      </section>
      <section id="section-dados">
        <div className="container">
          <div className="container-box">
            <div className="dados-box">
              <h3>Dados Bancários</h3>
              <p>
                Banco Bradesco (237)<br />
                Agência 1240<br />
                Conta 53807-8<br />
                CNPJ 42.129.436/0001-25
              </p>
            </div>
            <div className="dados-box">
              <h3>PIX</h3>
              <p>
                Chave do PIX (CNPJ)<br />
                <strong>42.129.436/0001-25</strong>
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
            <div className="quote">
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
