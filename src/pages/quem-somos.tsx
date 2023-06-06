import React, { useEffect, useState } from 'react';

import './quem-somos.scss';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

import Card from '../components/card';
import { Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import {
  faBullseye,
  faEye,
  faHandsHolding,
} from '@fortawesome/free-solid-svg-icons';

export default () => {
  let [modal, setModal] = useState<string | null>(null);

  return (
    <Layout scope="quem-somos">
      <section id="section-hero" className="row mt-5 mt-md-0 g-0">
        <div className="col-md-5 d-none d-md-block">
          <StaticImage src="../images/quem-somos.png" alt="UniFavela" />
        </div>
        <div className="col-md-6 my-auto px-4">
          <h1>Um pouco mais sobre a UniFavela</h1>
          <p className="text-muted">
            Somos uma instituição socioeducativa localizada no Complexo da Maré,
            com a missão de impulsionar jovens e adultos favelados para que
            tenham acesso ao ensino superior. Através de uma educação
            libertária, oferecemos ferramentas para nossos estudantes ocuparem
            espaços de produção de conhecimento.
          </p>
        </div>
      </section>
      <section id="section-missao">
        <h2>Missão, Visão e Valores</h2>
        <div className="container">
          <div className="row">
            <div className="offset-md-3 col-md-6 mt-5 mb-0">
              <h3>Por que somos?</h3>
              <p>
                Sabemos que a realidade educacional brasileira não é favorável
                para população que se encontra na linha da pobreza. Por isso,
                iniciativas como a nossa precisam existir! Acreditamos que, para
                haja a aprendizagem significativa, a educação precisa ser
                crítica e oferecer novos caminhos entre inúmeras culturas,
                etnias e lugares sociais. Por isso, estes são os pilares nos
                quais acreditamos e que aplicamos em nossa prática:
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-4 mt-4 mt-md-0 d-flex">
              <Card icon={faBullseye} className="align-self-stretch">
                <h3>Missão</h3>
                <p>
                  Oportunizar a educação como prática de liberdade e
                  resistência, buscando a ação emancipatória e democrática
                  dentro dos territórios favelados.
                </p>
              </Card>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 d-flex">
              <Card icon={faEye} className="align-self-stretch">
                <h3>Visão</h3>
                <p>
                  Promover a transformação social por meio da educação popular
                  libertária, mediante o exercício do pensamento crítico, da
                  autonomia, da solidariedade e da cidadania em prol do
                  empoderamento e da afirmação de comunidades faveladas e
                  marginalizadas.
                </p>
              </Card>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 d-flex">
              <Card icon={faHandsHolding} className="align-self-stretch">
                <h3>Valores</h3>
                <p>
                  Acreditamos na educação como um direito humano essencial para
                  o exercício da cidadania, atuando diretamente na transformação
                  social. Nos pautamos no princípio político pedagógico
                  antirracista, valorizando epistemologias colocadas à margem e
                  saberes ancestrais.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section id="section-historia">
        <h2>História</h2>
        <Carousel indicatorLabels={['2018', '2019', '2020', '2021', '2022']} interval={null} prevIcon={null} nextIcon={null}>
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
      </section> */}

      <section id="section-equipe">
        <h2>Organograma</h2>
        <div className="container">
          <div className="row">
            <div className="offset-1 col-10">
              <p className="mt-5">
                Para que a UniFavela consiga atuar de forma organizada e
                eficiente é necessário ter uma divisão de tarefas bem
                estruturada. Por isso, na Uni existem setores essenciais nessa
                construção. Os setores são:
              </p>
            </div>
          </div>
        </div>

        <p className="text-center">
          <StaticImage
            src="../images/Organograma_UniFavela.png"
            alt="Organograma"
          />
        </p>

        {/* <h2>Equipe</h2>
        <div className="container">
          <div className="row">
            <div className="offset-1 col-10">
              <div className="row">
                <div className="col-4 offset-4 text-center pt-5 equipe" onClick={() => setModal('laerte')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/laerte-presidente.jpg" alt="Laerte Breno" />
                  <h3>Laerte Breno</h3>
                  <p>Fundador e Presidente</p>
                </div>
                <Modal
                  show={modal === 'laerte'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Laerte Breno
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Laerte Breno, 27 anos, cria do Complexo de Favelas da Maré. Graduando em Letras com Literaturas Brasileira, tem uma paixão por pesquisar educação e segurança pública. Seu trabalho de conclusão de curso tem como foco analisar a violência armada dentro da Maré. Na Uni, é fundador e Diretor Executivo da instituição. Sua função é administrar a organização no dia a dia da Uni, elaborar e implementar processos, planejar e conduzir projetos à sua finalização, e assegurar que as operações estejam em andamento de forma adequada.
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="row py-5">
                <div className="col-4 text-center equipe" onClick={() => setModal('bruna')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/bruna-desenvolvimento.png" alt="Bruna Damiana" />
                  <h3>Bruna Heinsfeld</h3>
                  <p>Desenvolvimento Institucional</p>
                </div>
                <Modal
                  show={modal === 'bruna'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Bruna Heinsfeld
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Bruna Damiana Heinsfeld é a responsável pelo Desenvolvimento Institucional na UniFavela. Ou seja, ela é a responsável por criar estratégias de captação de recursos, fechar parcerias, apoios, inscrever a Uni em editais e leis de incentivo, desenvolver ações para aumentar a visibilidade institucional, entre outras atividades. Ufa! Doutoranda em Ensino e Aprendizagem Interdisciplinar nos Estados Unidos (UTSA), ela também é mestre em Educação (PUC-Rio), especialista em Planejamento, Implementação e Gestão da EaD (UFF) e graduada em Letras (UERJ). Somados, Bruna tem mais de quarenta publicações e participações em eventos acadêmicos nacionais e internacionais, além de ser coautora de dois livros: “Tecnologias, pensamento sistêmico e os fundamentos da inovação pedagógica” e "Práticas pedagógicas, inovação e tecnologias: breves indagações”. Ah! E além da veia acadêmica, ela tem mais de dez anos de experiência na área de desenvolvimento de cursos e materiais didáticos, tendo feito carreira como designer instrucional e gestora de projetos educacionais nacionais e internacionais. Ela também é certificada profissionalmente em Gestão de Projetos pela Google e pela Ohio University! 
                    </p>
                  </Modal.Body>
                </Modal>

                <div className="col-4 text-center equipe" onClick={() => setModal('agatha')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/agatha-comunicacao.jpg" alt="Agatha Puche" />
                  <h3>Agatha Puche</h3>
                  <p>Comunicação Institucional</p>
                </div>
                <Modal
                  show={modal === 'agatha'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Agatha Puche
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Agatha é a responsável pelo setor de Comunicação Institucional da UniFavela. Ela está no meio da graduação de Publicidade e Propaganda pela UFRJ e possui um Técnico em Comunicação Visual pela ETEC Polivalente de Americana. Atualmente, ela trabalha em uma agência de publicidade no Rio de Janeiro. Possui um projeto de pesquisa que tem como tema “Comunicação no Terceiro Setor: Um estudo sobre a ONG socioeducativa UniFavela- Semeando Ensino Popular”, no qual estuda o impacto da comunicação voltada para o terceiro setor através das experiências adquiridas na associação. Com o apoio de uma equipe, é responsável pelo desenvolvimento estratégico de campanhas nas redes sociais, além da comunicação interna e com a imprensa. 
                    </p>
                  </Modal.Body>
                </Modal>

                <div className="col-4 text-center equipe" onClick={() => setModal('gisele')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/gisele-patrimonio.jpg" alt="Gisele Lima" />
                  <h3>Gisele Lima</h3>
                  <p>Gestão de Patrimônio</p>
                </div>
                <Modal
                  show={modal === 'gisele'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Gisele Lima
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Bibliotecária, positiva e operante! Gisele Lima é bacharel em Biblioteconomia e Gestão em Unidades de Informação pela Universidade Federal do Rio de Janeiro (UFRJ) e técnica profissional em Geração Multimídia pelo Colégio Estadual José Leite Lopes/Núcleo Avançado em Educação (CEJLL/NAVE). É grande entusiasta da ciência, da educação e da democratização do conhecimento. Também se joga no universo das pesquisas eventualmente, tendo interesse em estudos voltados para temas como Competência em Informação, Interseccionalidade, Educação, Ação cultural e Literatura.
                    </p>
                  </Modal.Body>
                </Modal>

                <div className="col-4 text-center equipe" onClick={() => setModal('suelen')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/suelen-pedagogico.jpg" alt="Suelen Martins" />
                  <h3>Suelen Martins</h3>
                  <p>Coordenação Pedagógica</p>
                </div>
                <Modal
                  show={modal === 'suelen'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Suelen Martins
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Suelen Martins, graduada em Letras - Português e alemão pela UERJ, com extensão da licenciatura em Pedagogia, pela Uninter, e pós-graduanda em Educação Inclusiva: aspectos Psicosociais pela PUC-Rio. Pesquisa de forma independente as Relações Étnico-raciais em contexto da infância e o papel da Educação Popular no sistema de ensino público e privado. Amante das artes manuais, bordadeira e idealizadora do projeto Sagarana, utiliza arte para registrar processos e aspectos socioculturais brasileiros.
                    </p>
                  </Modal.Body>
                </Modal>

                <div className="col-4 text-center equipe" onClick={() => setModal('leonardo')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/leonardo-financeiro.jpg" alt="Leonardo Gomes" />
                  <h3>Leonardo Gomes</h3>
                  <p>Gestão Financeira</p>
                </div>
                <Modal
                  show={modal === 'leonardo'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Leonardo Gomes
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Leonardo da Silva Gomes, 25 anos, carioca que gosta de frio, nascido e criado na favela da Vila do João no Complexo da Maré, graduando em Tecnologia da Logística pela UNESA e Tecnólogo em Redes de Computadores pelo SENAC. Trabalha há 6 anos como colaborador na Fundação Getúlio Vargas no setor administrativo de Operações e Serviços e trabalhando como colaborador voluntário da UniFavela há pouco menos de 1 mês a convite do CEO da mesma Laerte Breno. Tem o objetivo pessoal de potencializar ainda mais a favela em que nasceu e conseguir fazer mais pessoas mudarem sua própria história tal qual seu pai também conseguiu além dele próprio através dos estudos.
                    </p>
                  </Modal.Body>
                </Modal>

                <div className="col-4 text-center equipe" onClick={() => setModal('adrielle')}>
                  <StaticImage width={227} height={227} imgClassName="rounded-5" src="../images/adrielle-juridico.jpg" alt="Adrielle Carvalho" />
                  <h3>Adrielle Carvalho</h3>
                  <p>Jurídico</p>
                </div>
                <Modal
                  show={modal === 'adrielle'}
                  onHide={() => setModal(null)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Adrielle Carvalho
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                    Adrielle Carvalho é advogada, formada em Direito pela Universidade do Estado do Rio de Janeiro (UERJ) e Pós-Graduanda em Direito Civil Constitucional, também pela UERJ. Cria do complexo de favelas da Maré, é a responsável pelas demandas jurídicas da UniFavela. Por meio de sua atuação, presta consultoria jurídica para as  coordenações internas e auxilia na análise dos contratos celebrados, bem como dos termos de serviços e de imagem. Além de atuar no Terceiro Setor, Adrielle exerce advocacia privada e tem experiência em Direito Civil estratégico, especialmente contratos e responsabilidade civil.
                    </p>
                  </Modal.Body>
                </Modal>

              </div>
            </div>
          </div>
        </div> */}
      </section>
      <section id="section-reconhecimento">
        <h2>Reconhecimento</h2>
        {/*  @TODO em vez de mostrar Slide 1, Slide 2, etc. Deixar bolinhas vazias para o usuario clicar */}
        <Carousel>
          <Carousel.Item>
            <div className="container w-100 w-md-50">
              <div>
                <h3>
                  Prêmio Íbero-Americano em Educação e Direitos Humanos - OEI
                  (2022)
                </h3>
                <p>
                  Finalistas na categoria educação não-formal no Prêmio
                  Íbero-Americano em Educação e Direitos Humanos, representando
                  o Brasil.
                </p>
              </div>
              <div>
                <StaticImage
                  src="../images/premioibero_unifavela.jpg"
                  alt="Laerte Breno, presidente da instituição, apresentando o trabalho da UniFavela para o comitê do Prêmio Ibero-Americano em Educação e Direitos Humanos, no Chile, em 2022."
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container w-100 w-md-50">
              <div>
                <h3>Prêmio Sim à Igualdade Racial - ID_BR (2022)</h3>
                <p>
                  Vencedores da categoria Educação e Oportunidades no Prêmio Sim
                  à Igualdade Racial do Instituto Identidades do Brasil.
                </p>
              </div>
              <div>
                <StaticImage
                  src="../images/premioidbr2022_unifavela.jpg"
                  alt="Laerte Breno, presidente da instituição, recebendo o prêmio Sim à Igualdade Racial pelo Institutio Identidades do Brasil, em 2022."
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container w-100 w-md-50">
              <div>
                <h3>Edital 4G para Estudar - Instituto Nossas (2020)</h3>
                <p>
                  Em 2020, a UniFavela venceu o Edital 4G para Estudar, do
                  Instituto Nossas. Com esse incentivo, pudemos fornecer tablets
                  e chips de internet para os nossos estudantes.
                </p>
              </div>
              <div>
                <StaticImage
                  src="../images/4gestudar_unifavela.jpg"
                  alt="Imagem da campanha 4G para Estudar divulgada nas redes sociais da UniFavela."
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container w-100 w-md-50">
              <div>
                <h3>Edital RUA - UFRJ (2019)</h3>
                <p>
                  Possibilitou que nos tornássemos um Projeto de Extensão da
                  UFRJ. Hoje, nossos voluntários estudantes da UFRJ recebem
                  certificação e horas complementares.
                </p>
              </div>
              <div>
                <StaticImage
                  src="../images/editalrua_unifavela.jpg"
                  alt="Imagem da campanha 4G para Estudar divulgada nas redes sociais da UniFavela."
                />
              </div>
            </div>
          </Carousel.Item>
          {/*
          <Carousel.Item>
            <div className="container w-100 w-md-50">
              <h3>Menção Honrosa na SIAC - UFRJ (2019)</h3>
              <p>
                A UniFavela recebeu uma menção honrosa na 10º Semana de Integração Acadêmica da UFRJ,
                com um projeto de pesquisa sobre o nosso trabalho.
              </p>

              <div>
                <StaticImage className="w-50" src="../images/4gestudar_unifavela.jpg" alt="Imagem da campanha 4G para Estudar divulgada nas redes sociais da UniFavela." />
               </div>
            </div>
          </Carousel.Item> */}
          <Carousel.Item>
            <div className="container w-100 w-md-50">
              <div>
                <h3>Prêmio Paulo Freire - ALERJ (2019)</h3>
                <p>
                  A UniFavela recebeu o prêmio Paulo Freire de direitos humanos,
                  concedido pela ALERJ em 2019.
                </p>
              </div>
              <div>
                <StaticImage
                  src="../images/premiopaulofreire_alerj_unifavela.jpg"
                  alt="Imagem do Prêmio Paulo Freire."
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="section-transparencia">
        <h2>Transparência</h2>
        <div className="container">
          <div className="main-container row">
            <div className="main-card">
              <h3>Seriedade e transparência</h3>
              <p>
                Prezamos muito pela seriedade em todos os processos internos da
                UniFavela. A transparência com os nossos parceiros é nossa
                prioridade. Acessando os documentos a seguir, você pode conferir
                nossos certificados, certidões e estatuto. Em nosso relatório de
                atividades, prestamos contas das ações realizadas.
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="">
              <Card className="align-self-stretch">
                <h3>Estatuto Social</h3>
                <p>
                  Deveres e direitos dos membros da UniFavela, além de regras
                  para a gestão da instituição.
                </p>
                <a
                  href="./pdfs/UniFavela_Estatuto_2023.pdf"
                  className="btn btn-secondary"
                >
                  Acessar
                </a>
              </Card>
            </div>
            <div className="">
              <Card className="align-self-stretch">
                <div className="row no-gutters">
                  <div className="col-6">
                    <h3>Certidões</h3>
                    <p>Confira aqui nossas certidões.</p>
                  </div>
                  <div className="col-6">
                    <a
                      href="./pdfs/UniFavela_Certidao_FGTS.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      Certidão de Regularidade do FGTS
                    </a>
                    <a
                      href="./pdfs/UniFavela_CNDT.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      Certidão Negativa de Débitos Trabalhistas
                    </a>
                    <a
                      href="./pdfs/UniFavela_CND_Uniao.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      Certidão Negativa de Débitos Federais
                    </a>
                    <a
                      href="./pdfs/UniFavela_CND_RJ.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      Certidão Negativa de Débitos Estaduais
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            <div className="">
              <Card className="align-self-stretch">
                <h3>Relatório de Atividades</h3>
                <p>Veja o que temos feitos no último ano.</p>
                <a
                  href="./pdfs/UniFavela_BoletimExterno_Jun-Out.pdf"
                  className="btn btn-secondary"
                >
                  Acessar
                </a>
              </Card>
            </div>
            <div className="">
              <Card className="align-self-stretch">
                <div className="row no-gutters">
                  <div className="col-6">
                    <h3>Auditorias</h3>
                    <p>
                      Balencetes e operações da UniFavela desde o primeiro ano
                      de funcionamento enquanto ONG.
                    </p>
                  </div>
                  <div className="col-6">
                    <a
                      href="./pdfs/UniFavela_Balancete_2021.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      Balancete 2021
                    </a>
                    <a
                      href="./pdfs/UniFavela_Auditoria_2021.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      Auditoria 2021
                    </a>
                    <a
                      href="./pdfs/DRE_Uni_JanOut_2022.pdf"
                      className="btn btn-secondary d-block mb-2"
                    >
                      DRE 2022 (Jan-Out)
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
