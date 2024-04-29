import React from "react";

import "./projetos-e-acoes.scss";
export { Head } from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import ODS2 from "../images/ods-2.svg";
import ODS4 from "../images/ods-4.svg";
import ODS8 from "../images/ods-8.svg";
import ODS10 from "../images/ods-10.svg";

export default () => {
  return (
    <Layout scope="projetos-e-acoes">
      <section id="section-hero" className="row g-0">
        <h1>Projetos e Ações</h1>
      </section>
      <section id="section-projetos">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12 col-sm-6">
              <div className="projeto">
                <StaticImage
                  src="../images/projetos/unifavela_prevestibular.jpg"
                  alt="Pré-vestibular UniFavela"
                />
                <h3>
                  <ODS8 />
                  <ODS10 />
                  Pré-vestibular UniFavela
                </h3>
                <p>
                  O Pré-vestibular social da UniFavela tem como objetivo
                  popularizar o ensino no Complexo da Maré, impulsionando jovens
                  e adultos, através de uma educação libertária, para que tenham
                  acesso ao ensino superior. Assim, oferecendo ferramentas para
                  favelizar espaços de construção de conhecimento acadêmico e
                  não acadêmico. Ao longo de 4 anos o projeto impactou
                  diretamente a vida de mais de 100 estudantes. Em 2018, 100%
                  dos nossos estudantes foram aprovados na universidade e até
                  2022, 25 estudantes do pré-vestibular ingressaram no ensino
                  superior.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="projeto">
                <StaticImage
                  src="../images/projetos/unifavela_uniletrinhas.jpg"
                  alt="UniLetrinhas"
                />
                <h3>
                  <ODS8 />
                  UniLetrinhas
                </h3>
                <p>
                  Projeto que visa a construção da leitura e escrita nos anos
                  iniciais do ensino fundamental para as crianças da favela da
                  Maré dos 6 aos 14 anos (Ensino Fundamental I e II). Tem como
                  objetivos ajudar no processo de aprendizagem, desenvolver
                  áreas como coordenação motora, disciplina, expressão corporal,
                  linguagem e socialização por meio da implementação de práticas
                  de alfabetização motivadas no ato de brincar. São beneficiadas
                  crianças cuja mãe solo é a única responsável pelo provimento
                  da família.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="projeto">
                <StaticImage
                  src="../images/projetos/unifavela_bolsacarolina.jpg"
                  alt="Bolsa Carolina de Jesus"
                />
                <h3>
                  <ODS10 />
                  Bolsa Carolina de Jesus
                </h3>
                <p>
                  A Bolsa Carolina de Jesus tem como objetivo oferecer condições
                  necessárias para que nossos estudantes possam dar continuidade
                  aos estudos. Uma das motivações para a sua criação foi a alta
                  taxa de evasão em 2020. Em 2021, a ação contemplou cinco
                  estudantes com R$200 durante todo segundo semestre.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="projeto">
                <StaticImage
                  src="../images/projetos/unifavela_brinqueleitura.jpg"
                  alt="Brinque Leitura"
                />
                <h3>
                  <ODS4 />
                  Brinque Leitura
                </h3>
                <p>
                  O projeto foca em estimular o hábito de leitura nas crianças,
                  doando livros e brinquedos que coloquem o negro como
                  protagonista e amplifique a diversidade racial brasileira. No
                  total, a UniFavela já presenteou mais de 700 crianças.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="projeto">
                <StaticImage
                  src="../images/projetos/unifavela_maredenatal.jpg"
                  alt="Maré de Natal"
                />
                <h3>
                  <ODS2 />
                  <ODS10 />
                  Maré de Natal
                </h3>
                <p>
                  O projeto visa doar cestas básicas para as famílias que se
                  encontram abaixo da linha da pobreza no território da Maré. A
                  iniciativa foi inspirada na ação social da Voz das Comunidades
                  e ao todo o projeto já doou uma tonelada de alimentos para 50
                  famílias.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="projeto">
                <StaticImage
                  src="../images/projetos/unifavela_cicloformacao.jpg"
                  alt="Ciclo de Formação UniFavela"
                />
                <h3>
                  <ODS4 />
                  Ciclo de Formação UniFavela
                </h3>
                <p>
                  O Ciclo de Formação ocorreu no final de 2020 e teve como tema
                  “Diálogos sobre Educação Popular”. O evento online contou com
                  4 palestras sobre os assuntos que perpassam a educação
                  popular. Os convidados foram: Bruna Damiana falando sobre
                  “Educação Popular e Tecnologias: pontos para reflexão”;
                  Vanessa de Andrade com o tema “Educação popular e a
                  representatividade negra nos espaços acadêmicos”; Eduardo
                  Coelho sobre o assunto “Educação popular na cultura e arte
                  brasileira; João Camillo com o tema “Educação popular: da
                  conscientização à biointeração | Paulo Freire e Nêgo Bispo
                  como pensadores da educação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
