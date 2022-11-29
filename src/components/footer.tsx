import React from "react";
import UniFavelaLogo from "../images/unifavela.secondary.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <footer>
            <a href="#">Back to top</a>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2 className="h5">Comunicação</h2>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h2 className="h5">Endereço</h2>
                        <p>
                            Rua Lorem Ipsum, 19<br />
                            Lorem Ipsum Dolor<br />
                            Rio de Janeiro / RJ - Brasil<br />
                            CEO 055423-000<br />
                            +55 21 99999-9999
                        </p>
                    </div>
                    <div className="offset-4 col-2">
                        <UniFavelaLogo />
                    </div>
                </div>
            </div>
        </footer>
    );
}