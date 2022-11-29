import React from "react";

import "./projetos-e-acoes.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Card from "../components/card";

export default () => {
  return (
    <Layout scope="projetos-e-acoes">
      <section id="section-hero" className="row g-0">
        <h1>Projetos e Ações</h1>
      </section>
      <section id="section-projetos">
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6 mt-5 mb-0">
              <h3>Pré-vestibular UniFavela</h3>
              <p>
                O Pré-vestibular social da UniFavela tem como objetivo popularizar o ensino no Complexo da Maré,
                impulsionando jovens e adultos, através de uma educação libertária, para que tenham acesso ao ensino superior.
                Assim, oferecendo ferramentas para favelizar espaços de construção de conhecimento acadêmico e não acadêmico.
                Ao longo de 4 anos o projeto impactou diretamente a vida de mais de 100 estudantes. Em 2018, 100% dos nossos estudantes
                foram aprovados na universidade e até 2022, 25 estudantes do pré-vestibular ingressaram no ensino superior.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-4 d-flex">
              <Card>
                <h3>UniLetrinhas</h3>
                <p>
                  Projeto que visa a construção da leitura e escrita nos anos iniciais do ensino fundamental para as
                  crianças da favela da Maré dos 6 aos 14 anos (Ensino Fundamental I e II). Tem como objetivos ajudar no
                  processo de aprendizagem, desenvolver áreas como coordenação motora, disciplina, expressão corporal,
                  linguagem e socialização por meio da implementação de práticas de alfabetização motivadas no ato de brincar.
                  São beneficiadas crianças cuja mãe solo é a única responsável pelo provimento da família.
                </p>
              </Card>
            </div>
            <div className="col-4 d-flex">
              <Card>
                <h3>Bolsa Carolina de Jesus</h3>
                <p>
                  A Bolsa Carolina de Jesus tem como objetivo oferecer condições necessárias para que nossos estudantes possam dar
                  continuidade aos estudos. Uma das motivações para a sua criação foi a alta taxa de evasão
                  em 2020. Em 2021, a ação contemplou cinco estudantes com R$200 durante todo segundo semestre.
                </p>
              </Card>
            </div>
            <div className="col-4 d-flex">
              <Card>
                <h3>Brinque Leitura</h3>
                <p>
                  O projeto foca em estimular o hábito de leitura nas crianças, doando livros e brinquedos
                  que coloquem o negro como protagonista e amplifique a diversidade racial brasileira.
                  No total, a UniFavela já presenteou mais de 700 crianças.
                </p>
              </Card>
            </div>
            <div className="col-4 d-flex">
              <Card>
                <h3>Maré de Natal</h3>
                <p>
                  O projeto visa doar cestas básicas para as famílias que se encontram abaixo da linha da pobreza no
                  território da Maré. A iniciativa foi inspirada na ação social da Voz das Comunidades e ao todo o
                  projeto já doou uma tonelada de alimentos para 50 famílias.
                </p>
              </Card>
            </div>
            {/* @todo esperando texto agatha  */}
            <div className="col-4 d-flex">
              <Card>
                <h3>Ciclo de Formação UniFavela</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card>
            </div>
            {/* @todo este aqui vai depender de ganharmos um edital. o resultado sai dia 04 de novembro.  */}
            <div className="col-4 d-flex">
              <Card>
                <h3>Bolsa bell hooks</h3>{/* manter bell hooks em minúsculo */}
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
      </section>
    </Layout>
  )
}
