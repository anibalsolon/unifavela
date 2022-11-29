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
import FGVLogo from "../images/parceiros/fgv.png";
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
              <h3><a href="https://www.meninos.ch/">Freunde brasilianischer Strassenkinder</a></h3>
              <p>
                A Freunde brasilianischer Strassenkinder é uma associação suíça composta por cerca de 100 membros que apoiam projetos infantis pelo Brasil, com objetivo de atender as crianças brasileiras que não são alvo de políticas públicas. Na UniFavela, eles viabilizam o UniLetrinhas, nosso projeto de alfabetização infantil desde o seu início, no segundo semestre de 2022.
              </p>
            </div>
          </div>

          <div className="parceiro">
            <div>
              <img className="img-fluid" src={InvernoLogo} />
            </div>
            <div>
              <h3><a href="https://www.invernoproducoes.com.br/">Inverno Produções</a></h3>
              <p>
                Fundada em 2013, a Inverno Produções é uma agência de casting do querido Fábio Porchat. A empresa apoia a UniFavela desde o início de 2022, com uma verba mensal que ajuda a manter os custos da associação, bem como a continuação dos projetos que desenvolvemos.
              </p>
            </div>
          </div>

          <div className="parceiro">
            <div>
              <img className="img-fluid" src={UFRJLogo} />
            </div>
            <div>
              <h3><a href="https://portal.ufrj.br/Inscricao/extensao/acaoExtensao/acao?id=28A520AE-71AC-4A8D-AD76-013933C743AB&cid=4326&conversationPropagation=nested">Universidade Federal do Rio de Janeiro (UFRJ)</a></h3>
              <p>
                A Universidade Federal do Rio de Janeiro conta com diversos projetos de extensão disponíveis para todos os alunos matriculados, com o objetivo de integrar a comunidade acadêmica com a sociedade. Sendo assim, o pré-vestibular da UniFavela é uma extensão do curso de Letras, possibilitando essa integração dos alunos com a Maré. Hoje, contamos com extensionistas de diversos cursos para atuar em áreas como: comunicação institucional, setor pedagógico e até mesmo os professores. Os alunos recebem horas de extensão de acordo com as suas atribuições.
              </p>
            </div>
          </div>


          <div className="parceiro">
            <div>
              <img className="img-fluid" src={LisLogo} />
            </div>
            <div>
              <h3><a href="https://lisconsulting.com.br/">Lis Consulting</a></h3>
              <p>
                A Lis Consulting é uma empresa voltada para soluções educacionais, atuando com consultorias educacionais, design institucional de conteúdos e customização de ambientes virtuais de aprendizagem. A empresa apoia a UniFavela desde 2019 e, por isso, já se tornou uma parte muito importante da associação.
              </p>
            </div>
          </div>


          <div className="parceiro">
            <div>
              <img className="img-fluid" src={BananaLogo} />
            </div>
            <div>
              <h3><a href="https://bananabr.com/">Banana Br</a></h3>
              <p>
                A Banana Br é uma agência de Publicidade e Propaganda focada em mídias sociais, brand design, branded content e live marketing. A empresa apoia a UniFavela desde 2022 e auxilia a equipe de comunicação institucional com toda a sua expertise no assunto.
              </p>
            </div>
          </div>


          <div className="parceiro">
            <div>
              <img className="img-fluid" src={PhiLogo} />
            </div>
            <div>
              <h3><a href="https://institutophi.org.br/">Instituto Phi</a></h3>
              <p>
                O Instituto Phi é uma organização não-governamental que trabalha para desenvolver a prática da filantropia, para que todos os cidadãos tenham um compromisso com a promoção do bem-estar coletivo, fazendo a mediação entre apoiadores que dispnibilizam recursos financeiros para a transformação social e instituições sociais. Atualmente o Instituto Phi viabiliza o pré-vestibular da UniFavela por meio de seus parceiros e estamos em diálogo para novos apoios em 2023.
              </p>
            </div>
          </div>


          <div className="parceiro">
            <div>
              <img className="img-fluid" src={O3Logo} />
            </div>
            <div>
              <h3><a href="https://o3educacao.com/">O3 Educação</a></h3>
              <p>
              A O3 Educação trabalha para atender a ODS “Educação de Qualidade” da ONU, proporcionando aos jovens de pré-vestibulares comunitários soluções como: Mentoria, aulas na plataforma “ENEM com Você” e Trilha de Estudo Personalizada. Atualmente, a UniFavela conta com o apoio dentro da plataforma, mas posteriormente receberá as demais soluções. 
              </p>
            </div>
          </div>

          <div className="parceiro">
            <div>
              <img className="img-fluid" src={FGVLogo} />
            </div>
            <div>
              <h3><a href="https://direitorio.fgv.br/pratica-juridica">Fundação Getúlio Vargas (FGV)</a></h3>
              <p>
              A UniFavela possui uma parceria com o Núcleo de Prática Jurídica da Escola de Direito do Rio de Janeiro da Fundação Getúlio Vargas (NPJ da FGV Direito Rio). Recebemos assessoria jurídica gratuita de três clínicas do Núcleo: LAJUNT (Laboratório de assessoria jurídica em novas tecnologias), LACONF (Laboratório de assessoria jurídica para resolução consensual de conflitos) e LATRI (Laboratório de assessoria jurídica em direito tributário).  
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* <section id="section-parceiro" className="row g-0 mt-5">
        <div className="offset-0 col-12 offset-md-1 col-md-5 my-auto px-4">
          <h1>Que tal também ser parceiro da UniFavela?</h1>
          <p className="text-muted">
            Somos uma instituição socioeducativa localizada no Complexo da Maré, com a missão de impulsionar jovens e adultos favelados
            para que tenham acesso ao ensino superior. Através de uma educação libertária, oferecemos ferramentas para nossos estudantes ocuparem espaços de produção de conhecimento.
          </p>
          <p>
            <Button variant="secondary" size="lg">Apoiar</Button>
          </p>
        </div>
        <div className="d-none d-md-block offset-md-1 col-md-5 text-end">
          <StaticImage src="../images/apoie.png" alt="UniFavela" />
        </div>
      </section> */}
    </Layout>
  )
}
