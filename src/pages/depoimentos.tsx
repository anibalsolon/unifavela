import React from "react";

import "./depoimentos.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Carousel from 'react-bootstrap/Carousel';
import YoutubeEmbed from "../components/youtube";

export default () => {
  return (
    <Layout scope="depoimentos">
      <section id="section-hero" className="row g-0">
        <h1>Depoimentos</h1>
      </section>
      <section className="bg-primary px-8 py-6">
        <YoutubeEmbed embedId="y4yhmymlouI" />
      </section>
      {/* @TODO ajeitar tamanho da primeira caixa, espaco na caixa branca sobrando */}
      <section id="section-depoimentos">
        <div className="container">
          <p>A UniFavela é uma ferramenta de empoderamento e catalisadora de talentos,
            que busca estratégias e aplica o ensino à realidade do Complexo da Maré.
            E é por isso que eu amo dar aula lá! Chego em um ambiente acolhedor e com
            muitas pessoas esforçadas e dedicadas a mudar suas vidas através da entrada
            na vida acadêmica. Dar aulas para essas pessoas é motivador! Nesse tempo eu
            aprendi sobre o interesse das pessoas e pude me introduzir numa realidade
            completamente diferente da minha. Hoje entendo melhor sobre empatia,
            pertencimento e amor! Entender a educação popular dentro do contexto
            favelado tem me ajudado muito. </p>
          <div>
            <StaticImage src="../images/allan-educador.jpg" alt="Allan Kildare, educador de Matemática do pré-vestibular " />
            <h3>Allan Kildare <span>Educador de Matemática do pré-vestibular</span></h3>
          </div>
        </div>
        <div className="container">
          <p>Meu nome é Daiana Otaviano, sou engenheira de produção pela UFRJ, pós-graduanda em Data Science
            pela USP e trabalho na área Digital de uma multinacional de Beleza e Higiene.
            Sou cria do parque união-Maré e sou apaixonada pela favela que nasci. Sempre estudei em escolas
            públicas e para ingressar na faculdade fiz dois anos de pré-vestibular social (PVS).
            Mesmo trabalhando durante o dia, a noite ia de segunda a sexta no PVS da Redes da Maré, enquanto
            os sábados eram no PVS do CEDERJ. Portanto, tudo que conquistei até aqui teve grande contribuição
            de instituições sociais e de incríveis professores que davam o melhor de si para que pudéssemos
            ter conhecimento de qualidade e ‘furar a bolha’ de toda desigualdade estrutural que ainda existe
            no país. E, por isto, sempre participei de projetos sociais pois quero retribuir o que foi feito
            por mim, dividir conhecimento e transmitir força para que eles vejam que é sim possível ingressar
            em um curso superior sendo favelado e ingressar em espaços elitistas expondo a nossa resistência
            e tudo que passamos para estar ali. E, então, minha história com a Uni se iniciou em 2020.
            Conheci o projeto pelas redes sociais e perguntei se teriam vaga para professor de matemática.
            Em fevereiro do mesmo ano iniciei com as aulas, mas cerca de um mês depois vivemos a pandemia
            e as aulas deixaram de ser presenciais e passaram a ser remotas. Logo neste início, percebi o
            quão inclusivo o projeto era, pois lutaram para que todos os alunos tivessem o acesso a internet
            para poder acompanhar as aulas, os professores se desdobraram para também se adaptarem à nova
            realidade e levar a mesma qualidade de suas aulas. Conseguimos dar aula em 2020 e em 2021 nesse
            formato e demos o nosso máximo e conseguimos aprovações nestes anos tão difíceis. Por isso, venho
            dizer que ser professora da UniFavela é acreditar no compartilhamento do ensino como forma de mudança,
            de resistência, de inclusão, de combate a desigualdade social.</p>
          <div>
            <StaticImage src="../images/daiana-matematica.png" alt="Daiana Otaviano, educadora de Matemática do pré-vestibular " />
            <h3>Daiana Otaviano <span>Educadora de Matemática do pré-vestibular</span></h3>
          </div>
        </div>
        <div className="container">
          <p>A UniFavela mudou minha percepção sobre educação, me fez perceber a importância de projetos sociais
            baseados na promoção do pensamento crítico e a cordialidade. Foi nesse espaço de construção cidadã
            que percebi a grandeza e o potencial do lugar que morava, a favela.  O projeto continua, ainda hoje,
            mas desde outra perspectiva, me transformando, cultivando em mim gratidão e admiração por educadores
            e por todos aqueles que concentram seus esforços na construção de lugares inspiradores.
            Graças a Uni consegui ter acesso a educação pública de qualidade e é por meio dela que pretendo
            contribuir na extensão desse direito primordial.</p>
          <div>
            <StaticImage src="../images/jessika-espanhol.png" alt="Jessika Canchón, ex-estudante e atual educadora de Espanhol do pré-vestibular" />
            <h3>Jessika Canchón <span>Ex-estudante e atual educadora de Espanhol do pré-vestibular</span></h3>
          </div>
        </div>
      </section>
    </Layout>
  )
}
