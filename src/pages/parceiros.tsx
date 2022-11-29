import React from "react";

import "./parceiros.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Card from "../components/card";

import FreundeLogo from "../images/parceiros/freunde-brasillianischer-strassenkinder.png";
import InvernoLogo from "../images/parceiros/inverno.png";
import UFRJLogo from "../images/parceiros/ufrj.png";
import LisLogo from "../images/parceiros/lis.png";
import PhiLogo from "../images/parceiros/phi.png";
import BananaLogo from "../images/parceiros/banana.png";
import O3Logo from "../images/parceiros/o3.png";
import { Button } from "react-bootstrap";


export default () => {
  return (
    <Layout scope="parceiros">
      <section id="section-hero" className="row g-0">
        <h1>Parceiros da UniFavela</h1>
      </section>
      <section id="section-parceiros">
        <div className="container">
          <div className="parceiro">
            <div>
              <img className="img-fluid" src={FreundeLogo} />
            </div>
            <div>
              <h3>Meninos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="parceiro">
            <div>
              <img className="img-fluid" src={InvernoLogo} />
            </div>
            <div>
              <h3>Inverno Produções</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="parceiro">
            <div>
              <img className="img-fluid" src={UFRJLogo} />
            </div>
            <div>
              <h3>Universidade Federal do Rio de Janeiro (UFRJ)</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
    </section>

    <section id="section-parceiro" className="row g-0 mt-5">
      <div className="offset-0 col-12 offset-md-1 col-md-5 my-auto px-4">
        <h1>Que tal também ser parceiro da UniFavela?</h1>
        <p className="text-muted">
          Somos uma instituição socioeducativa localizada no Complexo da Maré, com a missão de impulsionar jovens e adultos favelados
          para que tenham acesso ao ensino superior. Através de uma educação libertária, oferecemos ferramentas para nossos estudantes
          ocuparem espaços de produção de conhecimento.
        </p>
        <p>
          <Button variant="secondary" size="lg">Apoiar</Button>
        </p>
      </div>
      <div className="d-none d-md-block offset-md-1 col-md-5 text-right">
        <StaticImage src="../images/apoie.png" alt="UniFavela" />
      </div>
    </section>
    </Layout>
  )
}
