import React from 'react';
import UniFavelaLogo from '../images/unifavela.secondary.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default () => {
  return (
    <footer>
      <a href="#">Back to top</a>
      <div className="container">
        <div className="container-conteudo row">
          <div className="col-md-3 mt-5 mt-md-0 text-center text-md-start fs-5">
            <h2 className="h5">Comunicação</h2>
            <ul className="container-redeSocial">
              <li className="me-3">
                <a href="https://www.facebook.com/unifavela">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://www.instagram.com/unifavela/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com/unifavela">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-5 mt-md-0 text-center text-md-start">
            <h2 className="h5">Endereço</h2>
            <p>
              Rua 14, n 468,
              <br />
              Vila do João, Maré,
              <br />
              Rio de Janeiro, RJ
              <br />
              CEP 21.046-575
              <br />
              Telefone: +55 (21) 979009263
            </p>
          </div>
          <div className="img-Uni">
            <UniFavelaLogo />
          </div>
        </div>
      </div>
      <p className="creditos">
        Desenvolvido por{' '}
        <a href="https://github.com/Luanleandro" target="_blank">
          Luan Cruz
        </a>
        ,
        <a href="https://laurellie.com.br" target="_blank">
          {' '}
          Laurellie Pacussich
        </a>
        ,{' '}
        <a href="https://lisconsulting.com.br" target="_blank">
          Lis Consulting
        </a>
      </p>
    </footer>
  );
};
