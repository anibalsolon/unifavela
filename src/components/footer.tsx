import React from "react";
import UniFavelaLogo from "../images/unifavela.secondary.svg";

export default () => {
  return (
    <footer>
      <a href="#">Back to top</a>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-5 mt-md-0 text-center text-md-start">
            <h2 className="h5">Comunicação</h2>
            <ul>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Lorem ipsum dolor</a></li>
            </ul>
          </div>
          <div className="col-md-3 mt-5 mt-md-0 text-center text-md-start">
            <h2 className="h5">Endereço</h2>
            <p>
              Rua Lorem Ipsum, 19<br />
              Lorem Ipsum Dolor<br />
              Rio de Janeiro / RJ - Brasil<br />
              CEO 055423-000<br />
              +55 21 99999-9999
            </p>
          </div>
          <div className="offset-4 col-4 offset-md-4 col-md-2 mt-5 mt-md-0">
            <UniFavelaLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}