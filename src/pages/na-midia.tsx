import React from 'react';

import './na-midia.scss';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Stack } from 'react-bootstrap';

export default () => {
  return (
    <Layout scope="na-midia">
      {/*
      @TODO aqui é para ser diferente são cinco carrosseis individuais, por ano, 
      inicia com um título, mostrando apenas thumbnail linkados para cada uma das matérias */}
      <section id="section-hero" className="row g-0">
        <h1>Na Mídia</h1>
      </section>

      <section className="section-year">
        <h2 className='year'>2022</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://www.uol.com.br/ecoa/ultimas-noticias/2022/09/24/da-laje-para-premiacao-nacional-com-cursinho-unifavela-impulsiona-jovens.htm"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteUOL.png"
                  alt="Noticia UOL Da laje a prêmio: O curso na favela que ajuda jovens a entrar na faculdade."
                />
              </a>

              <a
                href="https://mareonline.com.br/unifavela-conquista-premio-sim-a-igualdade-racial/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteMare.png"
                  alt="Noticia Maré Online, UniFavela conquista prêmio ‘Sim à igualdade racial’"
                />
              </a>

              <a
                href="https://www.metropoles.com/brasil/projeto-voluntario-ajuda-jovens-de-favelas-a-estudarem-para-vestibular"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteMetropole.png"
                  alt="Noticia Metropoles, Projeto voluntário ajuda jovens de favelas a estudarem para vestibular"
                />
              </a>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://www.google.com/url?sa=D&q=https://mareonline.com.br/unifavela-inicia-novo-projeto-para-educacao-de-base-na-mare/&ust=1674240360000000&usg=AOvVaw2vjw9WU7ug4HNtOQSU7ggs&hl=en&source=gmail"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteMare2.jpg"
                  alt="Noticia Maré Online, "
                />
              </a>

              <a
                href="https://www.vozdascomunidades.com.br/destaques/projeto-de-educacao-da-mare-unifavela-ganha-premio-sim-a-igualdade-racial-2022/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteVoz.jpg"
                  alt="Noticia Voz das Comunidades, Projeto de educação da Maré, UniFavela, ganha Prêmio Sim à Igualdade Racial 2022
"
                />
              </a>

              <a
                href="https://dafavela.com.br/instituicao-socioeducativa-ajuda-na-democratizacao-do-acesso-a-educacao-superior/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteFavela.jpg"
                  alt="Noticia da Favela, Instituição Socioeducativa ajuda na democratização do acesso à educação superior"
                />
              </a>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://lancegoias.com.br/2022/03/23/projeto-voluntario-ajuda-jovens-de-favelas-a-estudarem-para-vestibular/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteLance.jpg"
                  alt="Noticia Lance Goias, Projeto voluntário ajuda jovens de favelas a estudarem para vestibular"
                />
              </a>

              <a
                href="https://noticiapreta.com.br/id-br-divulga-lista-de-finalistas-do-premio-sim-de-igualdade-racial-2022/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteNotPreta.jpg"
                  alt="Noticia Preta, ID BR divulga lista de finalistas do Prêmio Sim de Igualdade Racial 2022"
                />
              </a>

              <a
                href="https://vogue.globo.com/atualidades/noticia/2022/02/vogue-reporter-escapei-do-trabalho-escravo-e-hoje-sonho-em-ser-professora.html"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteVogue.jpg"
                  alt="Noticia Vogue, Vogue Repórter: 'Escapei do trabalho escravo e hoje sonho em ser professora'"
                />
              </a>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-year">
        <h2>2021</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://www.band.uol.com.br/noticias/estudantes-enfrentam-dificuldades-na-preparacao-para-o-enem-16321296"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteBand.jpg"
                  alt="Noticia Band, Estudantes enfrentam dificuldades na preparação para o Enem"
                />
              </a>

              <a
                href="http://www.fundacaosmbrasil.org/noticia/ddhh-2021-finalistas/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteFundacao.jpg"
                  alt="Noticia Fundação, Conheça os finalistas nacionais do Prêmio Ibero-americano de Educação em Direitos Humanos"
                />
              </a>

              <a
                href="https://www.consed.org.br/noticia/oei-e-fundacao-sm-anunciam-vencedores-nacionais-do-premio-ibero-americano-de-educacao-em-direitos-humanos"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteConsed.jpg"
                  alt="Noticia Fundação, OEI e Fundação SM anunciam vencedores nacionais do Prêmio Ibero-americano de Educação em Direitos Humanos"
                />
              </a>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://falauniversidades.com.br/pre-vestibular-social-uma-forma-de-democratizar-o-acesso-a-educacao/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteUniversidades.jpg"
                  alt="Noticia Fundação, OEI e Fundação SM anunciam vencedores nacionais do Prêmio Ibero-americano de Educação em Direitos Humanos"
                />
              </a>

              <a
                href="https://www.uol.com.br/ecoa/ultimas-noticias/2021/03/20/nao-falamos-apenas-sobre-racismo-influenciadores-negros-resistem-a-covid.htm"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteUOL2021.jpg"
                  alt="Noticia Fundação, 'Não falamos apenas sobre racismo': influenciadores negros resistem à covid..."
                />
              </a>

              <a
                href="https://www.uol.com.br/ecoa/ultimas-noticias/2021/03/20/nao-falamos-apenas-sobre-racismo-influenciadores-negros-resistem-a-covid.htm"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteFolhaDeSp.jpg"
                  alt="Noticia Folha de São Paulo, Curso pré-vestibular oferece bolsa em homenagem a escritora Carolina de Jesus"
                />
              </a>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-year">
        <h2>2020</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://mundonegro.inf.br/campanha-da-unifavela-levara-bonecos-pretos-e-livros-infantis-de-zumbi-para-as-criancas-da-mare/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteMundo.jpg"
                  alt="Noticia Mundo Negro, Campanha da UniFavela levará bonecos pretos e livros infantis de Zumbi para as crianças da Maré"
                />
              </a>

              <a
                href="https://theintercept.com/2020/06/01/enem-favela-coronavirus-aluno-unifavela/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteIntercept.jpg"
                  alt="Noticia Intercept, O ENEM, A FAVELA E O CORONAVÍRUS: ‘TEM ALUNO QUE PRECISA DO WI-FI DO VIZINHO’, DIZ IDEALIZADOR DO UNIFAVELA"
                />
              </a>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-year">
        <h2>2019</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://riodeboasnoticias.com.br/todos-os-alunos-da-unifavela-sao-aprovados-em-universidades-publicas/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteRio.jpg"
                  alt="Noticia Rio de Boas, Todos os alunos da UniFavela são aprovados em universidades públicas"
                />
              </a>

              <a
                href="https://www.ebc.com.br/desempenho-do-unifavela-e-colegio-pedro-ii-e-assunto-no-plantao-enem"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteEpc.jpg"
                  alt="Noticia EBC, Desempenho do UniFavela e Colégio Pedro II é assunto no Plantão Enem"
                />
              </a>

              <a
                href="https://favelaempauta.com/unifavela-sonha-ir-alem/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/sitePauta.jpg"
                  alt="Noticia Favela em Pauta, Papo de visão: UniFavela sonha ir além"
                />
              </a>
            </Stack>
          </Carousel.Item>

          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://observatorio3setor.org.br/noticias/universitarios-criam-cursinho-pre-vestibular-no-complexo-da-mare/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteObservatorio.jpg"
                  alt="Noticia Observatorio, Universitários criam cursinho pré-vestibular no Complexo da Maré"
                />
              </a>

              <a
                href="https://regiondigital.com/blogs/70-ana-valsera-prieto/2064-razones-para-creer.html"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteRegion.jpg"
                  alt="Noticia Region, Razones para creer"
                />
              </a>

              <a
                href="https://catracalivre.com.br/quem-inova/projeto-ajuda-estudantes-da-periferia-a-entrar-na-faculdade-no-rj/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteCatraca.jpg"
                  alt="Noticia Catraca Livre, Projeto ajuda estudantes da periferia a entrar na faculdade no RJ"
                />
              </a>
            </Stack>
          </Carousel.Item>

          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a href="https://rioonwatch.org/?p=50735" target={'_blank'}>
                <StaticImage
                  src="../images/siteRioOn.jpg"
                  alt="Noticia Rio On, UniFavela Sows the Seeds of Popular Education in Maré (and How You Can Show Your Support)"
                />
              </a>

              <a
                href="https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/09/27/pre-vestibular-comunitario-em-laje-na-mare-aprova-todos-os-estudantes-em-universidades-publicas-do-rio.ghtml"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteG1.jpg"
                  alt="Noticia G1, Pré-vestibular comunitário em laje na Maré aprova todos os estudantes em universidades públicas do Rio"
                />
              </a>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-year">
        <h2>2018</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={4}
            >
              <a
                href="https://www.estadao.com.br/educacao/unifavela-de-uma-laje-carioca-a-universidade-publica/"
                target={'_blank'}
              >
                <StaticImage
                  src="../images/siteEstadao.jpg"
                  alt="Noticia Estadão, Unifavela: de uma laje carioca à universidade pública"
                />
              </a>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
    </Layout>
  );
};
