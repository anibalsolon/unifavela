import React from "react";

import "./index.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import YoutubeEmbed from "../components/youtube";
import Card from "../components/card";

import Carousel from 'react-bootstrap/Carousel';

import HatIcon from "../images/icon-hat.svg";
import BookIcon from "../images/icon-book.svg";
import CertificateIcon from "../images/icon-certificate.svg";
import NarrativeIcon from "../images/icon-narrative.svg";

import FreundeLogo from "../images/parceiros/freunde-brasillianischer-strassenkinder.png";
import InvernoLogo from "../images/parceiros/inverno.png";
import UFRJLogo from "../images/parceiros/ufrj.png";
import LisLogo from "../images/parceiros/lis.png";
import PhiLogo from "../images/parceiros/phi.png";
import BananaLogo from "../images/parceiros/banana.png";
import O3Logo from "../images/parceiros/o3.png";


const IndexPage = () => {
  return (
    <Layout scope="index">
      <section className="row g-0">
        <div className="col-6 offset-1 my-auto px-4">
          <h1>UniFavela</h1>
          <p className="text-muted">
            Somos uma Instituição Socioeducativa localizada no Complexo de Favelas da Maré no Rio de Janeiro.
            Oferecemos formação educacional e desenvolvimento sociocultural a todos os moradores do território,
            com foco da valorização e produção de conhecimento acadêmico e não-acadêmico, potencializando
            direitos sociais e direitos humanos em territórios populares, proporcionando desenvolvimento e
            ascensão pessoal e profissional, tudo isso por meio da educação como prática da liberdade.
          </p>
          <button className="btn btn-more btn-outline-primary mt-5">Mais sobre a Uni</button>
        </div>
        <div className="col-5">
          <StaticImage src="../images/hero.png" alt="UniFavela" />
        </div>
      </section>
      <section className="bg-primary px-8 py-6">
        <YoutubeEmbed embedId="y4yhmymlouI" />
      </section>
      <section id="section-objetivos" className="pt-5 px-lg-8">
        <h2 className="text-center mb-5">Objetivos</h2>
        <div className="grid card-grid">
          <div className="g-col-12 g-col-lg-4">
            <Card>
              Valorizar conhecimento acadêmico e não acadêmico para a construção de uma sociedade mais justa;
            </Card>
          </div>
          <div className="g-col-12 g-col-lg-4">
            <Card>
              Construir comunidades de ensino-aprendizagem para a prática da liberdade;
            </Card>
          </div>
          <div className="g-col-12 g-col-lg-4">
            <Card>
              Potencializar direitos sociais e direitos humanos em território populares;
            </Card>
          </div>
          <div className="g-col-12 g-col-lg-4">
            <Card>
              Promover o exercício do pensamento crítico, da autonomia, da solidariedade e da cidadania;
            </Card>
          </div>
          <div className="g-col-12 g-col-lg-4">
            <Card>
              Atuar em prol do empoderamento e do empoderamento por meio do ensino-aprendizagem libertário, horizontal e empático;
            </Card>
          </div>
          <div className="g-col-12 g-col-lg-4">
            <Card>
              Ouvir e agir coletivamente com as/os moradores a partir de suas demandas, sonhos e propostas para o território em que vivem.
            </Card>
          </div>
        </div>
      </section>
      <section id="section-metricas">
        <div className="container">
          <div className="row">
            <div className="offset-1 col-2">
              <HatIcon />
              <h3>+100<span> estudantes já passaram pela Uni</span></h3>
            </div>
            <div className="col-2">
              <CertificateIcon />
              <h3>+25<span> foram aprovados em universidades</span></h3>
            </div>
            <div className="col-2">
              <BookIcon />
              <h3>+700<span> crianças presenteadas com livros e brinquedos</span></h3>
            </div>
            <div className="col-2">
              <NarrativeIcon />
              <h3>+1<span> tonelada de alimentos doados para famílias da Maré</span></h3>
            </div>
            {/* @todo trocar icone abaixo para pessoinhas */}
            <div className="col-2">
              <NarrativeIcon />
              <h3>+60<span> voluntários em nossa história</span></h3>
            </div>
          </div>
        </div>
      </section>
      <section id="section-ods">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>ODS da ONU que contribuímos</h2>
            </div>
          </div>
          <p></p>
          {/* @todo falta um lugar pra colocar um paragrafo aqui antes das coisas */}
          <div className="row ods">
            <div className="offset-3 col-2">
              <StaticImage src="../images/ods-4.png" alt="ODS 4: Educação de qualidade" />
            </div>
            <div className="col-2">
              <StaticImage src="../images/ods-8.png" alt="ODS 8: Trabalho decente e crescimento econômico" />
            </div>
            <div className="col-2">
              <StaticImage src="../images/ods-10.png" alt="ODS 10: Redução das desigualdades" />
            </div>
          </div>
        </div>
      </section>
      <section id="section-depoimentos">
        <Carousel>
          <Carousel.Item>
            <div className="container">
              <p>A importância da UniFavela para o território Maré(ense) é uma das possibilidades de mostrar
                para as pessoas que de fato tem instituições que se importam com a vida dos moradores,
                que valoriza os saberes populares; ter alguém para contar sabe? Creio que a maioria que compõe a instituição,
                tem esse sentimento de reciprocidade, pois as mesmas, os mesmos e os mesmes receberam em algum momento da vida.
                UniFavela é Maré e Maré é a UniFavela também. Debatermos questões étnicas raciais, promovermos discussões sobre
                racismo ambiental, e territórios; são vieses de possibilidade que podem ser fortalecidos pela UniFavela ao povo
                mareense. Para a sociedade como um todo, é derrubar os estereótipos negativos que são construídos ao longo da
                história sobre as favelas e os territórios favelados como um todo. Mostrar como os saberes populares são
                relevantes e que a favela fala e deve falar pela favela (quem é cria fala pelos crias).</p>
              <div>
                {/* @todo descobrir nome da prof */}
                <StaticImage src="../images/dani-prof.png" alt="Daniele, ex-educadora de História do pré-vestibular" />
                <h3>Daniele<span> Ex-educadora de História do pré-vestibular</span></h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <p>Desde que entrei na UniFavela na equipe Pedagógica, dando oficinas artísticas e atualmente também
                como educadora no projeto Uniletrinhas venho cada vez mais aprendendo sobre o que é educar de verdade.
                Dar aulas na Uni é extremamente prazeroso e renovador pois saio sempre impactada com a tamanha potência
                das falas dos estudantes e das crianças. O que mais aprendo de valioso é que todos nós sabemos algo sobre
                alguma coisa e isso ser valorizado, fazendo com que as vivências dos estudantes atravessem a sala de aula é
                o verdadeiro sentido da educação popular. As questões que atravessam a realidade de estudantes e de um território
                favelado também contribuem para repensar nossa prática, fazendo com que ela seja mais humana e plural.
                Nesse sentido, a UniFavela é um espaço de potência que mais marca minha trajetória como educadora. Além disso,
                é onde posso ouvir e ser ouvida, onde me identifico e aprendo os sentidos de educar.</p>
              <div>
                <StaticImage src="../images/karolaraujo_uniletrinhas.jpeg" alt="Karol Araujo, Educadora da UniLetrinhas" />
                <h3>Karol Araujo <span>Educadora da UniLetrinhas</span></h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <p>Dar aula na Uni pra mim é um dos melhores momentos da minha semana.
                Ali eu aprendo sempre coisas novas com nossos alunos e posso colocar em prática o verdadeiro sentido de
                uma educação libertária. A Uni pra mim é como uma metáfora de uma estrada para nossos sonhos.
                Um caminho que apresenta novas perspectivas e possibilidades de mudança de vida. Depois de entrar pra Uni,
                pude olhar com um carinho ainda maior pra realidade de dificuldades da favela, mas muito além disso,
                pude ver de perto toda a potência que ela possui e produz.</p>
              <div>
                <StaticImage src="../images/vivianeoliveira_prevest.jpeg" alt="Viviane Oliveira, Educadora de História do pré-vestibular" />
                <h3>Viviane Oliveira <span>Educadora de História do pré-vestibular</span></h3>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="section-parceiros">
        <h2 className="text-center mb-5">Parceiros</h2>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-3 text-center my-auto">
              <a href="https://www.meninos.ch/" target="_blank"><img className="img-fluid" src={FreundeLogo} /></a>
            </div>
            <div className="col-md-3 text-center my-auto">
              <a href="https://www.invernoproducoes.com.br/" target="_blank"><img className="img-fluid" src={InvernoLogo} /></a>
            </div>
            <div className="col-md-3 text-center my-auto">
              <a href="https://ufrj.br/"><img className="img-fluid" src={UFRJLogo} /></a>
            </div>
            <div className="col-md-3 text-center my-auto">
              <a href="https://lisconsulting.com.br/"><img className="img-fluid" src={LisLogo} /></a>
            </div>
            <div className="col-md-3 text-center my-auto">
              <a href="https://institutophi.org.br/"><img className="img-fluid w-50" src={PhiLogo} /></a>
            </div>
            <div className="col-md-3 text-center my-auto">
              <a href="https://bananabr.com/"><img className="img-fluid" src={BananaLogo} /></a>
            </div>
            <div className="col-md-3 text-center my-auto">
              <a href="https://o3educacao.com/"><img className="img-fluid" src={O3Logo} /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="section-novidades">
        <h2 className="text-center mb-5">Fique por dentro das novidades</h2>
        <div className="container">
          {/* @todo eventualmente trocar por plugin */}
          <div className="row">
            <div className="col-2 offset-3 my-auto">
              <StaticImage alt="Novidades" src="https://www.instagram.com/p/CeHluXDJ7X4/media?size1" />
            </div>
            <div className="col-2 my-auto">
              <StaticImage alt="Novidades" src="https://www.instagram.com/p/CePBe3UJ3Ot/media?size=l" />
            </div>
            <div className="col-2 my-auto">
              <StaticImage alt="Novidades" src="https://www.instagram.com/p/Cd6VYVBJCJM/media?size=l" />
            </div>
          </div>
          <div className="row">
            <div className="col-2 offset-3 my-auto">
              <StaticImage alt="Novidades" src="https://www.instagram.com/p/CbvRSmUuanR/media?size=l" />
            </div>
            <div className="col-2 my-auto">
              <StaticImage alt="Novidades" src="https://www.instagram.com/p/CeFET7vp85x/media?size=l" />
            </div>
            <div className="col-2 my-auto">
              <StaticImage alt="Novidades" src="https://www.instagram.com/p/CT0Xe_uJ2-8/media?size=l" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
