import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  icon?: IconDefinition;
};
type CardState = {
};

export default class Card extends React.Component<CardProps, CardState> {
  state: CardState = {};
  render() {
    return (
      <div className={`card ${this.props.className ?? ''}`}>
        { this.props.icon && (
            <div className="card-icon">
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
